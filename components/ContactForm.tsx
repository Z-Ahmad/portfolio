"use client";

import { useActionState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { sendContact, type ContactState } from "@/actions/contact";
import { SPRING_REVEAL } from "@/lib/motion";

const field =
  "w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });
  const previous = state.status === "error" ? state.fields : undefined;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {state.status === "sent" ? (
        <m.div
          key="sent"
          role="status"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING_REVEAL}
          className="rounded-2xl border border-hairline bg-surface p-6"
        >
          <p className="font-serif text-xl">Thank you. It&apos;s on its way.</p>
          <p className="mt-1 text-muted">I read everything, and I&apos;ll reply to the address you gave.</p>
        </m.div>
      ) : (
        <m.form key="form" action={action} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="flex flex-col gap-3">
          <label className="sr-only" htmlFor="email">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={320}
            autoComplete="email"
            placeholder="Your email"
            defaultValue={previous?.email}
            className={field}
          />
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={6}
            placeholder="What are you working on?"
            defaultValue={previous?.message}
            className={`${field} resize-y`}
          />
          {/* Honeypot, hidden from people and assistive tech. */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

          <div className="mt-1 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={pending}
              className="rounded-xl bg-ink px-5 py-3 text-sm font-medium text-bg transition-[transform,opacity] duration-200 ease-out-expo hover:-translate-y-px active:translate-y-0 disabled:opacity-60 motion-reduce:transition-none"
            >
              {pending ? "Sending…" : "Send message"}
            </button>
            <p aria-live="polite" className="text-sm text-danger">
              {state.status === "error" ? state.message : null}
            </p>
          </div>
        </m.form>
      )}
    </AnimatePresence>
  );
}
