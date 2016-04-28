/**
 * Created by chaika on 09.02.16.
 */
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'KMAbookXing'
    });
};

exports.aboutPage = function(req, res) {
    res.render('aboutPage', {
        pageTitle: 'ПРО НАС'
    });
};

exports.catalogPage = function(req, res) {
    res.render('catalogPage', {
        pageTitle: 'КАТАЛОГ'
    });
};
