import {Carousels} from './Carousels.js'
window.onload=function(){
  let carousels = new Carousels();
  carousels.init({
    intervalTime:2000
  });
}