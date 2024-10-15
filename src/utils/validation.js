export function validateCard({
  cardHolder,
  cardNumber,
  expMonth,
  expYear,
  ccv,
}) {
  // check name, no numbers
  if (/\d/.test(cardHolder)) {
    return "Name can't contain numbers";
  }

  // remove space for validation
  let validateCardNumber = cardNumber.replace(/\s+/g, "");

  // length and only numbers
  if (validateCardNumber.length !== 16 || /\D/.test(validateCardNumber)) {
    return "Card number must have 16 numbers and can't contain any letters";
  }

  // exp date validation
  let currentDate = new Date();
  let [currentYear, currentMonth] = [
    currentDate.getFullYear() % 100,
    currentDate.getMonth() + 1,
  ];

  // func to validate two digits
  const isTwoDigits = (value) => /^\d{2}$/.test(value);

  let monthValid = isTwoDigits(expMonth) && +expMonth >= 1 && +expMonth <= 12;
  let yearValid = isTwoDigits(expYear);

  if (!monthValid) {
    return "Please write a valid month as MM (ex 01-12)";
  } else if (!yearValid) {
    return "Please write valid year as YY (ex 25)";
  } else {
    // if expiration is past
    let isExp =
      +expYear < currentYear ||
      (+expYear === currentYear && +expMonth < currentMonth);

    if (isExp) {
      return "Expired date";
    }
  }

  if (/\D/.test(ccv)) {
    return "CCV can't contain letters";
  }

  // if all inputs are without errors, return null
  return null;
}
