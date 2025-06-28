import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BcgDXOCH.mjs';
import './index_DfOMS8cV.mjs';
import { $ as $$Image } from './_astro_assets_B8vHAfVx.mjs';
import 'clsx';

const sunsetImage = new Proxy({"src":"/_astro/photos-polaroids.Bf2SXgvC.webp","width":1278,"height":958,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kiily/Documents/01 - CODE/thevoid/src/assets/garden/photos-polaroids.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Photos and polaroids",
  "description": "A reflection on the nature of experience versus representation, exploring how photos capture only fractions of reality and serve as glimpses into the flaws of the conceptual world.",
  "publishDate": "2023-03-26T00:00:00.000Z",
  "category": "Philosophy",
  "tags": ["experience", "conceptual", "meditation", "photography", "emptiness", "reality"],
  "connections": [{
    "title": "Original Substack Post",
    "url": "https://kiily.substack.com/p/photos-and-polaroids"
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
        children: "26/03/2023 - A sudden urge to write arises."
      })
    }), "\n", createVNode(_components.p, {
      children: "I was printing some photos for the memories section of my journal that I fill in generally from things of the month. I had seen this beautiful sunset with a double rainbow the other day and took a photo of it. Once printed, it was but a fraction of the photo, the photo a fraction of the experience. While this is probably obvious to many already, those moments are not the same, despite some of us still claiming they actually show the “same” thing. This is untenable from the ultimate standpoint, how can anything be the same? I urge people to dig deeper. What is the nature of this experience we describe? Is there such a thing as nature or essence?"
    }), "\n", createVNode(_components.p, {
      children: "This photo is a good glimpse into the flaws of the conceptual world, and if for a moment we grossly assumed that the photo was the reality, then the polaroid would be the concept we have of it. Imperfect, but “good enough” for our brain to label it and move on. This is constantly happening, watch yourself do it. Look at anything, whatever you want, and watch your brain do all the things it does. If any thought is reified, by not paying attention to this process, then your brain might drift off in that direction. This seems to be a type of very free “meditation” in which you can inquire about the emptiness of everything to reach the conclusion from the “ultimate standpoint”. This may sound ominous but merely means that we understand the conventional world as being empty of inherent existence, interdependent, contingent, impermanent, and all those other nice words we have created to capture it. There is no teaching here, merely questions for us to ask ourselves. The experience itself will always be ineffable, but nothing prevents us from coming to this realisation in a flash. Well, nothing but that thing we call “I”…"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Below, the two images side-by-side. Left, the photo on my phone. Right, the printed version."
      })
    }), "\n", createVNode("div", {
      class: "flex flex-col md:flex-row gap-4 items-center justify-center",
      children: [createVNode($$Image, {
        src: sunsetImage,
        alt: "Sunset with double rainbow - phone photo (left) - polaroid (right)",
        width: 300,
        height: 400,
        class: "w-full max-w-sm h-auto"
      }), createVNode("figcaption", {
        class: "mt-2 text-center text-sm text-garden-secondary dark:text-garden-dark-secondary font-body",
        children: "Which one is real?"
      })]
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

const url = "src/content/garden/photos-and-polaroids.mdx";
const file = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/photos-and-polaroids.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/photos-and-polaroids.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
