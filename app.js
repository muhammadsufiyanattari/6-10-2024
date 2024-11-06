// let mainDiv=document.getElementById('main')

// var itemsArray = [
//   { name: "juice", price: 50, quantity: 3 },
//   { name: "cookie", price: 30, quantity: 9 },
//   { name: "shirt", price: 880, quantity: 1 },
//   { name: "pen", price: 100, quantity: 2 },
// ];
// mainDiv.innerHTML=` <table border="1px">
//       <th colspan="4">object Price count</th>
//       <tr>
//         <td>Product</td>
//         <td>Amount</td>
//         <td>Quantity</td>
//         <td>Total Amount</td>
//       </tr>
//       <tr>
//         <td>${itemsArray[0].name}</td>
//         <td>${itemsArray[0].price}</td>
//         <td>${itemsArray[0].quantity}</td>
//         <td>${itemsArray[0].price*itemsArray[0].quantity}</td>
//       </tr>
//       <tr>
//         <td>${itemsArray[1].name}</td>
//         <td>${itemsArray[1].price}</td>
//         <td>${itemsArray[1].quantity}</td>
//         <td>${itemsArray[1].price*itemsArray[1].quantity}</td>
//       </tr>
//       <tr>
//         <td>${itemsArray[2].name}</td>
//         <td>${itemsArray[2].price}</td>
//         <td>${itemsArray[2].quantity}</td>
//         <td>${itemsArray[2].price*itemsArray[2].quantity}</td>
//       </tr>
//       <tr>
//         <td>${itemsArray[3].name}</td>
//         <td>${itemsArray[3].price}</td>
//         <td>${itemsArray[3].quantity}</td>
//         <td>${itemsArray[3].price*itemsArray[3].quantity}</td>
//       </tr>
//        <tr>
//         <td colspan="3">All products total</td>
//         <td >${(itemsArray[0].price*itemsArray[0].quantity)+(itemsArray[1].price*itemsArray[1].quantity)+(itemsArray[2].price*itemsArray[2].quantity)+(itemsArray[3].price*itemsArray[3].quantity)}</td>

//       </tr>

//     </table>`

// get current date fuctions

// function myDate() {
//   let date =new Date()
//   return date

// }

// console.log(myDate());

// get full Name fuction

// line break karne ke liye hum \n use karen ge ye line break kar de ga

// function fullName(a,b='last name') {

//   let firstName=a
//   let lastName=b
//   return `First Name: ${firstName} \n Last Name: ${lastName}`

// }

// console.log(fullName('muhammad','sufiyan'));

// sum nembers

// function sum(a,b=0) {
//   return   `Sum value = ${a+b}`
// }
// console.log(sum(2,4));


// Calculater


// function calculator(a, c = "+", b) {
//   let num1 = Number(a);
//   let num2 = Number(b);
//   let opearator = c;
//   if (opearator == "+") {
//     return num1 + num2;
//   } else if (opearator == "-") {
//     return num1 - num2;
//   } else if (opearator == "*") {
//     return num1 * num2;
//   } else if (opearator == "/") {
//     return num1 / num2;
//   } else if (opearator == "%") {
//     return num1 % num2;
//   } else {
//     return `write operater`;
//   }
// }

// // num1 num2 opearator

// console.log(calculator(2, "-" ,4));


// function sq(num) {
//   return Math.floor (Math.sqrt(num))
// }


// console.log(sq(11));




// let form=document.getElementById('form')
// let userName=document.getElementById('userName').value
// let male=document.getElementById('male').value
// let female=document.getElementById('female').value
// let other=document.getElementById('others').value



// console.log(userName,male,female,other);

// `Lorem ipsum dolor sit amet


for (let i = 5; i >=1 ; i--) {
 for (let j = i; j >=1 ; j--) {
  document.write(' ',i);
 }
 document.write(  "<br>")

}

for (let i = 1; i <=5 ; i++) {
  for (let j = i; j <=5 ; j++) {
   document.write(' ',i);
  }
  document.write(  "<br>")
 
 }
 
 for (let i = 1; i <=5 ; i++) {
  for (let j = i; j <=5 ; j++) {
   document.write(' ',j ,'*');
  }
  document.write(  "<br>")
 
 }
 for (let i = 5; i >=1 ; i--) {
  for (let j = i; j >=1 ; j--) {
   document.write(" ",j);
  }
  document.write(  "<br>")
 
 }
 for (let i = 1; i <=5 ; i++) {
  for (let j = 1; j <=i ; j++) {
   document.write(" ",i);
  }
  document.write(  "<br>")
 
 }