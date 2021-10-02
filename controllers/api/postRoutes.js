const router = require ('express').Router();

//get all posts
router.get('/', (req,res) => {
    res.send('OK')
});


//add a post
router.post('/', (req,res) => {
    const {title, body} = req.body


    res.json(req.body)
});

//delete a post by id
router.delete('/:id', (req,res) => {
    res.send(req.params.id)
});


module.exports = router;