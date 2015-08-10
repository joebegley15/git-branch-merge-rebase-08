$(document).ready(function(){
  $('#magic-button').on('click', function(e) {
    var sa = 'http://jsonplaceholder.typicode.com';
    $.ajax({
      url: sa + '/posts',
      method: 'GET'
    }).done(function(data) {
      document.getElementById(listOne).innerHTML = "";
      document.getElementById(listOne).append("<li></li>");
    });
  });
});
