/**
 * Created by Nika on 09.04.16.
 */

var Books_List = require('./data/Books_List');

exports.getBooksList = function (req, res) {
    res.send(Books_List);
};