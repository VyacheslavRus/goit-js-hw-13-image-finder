import galleryTemplate from '../templates/gallery.hbs'
import api from './fetch_finder'

const form = document.querySelector('.search-form')
const btn = document.querySelector('.more')
const input = document.querySelector('input')
let pageNumber = 1;

form.addEventListener('submit', formSubmit)
btn.addEventListener('click', moreBtn)

function formSubmit(e){
e.preventDefault();
const searchQuery = e.currentTarget.elements.query.value 
console.log(searchQuery);
clearGallery()
if(searchQuery!== ''){
api.fetchCard(searchQuery, pageNumber) 
.then(murkupMoreList);   
}
}

function clearGallery(){
  const galleryClear = document.querySelector('.gallery').innerHTML = '';      
}

function moreBtn(e) {
    const searchQuery = inputValue()    
    pageNumber++
    api.fetchCard(searchQuery, pageNumber)
    .then(murkupMoreList);
}

function  inputValue(e) {
    return input.value
}

function murkupMoreList(data){
    const moreList = document.querySelector('.gallery').insertAdjacentHTML('beforeend', galleryTemplate(data))  
    window.scrollTo({
        top: document.documentElement.scrollHeight - 100,
        behavior: 'smooth',
      });
}
