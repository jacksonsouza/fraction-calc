class Fraction {
  constructor(str) {
    var arr;

    str = str.toString()

    if ( validFractionString(str) ){
      arr = parse(str)
    } else {
      throw new Error(`"${str}" is not a valid fraction string.`)
    }

    //5/4 -> [5,4]
    this.raw = arr
    this.string = str

    this.numerator = arr[0]
    this.denominator = arr[1]

  }

  reciprocal() {
    var tmp = this.numerator
    this.numerator = this.denominator
    this.denominator = tmp

    return this
  }

  improper(){
    return this
  }

  mixed(){
    var whole = Math.floor(this.numerator/this.denominator)
    var numerator = this.numerator % this.denominator

    this.string = whole + "_" + numerator + "/" + this.denominator

    return this
  }

  simplify(){
    var gcf = this.gcf(this.numerator, this.denominator)

    this.raw = [this.numerator/gcf, this.denominator/gcf]
    this.numerator = this.raw[0]
    this.denominator = this.raw[1]

    return this
  }

  denominationOf(x){
    this.numerator = (x / this.denominator) * this.numerator
    this.denominator = x

    return this
  }

  gcf(a, b) {
    if (b) {
      return this.gcf(b, a % b);
    } else {
      return Math.abs(a);
    }
  }

  lcm(a, b) {
    return (a * b) / this.gcf(a,b);
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

  //Mixed or whole number?
  if (whole.length === 1){
    parsed = whole[0].split("/").map((i) =>{ return parseInt(i) })

    if (parsed.length === 1){
      parsed = [ parsed[0], 1 ]
    }
  } else {
    fraction = whole[1].split("/").map((i) =>{ return parseInt(i) })
    whole = parseInt(whole[0])

    //Make improper
    parsed = [ (whole * fraction[1]) + fraction[0], fraction[1] ]
  }

  return parsed
}

module.exports = Fraction;
