const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrExpr = expr.split('')
  let updateArrExpr = []
  let morseArr = []
  let res = []

  for(let i = 0; i < expr.length; i++) {
    updateArrExpr.push(arrExpr.slice(0, 10))
    arrExpr = arrExpr.splice(10, arrExpr.length)
  }

  for(let i = 0; i < updateArrExpr.length; i++) {
    for(let j = 0; j < updateArrExpr[i].length; j++) {
      if(updateArrExpr[i][j] === '0') {
        updateArrExpr[i].shift()
        j--
      }
      if(updateArrExpr[i][j] === '1' && updateArrExpr[i][j + 1] === '0') {
        morseArr.push('.')
        updateArrExpr[i].shift()
        updateArrExpr[i].shift()
        j -= 2

      }
      if(updateArrExpr[i][j] === '1' && updateArrExpr[i][j + 1] === '1') {
        morseArr.push('-')
        updateArrExpr[i].shift()
        updateArrExpr[i].shift()
        j -= 2
      }
      if(updateArrExpr[i][j] === '*') {
        morseArr.push(' ')
        updateArrExpr[i] = []
      }
    }
    morseArr.push(';')
  }

  morseArr = morseArr.join('').split(';')
  morseArr.pop()


  morseArr.forEach(el => {
    if(el === ' ') {
      res.push(' ')
    }
    for (let key in MORSE_TABLE) {
      if(el === key) {
        res.push(MORSE_TABLE[key])
      }
    }
  })

  return res.join('')
}

module.exports = {
    decode
}