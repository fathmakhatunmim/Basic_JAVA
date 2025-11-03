//variable scope = where a variable is recognized and accessible (local vs global)
//local
function function1(){
    let x = 1;
    console.log(x);
}
function function2(){
    let x = 2;
    console.log(x);
}
function1();
function2();


//global

let y= 10;
function function3(){
    console.log(y);
}
function3();