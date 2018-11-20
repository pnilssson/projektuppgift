var xhr = new XMLHttpRequest();

xhr.onload = function () {

    responseobject = JSON.parse(xhr.responseText);

    var newContent = '';

    var x = "";

    var i =0;






     /*   newContent += '<div class="java-picture" ></div>';
        newContent += '<div class="div-container-java">';

*/
       for (i in responseobject.alignmentText) {
           x += '<li><p>' + responseobject.alignmentText[i] + '</p></li>';
       }

        newContent += '<ul><li><h3>' +responseobject.alignmentHeader + '</h3></li>' + x + '</ul>';


    /*






        newContent += '<div class="java-text" > ';
        newContent += '<div class="java-context" id="context">';
        newContent += '</div>';
        newContent += '<div class="fast-facts" id="fast-facts">';

        newContent += ' </div>';
        newContent += '<div class="context-education" id="context-education">';

        newContent += '</div>';
        newContent += '<div class="java-courses" id="java-courses">';

        newContent += '</div>';
        newContent += '<div class="java-appropriate" id="java-appropriate">';

        newContent += '</div>';
        newContent += '<div class="java-application" id="java-application">';

        newContent += '</div>';
        newContent += '<div class="java-contact" id="java-contact">';

        newContent += '</div>';
        newContent += '</div>';


        newContent += '</div>';

*/






    document.getElementById('content').innerHTML = newContent;
};

xhr.open('GET', 'data/java.json', true);
xhr.send(null);