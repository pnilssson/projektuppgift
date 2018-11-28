let dates, datesToggle;

dates = document.getElementById("js-dates");
datesToggle = document.getElementById("js-dates-toggle");

datesToggle.addEventListener('click', function(){
   if(dates.style.display === "" || dates.style.display === "none"){
       dates.style.display = "block";
   }else {
       dates.style.display = "none";
   }
});

