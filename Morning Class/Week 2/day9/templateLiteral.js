/* Template Literal */
const fuad = "Hello, I'm Fuad";
const david = "Hello, I'm David";

function rezki() {
  return 666;
}

let fuadDavidNonTemplate = fuad + ' | ' + david + ', ' + rezki();
console.log(fuadDavidNonTemplate);

let fuadDavidTemplate = `${fuad} | ${david}, ${rezki()}`;
console.log(fuadDavidTemplate);
