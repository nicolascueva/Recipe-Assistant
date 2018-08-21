//Javascript for Group Project #1 - Recipe Assistant! 

$(document).ready(function () {

    const BIG_OVEN_KEY = 'Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196';

    //AJAX query & GET method for BigOven API
    var searchBigOven = function (bigOven_queryURL) {
        $.ajax({
            url: bigOven_queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var recipeName1 = response.Results[0].Title;
            var recipeName2 = response.Results[1].Title;
            var recipeName3 = response.Results[2].Title;
            var recipeName4 = response.Results[3].Title;
            var recipeName5 = response.Results[4].Title;

            $('#recipe1').text(recipeName1);
            $('#recipe2').text(recipeName2);
            $('#recipe3').text(recipeName3);
            $('#recipe4').text(recipeName4);
            $('#recipe5').text(recipeName5);

            var recipe1_url = response.Results[0].WebURL;
            var recipe2_url = response.Results[1].WebURL;
            var recipe3_url = response.Results[2].WebURL;
            var recipe4_url = response.Results[3].WebURL;
            var recipe5_url = response.Results[4].WebURL;

            //On recipe button click, take user to new tab 
            $('#recipe1').click(function () {
                window.open(recipe1_url);
            });
            $('#recipe2').click(function () {
                window.open(recipe2_url);
            });
            $('#recipe3').click(function () {
                window.open(recipe3_url);
            });
            $('#recipe4').click(function () {
                window.open(recipe4_url);
            });
            $('#recipe5').click(function () {
                window.open(recipe5_url);
            });
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

        //stores value of ingredients for use in bigOven_queryURL
        var userChoice1 = $("#userChoice1 option:selected").text();
        var userChoice2 = $("#userChoice2 option:selected").text();
        var userChoice3 = $("#userChoice3 option:selected").text();
        if (userChoice1 === 'Choose your option' && userChoice2 === 'Choose your option' && userChoice3 === 'Choose your option') {
            userChoice1 = ''; userChoice2 = ''; userChoice3 = '';
        }
        var searchTerms = userChoice1 + ',' + userChoice2 + ',' + userChoice3;

        var vgnvalue = $("#vegan").is(":checked") ? '1' : '0';
        var vtnValue = $("#vegetarian").is(":checked") ? '1' : '0'
        var glfValue = $("#glutenFree").is(":checked") ? '1' : '0'
        var dyfValue = $("#dairyFree").is(":checked") ? '1' : '0'

        var bigOven_queryURL = `http://api2.bigoven.com/recipes?include_ing=${searchTerms}&vgn=${vgnvalue}&vtn=${vtnValue}&glf=${glfValue}&dyf=${dyfValue}&api_key=${BIG_OVEN_KEY}`;

        searchBigOven(bigOven_queryURL);

    });

});

// GitHub Contributors: andyxwood, nicolascueva, zachshult124