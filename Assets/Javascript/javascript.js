//Javascript for Group Project #1 - Recipe Assistant! 

document.ready(); {

    //When one of these buttons is selected, store the value into a variable to be used as a search parameter for the Big Oven API
    var userChoice1 =  //set value to on(click) button selection
    var userChoice2 =  //set value to on(click) button selection
    var userChoice3 =  //set value to on(click) button selection
    var veganChoice = 'vgn=1'
    var vegetarianChoice = ''
    var searchTerms = 'include_ing=' + userChoice1, userChoice2, userChoice3;

    //AJAX query & GET method for BigOven API
    var searchBigOven = function (queryURL) {
        apikeyBigOven = '&api_key=Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196';
        var queryURL = 'https://api2.bigoven.com/recipes?' + searchTerms + apikeyBigOven;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    });

};


// GitHub Contributors: andyxwood, nicolascueva, zachshult124