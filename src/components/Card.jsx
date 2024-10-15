import vendors from "../data/vendors"
import CardLayout from "./CardLayout"

const Card = ({ card, onDelete }) => {
    let vendor = vendors[card.cardVendor]
  return (
    <CardLayout
        vendor={vendor}
        cardNumber={card.cardNumber}
        expMonth={card.expMonth}
        expYear={card.expYear}
        cardHolder={card.cardHolder}
        onDelete={onDelete}
    />
  )
}

export default Card