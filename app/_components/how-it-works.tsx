import { STEPS } from "../utils/constants"

// Three numbered steps from connecting the endpoint to publishing.
export function HowItWorks() {
  return (
    <section className="lp-section lp-divide" id="how">
      <div className="lp-shell">
        <p className="lp-eyebrow">How it works</p>
        <h2 className="lp-h2">Three steps to a live content layer.</h2>
        <div className="lp-steps">
          {STEPS.map((step) => (
            <div key={step.no} className="lp-step">
              <span className="lp-step-no">{step.no}</span>
              <h3 className="lp-step-title">{step.title}</h3>
              <p className="lp-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
