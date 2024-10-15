import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { validateCard } from "../utils/validation"
import CardPrev from "../components/CardPrev"

const AddCard = ({ addCard }) => {
    let [cardHolder, setCardHolder] = useState("")
    let [cardNumber, setCardNumber] = useState("")
    let [expMonth, setExpMonth] = useState("")
    let [expYear, setExpYear] = useState("")
    let [ccv, setCcv] = useState("")
    let [cardVendor, setCardVendor] = useState("holyCash")
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // validation
        const validationError = validateCard({ cardHolder, cardNumber, expMonth, expYear, ccv })

        if (validationError) {
            alert(validationError)
            return
        }
        console.log("validation error", validationError)

        console.log({ cardHolder, cardNumber, expMonth, expYear, ccv, cardVendor });

        // if all pass validation, add card
        addCard({ cardHolder, cardNumber, expMonth, expYear, ccv, cardVendor })
        navigate("/")
    }

    // formatting for space after each 4th number
    const handleCardNumber = (e) => {
        const input = e.target.value.replace(/\D/g, "").slice(0, 16)
        setCardNumber(input.replace(/(.{4})/g, "$1 ").trim())
    }

  return (
    <div>
        <CardPrev 
        cardVendor={cardVendor}
        cardHolder={cardHolder}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        />
        <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-2xl mb-4">Add new card</h1>
            <input type="text" placeholder="FIRSTNAME LASTNAME" value={cardHolder} onChange={(e) => setCardHolder(e.target.value.toUpperCase())} className="block mb-4 p-2 border rounded w-56"/>
            <input type="text" placeholder="XXXX XXXX XXXX 0000" value={cardNumber} onChange={handleCardNumber} className="block mb-4 p-2 border rounded w-56" />
            <div className="flex place-content-center space-x-2 mb-4">
                <input type="text" placeholder="MM" maxLength={2} value={expMonth} onChange={(e) => setExpMonth(e.target.value)} className="w-16 p-2 border rounded" />
                <span className="self-center">/</span>
                <input type="text" placeholder="YY" maxLength={2} value={expYear} onChange={(e) => setExpYear(e.target.value)} className="w-16 p-2 border rounded" />
                <input type="text" placeholder="CCV" value={ccv} maxLength={3} onChange={(e) => setCcv(e.target.value)} className="w-16 p-2 border rounded" />
            </div>
            <select value={cardVendor} onChange={(e) => setCardVendor(e.target.value)} className="block mb-4 p-2 border rounded w-56">
                <option value="holyCash">HOLY CASH</option>
                <option value="dinoBank">DINO BANK</option>
                <option value="nationalPennyMoney">NATIONAL PENNY MONEY</option>
            </select>
            <button type="submit" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:text-white">Add card</button>
        </form>
    </div>
  )
}

export default AddCard