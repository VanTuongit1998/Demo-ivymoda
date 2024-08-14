const header = document.querySelector("header")
    window.addEventListener("scroll",function(){
        x = window.pageYOffset
        if(x>0){
            header.classList.add("sticky")
        }
        else {
            header.classList.remove("sticky")
        }
    })

    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer = document.querySelector(".aspect-ratio-169")
    const dotItem = document.querySelectorAll(".dot")
    let imgNumber =  imgPosition.length
    let index = 0;
    imgPosition.forEach(function(image, index){      
        image.style.left = index*100 + "%"
        dotItem[index].addEventListener("click", function(){
            slider(index)
        })
    })
    function imgSlider(){
        index++;
        console.log(index)
        if(index>=imgNumber){index = 0}
        slider(index)
    }
    function slider (index){
        imgContainer.style.left = "-" + index*100 + "%"
        const dotActive = document.querySelector(".active")
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active") 
    }
    setInterval(imgSlider,5000)
//---------------------------------------
    document.getElementById('clickParagraph1').addEventListener('click', function() {
        var img1 = document.getElementById('image1');
        var img2 = document.getElementById('image2');
        var img3 = document.getElementById('image3');
        var img4 = document.getElementById('image4');
          img1.style.display = 'block';
          img2.style.display = 'block';
          img3.style.display = 'none';
          img4.style.display = 'none'
          document.getElementById('clickParagraph2').classList.remove('add-active')
          document.getElementById('clickParagraph1').classList.add('add-active') 
          
      });
      document.getElementById('clickParagraph2').addEventListener('click', function() {
          var img2 = document.getElementById('image2');
          var img1 = document.getElementById('image1');
          var img3 = document.getElementById('image3');
          var img4 = document.getElementById('image4');
          img1.style.display = 'none';
          img2.style.display = 'none';
          img3.style.display = 'block';
          img4.style.display = 'block';
          document.getElementById('clickParagraph2').classList.add('add-active')
          document.getElementById('clickParagraph1').classList.remove('add-active')  
      });
