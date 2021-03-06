import mongoose from 'mongoose';
import '../models/Note';
import config from '../../config/config.json';

const Note = mongoose.model('Note');

export function setupConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}
export function notesList(id) {
    return Note.find();
}
export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdDate: new Date()
    });
    return note.save();
}
export function deleteNote(id) {
    return Note.findById(id).remove();
}