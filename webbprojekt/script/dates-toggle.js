let dates, datesToggle, datesBG;

dates = document.getElementById("js-dates");
datesToggle = document.getElementById("js-dates-toggle");
datesBG = document.getElementById("js-datum-desktop");

datesToggle.addEventListener('click', function(){
   if(dates.style.display === "block" || dates.style.display === "" || datesBG.style.backgroundColor === "#FAFFFF"){
       dates.style.display = "none";
       datesBG.style.backgroundColor = "#E7EBEB";
       datesBG.style.boxShadow = "none";
   }else {
       dates.style.display = "block";
       datesBG.style.backgroundColor = "#FAFFFF";
       datesBG.style.boxShadow = "0 1px 5px -2px rgba(0,0,0,0.75)";
   }
});

