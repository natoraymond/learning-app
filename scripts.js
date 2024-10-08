// // scripts.js

// document.getElementById('customForm').addEventListener('submit', function(event) {
//     event.preventDefault();

// //     // Get form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const role = document.getElementById('role').value;

//     // Simple validation (more can be added)
//     if (!name || !email || !gender || !role) {
//         alert('Please fill out all fields.');
//         return;
//     } 
    
//     // Display form data
//     console.log('Form submitted with the following data:');
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Gender:', gender);
//     console.log('Role:', role);

//     // Here you can send the data to a server or process it further
//     alert('Form submitted successfully!');

// });





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Prompt message form

// alert('Hello world');

// let name = prompt('Please enter your name')
// console.log(name ?? 'You didnt have a name');

// let name = confirm('Pleas enter your name');
// if (name) {

//     let playerGame = prompt('please enter the rock');
//     if (playChioce) {
//         if (playOne === 'rock' || playOne === 'paper' || playOne === 'scisser' ) {

//             let computerChoice = Math.floor(Math.floor() * 3 + 1);
//         } else {
//             alert('You didnt enter rock, paper, scissor');
//         }

//     } else {
//         alert('I guess the user change mind')
//     }
// } else {
//     alert('Ok, maybe next time.');
// }

// Loops

// let myNumber = 0;
// while(myNumber < 50) {
//     console.log(myNumber);
//     myNumber++;
// }
// let myNumber = 50;
// do {
//     console.log(myNumber);
// } while(myNumber < 50);
// let name ='Dave';
// for(let i =0; i <= name.length; i++){
//     console.log(name.charAt(i));
// }

// function Declaration syntax:

// function sum(num1, num2) {
//     if (num2 === undefined) {
//         return num1 + num1;
//     }
//     return num1 + num2;
// }
// console.log(sum(5));


// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf('@'));
// }

// console.log(getUserNameFromEmail("work@gmail.com"));

    // ANONYMOUS FUNCTION

    // const getUserNameFromEmail = function(email) {
//     return email.slice(0, email.indexOf('@'));
// };
// console.log(getUserNameFromEmail('dav@domai.come'));

   // ARRAY FUNCTION 

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf('@'));
// };

// console.log(getUserNameFromEmail('John@dava.com'));

    //  TWO UPPERCASE METHODS

    // const toProperCase = (name) =>{
    //     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // };
    // console.log(toProperCase('stepmber'));

    // var, let and const

    // global scope
    var x = 1;
    // let y = 2;
    // const z = 3;
    
    // console.log(z);

    // local scope
    // {
    //     let y = 4;
    //     console.log(y);
    // }

        // function scope

        // function myfun(){
        //     const z = 3;
        //     console.log(z);

        // }
        // myfun()

        var x = 2;  // function scope
        let y = 4;  // block scope
        const z = 6;

        console.log(`global: ${x}`);
        console.log(`global: ${y}`);
        console.log(`global: ${z}`);    
        
        function myfunc() {
            console.log(`function: ${x}`);
            console.log(`function: ${y}`);
            console.log(`function: ${z}`);

            {
                console.log(`block: ${x}`);
                console.log(`block: ${y}`);
                console.log(`block: ${z}`);
            }
        }
        myfunc();

        // ARRAYS

        const myArray = [];
       
        myArray[0] = 'Dave';
        myArray[1] = 1000;
        myArray[2] = false;

        console.log(myArray);

        console.log(myArray.length);

        console.log(myArray[myArray.length -1]);

        console.log(myArray[1]);

        myArray.push('School');

        console.log(myArray);

        // myArray.pop();

        // console.log(myArray);

        const lastItem = myArray.pop()

        console.log(lastItem);

        myArray[0] = 'Dave';
        myArray[1] = 1000;
        myArray[2] = false;

        const firstItem = myArray.shift()

        console.log(firstItem);

        console.log(myArray);

        // To remove one element from the file

        myArray.splice(1, 1);

        console.log(myArray);

