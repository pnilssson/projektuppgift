var xhr = new XMLHttpRequest();

xhr.onload = function () {

    responseobject = JSON.parse(xhr.responseText);

    var newContent = '';

    var x = "";





        newContent += '<div class="java-picture" ></div>';
        newContent += '<div class="div-container-java"  >';

     // Div för allinment
    for (i in responseobject.alignmentText) {
        x += '<li><p><a href="#">' + responseobject.alignmentText[i] + '</a></p></li>';
    }
        newContent +=  '<div class="alignment">';
        newContent += '<ul><li><h3>' +responseobject.alignmentHeader + '</h3></li>' + x + '</ul>';
        newContent += '</div>';
        x = "";


     // Div för bookmark
    newContent +=  '<div class="test">';
    for (i in responseobject.bookmarkText) {
        x += '<li><p><a href="#' + responseobject.bookmarkLinks[i] + '">' + responseobject.bookmarkText[i] + '</a></p></li>';
    }
    newContent += '<div class="bookmark">';
    newContent += '<ul><li><h3>' + responseobject.bookmarkHeader + '</h3></li>' + x + '</ul>';
    newContent += '</div>';
    x = "";
    newContent += '<div class="java-text" >';



     // Div för context
    for (i in responseobject.mainText) {
        x += '<p>' + responseobject.mainText[i] + '</p>';
    }
    newContent += '<div class="java-context" id="context">';
    newContent += '<h3>' + responseobject.mainHeader + '</h3>';
    newContent += x;

    x = "";

   // newContent += '<img class="testbild" src="img/aktiveringspedagogobrukare855x450kimsvensson.jpg">'
    newContent += '</div>';
     // Div för fast-facts
    for (i in responseobject.factText) {
        x += '<li>' + responseobject.factText[i] + '</li>';
    }
    newContent += '<div class="fast-facts"  id="fast-facts">';
    newContent += '<h3>' + responseobject.factHeader + '</h3>';
    newContent += '<ul>' + x + '</ul>';
    x = "";
    newContent += '<p>' + responseobject.factExtra + '</p>';
    newContent += '</div>';
     // Div för education div
    for (i in responseobject.educationText) {
        x += '<p>' + responseobject.educationText[i] + '</p>';
    }
    newContent += ' <div class="context-education"  id="context-education">';
    newContent += '<h3>' + responseobject.educationHeader + '</h3>';
    newContent += x;
    x = "";
    newContent +='</div>';
     // Div för courses
    for (i in responseobject.coursesText) {
        x += '<li>' + responseobject.coursesText[i] + '</li>';
    }
    newContent += '<div class="java-courses" id="java-courses">';
    newContent += '<h3>' + responseobject.coursesHeader + '</h3>';
    newContent += '<ul>' + x + '</ul>';
    x = "";
    newContent += '<p>' + responseobject.coursesExtra + '</p>';
    newContent += '</div>';
    // Div för appropriate
    for (i in responseobject.appropriateText) {
        x += '<p>' + responseobject.appropriateText[i] + '</p>';
    }
    newContent += '<div class="java-appropriate"id="java-appropriate">';
    newContent += '<h3>' + responseobject.appropriateHeader + '</h3>';
    newContent += x;
    x = "";

    newContent += '</div>';

  //  newContent += '<img src="img/programmering.png">';


    //Div fär application
    newContent += '<div class="java-application"  id="java-application">';
    newContent += '<h3>' + responseobject.applicationHeader + '</h3>';
    newContent += '<p>' + responseobject.applicationText + '</p>';

    //Div för contact
    for (i in responseobject.contactText) {
        if (i == 1){
            x += '<p class="bold">' + responseobject.contactBold[0] + '</p>';
        }
        else if (i == 4){
            x += '<p class="bold">' + responseobject.contactBold[1] + '</p>';
        }
        x += '<p>' + responseobject.contactText[i] + '</p>';

    }

    newContent += '</div>';
    newContent += '<div class="java-contact"  id="java-contact">';
    newContent += '<h3>' + responseobject.contactHeader + '</h3>';
    newContent += x;

    newContent += '</div>';
    newContent += '</div>';
    newContent += '</div>';




    document.getElementById('content').innerHTML = newContent;
};

xhr.open('GET', 'data/java.json', true);
xhr.send(null);

