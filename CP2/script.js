// API to get cat picture
function getCat() {
  fetch ("https://api.thecatapi.com/v1/images/search")
  .then(stuff => stuff.json())
  .then(data => {
    let results = `<img height="200" src="${data[0].url}" />`;
    document.getElementById("catStuff").innerHTML = results;
  })
}

// gives another cat picture on click
window.onload = function(){
  getCat();
  document.getElementById("morecatz").addEventListener("click", getCat)
};