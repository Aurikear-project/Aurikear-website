import { n as cn } from "./utils-DSkcmyaj.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Eyebrow } from "./section-CHNP56Wq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-CqpaYKa4.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lede, image, imageAlt, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative isolate overflow-hidden bg-primary-deep text-foam",
		children: [
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt ?? "",
				className: "absolute inset-0 size-full object-cover opacity-45",
				loading: "eager",
				decoding: "async"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0", image ? "bg-primary-deep/78" : "bg-primary-deep") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							className: "text-sky",
							children: eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-display font-bold text-foam",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-lede leading-relaxed text-foam/80",
							children: lede
						}),
						children
					]
				})
			})
		]
	});
}
//#endregion
export { PageHero as t };
