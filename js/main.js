$(document).ready(function(){
  // take the information from the search input
  let images = document.getElementsByTagName('a');

  // get the text that the user has typed
  //use toLowerCase incase the user uses upper case
  $('.search_box').on('keyup',function(){
  let search = $('.searchInput').val().toLowerCase();

  //use a loop to get a particular attribute
  for (var i=0; i<images.length; i++) {
    let searchVal= images[i].getAttribute('data-title');
    // use of a conditional to look for a particular condition.
    if (searchVal.toLowerCase().indexOf(search)> -1) {
      images[i].style.display="";
    } else {
      images[i].style.display="none";
    }
   } 
  });
});
