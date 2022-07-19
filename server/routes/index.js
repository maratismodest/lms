const Router = require('express')
const router = new Router()
const courseRouter = require('./courseRouter')
const lessonRouter = require('./lessonRouter')


router.use('/course', courseRouter)
router.use('/lesson', lessonRouter)

module.exports = router
