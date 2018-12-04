var xhr1 = new XMLHttpRequest();

xhr1.onload = function () {

    responseNews = JSON.parse(xhr1.responseText);

    var newfooter = '';

    newfooter += '<ul><a class="molndallogo" href="https://www.molndal.se/"></a></ul>';

    newfooter += '<ul>';

    newfooter += '<h4>' + responseNews.kontaktHeader +'</h4>';


    for (i in responseNews.kontaktLinks) {
        newfooter+= '<li class="footer-item"><a href="' + responseNews.kontaktLinks[i] + '"><i class="' + responseNews.kontaktPicture[i] + '"></i>' + responseNews.kontaktText[i] +'</a></li>';
    }
    newfooter += '</ul>';

    newfooter += '<ul>';
    newfooter += '<h4>' + responseNews.fastHeader +'</h4>';

    for (i in responseNews.fastLinks) {
        newfooter+= '<li class="footer-item"><a href="' + responseNews.fastLinks[i] + '">' + responseNews.fastText[i] +'</a></li>';
    }
    newfooter += '</ul>';

    newfooter += '<ul>';
    newfooter += '<h4>' + responseNews.findHeader +'</h4>';
    for (i in responseNews.findText) {
        newfooter += '<li class="footer-item"><a href="' + responseNews.findLinks + '">' + responseNews.findText[i] + '</a></li>';
    }
    newfooter += '</ul>';

    newfooter += '<ul>';
    newfooter += '<h4>' + responseNews.findHeader2 +'</h4>';
    for (i in responseNews.findText2) {
        newfooter += '<li class="footer-item"><a href="' + responseNews.findLinks2 + '">' + responseNews.findText2[i] + '</a></li>';
    }
    newfooter += '</ul>';




















    document.getElementById('footer').innerHTML = newfooter;
};
xhr1.open('GET', 'data/footer.json', true);
xhr1.send(null);