module.exports = (req, res, next) => {
    if(!req.secure) {
        return res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
    } else {
        next();
    }
};