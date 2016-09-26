import express from 'express';
import bodyParser from 'body-parser';

import * as db from './data_base/data.base.js';
import { serverPort } from '../config/config.json';

db.setupConnection();

const app = express();

app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.notesList().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});
app.post('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(8080, () => {
    console.log("server is up and running");
});