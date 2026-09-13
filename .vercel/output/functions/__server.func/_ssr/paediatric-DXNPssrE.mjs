import { o as paediatricAges } from "./utils-DSkcmyaj.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as Check, T as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-CIm79_V5.mjs";
import { n as Section, t as Eyebrow } from "./section-CHNP56Wq.mjs";
import { t as PageHero } from "./page-hero-CqpaYKa4.mjs";
import { t as ServiceIcon } from "./icons-DQoGe6sI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paediatric-DXNPssrE.js
var import_jsx_runtime = require_jsx_runtime();
var expect = [
	"45–60 minutes for a full paediatric assessment",
	"Both parents or carers are always welcome",
	"We’ll start with a detailed developmental history",
	"Child-friendly, calm test room environment",
	"Full written report sent within 3–5 days",
	"Onward referrals arranged swiftly if needed"
];
function Paediatric() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Children's hearing",
		title: "Paediatric audiology",
		lede: "Specialist hearing assessments for newborns, toddlers, and children — delivered with expertise, patience, and a genuine love of working with young patients.",
		image: "/images/waiting-room.jpg",
		imageAlt: ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-sky-pale p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold text-primary-deep",
				children: "A reassuring note for parents"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl leading-relaxed text-mid",
				children: "Worrying about your child’s hearing is completely understandable, and coming for an assessment is the right thing to do. Our clinic is a calm, welcoming, child-friendly space. All assessments are non-invasive, pain-free, and adapted to your child’s age. We’ll take the time to explain every step clearly and answer all your questions."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
			className: "mt-12",
			children: "Assessment by age"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-title font-bold",
			children: "The right test for every child"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-5 md:grid-cols-3",
			children: paediatricAges.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-border bg-sky-pale p-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto flex size-12 items-center justify-center rounded-xl bg-paper text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceIcon, { name: card.icon })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-bold text-primary-deep",
						children: card.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-muted",
						children: card.age
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-mid",
						children: card.body
					})
				]
			}, card.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Specialist services" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold",
					children: "Glue ear & beyond"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-mid",
					children: "Glue ear (otitis media with effusion) is the most common cause of hearing loss in children. Our audiologist has extensive experience in its diagnosis, monitoring, and management — working closely with ENT specialists where referral is needed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-mid",
					children: "We also provide hearing assessments for children with developmental delays, autism spectrum conditions, and other complex needs, adapting our methods flexibly to achieve accurate results."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What to expect" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold",
					children: "Your appointment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4",
					children: expect.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2.5 border-b border-border py-2.5 text-sm text-mid last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }), item]
					}, item))
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 rounded-2xl bg-sky-pale px-6 py-12 text-center md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: "Concerned about your child’s hearing?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-lg text-muted",
					children: "Book a paediatric hearing assessment today. Early identification makes all the difference."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/booking",
						children: ["Book a paediatric assessment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			]
		})
	] })] });
}
//#endregion
export { Paediatric as component };
