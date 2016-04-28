/**
 * Created by chaika on 09.02.16.
 */
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');

    //Налаштування URL за якими буде відповідати сервер
    //Отримання списку піц
    app.get('/api/get-books-list/', api.getBooksList);
    //app.post('/api/create-order/', api.createOrder);

    //Сторінки

    //Головна сторінка
    app.get('/', pages.mainPage);

    //Сторінка про нас
    app.get('/about.html', pages.aboutPage);

    //Сторінка каталога
    app.get('/catalog.html', pages.catalogPage);

    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:' + port + '/');
    });
}




function startServer() {

    // configuration -------------------------------------
    mongoose.connect(configDB.url); // connect to our database
    require('./config/passport')(passport); // pass passport for configuration

    // set up our express application
    app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser());// read cookies (needed for auth)
    app.use(flash());

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    // required for passport
    app.use(session({ secret: 'hellodearpetlovers' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session

    // routes --------------------------------------------
    require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(server_port, server_ip_address, function () {
        // console.log('My Application Running on http://localhost:'+port+'/');
        console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
    });
}


exports.startServer = startServer;