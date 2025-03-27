console.log("running in node env..")

// most prefer are let and const
let user = "smit" // scop level , cant access out of the scop and re-declare in same scop
const password = "1234" // can't re-assign value in any scop and can't re-declare
var email = "smit@gmail.com" // accessable in global scop and re-daclare in any scop also in same scop
city = "Ahmedabad"

//  below log accessable with var and global declaration ! 
console.log(globalThis.city) // node env for var globalThis object for access !
// console.log(window.city) // this is for browser object !
