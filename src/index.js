const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    let arr2 = [];
    let temp = expr
      .slice(i, i + 10)
      .split("")
      .reverse()
      .join("");
    for (let j = 0; j < temp.length; j += 2) {
      let twoChars;

      twoChars = temp[j] + temp[j + 1];
      //   console.log(twoChars);
      if (twoChars === "01") {
        arr2.push(".");
      } else if (twoChars === "11") {
        arr2.push("-");
      } else if (twoChars === "00") {
        arr2.push("");
      } else {
        arr2 = [" "];
      }
      // console.log(arr2);
    }
    if(arr2[0] == " ") arr.push(" ");
    else arr.push(MORSE_TABLE[arr2.reverse().join("")]);
  }
  console.log(arr);
  return arr.join("");
}

console.log(decode("********"));

module.exports = {
  decode,
};
