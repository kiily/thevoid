import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BcgDXOCH.mjs';
import './index_DfOMS8cV.mjs';
import { $ as $$Image } from './_astro_assets_B8vHAfVx.mjs';
import 'clsx';

const balanceImage = new Proxy({"src":"/_astro/act-of-balance.BtXwI6Vx.webp","width":1024,"height":1024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kiily/Documents/01 - CODE/thevoid/src/assets/garden/act-of-balance.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "An act of balance",
  "description": "Life is an act of balance between acquiring knowledge and being present with the real - exploring the tension between mental constructs and raw reality.",
  "publishDate": "2023-11-26T00:00:00.000Z",
  "category": "Philosophy",
  "tags": ["meditation", "philosophy", "krishnamurti", "presence", "knowledge", "reality", "mindfulness"],
  "connections": [{
    "title": "Original Substack Post",
    "url": "https://kiily.substack.com/p/an-act-of-balance"
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Life is an act of balance. One must somehow be able to acquire knowledge in the world, in the form of memory while being able to be as present as possible with ", createVNode(_components.strong, {
        children: "the real."
      }), " What does this all mean?"]
    }), "\n", createVNode(_components.p, {
      children: "Knowledge is acquired by processes of the brain as one learns new facts, new ideas, new names for things. I must name that bird, I must name that tree or that plant, or I must remember the name of that city or that sea. We slowly build our internal database, full of interconnected concepts, methods, mechanisms, and experiences. Basically, everything that has been retained during our entire lives."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "The real"
      }), " is more complicated, it refers to what Jiddu Krishnamurti calls ", createVNode(_components.strong, {
        children: "what is"
      }), ". This is raw reality, what you see without your mind, without labels or words. It is a canvas where you watch the whole process of thought unfold. And then your mind is quiet, suddenly focused without trying, actually paying ", createVNode(_components.em, {
        children: createVNode(_components.strong, {
          children: "attention."
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["In our busy days, we have embedded routines, practices, things that we call life. And our life becomes mechanical in all its forms. At the same time, to always revel in reality, permanently, would be very difficult and require a lot of practice (ironically) of meditation and much tougher to embed into anyone’s day to day. There are things that are important, but this is not to say that we cannot tap into ", createVNode(_components.strong, {
        children: "the real"
      }), " if we ", createVNode(_components.em, {
        children: createVNode(_components.strong, {
          children: "pay attention"
        })
      }), " in a given moment."]
    }), "\n", createVNode(_components.p, {
      children: "I don’t like to define words like ‘truth’. After all, who am I to be defining such a thing? Rather, I’d prefer to just ask some questions. Is truth permanent? Or does it change from moment to moment? Is the truth my opinion or yours? If knowledge is shaped by prior conditioning, can it be synonymous with truth, or is it merely a collection of facts? Can we be free of ideas; could truth be found there?"
    }), "\n", createVNode(_components.p, {
      children: ["“", createVNode(_components.em, {
        children: [createVNode(_components.strong, {
          children: "It is only when the mind is free from idea that there can be experiencing. Ideas are not truth; and truth is something to be experienced directly, from moment to moment.” -"
        }), " J. Krishnamurti “Action Without Idea”, Book of Life, 16:02"]
      })]
    }), "\n", createVNode(_components.p, {
      children: "I believe there is true balance in that moment and I have felt it in some form, tapped into it just by thinking. It sounds completely crazy but I was fortunate to have someone really insist that I try it. There is energy and alertness in this state, sort of like a state of deep work but about things in life and only in the present moment, over and over again."
    }), "\n", createVNode(_components.p, {
      children: "I suppose the main thing about this meditation is to ask yourself these questions rather than look for answers because when you look for answers you are striving for something and the mind is not free. It is busy with the problem itself, and the energy it costs to find a solution. Thought requires energy. For instance, a study conducted by Dr. Robert Sapolsky and Dr. Lewis Leavitt in 1984 revealed that chess players could burn up to 6,000 calories a day during tournaments, a testament to the intense mental and physiological demands of competitive play. We waste so much of this energy being in our own minds, struggling with thoughts about the future or the past."
    }), "\n", createVNode(_components.p, {
      children: ["In essence, the balance between acquiring knowledge and being present in the raw reality of the moment is like walking a tightrope, where each step is a deliberate act of mindfulness. Our quest for knowledge, while enriching, should not detach us from the profound experience of “", createVNode(_components.strong, {
        children: "the real”"
      }), " – the unfiltered reality that exists beyond our constructed labels and concepts."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "I am working on a ChatGPT bot that will be able to answer questions about this topic. I’m attaching here the image of how it chose to represent itself. Watch this space for more."
      })
    }), "\n", createVNode("div", {
      class: "flex flex-col items-center justify-center",
      children: [createVNode($$Image, {
        src: balanceImage,
        alt: "An act of balance - representation of mindful equilibrium between knowledge and presence",
        width: 600,
        height: 400,
        class: "w-full max-w-2xl h-auto"
      }), createVNode("figcaption", {
        class: "mt-2 text-center text-sm text-garden-secondary dark:text-garden-dark-secondary font-body",
        children: "An act of balance between knowledge and presence"
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

const url = "src/content/garden/an-act-of-balance.mdx";
const file = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/an-act-of-balance.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kiily/Documents/01 - CODE/thevoid/src/content/garden/an-act-of-balance.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
