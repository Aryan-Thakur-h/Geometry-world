const pi = 3.14;
const result = document.getElementById("myp");

// DROPDOWN FILTER
const select = document.getElementById("shapeSelect");
const sections = document.querySelectorAll(".section");

select.onchange = () => {
  sections.forEach(sec => {
    sec.style.display =
      select.value === "all" || sec.classList.contains(select.value)
        ? "block"
        : "none";
  });
};

// UTILITY
function show(text) {
  result.textContent = text;
}

// CIRCLE
circleArea.onclick = () => {
  let r = +circleRadius.value;
  show("Circle Area = " + (pi * r * r).toFixed(2));
};

circleCircum.onclick = () => {
  let r = +circleRadius.value;
  show("Circle Circumference = " + (2 * pi * r).toFixed(2));
};

// RECTANGLE
rectArea.onclick = () => {
  show("Rectangle Area = " + (+rectLen.value * +rectWid.value));
};

rectPer.onclick = () => {
  show("Rectangle Perimeter = " + (2 * (+rectLen.value + +rectWid.value)));
};

// TRIANGLE
triArea.onclick = () => {
  show("Triangle Area = " + (0.5 * triBase.value * triHeight.value));
};

triPer.onclick = () => {
  show("Triangle Perimeter = " + (+triA.value + +triB.value + +triC.value));
};

// SPHERE
sphereArea.onclick = () => {
  show("Sphere Surface Area = " + (4 * pi * sphereRadius.value ** 2));
};

sphereVol.onclick = () => {
  show("Sphere Volume = " + ((4/3) * pi * sphereRadius.value ** 3).toFixed(2));
};

// CUBE
cubeArea.onclick = () => show("Cube Surface Area = " + (6 * cubeSide.value ** 2));
cubeVol.onclick = () => show("Cube Volume = " + (cubeSide.value ** 3));

// SQUARE
sqArea.onclick = () => show("Square Area = " + (sqSide.value ** 2));
sqPer.onclick = () => show("Square Perimeter = " + (4 * sqSide.value));

// CUBOID
cubArea.onclick = () => {
  show("Cuboid Surface Area = " +
    2 * (cubLen.value*cubWid.value + cubWid.value*cubHei.value + cubHei.value*cubLen.value));
};

cubVol.onclick = () => show("Cuboid Volume = " + (cubLen.value*cubWid.value*cubHei.value));

// CYLINDER
cylCSA.onclick = () => show("Cylinder CSA = " + (2*pi*cylRad.value*cylHei.value));
cylTSA.onclick = () => show("Cylinder TSA = " + (2*pi*cylRad.value*(+cylRad.value + +cylHei.value)));
cylVol.onclick = () => show("Cylinder Volume = " + (pi*cylRad.value**2*cylHei.value));

// CONE
coneCSA.onclick = () => show("Cone CSA = " + (pi*coneRad.value*coneSlant.value));
coneTSA.onclick = () => show("Cone TSA = " + (pi*coneRad.value*(+coneRad.value + +coneSlant.value)));
coneVol.onclick = () => show("Cone Volume = " + ((1/3)*pi*coneRad.value**2*coneHei.value).toFixed(2));

// HEMISPHERE
hemiCSA.onclick = () => show("Hemisphere CSA = " + (2*pi*hemiRad.value**2));
hemiTSA.onclick = () => show("Hemisphere TSA = " + (3*pi*hemiRad.value**2));
hemiVol.onclick = () => show("Hemisphere Volume = " + ((2/3)*pi*hemiRad.value**3).toFixed(2));
