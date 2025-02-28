class Human{
    // Properties
    age = 13; //public
    #wt = 70;  //private :> When you want to make a variable private in JavaScript just use a # symbol before your variable
    ht = 180;

    // Behaviour

    walking(){
        console.log("I am Walking");
        console.log("My current weight is ", this.#wt); // If you want to print a private variable use this keyword along with # symbol
    }

    running(){
        console.log("I am running");
    }
}

let obj = new Human();
console.log(obj.age);
console.log(obj.wt);  //It gives us undefined because wt is private and we can not access a private member out side of a scope
obj.walking();