//Importation d'express
const express = require('express');

//Création du routeur
const router = express.Router();

//Importation du limiter
const limiter = require('../middleware/limiter');

//Importation du controller
const userCtrl = require('../controllers/user');

//Création des routes 
router.post('/signup',userCtrl.signup);
router.post('/login', limiter.loginLimiter, userCtrl.login);

//Exportation du routeur
module.exports = router;