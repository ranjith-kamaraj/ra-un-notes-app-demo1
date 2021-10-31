// const square = function (x){
//     return x * x;
// };

// const square = (x) => {
// return x * x;
// }

// const square = (x) => x * x;

// console.log(square(4));

//Arrow function won't bind their own values
const event = {
    name: 'Birthday Event',
    guestList: ['Rana', 'Ram', 'Raj'],
    //this we can use, data have bind
   

    //Arrow fns, it wont work. It wont bind the value in same object. this keyword needs to check
    // printEventName : () => {
    //     console.log('2. Event Name: ' + this.name)
    // },

    printEventName () {
        console.log('Event Name: ' + this.name);

        // this.guestList.forEach((guest) => {
        //     console.log(guest + ' is attending the ' + this.name)
        // })

        this.guestList.forEach(function(guest) {
            console.log(guest + ' is attending the ' + this.name)
        })
    }

}

event.printEventName();