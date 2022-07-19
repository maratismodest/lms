const {Lesson} = require("../models/index");

class LessonController {
    async getAll(req, res) {

        const courses = await Lesson.findAll();
        return res.json(courses);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const word = await Lesson.findOne({
            where: {id},
        });
        return res.json(word);
    }

    async postWord(req, res) {
        try {
            const word = await Lesson.create({
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
            const word = await Lesson.update(
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
        const posts = await Lesson.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.json(posts);
    }
}

module.exports = new LessonController();
