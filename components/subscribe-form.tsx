"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div className="mt-20 border rounded-lg p-6">
      <h3 className="text-sm font-semibold mb-1">
        Get notified of new articles
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        No spam. Just one email when I publish something new.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 h-9 rounded-md border bg-background px-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-border"
        />
        <button
          type="submit"
          disabled={!email || sent}
          className="h-9 px-4 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {sent ? "Sent" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
