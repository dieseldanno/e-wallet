import vendors from "../data/vendors"
import CardLayout from "./CardLayout"

const CardPrev = ({ cardHolder, cardNumber, expMonth, expYear, cardVendor }) => {
    let vendor = vendors[cardVendor] // get the selected data
  return (
    <CardLayout
        vendor={vendor}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        cardHolder={cardHolder}
    />
  )
}

export default CardPrev