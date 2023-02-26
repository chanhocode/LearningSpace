const { Post, Hashtag } = require('../models');

// multer를 통해 이미지를 업로드시 req.file이 생긴다.
exports.afterUploadImage = (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` }); // 업로드된 이미지 url을 프론트로 보냄
};

exports.uploadPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });
    const hashtag = req.body.content.match(/#[^\s#]*/g);
    if (hashtag) {
      const result = await Promise.all(
        hashtag.map((tag) => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          });
        })
      );
      await post.addHashtags(result.map((r) => r[0]));
    }
    res.redirect('/');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
