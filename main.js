
let activeFirstBtn = document.querySelector('.first-btn');
let activeSecondBtn = document.querySelector('.second-btn');
let activeThirdBtn = document.querySelector('.third-btn');
let buttonActive = document.querySelectorAll('button');
let images = document.querySelectorAll('images');



// let display1 = activeFirstBtn.getAttribute('display')
// let display2 = activeSecondBtn.getAttribute('display')
// let display3 = activeThirdBtn.getAttribute('display')

// console.log(document);
// console.log(activeBtn)


buttonActive.forEach(button => {
    button.addEventListener('click', function() {
        buttonActive.forEach( btn => btn.classList.remove('active'));
        this.classList.add('active');
        images.forEach(i => {
            // i.style.display = (display ? 'block' : 'none')
            // i.classList.add('active-image')
            // i.classList.remove('hidden-image')
        })
    })
})




// buttonActive.forEach(button => {
//     button.addEventListener('click', function() {
//         buttonActive.forEach( btn => btn.classList.remove('active-image'));
//         this.classList.add('active-image');
//     })
// })


// buttonActive.forEach(button => {
//     button.addEventListener('click', function() {
//         buttonActive.forEach( image => image.classList.remove('hidden-image'));
//         this.classList.add('active-image');
//     })
// })

// images.forEach(button => {
//     button.addEventListener('click', function() {
//         images.forEach(imag => imag.classList.remove('hidden-image'));
//         this.classList.add('active-image');
//         console.log(images)
//     })
// })



// buttonActive.forEach(button => {
//     buttonActive.addEventListener('click', (e) => {
//         if (e.target.matches('button')) {
//           const i = buttonActive.indexOf(e.target);
//           images[i].classList.toggle('hidden-image');
//         }
//     })
// })




function showImage() {
    // console.log('click');
    let image = document.querySelector('.image-mask');
//     image.style.display = 'none';
    
 
//     console.log(getComputedStyle(image)); 
//     console.log(image)
//     console.log(image.style.display)
     
//         if(image.style.display = 'none') {
//             // console.log('usao u petlju')
//               image.style.display = 'block';
         
//           } else {
//               image.style.display = 'none';
              
//     }
}

function showBit() {
    let imageBit = document.querySelector('.bit-map');
    // imageBit.style.display= 'none';

    // if(imageBit.style.display == 'none') {
    //     // console.log(isActive)
    //       imageBit.style.display = 'block';
    //       images.classList.toggle('active')

    //   } else {
    //       imageBit.style.display = 'none';

    // }
}

activeSecondBtn.addEventListener('click', showImage);
activeThirdBtn.addEventListener('click', showBit);




const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('show');
})