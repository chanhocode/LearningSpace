const axios = require('axios');

const URL = process.env.API_URL;
axios.defaults.headers.origin = process.env.ORIGIN; // 요청 보내는 주소 _ axios 보낼 때 마다 헤더에 포함

// 토큰 발급 받고 만료시 재발급 api 요청
const request = async (req, api) => {
  try {
    console.log(req.session.jwt);
    if (!req.session.jwt) {
      // 세션에 토큰이 없으면
      console.log('no token');
      const tokenResult = await axios.post(`${URL}/token`, {
        clientSecret: process.env.CLIENT_SECRET,
      });
      req.session.jwt = tokenResult.data.token; // 세션에 토큰 저장
    }
    return await axios.get(`${URL}${api}`, {
      headers: { authorization: req.session.jwt },
    }); // API 요청
  } catch (error) {
    if (error.response?.status === 419) {
      // 토큰 만료시 토큰 재발급 받기
      delete req.session.jwt; // 세션에서 만료된 토큰 지움
      return request(req, api); // 다시 호출 하여 세션이 없어서 재발급
    } // 419 외의 다른 에러면
    return error.response;
  }
};

exports.getMyPosts = async (req, res, next) => {
  try {
    const result = await request(req, '/posts/my');
    res.json(result.data);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.searchByHashtag = async (req, res, next) => {
  try {
    console.log('tag: ', req.params.hashtag);
    const result = await request(
      req,
      `/posts/hashtag/${encodeURIComponent(req.params.hashtag)}`
    );
    res.json(result.data);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderMain = (req, res) => {
  res.render('main', {
    key: process.env.CLIENT_SECRET,
  });
};
