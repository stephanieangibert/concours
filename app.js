/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
//  document.querySelector("#particles-js").addEventListener("mouseover",()=>{
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
//  })
const tab = Array.from(document.querySelectorAll("section"));
if (innerWidth < 1500){
  document.querySelector(".btn").addEventListener("click", ()=>{
// document.querySelector("#accueil").classList.add("hamburgerActive");
document.querySelector("header").style.display = "none";
  })
  document.querySelector(".btn1").addEventListener("click", ()=>{
    document.querySelector("header").style.display = "none";

      })
      document.querySelector(".btn2").addEventListener("click", ()=>{
        document.querySelector("header").style.display = "none";
    
          })
          document.querySelector(".btn3").addEventListener("click", ()=>{
            document.querySelector("header").style.display = "none";
        
              })
 
  document.querySelector(".hamburger").style.display = "block";

  document.querySelector(".hambToggle").addEventListener("click",()=>{
    document.querySelector("header").style.display = "block";
    document.querySelector("#accueil").classList.remove("hamburgerActive");
  })
}
const mot=document.querySelector(".motA");
const motB=document.querySelector(".motB");
const motC=document.querySelector(".motC");
const motD=document.querySelector(".motD");
mot.addEventListener("mouseover",()=>{
mot.innerHTML="sérendipité";
})
mot.addEventListener("mouseout",()=>{
    mot.innerHTML="cherchais";
    })
 motB.addEventListener("mouseover",()=>{
 motB.innerHTML="bigarrure";
        })
 motB.addEventListener("mouseout",()=>{
            motB.innerHTML="préféré";
            })

 motC.addEventListener("mouseover",()=>{
 motC.innerHTML="inextinguiblement.";
                       })
 motC.addEventListener("mouseout",()=>{
 motC.innerHTML="continuellement.";
                           })
motD.addEventListener("mouseover",()=>{
motD.innerHTML="nourrir&nbsp&nbsp&nbsp";
                                                  })
motD.addEventListener("mouseout",()=>{
 motD.innerHTML="enrichir";
                       })                           

console.log( innerWidth);
Aos.init();



