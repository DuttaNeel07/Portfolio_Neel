const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        techStack: {
            type: Array,
            required: false,
        },
        link: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('project', projectSchema);