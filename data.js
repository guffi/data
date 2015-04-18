$.ajax({
  'url': 'http://apis.is/cyclecounter',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    console.log(response);

    $("#data").html(response['results'][0]['DayCount']);

	}
});

$.ajax({
  'url': 'http://apis.is/eitthvað nýy url',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    console.log(response);

    $("#data").html(response['results'][0]['DayCount']);

	}
});



/* $(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

   var getPoster = function(){

        var film = $('#term').val();

         if(film == ''){

            $('#poster').html("Ha! We haven't forgotten to validate the form! Please enter something.");

         } else {

            $('#poster').html("Your poster is on its way!");

            $.getJSON("http://apis.is/cyclecounter/" + film + "?callback=?", function(json) {
               if (json != "Nothing found."){
                     $('#poster').html("<img src=json[0].posters[0].image.url/>");
                  } else {
                     $.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/goonies?callback=?", function(json) {
                        console.log(json);
                        $('#poster').html("<img src=json[0].posters[0].image.url/>");
                     });
                  }
             });

          }

        return false;
   }
*/

/*
   $('#search').click(getPoster);
   $('#ajax').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

});
*/