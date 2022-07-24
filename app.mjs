let telephoneInput = {
  telephone: "",
};

let currentTelecomCarrier = "";
let currentPattern = "";

function startApp() {
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here
  // pls remove the below and make some magic in here!
  document.getElementById("telephone").addEventListener("input", (e) => {
    telephoneInput[e.target.name] = e.target.value;
    isMatched();
    console.log(telephoneInput.telephone);
  });

  document.getElementById("telecomCarrier").addEventListener("change", (e) => {
    currentTelecomCarrier = e.target.value;
    setPattern();
  });
}

function setPattern() {
  if (currentTelecomCarrier === "mtn") {
    document.getElementById("telephone").pattern =
      "^[\\+0234]+[789]+0+[346]+\\d{7}";
    currentPattern = "^[\\+0234]+[789]+0+[346]+\\d{7}";
  }

  if (currentTelecomCarrier === "glo") {
    document.getElementById("telephone").pattern =
      "^[\\+0234]+[789]+[01]+[157]+\\d{7}";
    currentPattern = "^[\\+0234]+[789]+[01]+[157]+\\d{7}";
  }

  if (currentTelecomCarrier === "airtel") {
    document.getElementById("telephone").pattern =
      "^[\\+0234]+[789]+[01]+[1278]+\\d{7}";
    currentPattern = "^[\\+0234]+[789]+[01]+[1278]+\\d{7}";
  }

  if (currentTelecomCarrier === "9mobile") {
    document.getElementById("telephone").pattern =
      "^[\\+0234]+[89]+[01]+[789]+\\d{7}";
    currentPattern = "^[\\+0234]+[89]+[01]+[789]+\\d{7}";
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
