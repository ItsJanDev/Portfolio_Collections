function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance)
    elements[instance].scrollIntoView({behavior: 'smooth'})
}

function scrollToSection(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance)
    elements[instance].scrollIntoView({behavior: 'smooth'})
    document.getElementById('nav-button').style.display = "block";
}

function scrollToServices(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance)
    elements[instance].scrollIntoView({behavior: 'smooth'})
    document.getElementById('nav-button').style.display = "none";
}


function displaylogo(elementSelector){
    
    const containerimg = document.getElementById('for-display');
    const imgsrc = document.getElementById("img-display");
    containerimg.style.display = "block";
    imgsrc.src = "images/logo/"+elementSelector+".jpg";
    imgsrc.style.height = "auto";
    document.getElementById('nav-button').style.display = "none";
    Array.from(document.getElementsByTagName('section')).forEach((element) => element.classList.add("blur-background"));
    Array.from(document.getElementsByTagName('nav')).forEach((element) => element.classList.add("blur-background"));
    document.getElementById('main').style.overflow = "hidden";
    magnify("img-display", 3, imgsrc.src);
}

function undisplaylogo(){
const containerimg = document.getElementById('for-display');
    const imgsrc = document.getElementById("img-display");
    containerimg.style.display = "none";
    imgsrc.src = "";
    imgsrc.style.height = "auto";
    imgsrc.style.maxWidth = "100%";
    imgsrc.style.alignItems = "center";
    imgsrc.style.margin = "auto";
    document.getElementById('nav-button').style.display = "block";
    Array.from(document.getElementsByTagName('section')).forEach((element) => element.classList.remove("blur-background"));
    Array.from(document.getElementsByTagName('nav')).forEach((element) => element.classList.remove("blur-background"));
    document.getElementById('main').style.overflow = "visible";

}



function displayshirt(elementSelector){
    
    const containerimg = document.getElementById('for-display');
    const imgsrc = document.getElementById("img-display");
    containerimg.style.display = "block";
    imgsrc.src = "images/tshirt/"+elementSelector+".jpg";
    imgsrc.style.height = "auto";
    document.getElementById('nav-button').style.display = "none";
    Array.from(document.getElementsByTagName('section')).forEach((element) => element.classList.add("blur-background"));
    Array.from(document.getElementsByTagName('nav')).forEach((element) => element.classList.add("blur-background"));
    document.getElementById('main').style.overflow = "hidden";
    magnify("img-display", 3, imgsrc.src);
}

function displayspecialshirt(elementSelector){
    
    const containerimg = document.getElementById('for-display');
    const imgsrc = document.getElementById("img-display");
    containerimg.style.display = "block";
    imgsrc.src = "images/tshirt/"+elementSelector+".jpg";
  imgsrc.style.height = "auto";
    imgsrc.style.maxWidth = "85%";
    imgsrc.style.alignItems = "center";
    imgsrc.style.margin = "auto";  
    document.getElementById('nav-button').style.display = "none";
    Array.from(document.getElementsByTagName('section')).forEach((element) => element.classList.add("blur-background"));
    Array.from(document.getElementsByTagName('nav')).forEach((element) => element.classList.add("blur-background"));
    document.getElementById('main').style.overflow = "hidden";
    magnify("img-display", 3, imgsrc.src);
}

function displayfeatured(elementSelector){
    
    const containerimg = document.getElementById('for-display');
    const imgsrc = document.getElementById("img-display");
    containerimg.style.display = "block";
    imgsrc.src = "images/featured/"+elementSelector+".jpg";
    imgsrc.style.height = "auto";
    document.getElementById('nav-button').style.display = "none";
    Array.from(document.getElementsByTagName('section')).forEach((element) => element.classList.add("blur-background"));
    Array.from(document.getElementsByTagName('nav')).forEach((element) => element.classList.add("blur-background"));
    document.getElementById('main').style.overflow = "hidden";
    magnify("img-display", 3, imgsrc.src);
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

const service1 = document.getElementById("service1");

const btnstart = document.getElementById("btnstart");

const popupclose = document.getElementById("popup-close");

const logo1 = document.getElementById("logo1");
const imgdisplay = document.getElementById("img-display");

const navbutton = document.getElementById("nav-button");


link1.addEventListener('click', () =>{
    scrollToElement('.header')
});

link2.addEventListener('click', () =>{
    scrollToSection('.header', 1)
});

service1.addEventListener('click', () =>{
    scrollToSection('.header', 2)
})

service4.addEventListener('click', () =>{
    scrollToSection('.header', 3)
})

service5.addEventListener('click', () =>{
    scrollToSection('.header', 3)
})

service6.addEventListener('click', () =>{
    scrollToSection('.header', 3)
})

link3.addEventListener('click', () =>{
    scrollToSection('.column')
});

navbutton.addEventListener('click', () =>{
    scrollToServices('.header')
});

btnstart.addEventListener('click', () =>{
    scrollToElement('.header')
});

popupclose.addEventListener('click', () =>{
    undisplaylogo()
});

logo1.addEventListener('click', () =>{
    displaylogo('ld1')
});
logo2.addEventListener('click', () =>{
    displaylogo('ld2')
});

logo3.addEventListener('click', () =>{
    displaylogo('ld3')
});

logo4.addEventListener('click', () =>{
    displaylogo('ld4')
});

logo5.addEventListener('click', () =>{
    displaylogo('ld5')
});
logo6.addEventListener('click', () =>{
    displaylogo('ld6')
});

logo7.addEventListener('click', () =>{
    displaylogo('ld7')
});

logo8.addEventListener('click', () =>{
    displaylogo('ld8')
});
logo9.addEventListener('click', () =>{
    displaylogo('ld9')
});



tshirt1.addEventListener('click', () =>{
    displayshirt('td1')
});
tshirt2.addEventListener('click', () =>{
    displayshirt('td2')
});

tshirt3.addEventListener('click', () =>{
    displayshirt('td3')
});

tshirt4.addEventListener('click', () =>{
    displayshirt('td4')
});

tshirt5.addEventListener('click', () =>{
    displayspecialshirt('td5')
});
tshirt6.addEventListener('click', () =>{
    displayshirt('td6')
});


ft1.addEventListener('click', () =>{
    displayfeatured('fd1')
});
ft2.addEventListener('click', () =>{
    displayfeatured('fd2')
});

ft3.addEventListener('click', () =>{
    displayfeatured('fd3')
});

ft4.addEventListener('click', () =>{
    displayfeatured('fd4')
});


//magnify function

function magnify(imgID, zoom, path) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
  
    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
  
    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);
    console.log(img);
  
    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + path + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
  
    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }
