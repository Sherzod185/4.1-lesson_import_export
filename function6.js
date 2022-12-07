export function DigitCountSum() {
let num=55445545454545
let sum=0
num=String(num)
for( let i=0; i<num.length; i++){
sum+=Number(num[i])
}
return `(6) Raqamlar soni ${num.length} ga yig'indisi ${sum} ga teng`
}
