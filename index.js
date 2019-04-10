var possibleJokes;

const jokeList = [
    {
        number: 1,
        joke:  "A limbo dancer walks into a bar.",
    },

    {
        number: 2,
        joke:  "I, for one, like Roman numerals.",
    },

    {
        number: 3,
        joke:  "Your mother got one long leg and one short leg - they call her Eileen.",
    },

    {
        number: 4,
        joke:  "In New York, someone gets stabbed every 52 seoncds. Poor bastard.",
    },

    {
        number: 5,
        joke:  "How many months have 28 days? All of them.",
    },

    {
        number: 6,
        joke:  "Jokes about women's bodily functions aren't funny. Period.",
    },

    {
        number: 7,
        joke:  "Boycott shampoo - demand the real poo!",
    },

    
];

///////////////////////////////////////////////////////////////////////////////


function randomizer() {
    //Handles the joke generator by generating a random number btwn 1 & 7
      console.log("roastMaker method ran");
      randomNumber = Math.ceil(Math.random()*7);
      console.log(randomNumber);
};

/////////////////////////////////////////////////////////////////////////////////

function displayJoke() {
    //displays the roast of the number in roastList based on by number passed in from randomizer function
    console.log("displayRoast method ran");
    actualJoke = jokeList[randomNumber - 1].joke;
    console.log(actualJoke);
    $('#view-result').text(actualJoke);
}

///////////////////////////////////////////////////////////////////////////////////

function handleButtonClick() {
    /* 1.event listener for button
       2.roast generator*/
    $("button").click(function() {
        console.log("handleButtonClick method ran");
        randomizer();
        displayJoke(possibleJokes);
    });
}

handleButtonClick();