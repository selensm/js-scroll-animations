(function() {
    let animatedText;
    let windowHeight;
  
    function init() {
      animatedText = document.querySelectorAll('h2');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (let i = 0; i < animatedText.length; i++) {
        let animation = animatedText[i];
        let positionFromTop = animatedText[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
         if (i === 0 ) { 
          animation.classList.add('borders');
         }
         else if (i === 1) {
        animation.classList.remove('hidden');
          animation.classList.add('slide');
         }
         else if (i === 2) {
        animation.classList.remove('hidden');
        animation.classList.add('drop-shadow');
         }
         else {
         animation.classList.remove('hidden');
         animation.classList.add('skew');
         }
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
  
    init();
    checkPosition();
    
  })();