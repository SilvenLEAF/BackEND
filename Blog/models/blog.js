const mongoose = require('mongoose');

/* ...............................
.     create BLOG Schema
............................... */
const BlogSchema = new mongoose.Schema({
    name: String,
    message: String
});

const Blog = mongoose.model('blogpiece', BlogSchema);

module.exports = Blog;
