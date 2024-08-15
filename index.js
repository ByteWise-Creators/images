const express = require('express');
const path = require('path');

const app = express();

app.get('/:imgName', (req, res) => {
    const imageName = req.params.imgName;
    const imgPath = path.join(__dirname, 'img', imageName);

    res.sendFile(imgPath, (err) => {
        if (err) {
            res.status(404).send('Image not found');
        }
    });
});

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`server started at port ${port}`);
});