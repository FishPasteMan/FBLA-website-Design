//All code created by Robert J LeDuc

window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
  }, false)
  //don't touch that if you dont want all the stuff on all pages to break
  
  
  function mobileNavCreate(){
    var bar = document.getElementById("mobileNavDrop");
    if(bar.style.display === "block"){
      bar.style.display = "none";
    }
    else{
    bar.style.display = "block";
    }
  }