let navflag = true;


const openCate = () => {
  
}


const openNav = () => {
    if (navflag == true){
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("menu-list").style.display= 'flex';
      document.getElementById("menu-list").style.alignItems= 'center';
      document.getElementById("logo4").style.visibility= 'hidden';
      navflag = false
    }else{
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("menu-list").style.display= 'none';
      document.getElementById("logo4").style.visibility= 'visible';
      navflag = true
    }
  };
// 메인화면 슬릭
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll:1,
    adaptiveHeight: true,
    vertical : false,
    prevArrow:"<button id=prev>&lt;</button>",
    nextArrow:"<button id=next>&gt;</button>",
    dots:true,
    dotsClass:'bn-controller' ,
  });

  