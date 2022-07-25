console.log("serenren");

number = "2348088893500";

let regex = "^[+0234]+(?=907|708|802|902|812|701|808)(?=\\d)";

function trial(number) {
  let re = RegExp(regex);
  return re.test(number);
}

console.log(trial(number));
