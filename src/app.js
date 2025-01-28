/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extencion = [".com", ".net", ".us", ".io"];
  function selectrandom(arr) {
    for (let i in arr) {
      return arr[i];
    }
  }

  let dominio =
    "www." +
    selectrandom(pronoun) +
    selectrandom(adj) +
    selectrandom(noun) +
    selectrandom(extencion);
  console.log(dominio);
};
