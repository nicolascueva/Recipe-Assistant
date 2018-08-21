//Javascript for Group Project #1 - Recipe Assistant! 

$(document).ready(function () {

    const BIG_OVEN_KEY = 'Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196';

    //AJAX query & GET method for BigOven API
    var searchBigOven = function (queryURL) {
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



            //For loop to display ingredients from randomRecipe response
            for (let index = 0; index < response.Ingredients.length; index++) {

                $('#randomIngredients').append("<ol id='newList'></ol>");
                $("#newList").append("<li>" + response.Ingredients[index].Name + "</li>");
            }

            $('#randomIngredients').prepend("Ingredients:");
        });
    }

    //Display the random recipe of the day on sceen
    randomRecipe();

    $('#submit').on('click', function () {
        //stores value of ingredients for use in queryURL
        var userChoice1 = $("#userChoice1 option:selected").text();
        var userChoice2 = $("#userChoice2 option:selected").text();
        var userChoice3 = $("#userChoice3 option:selected").text();
        var searchTerms = userChoice1 + ',' + userChoice2 + ',' + userChoice3;

        var queryURL = 'https://api2.bigoven.com/recipes?' +
            'include_ing' + searchTerms +
            'vgn=' + $("#vegan").is(":checked") ? '1' : '0' +
                'vtn=' + $("#vegetarian").is(":checked") ? '1' : '0' +
                    'glf=' + $("#glutenFree").is(":checked") ? '1' : '0' +
                        'dyf=' + $("#dairyFree").is(":checked") ? '1' : '0' +
                        'api_key=' + BIG_OVEN_KEY;
        searchBigOven(queryURL);
    });

});

// GitHub Contributors: andyxwood, nicolascueva, zachshult124