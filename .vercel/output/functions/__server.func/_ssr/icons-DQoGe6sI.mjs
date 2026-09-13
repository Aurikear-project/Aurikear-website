import { n as cn } from "./utils-DSkcmyaj.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as Backpack, a as Sparkle, c as Music, g as Guitar, h as Headphones, l as Moon, n as Waves, o as SlidersHorizontal, v as Ear, w as Baby, y as Droplets } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/icons-DQoGe6sI.js
var import_jsx_runtime = require_jsx_runtime();
var map = {
	waves: Waves,
	ear: Ear,
	music: Music,
	baby: Baby,
	droplets: Droplets,
	moon: Moon,
	toy: Sparkle,
	backpack: Backpack,
	guitar: Guitar,
	sliders: SlidersHorizontal,
	headphones: Headphones,
	spark: Sparkle
};
function ServiceIcon({ name, className }) {
	const Icon = map[name] ?? Waves;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: cn("size-7", className),
		strokeWidth: 1.6
	});
}
//#endregion
export { ServiceIcon as t };
