//   let slideIndex = 0;
//   let videoEl;
//   let timeout=7000;
//   showSlides();

//   function showSlides() {
//       timeout = 7000;
//       const slides = document.getElementsByClassName("mySlides");
//       for (let i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";
//             if(slides[i].dataset.hasvideo === "1"){
//                 videoEl = document.getElementById(slides[i].dataset.videoid)
//                 videoEl.pause();
//             }
//       }
      
//       slideIndex++;
//       if (slideIndex > slides.length) {
//           slideIndex = 1;
//       }
//        slides[slideIndex - 1].style.display = "block";
//        if(slides[slideIndex - 1].dataset.hasvideo === "1"){
//             videoEl = document.getElementById(slides[slideIndex - 1].dataset.videoid)
//             console.log(videoEl);
//             videoEl.play();
//             timeout = videoEl.duration * 1000;
//        }

//       setTimeout(showSlides, timeout); // Change slide every 7 seconds
//    }