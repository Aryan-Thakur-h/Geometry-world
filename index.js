document.getElementById("myh1").textContent = "Welcome to Geometry World!";
let pi = 3.14;

// 🔵 CIRCLE
document.getElementById("circleArea").onclick = function () {
  let r = Number(document.getElementById("circleRadius").value);
  let area = pi * r * r;
  document.getElementById("myp").textContent = "Circle Area = " + area;
};

document.getElementById("circleCircum").onclick = function () {
  let r = Number(document.getElementById("circleRadius").value);
  let circum = 2 * pi * r;
  document.getElementById("myp").textContent = "Circle Circumference = " + circum;
};

// 🟩 RECTANGLE
document.getElementById("rectArea").onclick = function () {
  let l = Number(document.getElementById("rectLen").value);
  let w = Number(document.getElementById("rectWid").value);
  let area = l * w;
  document.getElementById("myp").textContent = "Rectangle Area = " + area;
};

document.getElementById("rectPer").onclick = function () {
  let l = Number(document.getElementById("rectLen").value);
  let w = Number(document.getElementById("rectWid").value);
  let per = 2 * (l + w);
  document.getElementById("myp").textContent = "Rectangle Perimeter = " + per;
};

// 🔺 TRIANGLE
document.getElementById("triArea").onclick = function () {
  let b = Number(document.getElementById("triBase").value);
  let h = Number(document.getElementById("triHeight").value);
  let area = 0.5 * b * h;
  document.getElementById("myp").textContent = "Triangle Area = " + area;
};

document.getElementById("triPer").onclick = function () {
  let a = Number(document.getElementById("triA").value);
  let b = Number(document.getElementById("triB").value);
  let c = Number(document.getElementById("triC").value);
  let per = a + b + c;
  document.getElementById("myp").textContent = "Triangle Perimeter = " + per;
};

// ⚪ SPHERE
document.getElementById("sphereArea").onclick = function () {
  let r = Number(document.getElementById("sphereRadius").value);
  let area = 4 * pi * r * r;
  document.getElementById("myp").textContent = "Sphere Surface Area = " + area;
};

document.getElementById("sphereVol").onclick = function () {
  let r = Number(document.getElementById("sphereRadius").value);
  let vol = (4 / 3) * pi * r * r * r;
  document.getElementById("myp").textContent = "Sphere Volume = " + vol;
};

// 🧊 CUBE
document.getElementById("cubeArea").onclick = function () {
  let a = Number(document.getElementById("cubeSide").value);
  let area = 6 * a * a;
  document.getElementById("myp").textContent = "Cube Surface Area = " + area;
};

document.getElementById("cubeVol").onclick = function () {
  let a = Number(document.getElementById("cubeSide").value);
  let vol = a * a * a;
  document.getElementById("myp").textContent = "Cube Volume = " + vol;
};
// 🟦 SQUARE
document.getElementById("sqArea").onclick = function () {
  let a = Number(document.getElementById("sqSide").value);
  document.getElementById("myp").textContent = "Square Area = " + (a * a);
};

document.getElementById("sqPer").onclick = function () {
  let a = Number(document.getElementById("sqSide").value);
  document.getElementById("myp").textContent = "Square Perimeter = " + (4 * a);
};

// 🧊 CUBOID
document.getElementById("cubArea").onclick = function () {
  let l = Number(document.getElementById("cubLen").value);
  let w = Number(document.getElementById("cubWid").value);
  let h = Number(document.getElementById("cubHei").value);
  let area = 2 * (l*w + w*h + h*l);
  document.getElementById("myp").textContent = "Cuboid Surface Area = " + area;
};

document.getElementById("cubVol").onclick = function () {
  let l = Number(document.getElementById("cubLen").value);
  let w = Number(document.getElementById("cubWid").value);
  let h = Number(document.getElementById("cubHei").value);
  document.getElementById("myp").textContent = "Cuboid Volume = " + (l * w * h);
};

// 🟫 CYLINDER
document.getElementById("cylCSA").onclick = function () {
  let r = Number(document.getElementById("cylRad").value);
  let h = Number(document.getElementById("cylHei").value);
  document.getElementById("myp").textContent = "Cylinder CSA = " + (2 * pi * r * h);
};

document.getElementById("cylTSA").onclick = function () {
  let r = Number(document.getElementById("cylRad").value);
  let h = Number(document.getElementById("cylHei").value);
  document.getElementById("myp").textContent = "Cylinder TSA = " + (2 * pi * r * (r + h));
};

document.getElementById("cylVol").onclick = function () {
  let r = Number(document.getElementById("cylRad").value);
  let h = Number(document.getElementById("cylHei").value);
  document.getElementById("myp").textContent = "Cylinder Volume = " + (pi * r * r * h);
};

// 🔺 CONE
document.getElementById("coneCSA").onclick = function () {
  let r = Number(document.getElementById("coneRad").value);
  let l = Number(document.getElementById("coneSlant").value);
  document.getElementById("myp").textContent = "Cone CSA = " + (pi * r * l);
};

document.getElementById("coneTSA").onclick = function () {
  let r = Number(document.getElementById("coneRad").value);
  let l = Number(document.getElementById("coneSlant").value);
  document.getElementById("myp").textContent = "Cone TSA = " + (pi * r * (l + r));
};

document.getElementById("coneVol").onclick = function () {
  let r = Number(document.getElementById("coneRad").value);
  let h = Number(document.getElementById("coneHei").value);
  document.getElementById("myp").textContent = "Cone Volume = " + ((1/3) * pi * r * r * h);
};

// ⚪ HEMISPHERE
document.getElementById("hemiCSA").onclick = function () {
  let r = Number(document.getElementById("hemiRad").value);
  document.getElementById("myp").textContent = "Hemisphere CSA = " + (2 * pi * r * r);
};

document.getElementById("hemiTSA").onclick = function () {
  let r = Number(document.getElementById("hemiRad").value);
  document.getElementById("myp").textContent = "Hemisphere TSA = " + (3 * pi * r * r);
};

document.getElementById("hemiVol").onclick = function () {
  let r = Number(document.getElementById("hemiRad").value);
  document.getElementById("myp").textContent = "Hemisphere Volume = " + ((2/3) * pi * r * r * r);
};
