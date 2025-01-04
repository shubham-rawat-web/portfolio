
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      
        
      
    
      function openPopup() {
        document.getElementById('popup').style.display = 'flex';
      }
  
      // Close the popup
      function closePopup() {
        document.getElementById('popup').style.display = 'none';
      }


      document.addEventListener("DOMContentLoaded", () => {
        const texts = [ "Shubham Rawat", ];
        const typingElement = document.getElementById("typing-text");
        let textIndex = 0; // Tracks the current text
        let charIndex = 0; // Tracks the current character of the text
        const typingSpeed = 300; // Speed of typing in ms
        const pauseBetweenTexts = 1500; // Pause before switching texts
      
        function typeText() {
          if (charIndex < texts[textIndex].length) {
            typingElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
          } else {
            setTimeout(deleteText, pauseBetweenTexts);
          }
        }
      
        typeText();
      });
     

      // wish me 

      function speak(text) {
        const text_speak = new SpeechSynthesisUtterance(text);
    
        text_speak.rate = 0.8;
        text_speak.volume = 1;
        text_speak.pitch = 1;
       
    
        window.speechSynthesis.speak(text_speak);
    }
    
    function wishMe() {
        var day = new Date();
        var hour = day.getHours();
        if (hour >= 0 && hour < 12) {
            speak("Good Morning shubham");
        } else if (hour >= 12 && hour < 17) {
            speak("Good Afternoon shubham ");
            
        } else {
            speak("Good Evening shubham ");
        }
    }
    
    window.addEventListener('load', () => {
         
      
        
         speak("welcome to shubham portfolio");
         wishMe()

    });