import 'kleur/colors';
import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './chunks/astro-designed-error-pages_F3UgMi2k.mjs';
import 'es-module-lexer';
import './chunks/astro/server_BcgDXOCH.mjs';
import 'clsx';
import 'cookie';
import * as z from 'zod';
import { D as DataService } from './chunks/data-service_Bqy1zoXQ.mjs';
import Fuse from 'fuse.js';
import { d as defineAction } from './chunks/server_tnWfpitx.mjs';

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function getActionPath(action) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      }
    }),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? "data" : "error",
    body: await rawResult.text()
  });
}
toActionProxy();

const server = {
  search: defineAction({
    input: z.object({
      q: z.string().min(1, "Search query is required"),
      limit: z.number().default(8),
      types: z.array(z.enum(["post", "category", "tag"])).optional(),
      exact: z.boolean().default(false),
      contentFilter: z.enum(["all", "garden-only", "projects-only"]).default("all")
    }),
    handler: async (input) => {
      const {
        q: query,
        limit,
        types: includeTypes,
        exact: exactMatch,
        contentFilter
      } = input;
      console.log("🔍 Search Action:", {
        query,
        limit,
        includeTypes,
        exactMatch,
        contentFilter
      });
      try {
        const posts = await DataService.getGardenPosts();
        const projects = await DataService.getProjects();
        const categories = await DataService.getCategories();
        const tags = await DataService.getTags();
        let searchItems = [];
        if (contentFilter === "all" || contentFilter === "garden-only") {
          searchItems.push(
            ...posts.map((post) => ({
              title: post.data.title,
              description: post.data.description,
              url: `/garden/${post.slug}`,
              type: "post",
              category: post.data.category,
              tags: post.data.tags || [],
              content: `${post.data.title} ${post.data.description} ${post.data.category} ${(post.data.tags || []).join(" ")}`
            }))
          );
        }
        if (contentFilter === "all" || contentFilter === "projects-only") {
          searchItems.push(
            ...projects.map((project) => ({
              title: project.data.title,
              description: project.data.description,
              url: `/projects/${project.slug}`,
              type: "post",
              category: "Projects",
              tags: project.data.tags || [],
              content: `${project.data.title} ${project.data.description} Projects ${(project.data.tags || []).join(" ")}`
            }))
          );
        }
        if (contentFilter === "all") {
          searchItems.push(
            ...categories.map((category) => ({
              title: category,
              description: `Browse all posts in ${category}`,
              url: `/category/${category}`,
              type: "category",
              category: void 0,
              tags: [],
              content: `${category} category browse posts`
            })),
            ...tags.map((tag) => ({
              title: tag,
              description: `Browse all posts tagged with ${tag}`,
              url: `/tag/${tag}`,
              type: "tag",
              category: void 0,
              tags: [],
              content: `${tag} tag browse posts`
            }))
          );
        }
        console.log(
          `🔍 Built ${searchItems.length} search items (filter: ${contentFilter})`
        );
        const fuseOptions = {
          keys: [
            { name: "title", weight: 0.4 },
            { name: "description", weight: 0.3 },
            { name: "category", weight: 0.15 },
            { name: "tags", weight: 0.1 },
            { name: "content", weight: 0.05 }
          ],
          threshold: 0.4,
          includeScore: true,
          includeMatches: true,
          minMatchCharLength: 2,
          ignoreLocation: true,
          findAllMatches: true,
          useExtendedSearch: true
        };
        const fuse = new Fuse(searchItems, fuseOptions);
        let searchQuery = query.trim();
        if (exactMatch && !searchQuery.startsWith('"')) {
          searchQuery = `"${searchQuery}"`;
        }
        console.log("🔍 Performing search for:", searchQuery);
        let results = fuse.search(searchQuery);
        if (includeTypes && includeTypes.length > 0) {
          results = results.filter(
            (result) => includeTypes.includes(result.item.type)
          );
        }
        results.sort((a, b) => (a.score || 0) - (b.score || 0));
        const limitedResults = results.slice(0, limit);
        console.log(
          `✅ Found ${results.length} results, returning ${limitedResults.length}`
        );
        const formattedResults = limitedResults.map((result) => ({
          item: result.item,
          score: result.score,
          matches: result.matches ? [...result.matches] : void 0
        }));
        return {
          results: formattedResults,
          meta: {
            query,
            total: results.length,
            limit,
            types: includeTypes,
            exact: exactMatch,
            contentFilter
          }
        };
      } catch (error) {
        console.error("❌ Search Action error:", error);
        throw error;
      }
    }
  }),
  searchSuggestions: defineAction({
    input: z.object({
      q: z.string().min(1, "Query is required"),
      limit: z.number().default(5)
    }),
    handler: async (input) => {
      const { q: query, limit } = input;
      console.log("🔍 Suggestions Action:", { query, limit });
      try {
        const posts = await DataService.getGardenPosts();
        const projects = await DataService.getProjects();
        const items = [
          ...posts.map((post) => post.data.title),
          ...projects.map((project) => project.data.title)
        ];
        const suggestions = items.filter((title) => title.toLowerCase().includes(query.toLowerCase())).slice(0, limit);
        return { suggestions };
      } catch (error) {
        console.error("❌ Suggestions Action error:", error);
        throw error;
      }
    }
  })
};

export { server };
