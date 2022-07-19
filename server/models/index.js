const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const Course = sequelize.define("course", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    markdown: {type: DataTypes.STRING},
}, {
    timestamps: false
});

const Lesson = sequelize.define("lesson", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    markdown: {type: DataTypes.STRING},
}, {
    timestamps: false
});

Course.hasMany(Lesson);
Lesson.belongsTo(Course);

module.exports = {
    Course,
    Lesson
};


// course: 1,
//     name: 'html1',
//     markdown: `
// name: string
// markdown: string
