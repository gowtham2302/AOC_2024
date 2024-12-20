import * as fs from "fs";
const data_u = fs.readFileSync("input.txt");

let input = data_u.toString().split("\r\n");
let arr1 = [];
let arr2 = [];

arr1 = input[0].split(" ");
arr2 = input.slice(2);

for (let i = 0; i < arr2.length; i++) {
  let str = arr2[i];
  let str_len = str.length;
  let sts = true;
  while (sts) {}
}
