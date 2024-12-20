import * as fs from "fs";
const data_u = fs.readFileSync("input.txt");

let input = data_u.toString().split("\r\n");
let index;
let sts = true;
let sum = [];
let x = 0;

for (let i = 0; i < input.length; i++) {
  let a = input[i].split("");
  input[i] = a;
  if (a.includes("^")) {
    index = [i, a.indexOf("^")];
  }
}

let i = index[0];
let j = index[1];
let imax = input.length - 1;
let jmax = input[0].length - 1;
let iup = true;
let idown = false;
let jright = false;
let jleft = false;
input[i][j] = ".";

while (sts) {
  if (iup && input[i - 1][j] == ".") {
    i--;
    if (!sum.includes(`${i},${j}`)) {
      sum.push(`${i},${j}`);
    }
  } else if (iup && input[i - 1][j] == "#") {
    iup = false;
    jright = true;
  }

  if (jright && input[i][j + 1] == ".") {
    j++;
    if (!sum.includes(`${i},${j}`)) {
      sum.push(`${i},${j}`);
    }
  } else if (jright && input[i][j + 1] == "#") {
    jright = false;
    idown = true;
  }

  if (idown && input[i + 1][j] == ".") {
    i++;
    if (!sum.includes(`${i},${j}`)) {
      sum.push(`${i},${j}`);
    }
  } else if (idown && input[i + 1][j] == "#") {
    idown = false;
    jleft = true;
  }

  if (jleft && input[i][j - 1] == ".") {
    j--;
    if (!sum.includes(`${i},${j}`)) {
      sum.push(`${i},${j}`);
    }
  } else if (jleft && input[i][j - 1] == "#") {
    jleft = false;
    iup = true;
  }

  if ((i == imax || i == 0 || j == 0 || j == jmax) && input[i][j] == ".") {
    if (!sum.includes(`${i},${j}`)) {
      sum.push(`${i},${j}`);
    }
    sts = false;
    break;
  }
}
console.log(sum.length);
