import ChipIcon from "../assets/chip.png"

const CardLayout = ({ cardNumber, expMonth, expYear, cardHolder, vendor, onDelete }) => {
  return (
    <>
        <div className="relative border p-2 pl-6 pr-6 rounded shadow-sm text-black mb-4"
        style={{backgroundColor: vendor.colorTheme.background, color: vendor.colorTheme.textColor,
        }}
        >
            <img src={vendor.logo} 
            alt={vendor.name} 
            className="absolute top-2 right-2 w-8 h-8" />
            <img src={ChipIcon} alt="chip" 
            className="absolute top-8 left-6 w-8 h-8" />
            <div className="mt-14 mr-2 ml-2">
                <p className="text-lg font-mono font-semibold">{cardNumber || "XXXX XXXX XXXX XXXX"}</p>
                <p className="text-xs mt-1">VALID THRU {expMonth || "MM"}/{expYear || "YY"}</p>
                <h2 className="text-base text-left mb-2">{cardHolder || "FIRSTNAME LASTNAME"}</h2>
            </div>
        </div>
        <div className="">
            {onDelete && (
                <button
                className="mb-4 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                >Delete card</button>
            )}
        </div>
    </>
  )
}

export default CardLayout