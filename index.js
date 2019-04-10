


function roastMaker() {
    /*Handles the roast generator
      1.initiate user to pick a number between 1 and 5
      2.generates that number of snaps
      3.returns a snap at random*/
      console.log("roastMaker method ran")
      var possibleRoasts = Math.ceil(Math.random()*9);
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