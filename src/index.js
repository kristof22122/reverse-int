module.exports = function reverse (n) {
    n = Math.abs(n)
    let a
    let b = ''
    let c
    a = String(n)
    for (let i of a){
      b = i + b
    } 
    c = Number(b)  
    return c  
}
