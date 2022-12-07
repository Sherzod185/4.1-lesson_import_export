export function taqqoslash(){
  let a=100000
let b=7000
let c=200
  if(a<b && b<c) return `${a}<${b}<${c}`
  else if(a<c && c<b) return `${a}<${c}<${b}`
  else if(b<c && c<a) return `${b}<${c}<${a}`
  else if(b<a && a<c) return `${b}<${a}<${c}`
  else if(c<b && b<a) return `${c}<${b}<${a}`
  else if(c<a && a<b) return `${c}<${a}<${b}`
  else return "xatolik bor"
}