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
  " ": " ",
};

function decode(expr) {
  let fullString = "";
  for (let i = 0; i < expr.length; i += 10) {
    let oneSymbol = "";
    if (expr[i] === "*") {
      oneSymbol = " ";
    } else {
      var tenChars = +expr.slice(i, i + 10);
      while (tenChars > 0) {
        let twoChars = tenChars % 100;
        if (twoChars === 10) {
          oneSymbol = "." + oneSymbol;
        } else if (twoChars === 11) {
          oneSymbol = "-" + oneSymbol;
        } else if (twoChars === 0) {
          tenChars = 0;
        }
        tenChars = Math.floor(tenChars / 100);
      }
    }
    fullString += MORSE_TABLE[oneSymbol];
  }
  return fullString;
}

console.log(decode("**********00001110"));

module.exports = {
  decode,
};
