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

    const BIG_OVEN_KEY = 'Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196';
    
    //When one of these buttons is selected, store the value into a variable to be used as a search parameter for the Big Oven API

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

            $('#randomInstructions').append(response.Instructions);
        });
    }

    //Display the random recipe of the day on sceen
    randomRecipe();

    $('#submit').on('click', function () {
        //stores value of ingredients for use in queryURL
        var userChoice1 =  $( "#userChoice1 option:selected" ).text();
        var userChoice2 =  $( "#userChoice2 option:selected" ).text();
        var userChoice3 =  $( "#userChoice3 option:selected" ).text();
        var searchTerms = userChoice1 + ',' +  userChoice2 + ',' + userChoice3;
        
        var queryURL = 'https://api2.bigoven.com/recipes?' + 
            'api_key=' + BIG_OVEN_KEY + 
            'include_ing' + searchTerms + 
            'vgn=' + $("#vegan").is(":checked") ? '1' : '0' +
            'vtn=' + $("#vegetarian").is(":checked") ? '1' : '0' +
            'glf=' + $("#glutenFree").is(":checked") ? '1' : '0' +
            'dyf=' + $("#dairyFree").is(":checked") ? '1' : '0';
        searchBigOven(queryURL);
    });

});

// GitHub Contributors: andyxwood, nicolascueva, zachshult124