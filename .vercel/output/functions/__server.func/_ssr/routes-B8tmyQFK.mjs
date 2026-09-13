import { c as qualifications, d as stats, f as testimonials, l as services, r as jsonLd, s as practice } from "./utils-DSkcmyaj.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { T as ArrowRight, _ as GraduationCap, i as Star, u as Microscope } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-CIm79_V5.mjs";
import { t as FramedImage } from "./framed-image-rD2Gzd3n.mjs";
import { n as Section, t as Eyebrow } from "./section-CHNP56Wq.mjs";
import { t as ServiceIcon } from "./icons-DQoGe6sI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8tmyQFK.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-primary-deep text-foam",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-5 inline-flex items-center gap-2 rounded-full border border-foam/25 bg-foam/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-foam uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-sky" }), "UCL PhD · HCPC registered audiologist"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-display font-bold text-foam",
						children: [
							"Expert hearing care",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"you can ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-sky",
								children: "trust"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-lede leading-relaxed text-foam/80",
						children: practice.lede
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "foam",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/booking",
								children: "Book a hearing test"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								children: ["View services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FramedImage, {
						src: "/images/hero-consult.jpg",
						alt: "An unhurried hearing consultation in a quiet, light-filled clinic",
						className: "col-span-2 aspect-photo rounded-2xl",
						priority: true
					}), stats.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-foam/20 bg-foam/10 px-4 py-4 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-bold leading-none text-foam",
							children: item.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-foam/70",
							children: item.label
						})]
					}, item.label))]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "off",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What we offer" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-title font-bold",
						children: "Comprehensive audiology services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-muted",
						children: "From routine hearing assessments to specialist paediatric care and custom ear protection."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: service.to,
					className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-paper p-7 shadow-border transition-[transform,box-shadow] duration-200 ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-20 items-center justify-center rounded-2xl bg-sky-pale text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceIcon, {
								name: service.icon,
								className: "size-8"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-5 text-xl font-bold",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
							children: service.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary",
							children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-7 items-center justify-center rounded-full bg-primary text-primary-fg transition-transform duration-200 group-hover:translate-x-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
							})]
						})
					]
				}, service.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "teal",
			className: "py-12 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-6",
				children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-28 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-bold text-foam",
						children: item.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-foam/75",
						children: item.label
					})]
				}, item.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 md:grid-cols-2 md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FramedImage, {
					src: "/images/portrait-lena.jpg",
					alt: "Aurikear's clinical audiologist",
					className: "aspect-portrait rounded-2xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -right-3 -bottom-4 rounded-2xl bg-primary-deep px-5 py-4 text-foam shadow-lift md:-right-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-none font-bold",
						children: "PhD"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-foam/80",
						children: "UCL auditory research"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Meet your audiologist" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-title font-bold",
					children: "Research-led expertise, compassionate care"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-mid",
					children: "With a First Class BSc from UCL (2009) and a completed PhD focusing on Cortical Auditory Evoked Potentials, our audiologist combines published academic research with deep clinical experience across all ages — from newborn hearing screens to adult amplification."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: qualifications.slice(0, 4).map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 rounded-xl bg-sky-pale p-3.5",
						children: [q.label.includes("Research") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Microscope, { className: "mt-0.5 size-4 shrink-0 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold leading-snug text-mid",
							children: q.value
						})]
					}, q.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						children: ["Full biography", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			] })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "off",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Patient stories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-title font-bold",
					children: "Trusted by families & professionals"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-3",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "relative flex flex-col rounded-2xl border border-border bg-paper p-7 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5 text-primary-light",
							"aria-label": "5 stars",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-current" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-4 flex-1 text-sm leading-relaxed text-mid",
							children: t.quote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-full bg-sky text-sm font-bold text-primary-deep",
								children: t.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-bold text-ink",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: t.role
							})] })]
						})
					]
				}, t.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "teal",
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					className: "text-sky",
					children: "Take the first step"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-title font-bold text-foam",
					children: "Ready to improve your hearing?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-lg text-foam/80",
					children: "A hearing test is quick, painless, and could make a profound difference. Book yours today."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "foam",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/booking",
							children: "Book a hearing test"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Get in touch"
						})
					})]
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
