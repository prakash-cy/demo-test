// declareing a single variable
var name;
// declaring a multiple variable
var name, work, religion;
// initializing a variable
var name = 'shivaji';
work= 'shivaji maharaj';
console.log(work);
var num = 3;
console.log(num);
num = "shivananda";
console.log(num);
var sum = 3+6+9;
console.log(sum);
//let variable
let x;
console.log(x);
let job ='sdet';
let a=3,b=6,c=9;
console.log(a*b*c);
let z= 'xy';
z='yx';
console.log(z);
//const variable
 const indian='aryan';
 //indian='not aryan';
 console.log(indian);
// global var and local var
var global ='prakash';
function fun1()
{
    var local=' desi';
    console.log(local);
    console.log(global);
}
fun1();
//global vs local
let globallet = 'this is globallet';
function fun()
{
    let globallet = 'this is locallet';
    console.log(globallet);
}
fun();
//global and local both have same name 
let globallet1 ='hi i am global';
function fun2()
{
    let globallet1 ='hi i am local';
    console.log(window.globallet1);
    
}
fun2();

