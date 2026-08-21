// middleware.js

// Strip basic HTML tags from a string
function stripHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '');
}

// Lowercases username and strips HTML tags from comment, then calls next()
function inputCleaner(req, res, next) {
  if (req.body && typeof req.body.username !== 'undefined') {
    req.body.username = String(req.body.username).toLowerCase();
  }

  if (req.body && typeof req.body.comment !== 'undefined') {
    req.body.comment = stripHtmlTags(String(req.body.comment));
  }

  next();
}

// Calls next() if username is >= 3 chars, otherwise redirects with an error
function inputValidator(req, res, next) {
  const username = req.body && req.body.username ? String(req.body.username) : '';

  if (username.length >= 3) {
    return next();
  }

  return res.redirect('/form?error=Username must be at least 3 characters.');
}

module.exports = { inputCleaner, inputValidator };