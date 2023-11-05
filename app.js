
//  While Loops




// var i = 0
// while (i <= 3) {
//     alert(i)
//     i++
// }



// Do while loops




// var i = 0;
// do {
//     alert(i);
//     i++;
// } while (i <= 3);









// Placing Script file
// commenting --- Single & Multi Line
// Event link
// onclick --- Attribute
// Events Button
// Events Mouse   --- onMouseover
// Events field --- like Inputs field
// Reading field value
// Reading & setting paragraph text




// const heading = document.getElementsByTagName("h1")
// [0].setAttribute('onmouseover', 'alert("mouseOver-Done")')







// =================================go=========================================



// const paragraph = "This is a peragraph. it is a  very long long pera. it containt Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nisi earum aspernatur fugit blanditiis reprehenderit minima. Adipisci libero, a cumque architecto nemo est porro voluptas, quis fuga neque similique ipsam eligendi! Optio, recusandae alias voluptatum cupiditate reiciendis culpa, unde, soluta aliquid illum earum eos itaque corrupti tempore ipsam asperiores consequatur! the tregify of the menu bar command to list vko prhsetv ldrogv xsikrvm cndsfr hdfdsfkv ksfgong. "

// const para = document.querySelector('p')

// para.textContent = paragraph.slice(0, 10) + "..."



// const button = document.querySelector('button');

// button.setAttribute('onclick', 'showMore()');


// function showMore() {
//     para.textContent = paragraph
//     button.textContent = 'Show Less'
//     button.setAttribute('onclick', 'showLess()');
// }




// function showLess() {
//     para.textContent = paragraph.slice(0, 10) + "..."
//     button.textContent = "Show More"
//     button.setAttribute('onclick', 'showMore()');
// }


// ============================go=================================================


// ============================================font size ==========



// var numofFontinc = 16
// var numofFontdec = 16

// function makeBig() {
//     document.getElementById("p1").style.fontSize = `${++numofFontinc}px`
// }
// function makesmall() {
//     document.getElementById("p1").style.fontSize = `${--numofFontdec}px`
// }


// ==============================================================font size=================





// ======================= Events in javaScript =================================

// onclick Event


//  ===========================================================================// addEventListener========

// one

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', function(){
//     alert("hey you clicked me !")
// })



// two


// const btn = document.querySelector('.btn')

// btn.addEventListener('click', function(event){
    // console.log(event.currentTarget);
    // or
// console.log(this);
// console.log(this.textContent);
// })



//  ===========================================================================// addEventListener========




// =================== function style =====================

// function (num) {

// }


// const addNumber = (num) => {
//     return nim + 1
// }


// const addNumber = (num) => num + 1

// const addNumber = num => num + 1


// =================== function style =====================




// ______________________________________________Practice Event _____________________________________

// one

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', function() {
//     console.log("hey Click Me .");
// })


// Two

// const btn = document.querySelector('.btn')
// const heading = document.querySelector('h2')
// btn.addEventListener('click', function() {
//         heading.classList.add('blue')
//     })


// Three

// const btn = document.querySelector('.btn')
// const heading = document.querySelector('h2')
// function changeColor () {
//     let hasClass =heading.classList.contains('blue')
//     if(hasClass) {
//         heading.classList.remove('blue')
//     }else {
//         heading.classList.add('blue')
//     }
// }

// btn.addEventListener('click', changeColor)