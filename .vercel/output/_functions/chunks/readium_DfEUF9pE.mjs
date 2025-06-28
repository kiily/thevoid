import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BcgDXOCH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Readium",
  "description": "The human-friendly app to keep track of what you read",
  "image": "/assets/projects/readium-app.webp",
  "image_alt": "A look into the Readium app, showing a list of books in the user's to read list",
  "github": "https://github.com/kiily/readium-next",
  "website": "https://readium-next.vercel.app/",
  "status": "Archived",
  "startDate": "2020-03-01T00:00:00.000Z",
  "endDate": "2020-12-31T00:00:00.000Z",
  "tags": ["Full stack development", "Product", "Reading"],
  "features": ["Book tracking functionality", "Social sharing features", "Book recommendations", "Friend connections"],
  "techStack": [{
    "category": "Frontend",
    "items": ["React", "TypeScript", "Next.js", "TailwindCSS"]
  }, {
    "category": "Backend",
    "items": ["Hasura"]
  }, {
    "category": "Tools",
    "items": ["Vercel", "Plausible", "Notion", "Linear", "Figma", "Discord"]
  }],
  "challenges": ["Creating a user-friendly book tracking experience", "Implementing social features", "Building a recommendation system"],
  "learnings": ["Full-stack development with modern tools", "Product development lifecycle", "Team collaboration and project management"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "readium",
    "text": "Readium"
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
    "slug": "development-tools",
    "text": "Development Tools"
  }, {
    "depth": 2,
    "slug": "project-status",
    "text": "Project Status"
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
      id: "readium",
      children: createVNode(_components.a, {
        href: "#readium",
        children: "Readium"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Readium was a project I started with my friend ", createVNode(_components.a, {
        href: "https://www.kyler.design/",
        children: "Kyler"
      }), " during COVID. The aim was to create a book tracking app that was more human-friendly than Goodreads. We wanted to make it easy to track what you read, and to share that with friends. We also wanted to make it easy to find new books to read, and to get recommendations from friends."]
    }), "\n", createVNode(_components.h2, {
      id: "project-goals",
      children: createVNode(_components.a, {
        href: "#project-goals",
        children: "Project Goals"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Create a more human-friendly alternative to existing book tracking apps"
      }), "\n", createVNode(_components.li, {
        children: "Implement social features for sharing reading progress"
      }), "\n", createVNode(_components.li, {
        children: "Build a recommendation system"
      }), "\n", createVNode(_components.li, {
        children: "Provide an intuitive user interface"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation",
      children: createVNode(_components.a, {
        href: "#implementation",
        children: "Implementation"
      })
    }), "\n", createVNode(_components.p, {
      children: "The project was built using a modern tech stack:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://react.dev/",
          children: "React"
        }), " with ", createVNode(_components.a, {
          href: "https://www.typescriptlang.org/",
          children: "TypeScript"
        }), " using ", createVNode(_components.a, {
          href: "https://nextjs.org/",
          children: "Next.js"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://tailwindcss.com/",
          children: "Tailwind"
        }), " for styling"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://hasura.io/",
          children: "Hasura"
        }), " for the backend"]
      }), "\n", createVNode(_components.li, {
        children: "Hosted on Vercel"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "development-tools",
      children: createVNode(_components.a, {
        href: "#development-tools",
        children: "Development Tools"
      })
    }), "\n", createVNode(_components.p, {
      children: "We utilized various tools to streamline our development process:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://plausible.io/",
          children: "Plausible"
        }), " for analytics"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.notion.so/product",
          children: "Notion"
        }), " for documentation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://linear.app/",
          children: "Linear"
        }), " for project management"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.figma.com/",
          children: "Figma"
        }), " for design"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://discord.com/",
          children: "Discord"
        }), " for communication"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "project-status",
      children: createVNode(_components.a, {
        href: "#project-status",
        children: "Project Status"
      })
    }), "\n", createVNode(_components.p, {
      children: "We launched a beta version but never marketed it to a wider audience. Other commitments led to the project being put on hold. Despite this, the project provided valuable experience in full-stack development and product management."
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

const url = "src/content/projects/readium.mdx";
const file = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/readium.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/projects/readium.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
