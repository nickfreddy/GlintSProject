const fridge = ['Apple', 'Orange', 'Carrot', 'Noodle'];

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

function goToMarket(egg) {
  if (!egg) {
    console.log('Go to Market');
    console.log('Buy the egg');
    console.log('Go to Home');
  }
}

function fryTheEgg() {
  console.log('Fry the egg');
}

function eggIsReady() {
  console.log('Egg is ready to eat');
}

function start() {
  goToKitchen();
  const egg = checkTheEgg();
  goToMarket(egg);
  fryTheEgg();
  eggIsReady();
}

start();
