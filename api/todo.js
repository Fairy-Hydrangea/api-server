const router = require('express').Router();
const todoController = require('./_controller/todoController');
router.get('/', async (req,res) => {
    const result = todoController.getTest();
    res.json(await result);
})

module.exports = router;