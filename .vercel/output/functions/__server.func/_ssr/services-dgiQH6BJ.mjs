import { l as services, n as cn } from "./utils-DSkcmyaj.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as Check, T as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-CIm79_V5.mjs";
import { t as FramedImage } from "./framed-image-rD2Gzd3n.mjs";
import { n as Section } from "./section-CHNP56Wq.mjs";
import { t as PageHero } from "./page-hero-CqpaYKa4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-dgiQH6BJ.js
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our services",
		title: "Hearing care for every stage of life",
		lede: "A comprehensive range of clinical audiology services delivered with expertise, care, and the latest technology.",
		image: "/images/diagnostic.jpg",
		imageAlt: ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-border",
		children: services.map((service, i) => {
			const reverse = i % 2 === 1;
			const ctaTo = service.href.startsWith("/services") ? "/booking" : service.href;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				id: service.slug,
				className: "grid scroll-mt-24 items-center gap-8 py-12 md:grid-cols-2 md:gap-14 md:py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FramedImage, {
					src: service.image,
					alt: service.imageAlt,
					className: cn("aspect-wide rounded-2xl", reverse ? "md:order-2" : "md:order-1")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: reverse ? "md:order-1" : "md:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-[0.14em] text-primary-light uppercase",
							children: service.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-2 text-3xl font-bold",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-mid",
							children: service.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-0",
							children: service.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 border-b border-border py-2.5 text-sm text-mid last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }), b]
							}, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: ctaTo,
								children: [service.href.startsWith("/services") ? "Book this service" : "Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					]
				})]
			}, service.slug);
		})
	}) })] });
}
//#endregion
export { Services as component };
