


  person7 = {
  name: 'Deb',
  age: 28
}

var person8 = 'Lilly'

person8 = {
    name: 'Lilly',
    age: 32
}

add(person7.age, person8.age)

person9 = {
    name: 'Dana'
}

person9 = {
    age: 41
}


add(person7.age, person9.age)


Person = class {
        constructor(name, age){
            this.name = name
            this.age = age
            this.interest = []
            this.friends = []
        }
        sayName(){
            console.log(this.name)
        }
        makeFriendsWith(person){
            this.friends.push(person);
            person.friends.push(this);
        }

}


person10 = new Person('Dana', 33 )
person11 = new Person('Stella', 22)
person12 = new Person('Milo', 34 )
person13 = new Person('Nella', 55)





instructors = [person10, person11]


instructors[0].sayName

person12.sayName

printName = (person) => person.sayName()

instructors.forEach(printName)

person11.makeFriendsWith(person12)



printName = (attendees) => attendees.sayName()

var meetup = class {
    contructor(name){
        this.name = name
        this.attendees = null
    }
}

var wtmb = new meetup ('women Techmakers Berlin')



console.log(wtmb, person13)

person13.attendees(wtmb)

