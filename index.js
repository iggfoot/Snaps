var possibleRoasts;

const roastList = [
    {
        number: 1,
        roast:  "Ya mama got a glass eye with  fish in it!",
    },

    {
        number: 2,
        roast:  "Ya mama got a wooden leg with a kickstand",
    },

    {
        number: 3,
        roast:  "Ya mama got one long leg and one short leg - they call her Eileen",
    },
];

function randomizer() {
    //Handles the roast generator by generating a random number btwn 1 & 3
      console.log("roastMaker method ran");
      randomNumber = Math.ceil(Math.random()*3);
      console.log(randomNumber);
};

function displayRoast() {
    //displays the roast of the number in roastList based on by number passed in from roastMaker
    console.log("displayRoast method ran");
    actualRoast = roastList[randomNumber - 1].roast;
    console.log(actualRoast);
    $('#view-result').text(actualRoast);
}

function handleButtonClick() {
    /* 1.event listener for button
       2.roast generator*/
    $("button").click(function() {
        console.log("handleButtonClick method ran");
        randomizer();
        displayRoast(possibleRoasts);
    });
}

handleButtonClick();