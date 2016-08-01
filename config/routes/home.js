var router = require('express').Router();

/* GET index page  */
router.get('/', function(req, res){
  res.render('index', {
      title: 'Dashboard'
  });
});

router.get('/dashboard', function(req, res){
  res.render('home', {
      title: 'Home'
  });
});

