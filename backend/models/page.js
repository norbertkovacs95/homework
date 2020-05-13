const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
        pageNumber: {
            type: Number,
            required: true
        },
        blogs: [{
            type: mongoose.Types.ObjectId,
            ref: 'Blog'
        }]
    },
    {
        timestamps: true
    }
);

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;
