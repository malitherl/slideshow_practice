//this div will function more or less like a picture frame
const container =  document.getElementById("container");
container.setAttribute("id", "container");

//this div will hold the actual images themselves
const slideContainer = document.createElement("DIV");
slideContainer.setAttribute("id", "slideContainer");
//this is where we link our images for the slideshow

const slide1 = document.createElement("DIV");
slide1.setAttribute("class", "slides fade");
let a = document.createElement("img");
a.src = "https://cdn.pixabay.com/photo/2020/02/23/05/35/alien-4872304_960_720.jpg";
slide1.appendChild(a);

const slide2 = document.createElement("DIV");
slide2.setAttribute("class", "slides fade");
let b = document.createElement("IMG");
b.src = "https://cdn.pixabay.com/photo/2020/02/23/05/35/alien-4872313_960_720.jpg";
slide2.appendChild(b);

const slide3 = document.createElement("DIV");
slide3.setAttribute("class", "slides fade");
let c = document.createElement("IMG");
c.src = "https://cdn.pixabay.com/photo/2020/02/23/05/35/alien-4872311_960_720.jpg";
slide3.appendChild(c);

const slide4= document.createElement("DIV");
slide4.setAttribute("class", "slides fade");
let d = document.createElement("IMG");
d.src = "https://cdn.pixabay.com/photo/2020/02/23/05/35/alien-4872315_960_720.jpg";
slide4.appendChild(d);

let prev = document.createElement("a");
prev.setAttribute("id", "prev");
prev.textContent = "<";

slideContainer.appendChild(prev);
slideContainer.appendChild(slide1);
slideContainer.appendChild(slide2);
slideContainer.appendChild(slide3);
slideContainer.appendChild(slide4);
let next = document.createElement("a");
next.setAttribute("id", "next");
next.textContent = ">";
slideContainer.appendChild(next);

container.appendChild(slideContainer);

let dotContainer = document.createElement("DIV");
dotContainer.setAttribute("id", "dotContainer");

let dot1= document.createElement("DIV");
dot1.setAttribute("class", "dots");
dot1.dataset.id= 0;
dotContainer.appendChild(dot1);
let dot2= document.createElement("DIV");
dot2.setAttribute("class", "dots");
dotContainer.appendChild(dot2);
dot2.dataset.id =1; 
let dot3= document.createElement("DIV");
dot3.setAttribute("class", "dots");
dotContainer.appendChild(dot3);
dot3.dataset.id=2;
let dot4= document.createElement("DIV");
dot4.setAttribute("class", "dots");
dotContainer.appendChild(dot4);
dot4.dataset.id =3;

container.appendChild(dotContainer);


//now to create a function that will change how the display works 
function displayControl(){
    let index =0;
    currentImage(index);
    document.getElementById("next").addEventListener("click", function(){
        if(index< 3){
            index++;
        } else {
            index=0;
        }    
        currentImage(index);
    })
    document.getElementById("prev").addEventListener("click", function(){
        if(index> 0){
            index--;
        } else {
            index=3;
        }
        currentImage(index);
    })

    Array.from(document.getElementsByClassName("dots")).forEach(elem => {
        
        elem.addEventListener("click", function(){
            resetDots();
            let index= elem.dataset.id;
            currentImage(index);
            elem.className += " active";
        })
        
    })


}

function currentImage(index){
    
    let imageArray = Array.from(document.getElementsByClassName("slides"));
    imageArray.forEach(e=> {
        e.style.display = "none";
    })
    imageArray[index].style.display = "flex";

}


function resetDots(){
    Array.from(document.getElementsByClassName("dots")).forEach(e=>{
        e.className = e.className.replace(" active", "");
    })
}

displayControl();


