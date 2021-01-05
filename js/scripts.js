var tc = 0;
var fc = false;
var tea;
function pickHat(tf) {
  tea = tf;
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
  var addto;
  var chosen;
  if (tf) {
    if (tc >= 2) {
      return;
    }
    num = Math.floor(Math.random() * t.length);
    chosen = t[num];
    t.splice(num, 1);
    addto = document.getElementById("perm");
    extras = [
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      t[Math.floor(Math.random() * t.length)],
      chosen,
    ];
  } else {
    if (fc) {
      return;
    }
    num = Math.floor(Math.random() * f.length);
    f.splice(num, 1);
    chosen = f[Math.floor(Math.random() * f.length)];
    addto = document.getElementById("bann");
    extras = [
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      f[Math.floor(Math.random() * f.length)],
      chosen,
    ];
  }
  console.log("uhh");
  spinny = document.createElement("li");
  addto.append(spinny);

  spinny.innerHTML = chosen;
  q = setTimeout(qq(), 2000 / extras.length);
}
function qq(tf) {
  spinny.innerHTML = extras[0];
  extras.shift();
  console.log(extras.length);
  if (extras.length <= 1) {
    console.log("end");
    clearInterval(q);
    if (tea) {
      tc += 1;
      pickHat(true);
    }
  } else {
    setTimeout(qq, 2000 / extras.length);
  }
}

var i = 0;
clist = [
  "000",
  "F00",
  "000",
  "000",
  "000",
  "000",
  "0F0",
  "000",
  "000",
  "000",
  "000",
  "FF0",
  "000",
  "000",
  "000",
  "000",
  "0FF",
  "000",
  "000",
  "000",
  "000",
  "00F",
  "000",
  "000",
  "000",
  "000",
  "F0F",
  "000",
  "000",
  "000",
];
function colorchange() {
  document.getElementById("makeitrain").innerHTML =
    "*{color:#" + clist[i + 1] + ";}";
  i += 1;
  i %= clist.length;
}
changeee = setInterval(() => {
  colorchange();
}, 1000);

var left = 90 * 60;
timer = setInterval(() => {
  document.getElementById("timer").innerHTML =
    Math.floor(left / 60) + " Minutes, " + (left % 60) + " seconds";
  left--;
}, 1000);
