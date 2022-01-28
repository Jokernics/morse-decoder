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
    sumWords = ''
    for (let i = 0; i < expr.length; i += 10) {
        
        let curentWord = expr.slice(i, i+10)
        if (curentWord === '**********') {
            sumWords += ' '
            continue
        }

        let wordWithoutZero 

        for (let j = 0; j < curentWord.length; j++) {
            if (curentWord[j] !== '0') {
                wordWithoutZero = curentWord.slice(j) 
                break
            }
        }
        
        const glosary = {'10': '.', '11': '-'}
        let wordToMorseDecoding = ''
        for (let f = 0; f < wordWithoutZero.length; f += 2) {
            wordToMorseDecoding += glosary[wordWithoutZero.slice(f, f+2)]
        }

        sumWords += MORSE_TABLE[wordToMorseDecoding]
        
    }
    return sumWords
}

module.exports = {
    decode
}