
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

function roastMaker() {
    /*Handles the roast generator
      
      2.generates a number between 1 & 3
      3.returns a snap at random based on the number in the roastList*/
      console.log("roastMaker method ran")
      var possibleRoasts = Math.ceil(Math.random()*3);
      console.log(possibleRoasts);

};

function handleButtonClick() {
    /* 1.event listener for button
       2.roast generator*/
    $("button").click(function() {
        console.log("handleButtonClick method ran");
        roastMaker();
    });
}

handleButtonClick();