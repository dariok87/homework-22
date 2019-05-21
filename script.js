"use strict";

const catApiURL = "https://api.thecatapi.com/v1/images/search?limit=10";

const resultsContainer = document.querySelector(".js-search_results");
const searchBtn = document.querySelector(".js-search_btn");

function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      resultsContainer.innerHTML = `<h2>An error occured while fetching the data</h2>`
      console.log(err);
    })};

function buildImages(data) {
  let images = ''

  data.map(item => {
    images = images + `<img src="${item.url}" alt="Random cat image">\n`;
  });
  
  return images;
}

searchBtn.addEventListener("click", event => {
  fetchData(catApiURL)
    .then(res => buildImages(res))
    .then(res => resultsContainer.innerHTML = res)
});



