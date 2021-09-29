const router = require('express').Router();

//const apiRoutes = require('./api');
//const homeRoutes = require()

router.get('*', (req,res) => {
    res.send('404')
})

module.exports = router;