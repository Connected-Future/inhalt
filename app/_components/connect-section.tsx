import { ENDPOINT, OAUTH_CONFIG } from "@/app/dashboard/utils/constants"
import { CopyMcpButton } from "./copy-mcp-button"

// "One block of config" section: copy paragraph + CTA on the left, the mcp.json
// mock panel on the right.
export function ConnectSection() {
  return (
    <section className="lp-section" id="connect">
      <div className="lp-shell lp-connect-grid">
        <div>
          <p className="lp-eyebrow">Connect in seconds</p>
          <h2 className="lp-h2">One block of config. That is the install.</h2>
          <p className="lp-body lp-measure">
            Drop the endpoint into your MCP client. It opens a browser for you to
            sign in, then exposes a typed tool for every content operation. No
            keys to wrangle.
          </p>
          <div className="lp-connect-cta">
            <CopyMcpButton value={ENDPOINT} />
          </div>
        </div>
        <div className="lp-panel">
          <div className="lp-panel-head">
            <span>mcp.json</span>
            <span className="lp-panel-tag">connect</span>
          </div>
          <pre className="lp-panel-code">{OAUTH_CONFIG}</pre>
        </div>
      </div>
    </section>
  )
}
