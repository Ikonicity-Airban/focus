
function renderPage(res, next, view, layout, option) {
    res.render(view, {
        layout,
        ...option
    })
    next();
}