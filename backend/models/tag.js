const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
        tagType: { 
            type : String, 
            required: true
        },
        html: {
            type: String,
            required: true
        },
        blog: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog',
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;
