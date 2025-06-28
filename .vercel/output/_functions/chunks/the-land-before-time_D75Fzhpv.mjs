import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BcgDXOCH.mjs';
import './index_DfOMS8cV.mjs';
import { $ as $$Image } from './_astro_assets_B8vHAfVx.mjs';
import 'clsx';

const torresImage = new Proxy({"src":"/_astro/torres-del-paine.6VaQYvp2.webp","width":4608,"height":3456,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kiily/Documents/01 - CODE/thevoid/src/assets/garden/torres-del-paine.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "The land before time",
  "description": "Reflections on finding The Great Valley while exploring Torres del Paine National Park in Chile, where majestic landscapes inspire us to see beauty without labels.",
  "publishDate": "2025-01-05T00:00:00.000Z",
  "category": "Philosophy",
  "tags": ["nature", "philosophy", "travel", "chile", "torres del paine", "beauty", "perception"],
  "connections": [{
    "title": "Original Substack Post",
    "url": "https://kiily.substack.com/p/the-land-before-time"
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
        children: "11/11/2023 - Torres del Paine, Chile"
      })
    }), "\n", createVNode(_components.p, {
      children: "Since I was a child, I have always been fascinated by dinosaurs—these majestic creatures of the past that used to roam our planet. There was a cartoon called “The Land Before Time” where they chased this wonderful and prosperous land that would give them an abundance of food and water, enough to feed entire generations. The Great Valley, it was called. As I explore the Torres del Paine National Park, I feel like I have found a land worthy of this childhood cartoon."
    }), "\n", createVNode("div", {
      class: "flex flex-col items-center justify-center",
      children: [createVNode($$Image, {
        src: torresImage,
        alt: "Torres del Paine National Park - Majestic towers and mountains shaped by millions of years",
        width: 600,
        height: 400,
        class: "w-full max-w-2xl h-auto"
      }), createVNode("figcaption", {
        class: "mt-2 text-center text-sm text-garden-secondary dark:text-garden-dark-secondary font-body",
        children: "Torres del Paine National Park, Chile - A land worthy of The Great Valley"
      })]
    }), "\n", createVNode(_components.p, {
      children: "First, words or photographs cannot possibly do justice to the wonderful sights of these mountains, shaped by the earth over millions of years. How can one feel important in the world and within themselves when confronted with a sight like this? The towers, the horns, the snow, the glacier, the turquoise waters, the reflection of the sun on the small waves, the slow gusts of wind, the songbirds…"
    }), "\n", createVNode(_components.p, {
      children: "There is simply too much to take in and so many labels to remove. Could a sight like this bring calm to even the most disturbed of spirits? Could it bring peace to the most disquiet minds?"
    }), "\n", createVNode(_components.p, {
      children: ["It is impossible not to feel inspired here, to want to describe the indescribable, to want to verbalize and photograph it all. Most will say this is why they come. While one may document experience, nothing will replace the moment when we first set sight upon these mountains. I make sure to pay attention, not with the labels and the screens but simply to look and see the beauty for what it is. Because beauty does not need to be explained, it does not need anything at all. No judgements, no scientific names. The true beauty of “", createVNode(_components.em, {
        children: "what is"
      }), "” is always behind the screen of labels, and once that screen is removed, then the truth will surface. A truth which is without opinion, without conditioning, without right or wrong. A truth that simply is."]
    }), "\n", createVNode(_components.p, {
      children: "May we all look at the world as we look at these beautiful sights of nature."
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

const url = "src/content/garden/the-land-before-time.mdx";
const file = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-land-before-time.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/the-land-before-time.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
