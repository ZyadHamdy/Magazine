$(document).ready(function(){
    $(".owl-carousel").owlCarousel
    ({
        loop: true,
        autoplay: true,
        autoplayTimeout:3000,
        Default: true,
        responsive: responsive
    });
  });
  AOS.init();
//   ==================================================================  //
  // function learn()
  // {
  //     var details = document.getElementById('btn');
  //     var image= document.getElementById('img');

  //     if(details.textContent == "Learn More")
  //     {
  //       image.classList.add('img');
  //       details.classList.add('button');
  //       document.getElementsByClassName('text')[0].style.visibility="hidden";
  //       details.textContent = 'Less';
  //     }
  //     else
  //     {
  //       document.getElementsByClassName('text')[0].style.visibility="visible";
  //       details.textContent = 'Learn More';
  //     }
  // }