$("p.news-text").html(function(index, currentHTML) {
    if (currentHTML.length > 100) {
        let newsText = currentHTML.substr(0, 100).lastIndexOf(" ");
        return currentHTML.substr(0, newsText) + '...';
    }
});