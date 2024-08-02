console.log('my first code')
// variables
// without declaration
a=5;  
var a=5;
console.log(a)
{
   var a=34;
   console.log(a);
} 

// let b=34;
// let b=20;  not allowed

var c=10;
console.log(c);
{
    var c=60;
    console.log(c)
}
var c=100;
console.log(c);

// let
let b=1;
{
    let b=2;
    console.log(b)
}
console.log(b)

// const
// const a=10;
//       a=20 const will not allowed assign values again and again,
// let is used for this
 
const t=12;
{
     const t=67
    console.log(t)
}
console.log(t)

// type of data
let u=89;
console.log(typeof(u));
var g;
console.log(g)
var q='';
console.log(typeof(q))

// ARRAYS
var arr1=['pine','acacia','teak',100];
console.log(arr1)
// return second element of an array
console.log(arr1[1])
// PUSH ,,insert at the end of the array
arr1.push('rose')
console.log(arr1)
// POP ,remove last element of the array
arr1.pop();
console.log(arr1)

// OBJECTS

let person={
    fname:'yamika',
    age:70,
    location:'tvm'
}
console.log(person)
console.log(person.age)

// object
let person1=new Object();
person1.fname='yadu';
person1.age=29;
person1.location='kannur'
console.log(person1)

// array of objects

var arr2=[{fname:'kavya',
    age:23,
    location:'ksg'},
    {fname:'neenu',
     age:36,
     location:'malappuram'}] 
     
    console.log(arr2)
    console.log(arr2[1].age)