
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
})

links.forEach((link) => {
  link.addEventListener('click', ()=> {
    nav.classList.remove("active");
  })
})


//Send email on click

const buttonsContact = document.querySelectorAll("#btn-two");

buttonsContact.forEach(button => {
  button.addEventListener("click", function hey() {

    Swal.fire({
      title: "<strong>Envoyez-moi un message :</strong>",
      html: `
        <form action="https://formspree.io/f/xvoegyba" method="POST" class="email">
          <label>
            Votre email:
            <input type="email" name="email" required="" placeholder="email...">
          </label>
          <label>
            Votre message:
            <textarea name="message" required="" placeholder="message..."></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  });
})



// Button Show More / Show Less //

function toggleText() {

  let moreText = document.querySelector("#showMore");
  let btnShowMore = document.querySelector("#btn-show-more");
  let dots = document.querySelector("#dots");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnShowMore.innerHTML = "En savoir plus";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnShowMore.innerHTML = "Masquer";
    moreText.style.display = "inline";
  }
}

//GSAP Animation//

gsap.registerPlugin("ScrollTrigger");

gsap.from(".list", {
  scrollTrigger: {
    trigger: ".list",
    start: "20px 80%",
    toggleActions: "restart pause reverse pause"
},
  opacity: 0,
  stagger: .6,
  delay: 0
});

gsap.to(".triangle", {
  scrollTrigger: {
    trigger: ".triangle",
    start: "20px 80%",
    toggleActions: "restart pause reverse pause"
  },
  rotation: 360,
  duration: 1.5
});

gsap.from(".cert", {
  scrollTrigger: {
    trigger: ".cert",
    start: "20px 80%",
    toggleActions: "restart pause reverse pause"
},
  opacity: 0,
  stagger: .3,
  delay: 0
});

gsap.to(".active", {
  scrollTrigger: {
    trigger: ".active",
    start: "top",
    toggleActions: "play complete restart reverse"
  },
  opacity: 0,
  delay: 0
})




//const back = document.querySelector("#btn-back");
//const forward = document.querySelector("#btn-forward");

 /* const benefitTitle = ["Gestion du stress", "Apprentissage", "Fatigue", "Troubles psychosomatiques"];
const descriptions = ["* Stress, * Gestion des émotions, * Angoisses passagères, * Peurs diverses : troubles du sommeil (en lien avec le stress, peur du noir, de la mort, de la nuit, difficultés à s’endormir",
"Apprentissage : en cas de problème ou bien volonté d’améliorer ses compétences cognitives.",
"Fatigue : surmenage professionnel, personnel",
"Si vous avez déjà entendu les phrases suivantes : « c’est le stress », « je ne peux rien faire pour vous », « c’est dans la tête »… La kinésiologie peut vous aider!"
]

let currentIndex = 0;

function updateContent(index) {
    document.querySelector("#benefit").textContent = benefitTitle[index];
    description.textContent = descriptions[index];
}

forward.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= benefitTitle.length) {
      currentIndex = 0;
    }
    updateContent(currentIndex);
  });
  
  back.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = benefitTitle.length - 1;
    }
    updateContent(currentIndex);
  });
  
  updateContent(currentIndex);
  */

 // let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
 // showSlides(slideIndex += n);
//}

// Thumbnail image controls
//function currentSlide(n) {
 // showSlides(slideIndex = n);
//}

//function showSlides(n) {
 // let i;
  //let slides = document.getElementsByClassName("carousel");
 // let dots = document.getElementsByClassName("dot");
 // if (n > slides.length) {slideIndex = 1}
 // if (n < 1) {slideIndex = slides.length}
 // for (i = 0; i < slides.length; i++) {
 //   slides[i].style.display = "none";
 // }
 // for (i = 0; i < dots.length; i++) {
 //   dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
 // dots[slideIndex-1].className += " active";
//}

//Button "Read more"//

