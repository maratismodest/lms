const {Course, Lesson} = require("../models/index");

class CourseController {
    async getAll(req, res) {

        const courses = await Course.findAll({ include: Lesson });
        return res.json(courses);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const word = await Course.findOne({
            where: {id},
        });
        return res.json(word);
    }

    async postWord(req, res) {
        try {
            const word = await Course.create({
                ...req.body
            });
            return res.json(word);
        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }


    async putWord(req, res) {
        try {
            const word = await Course.update(
                {
                    ...req.body,
                },
                {
                    where: {
                        id: req.body.id,
                    },
                }
            );
            return res.json(word);
        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }

    async deleteWord(req, res) {
        const posts = await Course.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.json(posts);
    }
}

module.exports = new CourseController();
