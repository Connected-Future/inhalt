import type { ComponentType } from "react"

// A landing-page icon: the inline SVG components from components/ui/icons, all of
// which take an optional pixel size and className.
export type IconComponent = ComponentType<{ size?: number; className?: string }>

// One numbered row in the "how it works" section.
export type Step = {
  no: string
  title: string
  body: string
}

// One card in the features grid.
export type Feature = {
  Icon: IconComponent
  title: string
  body: string
}
