import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { bookingSchema, saveBooking, type BookingInput } from "@/lib/booking";
import { bookingServices, timePreferences } from "@/lib/practice";
import { Button } from "./ui/button";
import { FieldError, Input, Label, Select, Textarea } from "./ui/field";

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const form = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      service: defaultService ?? "",
      preferred: "No preference",
      notes: "",
    },
  });

  if (form.formState.isSubmitSuccessful) {
    const id = form.formState.submitCount
      ? (form.getValues() as BookingInput)
      : null;
    return (
      <div className="rounded-2xl border border-border bg-sky-pale px-6 py-10 text-center">
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden />
        <h3 className="font-display mt-4 text-2xl font-bold text-primary-deep">
          Request received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-mid">
          Thank you{id?.firstName ? `, ${id.firstName}` : ""}. We’ll be in
          touch within one working day to confirm your appointment
          {id?.service ? ` for ${id.service.toLowerCase()}` : ""}.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => form.reset()}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-border bg-paper p-6 shadow-border md:p-9"
      onSubmit={form.handleSubmit((values) => {
        saveBooking(values);
      })}
      noValidate
    >
      <h2 className="font-display mb-6 text-2xl font-bold text-ink">Your details</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name *</Label>
          <Input id="firstName" autoComplete="given-name" {...form.register("firstName")} />
          <FieldError>{form.formState.errors.firstName?.message}</FieldError>
        </div>
        <div>
          <Label htmlFor="lastName">Last name *</Label>
          <Input id="lastName" autoComplete="family-name" {...form.register("lastName")} />
          <FieldError>{form.formState.errors.lastName?.message}</FieldError>
        </div>
        <div>
          <Label htmlFor="email">Email address *</Label>
          <Input id="email" type="email" autoComplete="email" {...form.register("email")} />
          <FieldError>{form.formState.errors.email?.message}</FieldError>
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...form.register("phone")} />
        </div>
      </div>
      <div className="mt-4">
        <Label htmlFor="dateOfBirth">Date of birth</Label>
        <Input id="dateOfBirth" type="date" {...form.register("dateOfBirth")} />
      </div>
      <div className="mt-4">
        <Label htmlFor="service">Service required *</Label>
        <Select id="service" defaultValue="" {...form.register("service")}>
          <option value="" disabled>
            Please select…
          </option>
          {bookingServices.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
        <FieldError>{form.formState.errors.service?.message}</FieldError>
      </div>
      <div className="mt-4">
        <Label htmlFor="preferred">Preferred appointment times</Label>
        <Select id="preferred" {...form.register("preferred")}>
          {timePreferences.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </div>
      <div className="mt-4">
        <Label htmlFor="notes">Additional information</Label>
        <Textarea
          id="notes"
          placeholder="Previous hearing tests, symptoms, or concerns about your child…"
          {...form.register("notes")}
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full">
        Request appointment
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        We’ll confirm within one working day. This request is stored on this
        device for the preview — call us if you prefer to book by phone.
      </p>
    </form>
  );
}
