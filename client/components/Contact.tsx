"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { contact, brand } from "@/lib/content";

const field =
  "w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors duration-200 focus:border-accent";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative border-t border-border py-24 md:py-32">
      <div className="container-nezt grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            <span className="label-tech">{contact.eyebrow}</span>
          </div>
          <h2 className="mt-5 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            {contact.body}
          </p>

          <dl className="mt-10 space-y-5 border-t border-border pt-8">
            <div className="flex items-center gap-4">
              <span className="grid h-9 w-9 place-items-center rounded-sm border border-border text-accent">
                <Icon name="mail" size={16} />
              </span>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  Email
                </dt>
                <dd className="mt-0.5 text-sm text-fg">{brand.email}</dd>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-9 w-9 place-items-center rounded-sm border border-border text-accent">
                <Icon name="phone" size={16} />
              </span>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  Phone
                </dt>
                <dd className="mt-0.5 text-sm text-fg">{brand.phone}</dd>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-9 w-9 place-items-center rounded-sm border border-border text-accent">
                <Icon name="pin" size={16} />
              </span>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  Studios
                </dt>
                <dd className="mt-0.5 text-sm text-fg">
                  {brand.locations.join(" · ")}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="surface-card p-7 sm:p-9">
            {submitted ? (
              <div className="flex min-h-[24rem] flex-col items-start justify-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-accent text-accent">
                  <Icon name="check" size={22} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-fg">
                  Message received.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Thank you. A senior engineer will get back to you within one
                  business day with next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-accent underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-muted">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-muted">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className={field}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm text-muted">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="mb-2 block text-sm text-muted">
                      Project type
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        defaultValue=""
                        required
                        className={`${field} appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {contact.projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <Icon
                        name="arrow-right"
                        size={16}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-faint"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm text-muted">
                    Budget range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={`${field} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {contact.budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <Icon
                      name="arrow-right"
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-faint"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-muted">
                    What are you building?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe the problem, the constraints, and what success looks like."
                    className={`${field} resize-y`}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-faint">
                    We reply within one business day.
                  </p>
                  <Button type="submit" size="md">
                    Send message
                    <Icon name="arrow-up-right" size={16} />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
