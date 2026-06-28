// Minimal inline icon set (lucide-style strokes) so we avoid an icon dependency.

type IconProps = {
  className?: string
  size?: number
}

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }
}

export function CopyIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function CheckIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function PlusIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function KeyIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  )
}

export function TerminalIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </svg>
  )
}

export function PlugIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  )
}

export function LogOutIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  )
}

export function TrashIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
}

export function BoxesIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
      <path d="m7 16.5-4.74-2.85M7 16.5l5-3M7 16.5v5.17" />
      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
      <path d="m17 16.5-5-3m5 3 4.74-2.85M17 16.5v5.17M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
      <path d="M12 8 7.26 5.15M12 8l4.74-2.85M12 8v5.5" />
    </svg>
  )
}

export function FileTextIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8M16 13H8M16 17H8" />
    </svg>
  )
}

export function ZapIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
}

export function LockIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export function GithubIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M7 7h10v10M7 17 17 7" />
    </svg>
  )
}

export function ArrowRightIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
