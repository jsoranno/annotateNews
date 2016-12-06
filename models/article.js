/**
 * Created by juanitasoranno on 12/5/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    link: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }
});

var article = mongoose.model('article', articleSchema);
module.exports = article;