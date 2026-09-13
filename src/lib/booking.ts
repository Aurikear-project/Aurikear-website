import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name"),
  lastName: z.string().trim().min(1, "Please enter your last name"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().optional(),
  dateOfBirth: z.string().optional(),
  service: z.string().min(1, "Please choose a service"),
  preferred: z.string(),
  notes: z.string().trim().optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export type StoredBooking = BookingInput & {
  id: string;
  createdAt: string;
};

const STORAGE_KEY = "aurikear-booking-requests";

function readAll(): StoredBooking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredBooking[]) : [];
  } catch {
    return [];
  }
}

export function saveBooking(input: BookingInput): StoredBooking {
  const record: StoredBooking = {
    ...input,
    id: `AK-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };
  const next = [...readAll(), record];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return record;
}
