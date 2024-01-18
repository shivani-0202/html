// console.log("hello there");

//         var a = 5;
//         a=55;
//         console.log(a);

//         let l = 45;
        

//         const n = 66;
//         console.log(n)


// let firstName = "shivani";
// let lastName = "shivi";

// console.log(firstName + " " + lastName)

// console.log(`fullName: ${firstName}  ${lastName}`);


// let value = 100;
// let to = value==100;
// console.log(to)


// let user=null
// console.log(user)

// if(0){
//     console.log(user)
// }

// else{
//     console.log('hey')
// }

// let isBool = true
// isBool?console.log ('hello'): console.log('hii')

// let arr=[1,2,3, 'shivi', true]

// console.log(arr[1])


// function sum( perameter hote hai){
//     console.log('shivani')
// }
// sum(argument hota h) // 


// const add = () => {
//     console.log('SM')
// }
// add()



// let user = null
// console.log(user)

// if(1){
//     console.log("hello")
// }

// else {
//     console.log("hii")
// }


// let isBool = false;
// isBool?

// console.log("shivani"): console.log("hii")

// let arr=[1,2,3,'one',true]
// console.log("hello")

// function sum(){
//     console.log("shivi")
// }

// sum()

// const add = () => {
//     console.log("arrow")
// }
// add()

// let arr=[1,2,3,4,5,6,7,8]

// let fillter1 = arr.filter((a,b,c)=>{
//     return a>3
// })

// console.log(fillter1)


// let newA =  arr.forEach((a,b,c) =>{
//     console.log(a*2)
// })


// let newB = arr.map((a,b,c) =>{
//     console.log(a, b, c)
//         return a>3
// })

// for (let i in arr){
//     console.log(i)
// }

// for(let i of arr){
//     console.log(i)
// }


// let arr = [1, 2, 3, 4, 5]
// function sum (){
    

//     return arr
// }

// sum()


// function sum1 (){
//     let total = [1, 2, 3, 4, 5].forEach
//     console.log(arr+sum)
// }
// sum1()

// let arr = [1,2,3,4,5,6]

// let num = arr.reduce((a,b,c,d)=> {
//     return a+b
// })

// console.log(num)


//*Object = key + value ka pair

// let student = {
//     name:'shivani',
//     age: 22,
//     isPass: true
// }

// student.name ='shivi'

// console.log(student)


//* function ke ander object

// function add(a){
//     console.log(a.name)
// }


// let student = {
    
//     name:'shivani',
//     age: 22,
//     isPass: true
// }

// add (student)


//this keyword

//* object ke ander function

// let obj = {
//     user:'modi',
//     lastName:'ji',
//     sum:function(){
//         console.log(this.user + " "+ this.lastName)
//     }
// }

// obj.sum()


//*array of Object




// let arr = [{id:1, name:'shivi'} , 
//             {id:2, name:'shivani'}]

//             arr.map((k)=>{
//                 console.log(k.id)
//             })

//             console.log(arr.id)
                


// JSNO()

// let arr = [1,2,3,4,5,6,7,8]
// // console.log(arr[0].id)
// // arr.push(10)
// // arr.pop()

// // arr.unshift(0)
// arr.shift(0)


// console.log(arr)



// function outer(){
//     let num = 5

//     inner()

//     function inner (){
//         console.log(num)
//     }
// }

// outer()


//  Hoisting

// var b 
// (console.log)
// b=5


// console.log(b)
// let b

// b = 5;




// normal fun me koi issue nhi hoga
// outer()
// function outer (){
//     console.log('hello')
// }




// add()
// let add=()=>{
//     console.log('hey there')
// }


// let b = 5;
// {
//     let b = 10;
//     console.log(b)
// }

// console.log(b)


// var d = 15;

// {
//     var d = 20;
//     console.log(d)
// }

// console.log(d)



// Higher order function



function outer (){


    console.log("outer")
    function inner(){

        console.log("inner")

    }
        return inner

}

outer()

let a = outer()
// console.log(a)
a()



// que : 

// let arr = [1,2,3,4,5, true, false, 'hello', 'hiiii']

// value fillter   - boolean number string ko fillter krna hai