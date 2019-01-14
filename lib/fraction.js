class Fraction {
  constructor(str) {
    var arr;

    if ( validFractionString(str) ){
      arr = parse(str)
    } else {
      throw new Error(`"${str}" is not a valid fraction string.`)
    }

    //5/4 -> [5,4]
    this.raw = arr

    this.numerator = arr[0]
    this.denominator = arr[1]
  }

  reciprocal() {
  }

  improper(){
  }
}

function validFractionString(str){
  return /^[0-9_/]*$/g.exec(str)
}

//Parses fraction string into an improper fraction array
function parse(str) {
  var whole = str.split("_"),
      fraction,
      parsed;

  //Mixed number?
  if (whole.length === 1){
    parsed = whole[0].split("/").map((i) =>{ return parseInt(i) })

  } else {
    fraction = whole[1].split("/").map((i) =>{ return parseInt(i) })
    whole = parseInt(whole[0])

    //Make improper
    parsed = [ (whole * fraction[1]) + fraction[0], fraction[1] ]
  }

  console.log(parsed)
  return parsed
}

module.exports = Fraction;

