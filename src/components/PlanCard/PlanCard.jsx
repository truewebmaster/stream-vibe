import './PlanCard.scss'
import Button from "@/components/Button";

const PlanCard = (props) => {
  const {
    title,
    description,
    price,
  } = props

  return (
    <div className="plan-card">
      <div className="plan-card__info">
        <h3 className="plan-card__title h4">{title}</h3>
        <div className="plan-card__description"><p>{description}</p></div>
      </div>
      <div className="plan-card__conditions">
        <span className="plan-card__price">{price.value}</span>
        <span className="plan-card__period">{price.label}</span>
      </div>
      <div className="plan-card__actions">
        <Button
          href="/subscriptions"
          label="Start Free Trial"
          mode="black-08"
        />
        <Button
          href="/subscriptions"
          label="Choose Plan"
        />
      </div>
    </div>
  )
}

export default PlanCard