/**
 * Created by juanitasoranno on 12/5/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    title: {
        type:String
    },
    body: {
        type:String
    }
});

var note = mongoose.model('Note', noteSchema);
module.exports = note;