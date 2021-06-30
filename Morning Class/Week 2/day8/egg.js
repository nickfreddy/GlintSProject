const fridge = ['Apple', 'Carrot', 'Milk', 'Orange', 'Egg'];

function goToKitchen() {
  console.log('Go to Kitchen');
}

function checkTheEgg() {
  if (fridge.includes('Egg')) {
    console.log('Egg is exist');
    return true;
  }

  console.log('Egg is not exist');
  return false;
}

function buyTheEgg(check) {
  if (!check) {
    console.log('Go To Market');
    console.log('Buy the Egg');
    console.log('Go to Home');
  }
}

function fryingTheEgg() {
  console.log('Fry the Egg');
}

function eggIsReady() {
  console.log('Egg is ready');
}

function start() {
  goToKitchen();
  const egg = checkTheEgg();
  buyTheEgg(egg);
  fryingTheEgg();
  eggIsReady();
}

start();
