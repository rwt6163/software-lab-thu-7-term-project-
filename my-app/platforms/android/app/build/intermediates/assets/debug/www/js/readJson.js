$(document).ready(function() {
    $("#tt").click(function() {
        alert("씨발");
    });

 });


 $("#read").click(function() {
         alert("씨발");
         $.getJSON("http://192.168.10.102/json.php",function(result) {
             var lst="";
             $.each(result, function(i,row) {
                 lst += "<li><h2>"+row+"</h2></li>";
             });
                     $("#lv").empty();
                     $("#lv").append(lst);
                     $("#lv").listview("refresh");
         });
      });