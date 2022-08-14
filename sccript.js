const header= document.querySelector('.upperbar').clientHeight;
const nav=document.getElementById('navbar')
window.addEventListener('scroll',() =>{
   
    if(window.pageYOffset || document.documentElement.scrollTop > header){
        nav.classList.add('fixed')
    }
    else{
        nav.classList.remove('fixed')
    }
})

//small device nav kh button is functionality
const shopbtn = document.getElementById('shopmenu-togg');
const shopmenu = document.getElementById('shopsidemenu');

const carrerbtn = document.getElementById('carrermenu-togg');
const carrermenu = document.getElementById('carrer-sideme');

shopbtn.addEventListener('click',()=>{
  
    shopmenu.classList.toggle('toggle')
    shopbtn.classList.toggle('rotate')
    
})
carrerbtn.addEventListener('click',()=>{
    carrermenu.classList.toggle('toggle')
    carrerbtn.classList.toggle('rotate')
})

//open close nev
const closebtn=document.querySelector('.close-btn')
const openbtn=document.querySelector('.btn-togg')
const sidenav=document.querySelector('.sidenavmain')


openbtn.addEventListener('click',()=>{
    sidenav.classList.add('display-sidenav')
})
closebtn.addEventListener('click',()=>{
    sidenav.classList.remove('display-sidenav')
})

//search btn popup
const opensearch=document.querySelector('.sjs')
const opensearch2=document.querySelector('.sjs2')
const searchpop=document.querySelector('.searcharea')
const closesearch=document.querySelector('.closesearch-dis')

opensearch.addEventListener('click',()=>{
    searchpop.classList.add('search-display')
})
opensearch2.addEventListener('click',()=>{
    searchpop.classList.add('search-display')
})
closesearch.addEventListener('click',()=>{
    searchpop.classList.remove('search-display')
})
