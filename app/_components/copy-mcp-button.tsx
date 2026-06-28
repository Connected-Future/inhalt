"use client"

import { useClipboard } from "@/lib/hooks/use-clipboard"
import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon } from "@/components/ui/icons"

// The hero's primary CTA. Copies the MCP endpoint straight to the clipboard so a
// visitor can paste it into their client without signing up first. Uses the
// shared Button component (variant="primary") so it inherits the app's button
// styling and hover behaviour; `.lp-cta` only scales it up for the hero.
export function CopyMcpButton({ value }: { value: string }) {
  const { copied, copy } = useClipboard(1600)
  const done = copied !== null

  return (
    <Button variant="primary" className="lp-cta" onClick={() => copy(value)}>
      {done ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
      {done ? "Copied" : "Copy MCP server"}
    </Button>
  )
}
