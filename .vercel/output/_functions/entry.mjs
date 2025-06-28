import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_RqRdNohf.mjs';
import { manifest } from './manifest_DWgbSrYC.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/category/_category_.astro.mjs');
const _page3 = () => import('./pages/garden/_---page_.astro.mjs');
const _page4 = () => import('./pages/garden/_---slug_.astro.mjs');
const _page5 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page6 = () => import('./pages/tag/_tag_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/category/[category].astro", _page2],
    ["src/pages/garden/[...page].astro", _page3],
    ["src/pages/garden/[...slug].astro", _page4],
    ["src/pages/projects/[...slug].astro", _page5],
    ["src/pages/tag/[tag].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9257b956-1021-402f-aaa7-6d927aaad122",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
