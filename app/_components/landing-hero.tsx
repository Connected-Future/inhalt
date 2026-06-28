import { ENDPOINT } from "@/app/dashboard/utils/constants"
import { GithubIcon } from "@/components/ui/icons"
import { GITHUB_URL } from "../utils/constants"
import { CopyMcpButton } from "./copy-mcp-button"

// Centered hero: eyebrow, headline, lede, and the two primary CTAs.
export function LandingHero() {
  return (
    <section className="lp-hero">
      <div className="lp-shell lp-hero-inner">
        <p className="lp-eyebrow">The CMS your AI tools can run</p>
        <h1 className="lp-h1">Open source, MCP-native CMS.</h1>
        <p className="lp-lede">
          Connect Claude, Cursor, or any MCP client to Inhalt, then create and
          edit your content just by chatting.
        </p>
        <div className="lp-cta-row lp-cta-center">
          <CopyMcpButton value={ENDPOINT} />
          <a href={GITHUB_URL} className="lp-btn lp-btn-outline lp-btn-lg">
            <GithubIcon size={16} />
            View source
          </a>
        </div>
      </div>
    </section>
  )
}
