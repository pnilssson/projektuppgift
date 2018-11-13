let navList, navToggle;

navList = document.getElementById("js-navbar");
navToggle = document.getElementById("js-navbar-toggle");

navToggle.addEventListener('click', function(){
   if(navList.style.display === "" || navList.style.display === "none"){
    navList.style.display = "block";
   }else {
       navList.style.display = "none";
   }
});

