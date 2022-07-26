let userDetails = {
  firstname: "",
  lastname: "",
  email: "",
  telephone: "",
};

let currentTelecomCarrier = "";
let currentPattern = "";

function startApp() {
  document.getElementById("telephone").addEventListener("input", (e) => {
    userDetails[e.target.name] = e.target.value;
    isMatched();
  });

  document.getElementById("telecomCarrier").addEventListener("change", (e) => {
    currentTelecomCarrier = e.target.value;
    setPattern();
  });

  document.getElementById("submit").addEventListener("click", (e) => {
    console.log(userDetails);
  });
}

function setPattern() {
  if (currentTelecomCarrier === "mtn") {
    document.getElementById("telephone").pattern =
      "^[+0234]+?(803|816|903|810|806|703|706|813|814|906)?[0-9]{7}";
    currentPattern =
      "^[+0234]+?(803|816|903|810|806|703|706|813|814|906)?[0-9]{7}";
  }

  if (currentTelecomCarrier === "glo") {
    document.getElementById("telephone").pattern =
      "^[+0234]+?(805|905|807|811|705|815)?[0-9]{7}";
    currentPattern = "^[+0234]+?(805|905|807|811|705|815)?[0-9]{7}";
  }

  if (currentTelecomCarrier === "airtel") {
    document.getElementById("telephone").pattern =
      "^[+0234]+?(907|708|802|902|812|701|808|904)?[0-9]{7}";
    currentPattern = "^[+0234]+?(907|708|802|902|812|701|808|904)?[0-9]{7}";
  }

  if (currentTelecomCarrier === "9mobile") {
    document.getElementById("telephone").pattern =
      "^[+0234]+?(909|908|818|809|817)?[0-9]{7}";
    currentPattern = "^[+0234]+?(909|908|818|809|817)?[0-9]{7}";
  }
}

function isMatched() {
  let isValid = document.getElementById("telephone").checkValidity();
  if (isValid && currentTelecomCarrier === "mtn") {
    changeIcon(
      "https://www.mtn.ng/wp-content/themes/mtn-theme/images/mtn-new-logo.svg"
    );
  } else if (isValid && currentTelecomCarrier === "glo") {
    changeIcon("https://www.gloworld.com/logo.png");
  } else if (isValid && currentTelecomCarrier === "9mobile") {
    changeIcon("https://9mobile.com.ng/wp-content/uploads/2020/08/logo3.png");
  } else if (isValid && currentTelecomCarrier === "airtel") {
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
