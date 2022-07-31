const btns = document.querySelectorAll(".tabs__btn")
const contents = document.querySelectorAll(".tabs__content")
const img = document.querySelector(".tabs__img")

const scrollBtns = document.querySelectorAll(".nav__item")

btns.forEach(e => e.addEventListener("click", changeTabs))
scrollBtns.forEach(e => e.addEventListener("click", activateScroll))


function changeTabs(el) {
   contents.forEach(e => e.classList.remove("active"))
   btns.forEach(e => e.classList.remove("active"))
   console.log(el)
   el.target.classList.add("active")

   if (el.target.innerText == "TAB 1") {
      contents[0].classList.add("active")
      img.classList.add("active")
   }
   else if (el.target.innerText == "TAB 2") {
      contents[1].classList.add("active")
      img.classList.remove("active")
   }
   else if (el.target.innerText == "TAB 3") {
      contents[2].classList.add("active")
      img.classList.remove("active")
   }

}
function activateScroll(e){
   event.preventDefault()
   if(scrollBtns[0] == e.target){
      window.scrollTo({top:900, behavior:"smooth"})
   } else if(scrollBtns[1] == e.target){
      window.scrollTo({top:2650, behavior:"smooth"})
   } else if(scrollBtns[2] == e.target){
      window.scrollTo({top:3350, behavior:"smooth"})
   } else if(scrollBtns[3] == e.target){
      window.scrollTo({top:4300, behavior:"smooth"})
   } else if(scrollBtns[4] == e.target){
      window.scrollTo({top:5300, behavior:"smooth"})
   }
}