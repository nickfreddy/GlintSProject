/* Exports */
exports.sukma = 'Have you been eating?';
exports.adhi = function () {
  console.log('My name is Rangga');
};

/* Module exports */
// Indirect
const gilang = 666;
const rangga = "I'm not human";
const isYhidoHuman = false;
function amri(name) {
  console.log("I'm Amri and you,", name);
}

module.exports = { gilang, rangga, isYhidoHuman, amri };

// Direct
// module.exports = {
//   freddy: [1, 2, 3],
//   adib: function () {
//     console.log('Am I crazy?');
//   },
// };
