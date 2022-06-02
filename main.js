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
