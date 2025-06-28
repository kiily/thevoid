import 'kleur/colors';
import { j as decodeKey } from './chunks/astro/server_BcgDXOCH.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_F3UgMi2k.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B3debEen.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/kiily/Documents/01%20-%20CODE/thevoid/","cacheDir":"file:///Users/kiily/Documents/01%20-%20CODE/thevoid/node_modules/.astro/","outDir":"file:///Users/kiily/Documents/01%20-%20CODE/thevoid/dist/","srcDir":"file:///Users/kiily/Documents/01%20-%20CODE/thevoid/src/","publicDir":"file:///Users/kiily/Documents/01%20-%20CODE/thevoid/public/","buildClientDir":"file:///Users/kiily/Documents/01%20-%20CODE/thevoid/dist/client/","buildServerDir":"file:///Users/kiily/Documents/01%20-%20CODE/thevoid/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"site":"https://your-domain.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/kiily/Documents/01 - CODE/thevoid/src/pages/garden/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/kiily/Documents/01 - CODE/thevoid/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/kiily/Documents/01 - CODE/thevoid/src/pages/category/[category].astro",{"propagation":"in-tree","containsHead":true}],["/Users/kiily/Documents/01 - CODE/thevoid/src/pages/garden/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/kiily/Documents/01 - CODE/thevoid/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/kiily/Documents/01 - CODE/thevoid/src/pages/tag/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/kiily/Documents/01 - CODE/thevoid/src/lib/data-service.ts",{"propagation":"in-tree","containsHead":false}],["/Users/kiily/Documents/01 - CODE/thevoid/src/actions/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:actions",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/kiily/Documents/01 - CODE/thevoid/src/components/Navigation.astro",{"propagation":"in-tree","containsHead":false}],["/Users/kiily/Documents/01 - CODE/thevoid/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/kiily/Documents/01 - CODE/thevoid/src/layouts/PostLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/garden/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/kiily/Documents/01 - CODE/thevoid/src/layouts/ProjectLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/category/[category]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/garden/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tag/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/kiily/Documents/01 - CODE/thevoid/src/components/Projects.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/category/[category]@_@astro":"pages/category/_category_.astro.mjs","\u0000@astro-page:src/pages/garden/[...page]@_@astro":"pages/garden/_---page_.astro.mjs","\u0000@astro-page:src/pages/tag/[tag]@_@astro":"pages/tag/_tag_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/garden/[...slug]@_@astro":"pages/garden/_---slug_.astro.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"pages/projects/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/kiily/Documents/01 - CODE/thevoid/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/kiily/Documents/01 - CODE/thevoid/.astro/content-modules.mjs":"chunks/content-modules_BqN2UmIW.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Be7Lohtt.mjs","/Users/kiily/Documents/01 - CODE/thevoid/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DTj02f2K.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/corporate-enlightenment.mdx?astroPropagatedAssets":"chunks/corporate-enlightenment_B72_1ix8.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/constant-meditation.mdx?astroPropagatedAssets":"chunks/constant-meditation_DDpZUL-Y.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/an-act-of-balance.mdx?astroPropagatedAssets":"chunks/an-act-of-balance_CxtPUnBX.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/oblivious-to-facts.mdx?astroPropagatedAssets":"chunks/oblivious-to-facts_Dzlecc70.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/emptiness.mdx?astroPropagatedAssets":"chunks/emptiness_DEC8w9UP.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/hyperreality-in-a-square.mdx?astroPropagatedAssets":"chunks/hyperreality-in-a-square_hoQMOmQt.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/have-you-ever-seen-a-tree.mdx?astroPropagatedAssets":"chunks/have-you-ever-seen-a-tree_fXpI9IJH.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/photos-and-polaroids.mdx?astroPropagatedAssets":"chunks/photos-and-polaroids_DNSIL3Ol.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-land-before-time.mdx?astroPropagatedAssets":"chunks/the-land-before-time_DN0Tigr_.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-pull-of-the-conceptual.mdx?astroPropagatedAssets":"chunks/the-pull-of-the-conceptual_pVo-SUhu.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/digital-garden-v1.mdx?astroPropagatedAssets":"chunks/digital-garden-v1_BJN7QLgX.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/readium.mdx?astroPropagatedAssets":"chunks/readium_ClgGrAFI.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/flown.mdx?astroPropagatedAssets":"chunks/flown_BiAESkOu.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/think-like-nagarjuna.mdx?astroPropagatedAssets":"chunks/think-like-nagarjuna_CczCYZRk.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-zen-garden.mdx?astroPropagatedAssets":"chunks/the-zen-garden_B-ELOaWg.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/digital-garden-v1.mdx":"chunks/digital-garden-v1_yMSHIjuU.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/readium.mdx":"chunks/readium_DfEUF9pE.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/flown.mdx":"chunks/flown_CTzpNxtV.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/corporate-enlightenment.mdx":"chunks/corporate-enlightenment_BRVZpXwC.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/constant-meditation.mdx":"chunks/constant-meditation_BYhA_8Lz.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/an-act-of-balance.mdx":"chunks/an-act-of-balance_TlsDw4gw.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/oblivious-to-facts.mdx":"chunks/oblivious-to-facts_BGEs2-5N.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/emptiness.mdx":"chunks/emptiness_CeayPi1m.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/hyperreality-in-a-square.mdx":"chunks/hyperreality-in-a-square_BRU8rvk3.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/have-you-ever-seen-a-tree.mdx":"chunks/have-you-ever-seen-a-tree_C6t9duSO.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/photos-and-polaroids.mdx":"chunks/photos-and-polaroids_B42VhEKl.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-land-before-time.mdx":"chunks/the-land-before-time_D75Fzhpv.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-pull-of-the-conceptual.mdx":"chunks/the-pull-of-the-conceptual_Cqc8sf_3.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/think-like-nagarjuna.mdx":"chunks/think-like-nagarjuna_CxXVJzfi.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-zen-garden.mdx":"chunks/the-zen-garden_D9g_ic0W.mjs","\u0000@astrojs-manifest":"manifest_DWgbSrYC.mjs","/Users/kiily/Documents/01 - CODE/thevoid/src/components/Projects.astro?astro&type=script&index=0&lang.ts":"_astro/Projects.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/Users/kiily/Documents/01 - CODE/thevoid/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DedeIteC.js","/Users/kiily/Documents/01 - CODE/thevoid/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/Users/kiily/Documents/01 - CODE/thevoid/src/components/Search.astro?astro&type=script&index=0&lang.ts":"_astro/Search.astro_astro_type_script_index_0_lang.Cc_VJOR0.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/kiily/Documents/01 - CODE/thevoid/src/components/Projects.astro?astro&type=script&index=0&lang.ts",""],["/Users/kiily/Documents/01 - CODE/thevoid/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const o=window.location.pathname===\"/\";if(document.querySelectorAll('header nav a[href*=\"#\"]').forEach(n=>{n.addEventListener(\"click\",e=>{const t=n.getAttribute(\"href\");if(t)if(o&&t.startsWith(\"#\")){e.preventDefault();const a=t.slice(1),i=document.getElementById(a);i&&i.scrollIntoView({behavior:\"smooth\"})}else!o&&t.includes(\"#\")&&(e.preventDefault(),window.location.href=t)})}),!o&&window.location.hash){const n=window.location.hash.slice(1),e=document.getElementById(n);e&&setTimeout(()=>{e.scrollIntoView({behavior:\"smooth\"})},100)}});"]],"assets":["/_astro/tree_optimized.CzrKvgFT.webp","/_astro/oblivious-to-facts.dft15N2W.webp","/_astro/act-of-balance.BtXwI6Vx.webp","/_astro/constant-meditation-airport.CZ4jm7CX.webp","/_astro/corporate-enlightenment.BgLSVHgU.webp","/_astro/photos-polaroids.Bf2SXgvC.webp","/_astro/emptiness-diamond-cutter.DUbT7k1n.webp","/_astro/tanjiro-kokoro.Spxaesml.webp","/_astro/nagarjuna.Ddj-QNuI.webp","/_astro/emptiness-meditation.DuXTX6jx.webp","/_astro/eleven-form.CB2Ilvix.webp","/_astro/hyperreality-square.D1KVspbD.webp","/_astro/torres-del-paine.6VaQYvp2.webp","/_astro/_category_.DrtkljlD.css","/void.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/Search.astro_astro_type_script_index_0_lang.Cc_VJOR0.js","/assets/projects/flown.webp","/assets/projects/readium-app.webp","/_astro/fonts/196faa87848ed6da.woff2","/_astro/fonts/1d2c8009c156c86c.woff2","/_astro/fonts/36e09d777af74c28.woff2","/_astro/fonts/3bf0d278e686282b.woff2","/_astro/fonts/70c629e6a16aa2d8.woff2","/_astro/fonts/7e1667fc15e139bd.woff2","/_astro/fonts/82c5786ee0e47449.woff2","/_astro/fonts/861312b6cdefd31a.woff2","/_astro/fonts/8d18153ea542e75a.woff2","/_astro/fonts/9f2bc6c06853d81f.woff2","/_astro/fonts/a4daab662ef9be31.woff2","/_astro/fonts/aa97a5eaf2cff465.woff2","/_astro/fonts/c2684c5e74d0b5a0.woff2","/_astro/fonts/d52362d0803826d3.woff2","/_astro/fonts/d97af75d54499852.woff2","/_astro/fonts/ed7026648da2d808.woff2","/_astro/fonts/f88dd9723f76410b.woff2","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jwBf4g+MoSH63PUwKhyIebtt5gUvrj4X1ERWBvBuizM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
