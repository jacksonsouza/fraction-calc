# fraction-calc

+ **Install** 
    + `chmod +x init.sh`
    + `./init.sh`
       + The script may ask for your password - the included command `npm link` must be run as root.
    + `set -f`
       + Please advise that `set -f` must be run in order to allow `*` multiplication operator to function properly - otherwise you must use `x` for multiplication.
+ **Run** `calc {fraction} {operator} {fraction}`
+ **Tests** 
    + `npm test` for entire suite
    + `jest tests/{filename}` for individual tests 

## Problem Statement
Write a command line program in the language of your choice that will take operations on fractions as an input and produce a fractional result.

+ Legal operators shall be `*, /, +, -` (multiply, divide, add, subtract)
+ Operands and operators shall be separated by one or more spaces
+ Mixed numbers will be represented by whole_numerator/denominator. e.g. "3\_1/4"
+ Improper fractions and whole numbers are also allowed as operands

## Examples

    calc 1/2 * 3_3/4
    = 1_7/8

    calc 2_3/8 + 9/8
    = 3_1/2

