console.log("serenren");

number = "2348088893500";

let regex = "^[+0234]+[789](?=0(?=1|8|7|2)|1(?=2))(?=\\d)";

function trial(number) {
  let re = RegExp(regex);
  return re.test(number);
}

console.log(trial(number));
