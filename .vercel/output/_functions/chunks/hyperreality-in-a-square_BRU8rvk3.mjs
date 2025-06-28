import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BcgDXOCH.mjs';
import './index_DfOMS8cV.mjs';
import { $ as $$Image } from './_astro_assets_B8vHAfVx.mjs';
import 'clsx';

const hyperrealityImage = new Proxy({"src":"/_astro/hyperreality-square.D1KVspbD.webp","width":2048,"height":1962,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kiily/Documents/01 - CODE/thevoid/src/assets/garden/hyperreality-square.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Hyperreality in a square",
  "description": "A meditation on perception and reality through the careful observation of a square section of white wall in London, exploring how the mind creates illusions.",
  "publishDate": "2021-10-31T00:00:00.000Z",
  "updateDate": "2021-10-31T00:00:00.000Z",
  "category": "Meditation",
  "tags": ["perception", "observation", "mindfulness", "reality", "consciousness", "meditation", "london", "hyperreality"],
  "connections": [{
    "title": "Original Substack Post",
    "url": "https://kiily.substack.com/p/hyperreality-in-a-square"
  }]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "12102021---london",
    "text": "12/10/2021 - London"
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
        src: hyperrealityImage,
        alt: "Abstract close-up of a white wall with subtle marks and variations, representing focused observation and perception",
        width: 600,
        height: 400,
        class: "w-full max-w-2xl h-auto"
      }), createVNode("figcaption", {
        class: "mt-2 text-center text-sm text-garden-secondary dark:text-garden-dark-secondary font-body",
        children: "The infinite complexity hidden within apparent simplicity"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "12102021---london",
      children: createVNode(_components.a, {
        href: "#12102021---london",
        children: createVNode(_components.em, {
          children: "12/10/2021 - London"
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "I glance up and focus on a squared section of a white wall slightly greyed out with time, but only ever so slightly. A few marks in this wall tell me someone tried to remove the carefully positioned chair and hit the wall unknowingly. Like a detective, I examine my square, I squeeze the juice out of it."
    }), "\n", createVNode(_components.p, {
      children: "White, plain, but with so much to tell. What would this square have seen if it were alive? What if I was confined to just that space myself?"
    }), "\n", createVNode(_components.p, {
      children: "I notice another mark, this one, isolated, on a side, similar to the insect blood that stays behind when we crush them with no mercy. As my eyes focus closer, I notice that it is a dent, a small dent, perhaps made by someone crashing into this wall or some object puncturing it accidentally. I keep scanning the square and the reflection of the light tricks my eyes. I seem to see lines, shades of white and grey, like stripes in a football shirt. I notice how the frame of my glasses seems to be in the way of some level of observation."
    }), "\n", createVNode(_components.p, {
      children: "Plain, the immovable wall continues its stare contest. It curves on its right-hand side into an arch that connects with the same wall on the other side, creating a small concave space where the light reflects in a blue/green hue. After careful observation, I realize that the white is merely an illusion of my brain and is more of a very light, almost baby blue."
    }), "\n", createVNode(_components.p, {
      children: "How could I get these confused? I do not know… But my brain likes to play tricks, especially in the morning. As the words get written into the paper, I stare back and observe."
    }), "\n", createVNode(_components.p, {
      children: "Suddenly, boredom returns to the room… Time to finish."
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

const url = "src/content/garden/hyperreality-in-a-square.mdx";
const file = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/hyperreality-in-a-square.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/hyperreality-in-a-square.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
