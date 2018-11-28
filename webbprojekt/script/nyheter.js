$("p.news-text").html(function(index, currentHTML) {
    if (currentHTML.length > 200) {
        let newsText = currentHTML.substr(0, 200).lastIndexOf(" ");
        return currentHTML.substr(0, newsText) + '...';
    }
});