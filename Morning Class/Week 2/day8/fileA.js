/* Module exports */
const david = 666;
const rezki = "I don't know";
const isKimSuperman = false;
function reza(name) {
  console.log('Hello Guys!', name);
}

// If you have module.exports, the another exports will not readable
// module.exports = { david, rezki, isKimSuperman, reza };

/* with exports dot */
exports.fuadi = 2012;
exports.ruhul = "I'm not human";
exports.kim = function () {
  console.log('Hello World');
};

/* module.exports directly */
// module.exports = {
//   bayu: 7,
//   gema: function () {
//     console.log('Am I crazy?');
//   },
// };
