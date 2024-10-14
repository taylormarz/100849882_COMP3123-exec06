const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: { type: String, enum: ['HIGH', 'MEDIUM', 'LOW'] },
    dateAdded: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
});

const noteModel = mongoose.model('Note', noteSchema);
module.exports = noteModel;