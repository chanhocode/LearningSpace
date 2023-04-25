const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const { User, Domain } = require('../models');
const cors = require('cors');
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    // 패스포트 통해서 로그인 했는지 유무 확인
    next();
  } else {
    res.status(403).send('로그인이 필요');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent('로그인한 상태입니다.');
    res.redirect(`/?error=${message}`);
  }
};

exports.verifyToken = (req, res, next) => {
  try {
    res.locals.decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // 유효기간 초과
      return res.status(419).json({
        code: 419,
        message: '토큰이 만료되었습니다',
      });
    }
    return res.status(401).json({
      code: 401,
      message: '유효하지 않은 토큰입니다',
    });
  }
};

// 요청에 횟수 제한
exports.apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1m
  max: 10,
  handler(req, res) {
    res.status(this.statusCode).json({
      code: this.statusCode, // default 429
      message: '10 requests per 1m',
    });
  },
});

exports.deprecated = (req, res) => {
  res.status(410).json({
    code: 410,
    message: '새로운 버전이 나왔습니다. 새로운 버전을 사용하세요',
  });
};

exports.corsWhenDomainMatches = async (req, res, next) => {
  const domain = await Domain.findOne({
    // new URL().host 를 하면 http://를 제외시켜준다.
    where: { host: new URL(req.get('origin')).host },
  });
  if (domain) {
    cors({
      origin: req.get('origin'),
      credentials: true,
    })(req, res, next);
  } else {
    next();
  }
};
