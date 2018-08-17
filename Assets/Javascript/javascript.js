//Javascript for Group Project #1 - Recipe Assistant! 

$(document).ready(function () {

    //When one of these buttons is selected, store the value into a variable to be used as a search parameter for the Big Oven API
    var userChoice1; //set value to on(click) button selection
    var userChoice2; //set value to on(click) button selection
    var userChoice3; //set value to on(click) button selection
    var vegan = 'vgn=1';
    var vegetarian = 'vtn=1';
    var glutenFree = 'glf=1';
    var dairyFree = 'dyf=1';
    var searchTerms = 'include_ing=' + userChoice1, userChoice2, userChoice3;

    //AJAX query & GET method for BigOven API
    var searchBigOven = function (queryURL) {
        apikeyBigOven = '&api_key=Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196';
        var queryURL;

        //query search is defined based on the button on(clicks)
        if ($('#vegan').on('click', function () {
        }) === true) {
            queryURL = 'https://api2.bigoven.com/recipes?' + vegan + searchTerms + apikeyBigOven;
        } else if ($('#vegetarian').on('click', function () {
        }) === true) {
            queryURL = 'https://api2.bigoven.com/recipes?' + vegetarian + searchTerms + apikeyBigOven;
        } else if ($('#glutenFree').on('click', function () {
        }) === true) {
            queryURL = 'https://api2.bigoven.com/recipes?' + glutenFree + searchTerms + apikeyBigOven;
        } else if ($('#dairyFree').on('click', function () {
        }) === true) {
            queryURL = 'https://api2.bigoven.com/recipes?' + dairyFree + searchTerms + apikeyBigOven;
        } else {
            queryURL = 'https://api2.bigoven.com/recipes?' + apikeyBigOven;
        }

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    }

    //Random recipe is generated using the API, and placed on site load in state 0
    var randomRecipe = function () {
        var randomRecipe = 'https://api2.bigoven.com/recipes/random?api_key=Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196';
        $.ajax({
            url: randomRecipe,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    }

    $('#filterSubmit').on('click', function () {
        searchBigOven();
    });

    $('#ingredientsSubmit').on('click', function () {
        searchBigOven();
    });

});


// GitHub Contributors: andyxwood, nicolascueva, zachshult124