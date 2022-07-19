const {Course, Lesson} = require("../models/index");

class CourseController {
    async getAll(req, res) {
        const courses = await Course.findAll();
        return res.json(courses);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const courses = await Course.findOne({
            where: {name: id}, include: Lesson
        });
        return res.json(courses);
    }

    async getOneLesson(req, res) {
        const {id, name} = req.params;
        const course = await Course.findOne({
            where: {name: id}
        });

        if (course) {
            const lesson = await Lesson.findOne({
                where: {name, courseId: course.id}
            });
            return res.json(lesson);
        }
        return res.json(null);

    }

    async postWord(req, res) {
        try {
            const courses = await Course.create({
                ...req.body
            });
            return res.json(courses);
        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }


    async putWord(req, res) {
        try {
            const courses = await Course.update(
                {
                    ...req.body,
                },
                {
                    where: {
                        id: req.body.id,
                    },
                }
            );
            return res.json(courses);
        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }

    async deleteWord(req, res) {
        const courses = await Course.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.json(courses);
    }
}

module.exports = new CourseController();
