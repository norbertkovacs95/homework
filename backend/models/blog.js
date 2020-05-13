const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
        name: { 
            type : String, 
            required: true
        },
        page: {
            type: mongoose.Types.ObjectId,
            ref: 'Page',
            required: true
        },
        tags: [{
            type: mongoose.Types.ObjectId,
            ref: 'Tag'
        }]
    },
    {
        timestamps: true
    }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
