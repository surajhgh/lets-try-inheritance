// Superclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return `${this.name} is eating.`;
    }
}

// Subclass
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        return `${this.name} is barking.`;
    }

    // Overriding the eat method
    eat() {
        return `${this.name} is eating dog food.`;
    }
}

// Function to display the output
function displayOutput(text) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = text;
}

// Event listeners for buttons
document.getElementById('createAnimal').addEventListener('click', () => {
    const myAnimal = new Animal('Generic Animal');
    displayOutput(myAnimal.eat());
});

document.getElementById('createDog').addEventListener('click', () => {
    const myDog = new Dog('Buddy', 'Golden Retriever');
    displayOutput(myDog.eat() + ' ' + myDog.bark());
});
