const Router = require('express')
const router = new Router()
const lessonController = require('../controllers/lessonController')

router.get('/', lessonController.getAll)
router.get('/:id', lessonController.getOne)
router.post('/', lessonController.postWord)
router.put('/:id', lessonController.putWord)
router.delete('/:id', lessonController.deleteWord)
module.exports = router
