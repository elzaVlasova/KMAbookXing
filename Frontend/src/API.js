/**
 * Created by chaika on 09.02.16.
 */

var API_URL = "http://localhost:5050";

function backendGet(url, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'GET',
        success: function(data){
            callback(null, data);
        },
        fail: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

function backendPost(url, data, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'POST',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            callback(null, data);
        },
        fail: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

exports.getBooksList = function(callback) {
    backendGet("/api/get-books-list/", callback);
};