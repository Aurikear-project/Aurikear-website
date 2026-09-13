import { s as practice } from "./utils-DSkcmyaj.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Clock, f as MapPin, p as Mail, s as Phone } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-CIm79_V5.mjs";
import { t as FramedImage } from "./framed-image-rD2Gzd3n.mjs";
import { n as Section } from "./section-CHNP56Wq.mjs";
import { t as PageHero } from "./page-hero-CqpaYKa4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BBOb0aJG.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Get in touch",
		title: "Contact Aurikear",
		lede: "We’d love to hear from you. Reach out with any questions or to book an appointment.",
		image: "/images/exterior.jpg",
		imageAlt: ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "off",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FramedImage, {
				src: "/images/exterior.jpg",
				alt: "The Aurikear clinic on a leafy London street",
				className: "aspect-wide rounded-2xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-2xl border border-border bg-paper p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold text-ink",
						children: "Getting here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed text-mid",
						children: [practice.addressLines.join(", "), ". A short walk from Highbury & Islington station, with street parking nearby. Full directions are included with your appointment confirmation."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: practice.mapsUrl,
						className: "mt-3 inline-block text-sm font-bold text-primary hover:underline",
						target: "_blank",
						rel: "noreferrer",
						children: "Open in Google Maps"
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactRow, {
						icon: Phone,
						title: "Phone",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: practice.phoneHref,
							className: "font-semibold text-primary",
							children: practice.phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Call to book or ask a question. We aim to answer within one business day." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactRow, {
						icon: Mail,
						title: "Email",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: practice.emailHref,
							className: "font-semibold text-primary",
							children: practice.email
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We’ll respond within one working day." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						icon: Clock,
						title: "Opening hours",
						children: practice.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							h.days,
							": ",
							h.time
						] }, h.days))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						icon: MapPin,
						title: "Clinic address",
						children: practice.addressLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-3 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/booking",
							children: "Book an appointment"
						})
					})
				]
			})]
		})
	})] });
}
function ContactRow({ icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4 rounded-2xl border border-border bg-sky-pale p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 text-sm leading-relaxed text-mid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold text-primary-deep",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 space-y-0.5",
				children
			})]
		})]
	});
}
//#endregion
export { Contact as component };
