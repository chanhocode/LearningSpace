const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../middlewares');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const { afterUploadImage, uploadPost } = require('../controllers/post');

try {
  // 이미지 업로드 폴더
  fs.readdirSync('uploads');
} catch (err) {
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      console.log('multer file: ', file);
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext); // 이미지 중복을 막기위해 Date활용
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post('/img', isLoggedIn, upload.single('img'), afterUploadImage);

const upload2 = multer(); // upload랑 설정이 다르기 때문에 새로 만든다.
router.post('/', isLoggedIn, upload2.none(), uploadPost);

module.exports = router;
