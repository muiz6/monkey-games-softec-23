const express = require('express');
const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      path.win32.basename(file.originalname, path.extname(file.originalname)) +
        '-' +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// const upload = multer({ storage });
const { signIn } = require('../controller/admin.controller');
const {
  createItem,
  getItems,
  deleteItem,
} = require('../controller/item.controller');

const router = express.Router();

router
  .post('/signin', signIn)
  .post('/item', upload.array('images', 10), createItem)
  .get('/item/:pageno', getItems)
  .delete('/item/:id', deleteItem);

module.exports = router;
