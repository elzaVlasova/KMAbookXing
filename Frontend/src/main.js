/**
 * Created by Nastya on 11.04.2016.
 */
$(function () {

    var BooksMenu = require('./BooksMenu');
    var Books_List = require('./Books_List');

    var API = require('./API');


    API.getBooksList(function (err, books_menu) {
        if (err) {
            return console.error(err);
        }
        console.log("Books_List", books_menu);
        BooksMenu.initialiseMenu();
        BooksMenu.initialiseCart();
    });

    $(".logo").click(function () {
        window.location = "http://localhost:5050/";
    });


    var title = $('#title').val();
    var author = $('#author').val();
    var link = $('#link').val();

    $(".add").click(function () {


        //var right_input = true;
        //link.focusout(function () {
        //    if (link.val() == "" || (link.val().includes("https://")) == false || title.val() == "" || author.val() == "") {
        //        right_input = false;
        //        title.find(".status").attr("class", "has-error");
        //        author.find(".status").attr("class", "has-error");
        //        link.find(".status").attr("class", "has-error");
        //
        //    } else {
        //        right_input = true;
        //    }
        //});
        var value = "";
        $('#title').val(value);
        $('#author').val(value);
        $('#link').val(value);
        BooksMenu.addToCart(true);

    });

});