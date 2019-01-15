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

    if (tmp < 0){
      this.numerator = this.numerator * -1
      this.denominator = this.denominator * -1
    }

    return this
  }

  improper(){
    return this
  }

  mixed(){
    var whole = Math.floor(Math.abs(this.numerator)/this.denominator)
    var numerator = this.numerator % this.denominator

    //Shift negative sign to whole number
    if(this.numerator < 0 && whole != 0){
      whole = whole * -1
      numerator = numerator * -1
    }

    if(numerator === 0 || this.numerator === 0){
      this.string = whole.toString()
    } else if (whole === 0 ){
      this.string = numerator + "/" + this.denominator
    } else {
      this.string = whole + "_" + numerator + "/" + this.denominator
    }

    if(isNaN(numerator)){
      this.string = NaN
    }

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
    this.raw = [this.numerator, this.denominator]

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
  return /^-?[0-9_/]*$/g.exec(str)
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

    //Make improper, compensate for negatives
    if (whole < 0){
      parsed = [ (whole * fraction[1]) - fraction[0], fraction[1] ]
    } else {
      parsed = [ (whole * fraction[1]) + fraction[0], fraction[1] ]
    }
  }

  return parsed
}

module.exports = Fraction;
