const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req,res) => {
    const blogs =[
        {title: 'greatest val player', snippet: 'yssa'},
        {title: '10 things a crazy girl would do', snippet: 'sofie'},
        {title: 'and if today, all you did was hold yourself together, i’m proud of you', snippet: 'jtown'},
    ];
res.render('index' ,{title:'Home', blogs});
});

app.get('/about', (req,res) => {
res.render('about',{title:'About'}); 
});

app.get('/blogs/create', (req,res) => {
    res.render('create',{title:'New blog'});
});

app.use((req,res) => {
    res.status(404).render('404',{title:'Page not found!'});
})