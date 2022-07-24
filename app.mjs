let telephoneInput = {
  telephone: "",
};

let currentTelecomCarrier = "";
let currentPattern = "";

function startApp() {
  document.getElementById("telephone").addEventListener("input", (e) => {
    telephoneInput[e.target.name] = e.target.value;
    isMatched();
    console.log(telephoneInput.telephone);
  });

  document.getElementById("telecomCarrier").addEventListener("change", (e) => {
    currentTelecomCarrier = e.target.value;
    setPattern();
    isMatched();
  });
}

function setPattern() {
  if (currentTelecomCarrier === "mtn") {
    document.getElementById("telephone").pattern =
      "^[+0234]+[789](?=0(?=6|3|4|2)|1(?=4|0|3|6))(?=\\d)";
    currentPattern = "^[+0234]+[789](?=0(?=6|3|4|2)|1(?=4|0|3|6))(?=\\d)";
  }

  if (currentTelecomCarrier === "glo") {
    document.getElementById("telephone").pattern =
      "^[+0234]+[789](?=0(?=5|7)|1(?=5|1))(?=\\d)";
    currentPattern = "^[+0234]+[789](?=0(?=5|7)|1(?=5|1))(?=\\d)";
  }

  if (currentTelecomCarrier === "airtel") {
    document.getElementById("telephone").pattern =
      "^[+0234]+[789](?=0(?=1|8|7|2)|1(?=2))(?=\\d)";
    currentPattern = "^[+0234]+[789](?=0(?=1|8|7|2)|1(?=2))(?=\\d)";
  }

  if (currentTelecomCarrier === "9mobile") {
    document.getElementById("telephone").pattern =
      "^[+0234]+[89](?=0(?=8|9)|1(?=8|7))(?=\\d)";
    currentPattern = "^[+0234]+[89](?=0(?=8|9)|1(?=8|7))(?=\\d)";
  }
}

function isMatched() {
  let re = new RegExp(currentPattern);
  if (re.test(telephoneInput.telephone) && currentTelecomCarrier === "mtn") {
    changeIcon(
      "https://www.mtn.ng/wp-content/themes/mtn-theme/images/mtn-new-logo.svg"
    );
  } else if (
    re.test(telephoneInput.telephone) &&
    currentTelecomCarrier === "glo"
  ) {
    changeIcon("https://www.gloworld.com/logo.png");
  } else if (
    re.test(telephoneInput.telephone) &&
    currentTelecomCarrier === "9mobile"
  ) {
    changeIcon("https://9mobile.com.ng/wp-content/uploads/2020/08/logo3.png");
  } else if (
    re.test(telephoneInput.telephone) &&
    currentTelecomCarrier === "airtel"
  ) {
    changeIcon("images/airtel-logo.png");
  } else {
    document.getElementById("telecomIcon").style.display = "none";
  }
}

function changeIcon(iconAddress) {
  let doc = document.getElementById("telecomIcon");
  doc.src = iconAddress;
  doc.style.display = "block";
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
