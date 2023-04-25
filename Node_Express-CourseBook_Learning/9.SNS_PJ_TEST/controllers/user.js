const User = require('../models/user');
const { follow } = require('../services/user');

// exports.follow = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ where: { id: req.user.id } });
//     if (user) {
//       await user.addFollowing(parseInt(req.params.id, 10));
//       res.send('success');
//     } else {
//       res.status(400).send('no user');
//     }
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// };

// < service 분리에 의한 변경 >
// controllers 에는 req, res 만 담당, services에서는 핵심 로직을 담당
exports.follow = async (req, res, next) => {
  try {
    const result = await follow(req.user.id, req.params.id);
    if (result === 'ok') {
      res.send('success');
    } else if (result === 'no user') {
      res.status(400).send('no user');
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
