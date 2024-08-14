const itemslider = document.querySelectorAll(".cartegory-left-li")
console.log(itemslider)
itemslider.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})
// -----------------------------Product------------------
const gioithieu = document.querySelector(".gioithieu")
const chitietsp = document.querySelector(".chitietsp")
const baoquan = document.querySelector(".baoquan")
if(gioithieu){
    gioithieu.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitietsp").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        baoquan.classList.remove("add-activeA")
        chitietsp.classList.remove("add-activeA")
        gioithieu.classList.add("add-activeA")
       
    })
  }
if(chitietsp){
    chitietsp.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitietsp").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        gioithieu.classList.remove("add-activeA")
        baoquan.classList.remove("add-activeA")
        chitietsp.classList.add("add-activeA")
    })
  }
if(baoquan){
    baoquan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitietsp").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "none"
        gioithieu.classList.remove("add-activeA")
        baoquan.classList.add("add-activeA")
        chitietsp.classList.remove("add-activeA")
        
    })
  }

  const butTon = document.querySelector('.product-content-right-bottom-top')
  if(butTon){
    butTon.addEventListener('click', function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
  }

  const bigImg = document.querySelector('.product-content-left-big-img img')
  const smallImg = document.querySelectorAll('.product-content-left-small-img img')
  smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener('click',function(){
        bigImg.src = imgItem.src
    })
  })
  
