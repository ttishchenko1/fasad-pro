var fs = require('fs');
var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('home', {title: 'Fasad-Pro | Строительные материалы',
                        description: 'Утепление фасадов в Киеве и по всей Украине',
                        keywords: 'Fasad-Pro, утепление фасадов, фасады, строительные материалы'});
});
app.get('/about', function(req, res) {
	res.render('about', {title: 'O компании',
                        description: 'Fasad-Pro на рынке строительных услуг — 11 лет',
                        keywords: 'Fasad-Pro, утепление фасадов, качество, честность, гарантия'});
});
app.get('/delivery', function(req, res) {
	res.render('delivery', {title: 'Доставка',
                            description: 'Fasad-Pro быстрая доставка строительных материалов',
                            keywords: 'Доставка строительных материалов, строительные материалы'});
});
app.get('/works', function(req, res) {
	res.render('works', {title: 'Наши работы',
                        description: 'Fasad-Pro работы',
                        keywords: 'Утепление фасадов, фасад'});
});
app.get('/contacts', function(req, res) {
	res.render('contacts', {title: 'Контакты',
                            description: 'Контакты Fasad-Pro',
                            keywords: 'Костельная 13, адрес Fasad-Pro, контакты Fasad-Pro'});
});

app.post('/feedback', function(req, res) {
    var urlLoadFile = 'load/userContacts.txt';
    var name = req.body.name;
    var phone = req.body.phone;
    var email = req.body.email;
    var comment = req.body.comment;
    fs.readFile(urlLoadFile, 'utf8', function readFileCallback(err, data) {
        if(err) {
            console.log(err);
        } else {
            var object = JSON.parse(data);
            object.users.push({
                name: name,
                phone: phone,
                email: email,
                comment: comment
            });
            jsonData = JSON.stringify(object);
            fs.writeFile(urlLoadFile, jsonData, 'utf8');
        }
    });  
    res.redirect('back');
});

app.listen(8080);
console.log('localhost:8080');