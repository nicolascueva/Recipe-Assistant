//Javascript for Group Project #1 - Recipe Assistant! 

$(document).ready(function () {

    //When one of these buttons is selected, store the value into a variable to be used as a search parameter for the Big Oven API
    var userChoice1; //set value to on(click) button selection
    var userChoice2; //set value to on(click) button selection
    var userChoice3; //set value to on(click) button selection
    //Need to remove value on queryurl if button is deselected!

    var vegan = 'vgn=1';
    var vegetarian = 'vtn=1';
    var glutenFree = 'glf=1';
    var dairyFree = 'dyf=1';
    var searchTerms = 'include_ing=' + userChoice1, userChoice2, userChoice3;

    //AJAX query & GET method for BigOven API
    var searchBigOven = function (queryURL) {
        apikeyBigOven = '&api_key=Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196';
        var queryURL = 'https://api2.bigoven.com/recipes?' + apikeyBigOven;

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
            console.log(response); //Test logs to verify information displays correctly
            console.log(response.Title); //Test logs to verify information displays correctly
            console.log(response.Ingredients); //Test logs to verify information displays correctly
            console.log(response.Instructions); //Test logs to verify information displays correctly

            //Display random recipe on screen
            $('#randomRecipe').append(response.Title);
            $('#randomIngredients').append(response.Ingredients);
            $('#randomDescription').append(response.Description);
            $('#randomInstructions').append(response.Instructions);
        });
    }

    //Display the random recipe of the day on sceen
    randomRecipe();

    $('#filterSubmit').on('click', function () {
        searchBigOven();
    });

    $('#ingredientsSubmit').on('click', function () {
        searchBigOven();
    });

});


// GitHub Contributors: andyxwood, nicolascueva, zachshult124