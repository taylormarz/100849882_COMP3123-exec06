const express = require('express');
const router = express.Router();
const noteModel = require('../models/NotesModel.js');

router.post('/', (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: 'Note content cannot be empty'
        });
    }

    const Note = new noteModel({
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority
    });

    Note.save()
        .then(note => {
            console.log('New note saved: ', note);
            return res.status(201).send(note);
        })
        .catch(err => {
            console.error(err);
        });
});


router.get('/', (req, res) => {
    noteModel.find({})
        .then(notes => {
            console.log('Read all Notes: ', notes);
            return res.status(200).send(notes);
        })
        .catch(err => {
            console.error(err);
        });
});


router.get('/:noteId', (req, res) => {
    const { noteId } = req.params;
    noteModel.findById(noteId)
        .then(note => {
            console.log(note);
            return res.status(200).send(note);
        })
        .catch(err => {
            console.error(err);
        });
});


router.put('/:noteId', (req, res) => {
    const { noteId } = req.params;
    noteModel.findByIdAndUpdate(noteId, req.body, { new: true })
        .then(note => {
            console.log('Note updated: ', note);
            return res.status(200).send(note);
        })
        .catch(err => {
            console.error(err);
        });
});


router.delete('/:noteId', (req, res) => {
    const { noteId } = req.params;
    noteModel.findByIdAndDelete(noteId)
        .then(note => {
            console.log('Note deleted: ', note);
            return res.status(200).send('Note deleted successfully!');
        })
        .catch(err => {
            console.error(err);
        });
});

module.exports = router;

