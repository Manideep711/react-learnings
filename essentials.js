//arrays

var c=[1,2,3,"a",function(){

}]
//in js arrays can contain any data type

var a=[1,2,3,4,5]
var b=a
//referencing passed for actual copy use spread operator
b.pop()
console.log(b)
console.log(a)

//in react there is a term called state which cant be mutated that is cant be changed directly
var state=[1,2,3,4,5]
state.pop()
//invalid cant be performed in react for state
//how to update state in immutable way
var copy=[...state]
copy.pop()
state=copy      //this can be done
//same for objects
var state={name:"manideep",age:23}
var copy={...copy}
copy.age=28;
state=copy
console.log(state)
//destructuring
var obj={name:"fms",age:22}
//when we want to access age we can use obj.age but it gets complex if it contains complex objects and (it voilates dry principle)instead we can store it in a variable this can be done using destructuring
// const {name,age}=obj  //note here the name and age should be same as object attributes  this is object destructuring
// const obj = { x: 10, y: 20 };
// const { x: a, y: b } = obj;
// console.log(a, b); // Output: 10 20
//to map different variable names
// console.log(name)
var main={
    socials:{
        instagram:{
            name:"nm",
            age:16
        },
        snapchat:{
            name:"nm",
            age:16
        }
    }
}

const {name,age}=main.socials.instagram    //we should traverse to the object the atttribute contain in
console.log(age)
//array destructuring
const arr=[1,2,function(){},3];
const [x,y,,z]=arr   //here it takes index wise to skip that index we will use , and the variable name can be our choice rather than object
console.log(x,y,z)

//export and imports
// function cart(){

// }
// export default cart    //one
// export function abcd(){
//                                  //multiple 
// }
// import cart from "directory"
// import {a,b} from   ''
 //arrow functions

//  function haha(){
//                                  //normal function
//  }
 const haha=()=>{
                                      //arrow function,when there is only one parameter there is no need for () and to not to use return statements i.e implict return dont use { }
 } 
 const man=val=>console.log(val)
 man(2)
 //map filter
 //map and filter works both on arrays which performs something on array and generates new array
 //map is used when we want to something on each and every elemen

 const mand=[1,2,3,4,5,6]
 const answ=mand.map(elem=>elem*2)   //return should be must here to get new array
 console.log(answ)

 const sa=[11,1,2,3,6,7,8,9]
 //add 5 if it is greater than 6
 const ma=sa.map(num=>num>5?num+5:num)
console.log(ma)
//filter makes the new arr values<than the main array

const ra=sa.filter(nums=>nums>6)   //onst ra=sa.filter(nums=>True)
console.log(ra)