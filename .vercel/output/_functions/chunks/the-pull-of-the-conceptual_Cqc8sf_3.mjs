import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BcgDXOCH.mjs';
import './index_DfOMS8cV.mjs';
import { $ as $$Image } from './_astro_assets_B8vHAfVx.mjs';
import 'clsx';

const emptinessDiamondImage = new Proxy({"src":"/_astro/emptiness-diamond-cutter.DUbT7k1n.webp","width":1024,"height":1024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kiily/Documents/01 - CODE/thevoid/src/assets/garden/emptiness-diamond-cutter.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "The pull of the conceptual",
  "description": "A spontaneous stream of consciousness exploring the tension between the conceptual world of thoughts and memories versus the immediate reality of the present moment.",
  "publishDate": "2023-03-03T00:00:00.000Z",
  "category": "Philosophy",
  "tags": ["emptiness", "consciousness", "conceptual", "present-moment", "meditation", "awareness"],
  "connections": [{
    "title": "Original Substack Post",
    "url": "https://kiily.substack.com/p/the-pull-of-the-conceptual"
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "28/06/2022 - A spontaneous stream of consciousness about emptiness."
      })
    }), "\n", createVNode("div", {
      class: "flex flex-col items-center justify-center",
      children: [createVNode($$Image, {
        src: emptinessDiamondImage,
        alt: "Emptiness, the diamond cutter",
        width: 600,
        height: 400,
        class: "w-full max-w-2xl h-auto"
      }), createVNode("figcaption", {
        class: "mt-2 text-center text-sm text-garden-secondary dark:text-garden-dark-secondary font-body",
        children: "Emptiness, the diamond cutter (DALL-E)"
      })]
    }), "\n", createVNode(_components.p, {
      children: "There is it, every day, every moment. I see it. Plain. What it really is. The conceptual world that flutters around my head. A series of made of thoughts, some that may serve me and some that try to pull me back to the dream I once lived in. With the conceptual, there is no learning, only previous experience, only pre-gathered and memorised knowledge. Behind it, behind what was a thick curtain of smoke is the real, the actual thing, the only moment that really matters. You see the thoughts cross your mind and acknowledge them, but suddenly you see them for what they are. A train goes by, screeching happily through the tracks, passing one of his friends, crossing paths that will never be crossed again in the same way. Because every moment is ephemeral, and only exists when it really happens. Nothing else really matters in the end, the real is now here to catch me. To remind me that this is where life is constantly happening and renewing itself forever. In conceptual terms, that is a beautiful thought. A thought that brings peace, quiet and clarity to the mind. A thought that simply is, empty. Just like all else. Empty of meaning, of experience, constantly new."
    }), "\n", createVNode(_components.p, {
      children: "The conceptual world attempts to pull me back over, and over, but once one has seen, how can one go back? It is like finally seeing a lie and changing the established belief. I will always be ready to change the established belief. As I notice the small gap in my computer keyboard, I see the keys for what they are and I see my fingers on them. Everything has changed…"
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

const url = "src/content/garden/the-pull-of-the-conceptual.mdx";
const file = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-pull-of-the-conceptual.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-pull-of-the-conceptual.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
