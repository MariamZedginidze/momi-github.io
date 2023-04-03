
const scroll_btn = document.getElementById('scroll-btn');
const element_to_scroll_to = document.getElementById('services');

gsap.registerPlugin(ScrollToPlugin);
// document.getElementById("scroll-btn").onclick = function() {
//   window.scrollTo({
//      top: 100,
//     //  left: 100,
//     //  behavior: 'smooth'
//   });
// }

btn = document.getElementById("scroll-btn");
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, ease: "sine.out", scrollTo:{y:"#services" , offsetY:50}});
  });


  pentitle="SCSS Arrow Animation";


//Form

const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");

const tl = gsap.timeline({ defaults: { duration: 1 } });


//Submit button
const button = document.querySelector("button");
const tl3 = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power2.easeOut" },
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  tl3.to(".contact-right, .contact-left", {
    y: 30,
    opacity: 0,
    pointerEvents: "none",
  });
  tl3.to("form", { scale: 0.8 }, "<");
  tl3.fromTo(".submitted", { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
  //Hand wave
  gsap.set("#hand", { transformOrigin: "left" });
  gsap.fromTo(
    "#hand",
    { rotation: 0, y: 0 },
    { rotation: -10, y: 2, ease: "elastic(3,0.3)", duration: 2, delay: 1 }
  );
});


//animating words

//first h1
const heading_one = document.querySelector('.heading-one');

const first_words = heading_one.innerHTML.split(/\s+/);

heading_one.innerHTML= " ";

first_words.forEach(word => {
  heading_one.innerHTML += '<span class="word">' + " " +  word +  '</span>';
})

//second h1
const heading_two = document.querySelector('.heading-two');

const second_words = heading_two.innerHTML.split(/\s+/);

heading_two.innerHTML= " ";

second_words.forEach(word => {
  heading_two.innerHTML += '<span class="word">' + " " +  word +  '</span>';
})


gsap.set(".word", {display: 'block'})
gsap.fromTo('.word', { y: "100%", x: "20%", opacity: 0}, { y: "0", x: "0", delay: 0.1, stagger: 0.2, ease: "back.out(1)", opacity: 1, duration: 1 }); 

gsap.fromTo('.service-desc', { opacity: 0}, { delay: 0.1, opacity: 1, duration: 1 }); 


// arrow
gsap.set(".arrows", {opacity: '0'})
gsap.fromTo('.arrows', { opacity: 0}, { opacity: 1, duration: 1 }, '>0.7'); 

