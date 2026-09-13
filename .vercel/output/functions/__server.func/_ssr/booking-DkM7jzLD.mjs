import { n as cn, p as timePreferences, s as practice, t as bookingServices } from "./utils-DSkcmyaj.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Clock, f as MapPin, m as Lock, p as Mail, s as Phone, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { n as Route$5, r as Button } from "./router-CIm79_V5.mjs";
import { n as Section } from "./section-CHNP56Wq.mjs";
import { t as PageHero } from "./page-hero-CqpaYKa4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-DkM7jzLD.js
var import_jsx_runtime = require_jsx_runtime();
var bookingSchema = object({
	firstName: string().trim().min(1, "Please enter your first name"),
	lastName: string().trim().min(1, "Please enter your last name"),
	email: string().trim().email("Please enter a valid email"),
	phone: string().trim().optional(),
	dateOfBirth: string().optional(),
	service: string().min(1, "Please choose a service"),
	preferred: string(),
	notes: string().trim().optional()
});
var STORAGE_KEY = "aurikear-booking-requests";
function readAll() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveBooking(input) {
	const record = {
		...input,
		id: `AK-${Date.now().toString(36).toUpperCase()}`,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const next = [...readAll(), record];
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	return record;
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-sm font-bold text-ink", className),
		...props
	});
}
var fieldClass = "w-full rounded-lg border-2 border-border bg-bg px-4 py-3 text-base text-ink outline-none transition-[border-color,background-color,box-shadow] duration-150 placeholder:text-muted focus:border-primary-light focus:bg-paper";
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(fieldClass, "h-12", className),
		...props
	});
}
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn(fieldClass, "h-12 appearance-none", className),
		...props,
		children
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(fieldClass, "min-h-28 resize-y", className),
		...props
	});
}
function FieldError({ children }) {
	if (!children) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1.5 text-sm font-medium text-danger",
		children
	});
}
function BookingForm({ defaultService }) {
	const form = useForm({
		resolver: u(bookingSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			dateOfBirth: "",
			service: defaultService ?? "",
			preferred: "No preference",
			notes: ""
		}
	});
	if (form.formState.isSubmitSuccessful) {
		const id = form.formState.submitCount ? form.getValues() : null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-sky-pale px-6 py-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "mx-auto size-10 text-primary",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display mt-4 text-2xl font-bold text-primary-deep",
					children: "Request received"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-3 max-w-md text-mid",
					children: [
						"Thank you",
						id?.firstName ? `, ${id.firstName}` : "",
						". We’ll be in touch within one working day to confirm your appointment",
						id?.service ? ` for ${id.service.toLowerCase()}` : "",
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					className: "mt-6",
					onClick: () => form.reset(),
					children: "Send another request"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "rounded-2xl border border-border bg-paper p-6 shadow-border md:p-9",
		onSubmit: form.handleSubmit((values) => {
			saveBooking(values);
		}),
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mb-6 text-2xl font-bold text-ink",
				children: "Your details"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "firstName",
							children: "First name *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "firstName",
							autoComplete: "given-name",
							...form.register("firstName")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: form.formState.errors.firstName?.message })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "lastName",
							children: "Last name *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "lastName",
							autoComplete: "family-name",
							...form.register("lastName")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: form.formState.errors.lastName?.message })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Email address *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							type: "email",
							autoComplete: "email",
							...form.register("email")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: form.formState.errors.email?.message })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: "Phone number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						type: "tel",
						autoComplete: "tel",
						...form.register("phone")
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "dateOfBirth",
					children: "Date of birth"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "dateOfBirth",
					type: "date",
					...form.register("dateOfBirth")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "service",
						children: "Service required *"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						id: "service",
						defaultValue: "",
						...form.register("service"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Please select…"
						}), bookingServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s,
							children: s
						}, s))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: form.formState.errors.service?.message })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "preferred",
					children: "Preferred appointment times"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					id: "preferred",
					...form.register("preferred"),
					children: timePreferences.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: s,
						children: s
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "notes",
					children: "Additional information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "notes",
					placeholder: "Previous hearing tests, symptoms, or concerns about your child…",
					...form.register("notes")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-6 w-full",
				children: "Request appointment"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-muted",
				children: "We’ll confirm within one working day. This request is stored on this device for the preview — call us if you prefer to book by phone."
			})
		]
	});
}
function Booking() {
	const { service } = Route$5.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Get started",
		title: "Book an appointment",
		lede: "Fill in the form below and we’ll confirm your appointment within one working day.",
		image: "/images/hero-consult.jpg",
		imageAlt: ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "off",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, { defaultService: service }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						icon: MapPin,
						title: "Location",
						children: practice.addressLines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l }, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						icon: Clock,
						title: "Opening hours",
						children: practice.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							h.days,
							": ",
							h.time
						] }, h.days))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCard, {
						icon: Phone,
						title: "Prefer to call?",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: practice.phoneHref,
							className: "font-semibold text-primary",
							children: practice.phone
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: practice.emailHref,
							className: "font-semibold text-primary",
							children: practice.email
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						icon: Lock,
						title: "Confidentiality",
						tone: "pale",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "All information is treated with full clinical confidentiality in accordance with UK GDPR and the Data Protection Act 2018." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						icon: Mail,
						title: "After you send",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This preview stores your request on this device so you can see the confirmation. On the live clinic site it would go to the practice inbox." })
					})
				]
			})]
		})
	})] });
}
function InfoCard({ icon: Icon, title, children, tone = "paper" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: tone === "pale" ? "rounded-2xl border border-border bg-sky-pale p-5" : "rounded-2xl border border-border bg-paper p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mb-3 flex items-center gap-2 text-sm font-bold text-primary-deep",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-1 text-sm text-mid",
			children
		})]
	});
}
//#endregion
export { Booking as component };
