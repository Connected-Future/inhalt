import type { Metadata } from "next"
import { ClientsBar } from "./_components/clients-bar"
import { ConnectSection } from "./_components/connect-section"
import { FeaturesSection } from "./_components/features-section"
import { HowItWorks } from "./_components/how-it-works"
import { LandingFooter } from "./_components/landing-footer"
import { LandingHeader } from "./_components/landing-header"
import { LandingHero } from "./_components/landing-hero"
import { OpenSourceSection } from "./_components/open-source-section"
import "./landing.css"

export const metadata: Metadata = {
  title: "Inhalt, the open-source MCP-native CMS",
  description:
    "Connect any MCP client to Inhalt and manage your content just by chatting. Open source and self-hostable.",
  openGraph: {
    title: "Inhalt, the open-source MCP-native CMS",
    description:
      "Connect Claude, Cursor, or any MCP client to Inhalt, then create and edit your content just by chatting.",
    type: "website",
  },
}

export default function LandingPage() {
  const year = new Date().getFullYear()

  return (
    <div className="lp" id="top">
      <LandingHeader />
      <main>
        <LandingHero />
        <ClientsBar />
        <ConnectSection />
        <HowItWorks />
        <FeaturesSection />
        <OpenSourceSection />
      </main>
      <LandingFooter year={year} />
    </div>
  )
}
