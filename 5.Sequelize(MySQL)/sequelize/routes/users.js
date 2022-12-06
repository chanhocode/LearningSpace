const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');

const router = express.Router();

// findAll 모두 가져올때, findOne 하나만 가져올때
router
  .route('/')
  .get(async (req, res, next) => {
    try {
      // DB에 있는 모든 User정보를 가져와 res.json으로 응답 _ 단순한 문자열을 보낼때는 send, 페이지를 보내는 것이 아니면 보통 json을 쓴다.
      const users = await User.findAll();
      console.log('users ==============');
      console.log(users);
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      // User.create -> create는 프로미스이므로 await 필요.
      // 이름, 나이, 결혼여부 정보를 DB로 전송
      const user = await User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/:id/comments', async (req, res, next) => {
  // 어떤 사람의 댓글을 가져온다. 조건 where
  try {
    const comments = await Comment.findAll({
      include: {
        model: User,
        where: { id: req.params.id },
      },
    });
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;