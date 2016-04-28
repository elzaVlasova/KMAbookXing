/**
 * Created by chaika on 02.02.16.
 */
var fs = require('fs');
var ejs = require('ejs');


exports.BooksMenu_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Book_OneItem.ejs', "utf8"));