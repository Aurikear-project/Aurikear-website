import { n as cn } from "./utils-DSkcmyaj.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/framed-image-rD2Gzd3n.js
var import_jsx_runtime = require_jsx_runtime();
function FramedImage({ src, alt, className, imgClassName, priority = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden bg-sky-pale", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("framed size-full object-cover", imgClassName),
			loading: priority ? "eager" : "lazy",
			decoding: "async",
			fetchPriority: priority ? "high" : "auto"
		})
	});
}
//#endregion
export { FramedImage as t };
