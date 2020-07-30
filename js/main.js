var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_IMAGE_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText){
    'use strict';
    var detail_image = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detail_image.setAttribute('src', imageUrl);
    
    var detail_title = document.querySelector(DETAIL_TITLE_SELECTOR);
    detail_title.textContent = titleText;
}

function imageFromThummb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail){
    'use strict';
    setDetails(imageFromThummb(thumbnail), titleFromThumb(thumbnail)); 
}

function addThumbClickHandler(myThumb){ 
    //method sets listener for each element passed
    'use strict';
    myThumb.addEventListener('click', function(mainEvent){
        mainEvent.preventDefault();
        setDetailsFromThumb(myThumb);
    });
}

function getAllThumbs(){
    'use strict';
    var allThumbs = document.querySelectorAll(THUMBNAIL_IMAGE_SELECTOR);
    
    //convert NodeList to Array
    var arrayThumbs = [].slice.call(allThumbs); 
    
    return arrayThumbs;    
}

function initializeEvents(){
    'use strict';
    var allThumbs = getAllThumbs();
    allThumbs.forEach(addThumbClickHandler);
    
}

//Gold Challenge: Change data-image-url of a random image
function changeImage(){
    //step1 - select the arrays lit
    //step2 - choose a random one
    //step3 - get the data- atribute
    //step4 - change the content/value of data to new src
    
    var arr = getAllThumbs();
    var element = arr[Math.floor(Math.random() * arr.length)];
    
    var newURL = "https://cdn.britannica.com/78/3278-004-90D1CE49/Sea-otter-crab.jpg";
    
//    element.setAttribute('href', newURL);
    
    element.setAttribute('data-image-url', newURL);
    
    
}

//changeImage();
initializeEvents();





















