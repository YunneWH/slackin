const URL = require('url').URL;

module.exports = function(req, res, next) {
  if (req.protocol !== 'https') {
    let url = new URL(req.url, `https://${req.hostname}`);
    res.redirect(url.href);
  } else {
    next();
  }
};
