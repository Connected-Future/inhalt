import { FEATURES } from "../utils/constants"

// Grid of product features, each with an icon, title, and short blurb.
export function FeaturesSection() {
  return (
    <section className="lp-section lp-divide" id="features">
      <div className="lp-shell">
        <p className="lp-eyebrow">Features</p>
        <h2 className="lp-h2 lp-measure-wide">
          A content layer built for agents and the humans who own it.
        </h2>
        <div className="lp-features">
          {FEATURES.map(({ Icon, title, body }) => (
            <div key={title} className="lp-feature">
              <span className="lp-feature-icon">
                <Icon size={18} />
              </span>
              <h3 className="lp-feature-title">{title}</h3>
              <p className="lp-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
