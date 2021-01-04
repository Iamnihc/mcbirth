var tc = false;
var fc = true;
var f = ["Pot", "Pan", "Spoon", "Spatula", "Bowl", "Plate", "Fork"];
var t = [
  "Something starting with the letter e",
  "Something that’s orange",
  "Something that grew underground",
  "A plant native to asia",
  "Something starting with the letter f",
  "A food from the americas",
  "A non-green vegetable",
  "A non-brown spice",
];
function pickHat(tf) {
  var addto;
  var chosen;
  if (tf) {
    if (tc) {
      return;
    } else {
      tc = true;
    }
    chosen = t[Math.floor(Math.random() * t.length)];
    addto = document.getElementById("perm");
    extras = [
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
    ];
  } else {
    if (fc) {
      return;
    } else {
      fc = false;
    }
    chosen = t[Math.floor(Math.random() * t.length)];
    adto = document.getElementById("bann");
    extras = [
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
    ];
  }
  spinny = document.createElement(li);
  adto.append(spinny);
  spinny.innerHTML = chosen;
}
