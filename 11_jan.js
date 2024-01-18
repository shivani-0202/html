// let arr = [44,23,"shiv","shivani",true, false]

// let Farr = arr.filter(element => console.log(`value: ${element} type: ${typeof element}`))

// arr.forEach(Element => console.log(`${Element} type:${typeof Element}`))


// 3rd way with the help of function

//  var arr1 = [ 1,2,3,4,"string", "hello", true, false]

// function getString (arr1){
//     let result = []

//     for(let item of arr1){
//         if (typeof item == 'string')
//         {
//             result.push(item)
//         }
//     }
//     return result
// }

// console.log(getString(arr1))


// function getNumber (arr1){
//     let result1 = []

//     for(let item of arr1){
//         if(typeof item == 'number'){
//             result1.push(item)
//         }
//     }
//     return result1
// }

// console.log(getNumber(arr1))



// 4th way



// var arr1 = [ 1,2,3,4,"string", "hello", true, false]


// function getString (item){
//     return typeof item ==='string'
// }


// function getNumber (item){
//     return typeof item ==='number'
// }


// function getBool (item){
//     return typeof item ==='boolean'
// }

// function get (arr1, fn){
//     let result = []

//     for(let item of arr1){
//         if (fn (item)){
//             result.push(item)
//         }
//     }

//     return result
// }

// console.log(get(arr1,getString))
// console.log(get(arr1,getNumber))
// console.log(get(arr1,getBool))


// var x = 10; 
// function foo() 
// { console.log(x);
//      var x = 20; } 
// foo();


// console.log(3 + '3' - 1);

// var numbers = [1, 2, 3, 4, 5]; 
// var doubled = numbers.forEach(function(num) { return num * 2; }); console.log(doubled);

// var numbers = [1, 2, 3, 4, 5]; var sum = 0; numbers.forEach(function(num) { sum += num; }); console.log(sum);
// console.log(0.1 + 0.2);

// // var x = 10; var y = '5'; console.log(x + y);
// var x = 'abc';
//   console.log(x[0]);
//  x[0] = 'z'; 
// console.log(x);



// const numbers = [1, 2, 3, 4, 5];
//   const doubled = numbers.map(num => num * 2); console.log(doubled);



// let obj1 = {
//     id : 1,
//     age : 22,
//     rollNo : 12,

//     print :function (){
//         console.log(this.age)
//     }
// }

// console.log(obj1.age)
// console.log(obj1.toString)
//  console.log(obj1.name)





let todo = {
    title: 'Buy groceries',
    desc: function() {
      return `You have to ${this.title}`;
    }
  };
  
  console.log(todo.title); // Buy groceries
  console.log(todo.desc()); // You have to Buy groceries
  
  console.log(todo.toString()); // [object Object]
  