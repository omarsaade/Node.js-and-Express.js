// how to run ? node event-loop.js

// heda module men el lebuv..w huwe khaso bi tashfir el
// password w huwe multiple thread
const crypto = require("crypto");
//juwe heda el module 3ana function esmo pbkdf2
// el function hayde hye li betshafer
const pbkdf2 = crypto.pbkdf2;
// deyman fi fare2 bel wa2et ben el multiple thread and
//single thread.
const start = Date.now();
pbkdf2("pass", "salt", 10000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});

pbkdf2("pass", "salt", 10000, 30, "sha512", () => {
  console.log("2: ", Date.now() - start);
});

// jaweb
//   2 : 13
//   1: 21

// kif bi shagel el while loop ?
// while (condition) {
// tick
// Event Loop
/*
is there any running process ?
is there any callbacks waiting ?

*/
// }

// bas ye5las bya3mul run lal code li hon maslan
// w bya3mul end
// end();

/*

NOde js shagale bi tari2et single thread
w hye asynchrounus . bas hal el nodejs hye 
asynchronous tameman ? 100 bel 100 ?
       No
       hye el node js single thread bas fi umur
  shagale fia hye multiple thread
  metel shu ?

node js hye runtime environment mabni 3al v8

NodeJs hye 3ibara 3an:

V8


library called " Libuv 
code tab3 libuv maktub bi c++
v8 shagal single thread and asynchronous
libuv sheggal multiple thread w huwe synchronous.


*/
