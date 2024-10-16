import HolyCashLogo from "../assets/holycash.png";
import DinoBankLogo from "../assets/dinobank.png";
import NPMLogo from "../assets/npm.png";
import BOFLogo from "../assets/bankoflucy.png";

const vendors = {
  holyCash: {
    name: "Holy Cash",
    logo: HolyCashLogo,
    colorTheme: {
      background: "#FFD700",
      textColor: "#4A4A49",
    },
  },
  dinoBank: {
    name: "Dino Bank",
    logo: DinoBankLogo,
    colorTheme: {
      background: "#0B6623",
      textColor: "#C0C0C0",
    },
  },
  nationalPennyMoney: {
    name: "National Penny Money",
    logo: NPMLogo,
    colorTheme: {
      background: "#063B87",
      textColor: "#C0C0C0",
    },
  },
  bankOfLucy: {
    name: "Bank Of Lucy",
    logo: BOFLogo,
    colorTheme: {
      background: "#98272A",
      textColor: "#00000",
    },
  },
};

export default vendors;
