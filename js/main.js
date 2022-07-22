let socials = document.querySelectorAll('.social div')
socials.forEach(function(social, index) {
   social.style.animation = `movein 1s ease-in-out forwards ${index/5 + 0.5}s`
})


let rocketline = document.querySelectorAll('.rocket-body span');

let rocket = document.querySelector('.rocket');

let triggerStart = window.innerHeight / 5;

let rocketOffsetTop = rocket.offsetTop;

let thirdoffsettop = rocketline[2].offsetTop;

document.addEventListener('scroll', (e) => {
   if(window.scrollY > (rocketOffsetTop - triggerStart)){
      rocketline[0].classList.add('active');
      rocketline[1].classList.add('active');
   }
   else{
      rocketline[0].classList.remove('active');
      rocketline[1].classList.remove('active');
   }

   if(window.scrollY > (thirdoffsettop - triggerStart)){
      rocketline[2].classList.add('active');
   }
   else{
      rocketline[2].classList.remove('active');
   }
})
