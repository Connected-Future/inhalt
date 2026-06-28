import { CLIENTS } from "../utils/constants"

// Thin strip listing the MCP clients Inhalt works with.
export function ClientsBar() {
  return (
    <section className="lp-clients">
      <div className="lp-shell lp-clients-inner">
        <p className="lp-clients-label">Works with every MCP client</p>
        <div className="lp-clients-list">
          {CLIENTS.map((client) => (
            <span key={client} className="lp-client">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
