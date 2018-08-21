//Javascript for Group Project #1 - Recipe Assistant! 

$(document).ready(function () {

    //Initialize Firebase database
    var config = {
        apiKey: "AIzaSyDc8YYktq7GywqfCv-g7Gbj4xioVQM29Mo",
        authDomain: "recipe-assistant-15441.firebaseapp.com",
        databaseURL: "https://recipe-assistant-15441.firebaseio.com",
        projectId: "recipe-assistant-15441",
        storageBucket: "recipe-assistant-15441.appspot.com",
        messagingSenderId: "629989476926"
    };
    firebase.initializeApp(config);

    //When one of these buttons is selected, store the value into a variable to be used as a search parameter for the Big Oven API
    var userChoice1; //set value to radio button selection
    var userChoice2; //set value to radio button selection
    var userChoice3; //set value to radio button selection
    //Need to remove value on queryurl if button is deselected!

    var vegan = 'vgn=1';
    var vegetarian = 'vtn=1';
    var glutenFree = 'glf=1';
    var dairyFree = 'dyf=1';
    var searchTerms = 'include_ing=' + userChoice1, userChoice2, userChoice3;

    apikeyBigOven = '&api_key=Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196';
    var queryURL = 'https://api2.bigoven.com/recipes?' + apikeyBigOven;

    // query search is defined based on the button on(clicks)
    $('#vegan').on('click', function () {
        queryURL = 'https://api2.bigoven.com/recipes?' + vegan + apikeyBigOven;
        console.log(queryURL);
    })
    $('#vegetarian').on('click', function () {
        queryURL = 'https://api2.bigoven.com/recipes?' + vegetarian + apikeyBigOven;
        console.log(queryURL);
    })
    $('#glutenFree').on('click', function () {
        queryURL = 'https://api2.bigoven.com/recipes?' + glutenFree + apikeyBigOven;
        console.log(queryURL);
    })
    $('#dairyFree').on('click', function () {
        queryURL = 'https://api2.bigoven.com/recipes?' + dairyFree + apikeyBigOven;
        console.log(queryURL);
    })

    //AJAX query & GET method for BigOven API
    var searchBigOven = function () {

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

            $('#randomInstructions').append(response.Instructions);
        });
    }

    //Display the random recipe of the day on sceen
    randomRecipe();

    $('#submit').on('click', function () {
        searchBigOven();
    });

});


// GitHub Contributors: andyxwood, nicolascueva, zachshult124