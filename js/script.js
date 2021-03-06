var url = 'http://api.icndb.com/jokes/random';
var joke = document.getElementById('joke');

var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
  getJoke();
});

function getJoke() {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  
  request.addEventListener('load', function() {
    var response = JSON.parse(request.response);
    joke.innerHTML = response.value.joke;
  });
  
  request.send();
}

window.onload = getJoke();