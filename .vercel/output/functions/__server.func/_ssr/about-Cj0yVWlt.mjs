import { c as qualifications, m as timeline, u as specialisms } from "./utils-DSkcmyaj.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { T as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-CIm79_V5.mjs";
import { t as FramedImage } from "./framed-image-rD2Gzd3n.mjs";
import { n as Section, t as Eyebrow } from "./section-CHNP56Wq.mjs";
import { t as PageHero } from "./page-hero-CqpaYKa4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cj0yVWlt.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "About Aurikear",
		title: "Meet your audiologist",
		lede: "A passion for hearing science, a commitment to compassionate care, and a research career built at University College London.",
		image: "/images/portrait-lena.jpg",
		imageAlt: ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:sticky lg:top-24 lg:self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FramedImage, {
				src: "/images/portrait-lena.jpg",
				alt: "Aurikear's clinical audiologist",
				className: "aspect-portrait rounded-2xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-2.5",
				children: qualifications.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-sky-pale px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-wider text-primary-light uppercase",
						children: q.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm font-semibold text-ink",
						children: q.value
					})]
				}, q.label))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-title font-bold",
				children: "Dedicated to hearing health — from the first days of life"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4 leading-relaxed text-mid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Aurikear was founded on a single principle: that every person deserves access to exceptional, evidence-based hearing care delivered with genuine compassion. Our audiologist began this journey in 2009 after graduating with a First Class BSc in Audiology from University College London — one of the world’s leading institutions for hearing science." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From the very start of her career, she specialised in the full spectrum of audiology: diagnosing hearing loss in newborns, supporting children through their early developmental years, and providing nuanced, life-changing care for adults experiencing hearing loss." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Driven by a commitment to advancing the field, she returned to UCL to complete a PhD, focusing on Cortical Auditory Evoked Potentials (CAEPs) — complex brainwave measurements that reveal how the auditory cortex processes sound. This published research underpins a deeply scientific approach to clinical practice." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 space-y-6",
				children: timeline.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative flex gap-4",
					children: [
						i < timeline.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-10 bottom-[-24px] left-[17px] w-px bg-border",
							"aria-hidden": true
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-fg",
							children: item.mark
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold tracking-wide text-muted uppercase",
								children: item.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-0.5 font-bold text-ink",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-mid",
								children: item.desc
							})
						] })
					]
				}, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				className: "mt-10",
				children: "Clinical specialisms"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-wrap gap-2",
				children: specialisms.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-border bg-sky-pale px-3.5 py-1.5 text-sm font-semibold text-primary",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-8 rounded-2xl border border-border bg-sky-pale p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-semibold text-primary-deep",
					children: "Philosophy of care"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-mid italic",
					children: "“Every patient — whether a one-day-old baby or a 90-year-old — deserves to be heard. I combine the rigour of academic research with a warm, unhurried clinical approach. No question is too small, no concern too minor. My goal is always to give each person the clearest possible understanding of their hearing and the best possible outcome.”"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/booking",
					children: ["Book an appointment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		] })]
	}) })] });
}
//#endregion
export { About as component };
