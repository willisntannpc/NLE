const bgImageEl = document.getElementById("bg-image")

window.addEventListener("scroll", ()=>{
    updateImage()
})

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900
    console.log(window.pageYOffset, 1 - window.pageYOffset / 900); 
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%" 

}


function myfunction(event) {
   event.preventDefault();
  
   document.getElementById("fnames")
   document.getElementById("type of event desired")
   document.getElementById("venue")
   document.getElementById("no of guests")
   document.getElementById("special requests")
   document.getElementById("date")
   document.getElementById("email address")

   console.log(myfunction) 
   }

  

   document.getElementById('bookingForm').addEventListener('submit', myfunction);
  const button = document.getElementsByClassName("button")
   button.onClick(()=>{
     button.innerHTML = "Booked"
   })

  function myfunction()
  { 
     document.getElementById("button-txt").innerHTML = "booked"

  }
 

   const selectElement = document.getElementById('type of event desired')
   const outputDiv = document.getElementById('type of event desired')

   const selectElement2 = document.getElementById('venue')
   const outputDiv2 = document.getElementById('venue')

     selectElement.addEventListener('change', (event) => {
       const selectedvalue = event.target.value;
          outputDiv.textContent = `Selected value: ${selectedvalue}`;
       });

     selectElement.addEventListener('change', (event) => {
      const selectedvalue = event.target.value;
       outputDiv2.textContent =   `selected value: ${selectedvalue}`;
     })

     