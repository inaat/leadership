<template>
   <!-------Section de autres games  --->
      <div class="services-section">
        <div class="inner-width">
          <h1>Our <strong>Services</strong></h1>
          <div class="services owl-carousel">
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-paint-brush"></i>
              </div>
              <div class="service-name">Design</div>
              <div class="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam nesciunt
                similique!</div>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-pencil-alt"></i>
              </div>
              <div class="service-name">Entreprenariat</div>
              <div class="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam nesciunt
                similique!</div>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-code"></i>
              </div>
              <div class="service-name">Build Websites</div>
              <div class="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam nesciunt
                similique!</div>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-database"></i>
              </div>
              <div class="service-name">Manage Databases</div>
              <div class="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam nesciunt
                similique!</div>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-headset"></i>
              </div>
              <div class="service-name">Team work</div>
              <div class="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam nesciunt
                similique!</div>
            </div>
          </div>
        </div>
      </div>
       <!-------Autre section    --->

      <div class="waves">

        <h3 class="tit2">Write something Here ?</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#a2d9ff" fill-opacity="1" d="M0,32L1440,256L1440,320L0,320Z"></path>
        </svg>
      </div>
</template>

<script>
  import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export default {
  name: 'Services',
  beforeCreate() {
     
   $(function() {
      // use jquery
                  let owl  = window.$(".services");

      owl.owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      responsiveClass: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
 
 }
  };


</script>


