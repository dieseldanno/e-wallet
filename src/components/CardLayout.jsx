import ChipIcon from "../assets/chip.png";

const CardLayout = ({
  cardNumber,
  expMonth,
  expYear,
  cardHolder,
  vendor,
  onDelete,
}) => {
  return (
    <>
      <div
        className="relative border p-2 pl-6 pr-6 rounded shadow-sm mb-4"
        style={{
          backgroundColor: vendor.colorTheme.background,
          color: vendor.colorTheme.textColor,
          width: "320px",
          height: "200px",
        }}
      >
        <img
          src={vendor.logo}
          alt={vendor.name}
          className="absolute top-2 right-2 w-14 h-14"
        />
        <img
          src={ChipIcon}
          alt="chip"
          className="absolute top-12 left-8 w-10 h-10"
        />
        <div className="mt-20 mr-2 ml-2">
          <p className="text-2xl font-mono font-semibold">
            {cardNumber || "XXXX XXXX XXXX 0000"}
          </p>
          <p className="text-left text-xs font-mono mt-1">VALID</p>
          <p className="text-left text-xs font-mono mt-1">
            THRU {expMonth || "MM"}/{expYear || "YY"}
          </p>
          <h2 className="text-base text-left font-mono mb-2">
            {cardHolder || "FIRSTNAME LASTNAME"}
          </h2>
        </div>
      </div>
      <div>
        {onDelete && (
          <button
            className="inline-block mb-4 p-2 border rounded w-48 bg-red-500 text-white hover:bg-red-600 hover:text-white"
            onClick={onDelete}
          >
            Delete card
          </button>
        )}
      </div>
    </>
  );
};

export default CardLayout;
