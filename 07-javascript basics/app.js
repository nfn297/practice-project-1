let age=32;
let greetingText="Hi I'm Max";
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
    title: 'Delevoper',
    place: 'New York',
    salary: 50000,
}

let totalAdultYears;

function calculateAdultYears(userAge) {
    let adultYears = userAge - 18;
    return adultYears;
};


totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age=45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);


let person = {
    name: 'Max', //property
    greet() { //Method
        console.log('Hello!');
    }
}

person.greet();