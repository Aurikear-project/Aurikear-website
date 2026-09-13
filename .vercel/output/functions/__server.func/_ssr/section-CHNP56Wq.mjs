import { n as cn } from "./utils-DSkcmyaj.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-CHNP56Wq.js
var import_jsx_runtime = require_jsx_runtime();
var tones = {
	paper: "bg-paper text-ink",
	off: "bg-bg text-ink",
	teal: "bg-primary-deep text-foam",
	ink: "bg-ink text-foam"
};
function Section({ children, className, tone = "paper", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-16 md:py-24", tones[tone], className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8",
			children
		})
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("mb-2.5 text-xs font-bold tracking-[0.14em] text-primary-light uppercase", className),
		children
	});
}
//#endregion
export { Section as n, Eyebrow as t };
