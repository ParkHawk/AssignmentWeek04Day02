let body = document.querySelector("body");
let input = document.createElement("input");
let button = document.createElement("button");
button.id = "button";
input.placeholder = "Food";
button.innerHTML = `Search`;
body.appendChild(input);
body.appendChild(button);
let searchTerm = document.getElementById('searchTerm');
let div = document.createElement("div");
body.appendChild(document.createElement("hr"));
body.appendChild(div);



document.getElementById("button").addEventListener("click", function() {
  div.innerHTML = ``;
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${input.value}`)
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data);

        for (var i = 0; i < data.results.length; i++) {
          console.log(data.results[i].thumbnail);
          let section = document.createElement("section");
          div.appendChild(section);
          section.className = "fullBox"

          if (data.results[i].thumbnail === "") {
            data.results[i].thumbnail = "http://via.placeholder.com/150x150"
            console.log("if statement");
          }
          section.innerHTML = `<h2>${data.results[i].title}</h2><section id = "innerBox"><img src = ${data.results[i].thumbnail}><a href = ${data.results[i].href} >Recipe</a></section>`
        }
      })
    })
});
