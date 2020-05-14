// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.



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

}


const boots = new Cat('Boots', 'Siamese')

boots.sleep(100);
boots.eat(100);
boots.play(100);

console.log(boots);