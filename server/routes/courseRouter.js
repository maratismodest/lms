const Router = require('express')
const router = new Router()
const courseController = require('../controllers/courseController')

router.get('/', courseController.getAll)
router.get('/:id', courseController.getOne)
router.post('/', courseController.postWord)
router.put('/:id', courseController.putWord)
router.delete('/:id', courseController.deleteWord)
module.exports = router
