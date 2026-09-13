import { i as musicianAudiences } from "./utils-DSkcmyaj.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as Button } from "./router-CIm79_V5.mjs";
import { t as FramedImage } from "./framed-image-rD2Gzd3n.mjs";
import { n as Section, t as Eyebrow } from "./section-CHNP56Wq.mjs";
import { t as PageHero } from "./page-hero-CqpaYKa4.mjs";
import { t as ServiceIcon } from "./icons-DQoGe6sI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/musicians-C8m_ge4o.js
var import_jsx_runtime = require_jsx_runtime();
function Musicians() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Hearing protection",
		title: "Custom musician ear plugs",
		lede: "Your hearing is your instrument. Protect it without compromising a single note.",
		image: "/images/lifestyle.jpg",
		imageAlt: ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 md:grid-cols-2 md:gap-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why custom?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-title font-bold",
					children: "Flat attenuation. Perfect fit. Uncompromised sound."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-mid",
					children: "Standard foam earplugs block high frequencies more than low, creating a muffled, unnatural sound. Custom musician ear plugs use precision acoustic filters that reduce all frequencies equally — so music sounds exactly as it should, just quieter and safer."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-mid",
					children: "Made from an impression of your unique ear canal, they fit perfectly, stay in place during performance, and can be worn for hours in complete comfort."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FramedImage, {
				src: "/images/hearing-aid.jpg",
				alt: "A precision hearing device held in the palm of a hand",
				className: "aspect-wide rounded-2xl bg-ink"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2",
			children: musicianAudiences.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-border bg-bg p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 items-center justify-center rounded-xl bg-sky-pale text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceIcon, { name: card.icon })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-bold text-primary-deep",
						children: card.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: card.body
					})
				]
			}, card.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 rounded-2xl bg-primary-deep px-6 py-12 text-center text-foam md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold text-foam",
					children: "Noise-induced hearing loss is permanent."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-lg text-foam/80",
					children: "One appointment is all it takes to protect the hearing you’ll rely on for the rest of your life. Ear impressions take under 15 minutes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "foam",
					className: "mt-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/booking",
						children: "Book ear impressions"
					})
				})
			]
		})
	] })] });
}
//#endregion
export { Musicians as component };
