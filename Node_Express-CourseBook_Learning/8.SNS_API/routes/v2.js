const express = require('express');
const {
  verifyToken,
  apiLimiter,
  corsWhenDomainMatches,
} = require('../middlewares');
const {
  createToken,
  tokenTest,
  getMyPosts,
  getPostsByHashtag,
} = require('../controllers/v2');
const router = express.Router();
const cors = require('cors');

// (1) 응답에 헤더를 씌워주기 _ CORS 해결 _ https, 요청에 쿠키 유무에 따라 요구조건이 달라진다.
// router.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
//   res.setHeader('Access-Control-Allow-Headers', 'content-type');
//   next();
// });

// (2) CORS 라이브러리 사용
router.use(corsWhenDomainMatches);

// v1/
router.post('/token', apiLimiter, createToken);
router.get('/test', apiLimiter, verifyToken, tokenTest);

router.get('/posts/my', verifyToken, apiLimiter, getMyPosts);
router.get('/posts/hashtag/:title', verifyToken, apiLimiter, getPostsByHashtag);

module.exports = router;
