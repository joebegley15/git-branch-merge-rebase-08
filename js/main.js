  $(document).ready(function(){
    var sa = 'http://jsonplaceholder.typicode.com';
    $.ajax({
      url: sa + '/posts',
      method: 'GET'
    }).done(function(data) {
      console.log(data);
    });
  });
