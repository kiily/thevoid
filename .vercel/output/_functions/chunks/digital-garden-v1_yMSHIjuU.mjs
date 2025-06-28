import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BcgDXOCH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Personal website v1",
  "description": "The first iteration of my personal website, built with Astro.",
  "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2940",
  "website": "https://me-beta-three.vercel.app/",
  "github": "https://github.com/kiily/me",
  "status": "Archived",
  "startDate": "2023-06-01T00:00:00.000Z",
  "endDate": "2023-12-31T00:00:00.000Z",
  "tags": ["Astro", "MDX", "TailwindCSS"],
  "features": ["Markdown-based content management", "Tag and category organization", "Responsive design"],
  "techStack": [{
    "category": "Frontend",
    "items": ["Next.js", "TailwindCSS", "MDX"]
  }, {
    "category": "Tools",
    "items": ["Vercel", "GitHub"]
  }],
  "challenges": ["Implementing efficient content organization", "Building a fast and reliable search system", "Creating a maintainable content structure"],
  "learnings": ["MDX integration best practices", "Content management patterns", "Static site generation optimization"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "digital-garden-v1",
    "text": "Digital Garden v1"
  }, {
    "depth": 2,
    "slug": "project-goals",
    "text": "Project Goals"
  }, {
    "depth": 2,
    "slug": "implementation",
    "text": "Implementation"
  }, {
    "depth": 2,
    "slug": "learnings",
    "text": "Learnings"
  }, {
    "depth": 2,
    "slug": "evolution",
    "text": "Evolution"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "digital-garden-v1",
      children: createVNode(_components.a, {
        href: "#digital-garden-v1",
        children: "Digital Garden v1"
      })
    }), "\n", createVNode(_components.p, {
      children: "The first iteration of my digital garden was an exploration into creating a personal knowledge base that could grow and evolve over time."
    }), "\n", createVNode(_components.h2, {
      id: "project-goals",
      children: createVNode(_components.a, {
        href: "#project-goals",
        children: "Project Goals"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Create a space for sharing thoughts and learnings"
      }), "\n", createVNode(_components.li, {
        children: "Implement an efficient content management system"
      }), "\n", createVNode(_components.li, {
        children: "Build a user-friendly interface for browsing content"
      }), "\n", createVNode(_components.li, {
        children: "Ensure fast loading times and good SEO"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation",
      children: createVNode(_components.a, {
        href: "#implementation",
        children: "Implementation"
      })
    }), "\n", createVNode(_components.p, {
      children: "The project was built using Next.js and MDX, allowing for a mix of markdown content and React components. Key features included:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Markdown-based content management"
      }), "\n", createVNode(_components.li, {
        children: "Tag and category organization"
      }), "\n", createVNode(_components.li, {
        children: "Full-text search functionality"
      }), "\n", createVNode(_components.li, {
        children: "Responsive design for all devices"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "learnings",
      children: createVNode(_components.a, {
        href: "#learnings",
        children: "Learnings"
      })
    }), "\n", createVNode(_components.p, {
      children: "This project provided valuable insights into:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Content management strategies"
      }), "\n", createVNode(_components.li, {
        children: "Static site generation"
      }), "\n", createVNode(_components.li, {
        children: "SEO optimization"
      }), "\n", createVNode(_components.li, {
        children: "Performance optimization"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "evolution",
      children: createVNode(_components.a, {
        href: "#evolution",
        children: "Evolution"
      })
    }), "\n", createVNode(_components.p, {
      children: "This version served as the foundation for the current iteration, which builds upon these learnings while introducing new features and improvements."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/projects/digital-garden-v1.mdx";
const file = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/digital-garden-v1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/digital-garden-v1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
