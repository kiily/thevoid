import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BcgDXOCH.mjs';
import './index_DfOMS8cV.mjs';
import { $ as $$Image } from './_astro_assets_B8vHAfVx.mjs';
import 'clsx';

const obliviousImage = new Proxy({"src":"/_astro/oblivious-to-facts.dft15N2W.webp","width":1080,"height":1620,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kiily/Documents/01 - CODE/thevoid/src/assets/garden/oblivious-to-facts.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Oblivious to facts",
  "description": "Another ramble about emptiness - why we chase facts, truth, and knowledge while missing the actual truth that exists only in the present moment.",
  "publishDate": "2022-11-20T00:00:00.000Z",
  "updateDate": "2022-11-20T00:00:00.000Z",
  "category": "Philosophy",
  "tags": ["emptiness", "truth", "present moment", "intellectualization", "buddha", "consciousness", "duality"],
  "connections": [{
    "title": "Original Substack Post",
    "url": "https://kiily.substack.com/p/oblivious-to-facts"
  }]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "25102022---another-ramble-about-emptiness",
    "text": "25/10/2022 - another ramble about emptiness"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("div", {
      class: "flex flex-col items-center justify-center",
      children: [createVNode($$Image, {
        src: obliviousImage,
        alt: "Closeup photography of cairn stones balanced on each other, representing the balance between knowledge and direct experience",
        width: 600,
        height: 400,
        class: "w-full max-w-2xl h-auto"
      }), createVNode("figcaption", {
        class: "mt-2 text-center text-sm text-garden-secondary dark:text-garden-dark-secondary font-body",
        children: ["Photo by ", createVNode("a", {
          href: "https://unsplash.com/@bekirdonmeez",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Bekir Dönmez"
        }), " on Unsplash"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "25102022---another-ramble-about-emptiness",
      children: createVNode(_components.a, {
        href: "#25102022---another-ramble-about-emptiness",
        children: createVNode(_components.em, {
          children: "25/10/2022 - another ramble about emptiness"
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "We chase facts, truth, knowledge. For entire lifetimes. We have done so for millennia and it seems that only a few have understood the incredibly obvious flaw in all this. Why do we keep wanting to predict the future? Why do we insist in dwelling in the past? We claim to be rational, intelligent, superior… but are we?"
    }), "\n", createVNode(_components.p, {
      children: "Our brains intellectualize so much that we have become completely oblivious to the actual truth, one that is actually undeniable as well as inexplicable. And yes, I sense those scientific minds doubting every word that is about to come. But this is why we fail to get there… I was one of them, lost, in my mind, in my ideas, in my goals… not realizing how much this was actually moving me backwards or slowing me down."
    }), "\n", createVNode(_components.p, {
      children: "Then emptiness came, and the world was never the same again."
    }), "\n", createVNode(_components.p, {
      children: "Because the real only exists in the moment. It does not care for concepts, it does not care for emotions, it does not care at all. These are just words we have come up with to communicate with one another and to represent real things that we cannot fully explain. The thinker, the one I once claimed to be, does not actually exist. It is a figment of the mind, a creation, a useful one at times, but mostly a flawed one that eternally breeds conflict and duality, the good, the bad, the rich, the poor."
    }), "\n", createVNode(_components.p, {
      children: "Once we allow ourselves to see behind the curtain, the world will reveal itself to be “what is” and the beauty of it all will surface. Where does that subconscious come from? I cannot possibly answer, I am confined to merely experiencing it. The Buddha, God, the Effortless state, Quality, and many other names have been used interchangeably to try and explain this. But it is ineffable, and that is the entire point of it."
    }), "\n", createVNode(_components.p, {
      children: "Such a simple realization, if we only accept the world as we know it is nothing more than a conceptual representation of what lies underneath."
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

const url = "src/content/garden/oblivious-to-facts.mdx";
const file = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/oblivious-to-facts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/oblivious-to-facts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
