//
// Object destructuring
//
// const person={
//     // name:"Andrew",
//     age:27,
//     location:{
//         city:"Philadelphia",
//         temp:88
//     }
// }
// we can use defalt value and give some readable names to values
// const{name:firstName='Anonymouse',age}=person;
// console.log(`${firstName} is ${age}`);

// const{city,temp:temperature}=person.location;
// console.log(`It  is ${temperature} in ${city}.`);


// const book={
//     title:"Ego is the Enemy",
//     autor:"Ryan Holiday",
//     publisher:{
//         // name:"Penguin"
//     }
// }
// const{name:publisherName="Self-Published"}=book.publisher;
// console.log(publisherName);


//
// Array destructuring
//
// const address=['1299 S Jupiter Street','Philadelphia','Pennsilvania','19147'];
// const address=[];

// in case of array destructuring we are giving names to arrays index
// street is 0,sity is 1, state is 2,...

// const [street,sity,state,zip]=address;

// We can ommit the indexes that cames first and we dont need!

// const[,sity,state]=address;

//We can give default value
// const[,,state='New York']=address;

// console.log(`You are in ${sity} ${state}`);
// console.log(`You are in  ${state}`);


const item=['Coffee (hot)','$2.00','$2.50','$2.75'];

const[itemName,,mediumPrice]=item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
