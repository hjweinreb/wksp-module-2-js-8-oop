// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.



// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
    constructor(name, breed) {
        this.species = 'cat';
        this.breed = breed;
        this.name = name;
        this.tiredness = 50;
        this.hunger = 50;
        this.loneliness = 50;
        this.happiness = 50;
    }

    sleep = (hours) => {
        this.tiredness -= 5 * hours
    }

    eat = (grams) => {
        this.hunger -= (1 / 5) * grams
    }

    play = (minutes) => {
        this.loneliness -= minutes * 3;
    }

    wait = (minutes) => {
        this.tiredness += 1 * minutes;
        this.hunger += 10 * minutes;
        this.loneliness += 3 * minutes;
        this.happiness -= 5 * minutes;

    }

}


const boots = new Cat('Boots', 'Siamese')

boots.sleep(100);
boots.eat(100);
boots.play(100);

console.log(boots);