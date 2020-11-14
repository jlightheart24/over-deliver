const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User } = require('../models')

//display search page
router.get('/search', (req,res)=>{
    res.render('login', {title: 'Search'}).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
