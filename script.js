let ofset = 0;
let count = 0;
let width;
const sliderLine = document.querySelector('.slider-line');
const items = document.querySelectorAll('.slider-line > div');
const btnNext = document.querySelector('.slider-btn__next');
const btnPrev = document.querySelector('.slider-btn__prev');

    
//функция адаптации
function init(){
    width = document.querySelector('.slider').offsetWidth;
    btnNext.style.left = width - 43 + 'px';
    for(let i = 0; i < items.length; i++){
        items[i].style.width = width / 2 + 'px';
    };
};
window.addEventListener('resize',init);
init();


//функция перелистывание

// перелистывание Next
btnNext.addEventListener('click', next);

function scrollSlider(){
    sliderLine.style.transform = 'translate(-' + count *  (width / 2) + 'px';
};

function next(){
    count++
    if(count >= (items.length - 1)){
        count = 0;
    }
    scrollSlider()
};


// перелистывание Prev
btnPrev.addEventListener('click', prev);

function prev(){
    count--
    if(count  < 0){
        count = items.length-2
    }
    scrollSlider()
};






/* document.querySelector('.slider-btn__next').addEventListener('click', ()=>{
    ofset = ofset + 240;
    
    if (ofset > 720){
       ofset = 0;
    }
    sliderLine.style.left = -ofset + 'px'; 
});




document.querySelector('.slider-btn__prev').addEventListener('click', ()=>{
    ofset = ofset - 240;
    
    if (ofset < 0){
        ofset = 720;
    }
    sliderLine.style.left = -ofset + 'px'; 
}); */
