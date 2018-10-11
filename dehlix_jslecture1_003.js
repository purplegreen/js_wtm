var Person = class {
    constructor(name, age){
        this.name = name
        this.age = age
        this.meetups = []
    }

    attend(meetup) {
        this.meetups.push(meetup)
        meetup.attendeese.push(this)
    }

}


var Meetup = class {
    constructor(name) {
        this.name = name
        this.attendeese = []
    }  
}

var wtmb = new Meetup('Women TechMakers Berlin')

var person1 = new Person('Susan', 22)
var person2 = new Person('Juno', 35)
var person3 = new Person('Stella', 34)


person1.attend(wtmb)
person2.attend(wtmb)
person3.attend(wtmb)

console.log(person1)
console.log(person2)
console.log(person3)