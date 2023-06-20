exports.ErrorPageController = (req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    const path = req.path;
    res.status(404).render('404', {pageTitle: 'Page not found!', path: path}); 
};
 