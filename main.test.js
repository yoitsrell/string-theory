const {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase,
} = require('./main.js')

describe('crazyCase', () => {
  it(`returns a string with every other letter uppercased`, () => {
    expect(crazyCase('hello')).toBe('hElLo')
    expect(crazyCase('you')).toBe('yOu')
  })
  
  it(`counts spaces as characters`, () => {
    expect(crazyCase('multiple words here')).toBe('mUlTiPlE WoRdS HeRe')
    expect(crazyCase('crazy stuff')).toBe('cRaZy sTuFf')
  })
  
  it(`correctly lowercases parts of an uppercased string`, () => {
    expect(crazyCase('YELLING')).toBe('yElLiNg')
    expect(crazyCase('PERPETUALLY')).toBe('pErPeTuAlLy')
  })
})

describe('exclaim', () => {
  it(`returns a sentence with every question mark changed to an exclamation point`, () => {
    expect(exclaim('I am the best?')).toBe('I am the best!')
    expect(exclaim('What are you doing? Are you a fool?')).toBe('What are you doing! Are you a fool!')
  })

  it(`returns a sentence with every period changed to an exclamation point`, () => {
    expect(exclaim('I am.')).toBe('I am!')
    expect(exclaim('This is fine.')).toBe('This is fine!')
  })
})

describe('ciEmailify', () => {
  it(`creates an email from a two-part name`, () => {
    expect(ciEmailify('colin jaffe')).toBe('colin.jaffe@codeimmersives.com')
    expect(ciEmailify('mesuara kaleziq')).toBe('mesuara.kaleziq@codeimmersives.com')
  })
  
  it(`handles uppercased names`, () => {
    expect(ciEmailify('Colin jaffe')).toBe('colin.jaffe@codeimmersives.com')
    expect(ciEmailify('mesuara Kaleziq')).toBe('mesuara.kaleziq@codeimmersives.com')
    expect(ciEmailify('Anthony DeRosa')).toBe('anthony.derosa@codeimmersives.com')
  })
})

describe('reverse', () => {
  it(`reverses the string given`, () => {
    expect(reverse('colin')).toBe('niloc')
    expect(reverse('mesuara')).toBe('arausem')
  })
})

describe('crazyCase2ReturnOfCrazyCase', () => {
  it(`returns a string with every other letter uppercased`, () => {
    expect(crazyCase2ReturnOfCrazyCase('hello')).toBe('hElLo')
    expect(crazyCase2ReturnOfCrazyCase('you')).toBe('yOu')
  })
  
  it(`does NOT count spaces as characters`, () => {
    expect(crazyCase2ReturnOfCrazyCase('multiple words here')).toBe('mUlTiPlE wOrDs HeRe')
    expect(crazyCase2ReturnOfCrazyCase('crazy stuff')).toBe('cRaZy StUfF')
  })
  
  it(`correctly lowercases parts of an uppercased string`, () => {
    expect(crazyCase2ReturnOfCrazyCase('YELLING')).toBe('yElLiNg')
    expect(crazyCase2ReturnOfCrazyCase('PERPETUALLY')).toBe('pErPeTuAlLy')
  })
})


describe('titleCase', () => {
  it(`returns a transformed version of the given string where every word starts with a capital letter`, () =>{
    expect(titleCase('The matrix')).toBe('The Matrix');
    expect(titleCase('The matrix reloaded')).toBe('The Matrix Reloaded');
  })
  
  it(`handles the first word of a title`, () => {
    expect(titleCase('speed')).toBe('Speed');
    expect(titleCase('return of the king')).toBe('Return Of The King')
  })

  it(`lowercases any letter that is not the first letter of a word`, () => {
    expect(titleCase('sPeEd')).toBe('Speed');
    expect(titleCase('cOde immerSives')).toBe('Code Immersives');
  })
})


describe('onlyVowels', () => {
  it(`returns only the vowels from a word`, () => {
    expect(onlyVowels('Colin Jaffe')).toBe('oiae');
    expect(onlyVowels('Mesuara Kaleziq')).toBe('euaaaei');
  })

  it(`does not count "y" as a vowel`, () => {
    expect(onlyVowels('quickly')).toBe('ui');
    expect(onlyVowels('cowardly')).toBe('oa');
  })

  it(`handles uppercased vowels`, () => {
    expect(onlyVowels('Anthony DeRosa')).toBe('Aoeoa');
    expect(onlyVowels('New Orleans')).toBe('eOea');
  })
})


describe('crazyCase3SonOfCrazyCase', () => {
  it(`returns a string with every other letter uppercased`, () => {
    expect(crazyCase3SonOfCrazyCase('hello')).toBe('hElLo')
    expect(crazyCase3SonOfCrazyCase('you')).toBe('yOu')
  })
  
  it(`does NOT count spaces as characters for the purposes of crazifying`, () => {
    expect(crazyCase3SonOfCrazyCase('multiple words here')).toBe('mUlTiPlE wOrDs HeRe')
    expect(crazyCase3SonOfCrazyCase('crazy stuff')).toBe('cRaZy StUfF')
  })
  
  it(`correctly lowercases parts of an uppercased string`, () => {
    expect(crazyCase3SonOfCrazyCase('YELLING')).toBe('yElLiNg')
    expect(crazyCase3SonOfCrazyCase('PERPETUALLY')).toBe('pErPeTuAlLy')
  })
  
  it(`does NOT count punctuation as characters for the purposes of crazifying`, () => {
    expect(crazyCase3SonOfCrazyCase('hey, you')).toBe('hEy, YoU')
    expect(crazyCase3SonOfCrazyCase('hello! you look...okay, I guess.')).toBe('hElLo! YoU lOoK...oKaY, i GuEsS.')
  })
  
  it(`does NOT count numbers as characters for the purposes of crazifying`, () => {
    expect(crazyCase3SonOfCrazyCase('I am 9 years old.')).toBe('i Am 9 YeArS oLd.')
    expect(crazyCase3SonOfCrazyCase('Gimme 5 bucks.')).toBe('gImMe 5 BuCkS.')
    expect(crazyCase3SonOfCrazyCase('Johnny5 is alive.')).toBe('jOhNnY5 iS aLiVe.')
  })
  
  it(`does NOT count symbols as characters`, () => {
    expect(crazyCase3SonOfCrazyCase('well, @#($ you')).toBe('wElL, @#($ yOu')
    expect(crazyCase3SonOfCrazyCase('Gimme $5 now.')).toBe('gImMe $5 NoW.')
  })
})