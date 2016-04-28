/**
 * Created by Nika on 16.04.2016.
 */

var Templates = require('./Templates');
var Books_List = require('./Books_List');

var Storage = require('./Storage');
var Cart = [];

var $cart = $("#cart");

var $books_menu = $("#books_menu");

function showBooksList(list) {

    $books_menu.html("");

    function showOneBook(book) {
        var html_code = Templates.BooksMenu_OneItem({book: book});

        var $node = $(html_code);

        $books_menu.append($node);
    }

    list.forEach(showOneBook);

    $books_menu.find(".number-of-books-menu").text(list.length);
    console.log("Show books list " + list.length);
}

function initialiseMenu() {
    showBooksList(Books_List);
}

function addToCart(indicator) {
    if (indicator) {
        Cart.push({
            book: $('#title').val(),
            author: $('#author').val(),
            link: $('#link').val(),
            icon_present: false
        });
        console.log("Book added");
    }
    updateCart();
}

function initialiseCart() {
    var saved_books = Storage.get("cart");
    if (saved_books) {
        Cart = saved_books;
    }
    updateCart();
}

function getBooksInCart() {
    return Cart;
}

function updateCart() {
    $cart.html("");

    function showOneBookInCart(cart_item) {
        var html_code = Templates.BooksMenu_OneItem(cart_item);

        var $node = $(html_code);

        $cart.append($node);
    }

    Cart.forEach(showOneBookInCart);
    Storage.set("cart", Cart);
}

exports.addToCart = addToCart;
exports.updateCart = updateCart;
exports.getBooksInCart = getBooksInCart;
exports.initialiseCart = initialiseCart;

exports.initialiseMenu = initialiseMenu;