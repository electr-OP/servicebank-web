<template>
    <!-- END -->
  <section class=" wed-hom-footer">
      <div class="container">
          <div class="row foot-supp">
              <h2><span>Free support:</span> +01 5426 24400 &nbsp;&nbsp;|&nbsp;&nbsp; <span>Email:</span>
                  support@service.com</h2>
          </div>
          <div class="row wed-foot-link">
              <div class="col-md-4 foot-tc-mar-t-o">
                  <h4>Top Category</h4>
                  <ul>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Spa and Facial</a></li>
                      <li><a href="#">Real Estate</a></li>
                      <li><a href="#">Sports</a></li>
                      <li><a href="#">Education</a></li>
                      <li><a href="#">Electricals</a></li>
                      <li><a href="#">Automobiles</a></li>
                      <li><a href="#">Transportation</a></li>
                  </ul>
              </div>
              <div class="col-md-4">
                  <h4>Trending Category</h4>
                  <ul>
                      <li><a href="#">Hospitals</a></li>
                      <li><a href="#">Avialtion</a></li>
                      <li><a href="#">Automobiles</a></li>
                      <li><a href="#">Forex</a></li>
                      <li><a href="#-estate">Real Estate</a></li>
                      <li><a href="#">Sports</a></li>
                      <li><a href="#">ducation</a></li>
                      <li><a href="#">Electricals</a></li>
                  </ul>
              </div>
              <div class="col-md-4">
                  <h4>HELP &amp; SUPPORT</h4>
                  <ul>
                      <li><RouterLink :to="{}">About us</RouterLink>
                      </li>
                      <li><RouterLink :to="{}">FAQ</RouterLink>
                      </li>
                      <li><RouterLink :to="{}">Feedback</RouterLink>
                      </li>
                      <li><RouterLink :to="{}">Contact us</RouterLink>
                      </li>
                      <li><RouterLink :to="{}">Privacy Policy</RouterLink></li>
                      <li><RouterLink :to="{}">Terms of Use</RouterLink></li>
                  </ul>
              </div>
          </div>

          <!-- POPULAR TAGS -->
          <div class="row wed-foot-link-pop">
              <div class="col-md-12">
                  <h4>Popular Tags</h4>
                  <ul>
                      <li><a href="http://localhost/bizbook/dashboard">Schools in NewYork</a></li>
                      <li><a href="http://localhost/bizbook/dashboard">Real estate in Illunois</a></li>
                      <li><a href="http://localhost/bizbook/dashboard1">Real estate in Chennai1</a></li>
                      <li><a href="http://localhost/bizbook/dashboard">Enents in Tailand</a></li>
                      <li><a href="http://localhost/bizbook/dashboard">Flat for rent in Melborn</a></li>
                      <li><a href="http://localhost/bizbook/dashboard">Schools in NewYork</a></li> 
                  </ul>
              </div>
          </div>
          <!-- POPULAR TAGS -->

          <div class="row wed-foot-link-1">
              <div class="col-md-4 fot-soc">
                  <h4>SOCIAL MEDIA</h4>
                  <ul>
                      <li><a target="_blank" href="#"><img src="/src/assets/images/social/1.png" alt=""></a></li>
                      <li><a target="_blank" href="#"><img src="/src/assets/images/social/2.png" alt=""></a></li>
                      <li><a target="_blank" href="#"><img src="/src/assets/images/social/3.png" alt=""></a></li>
                      <li><a target="_blank" href="#"><img src="/src/assets/images/social/4.png" alt=""></a></li>
                      <li><a target="_blank" href="#"><img src="/src/assets/images/social/5.png" alt=""></a></li>
                  </ul>
              </div>
          </div>
      </div>
  </section>

  <!-- START -->
  <section>
      <div class="cr">
          <div class="container">
              <div class="row">
                  <p>Copyright © {{year}}</p>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "Footer",
        data () {
            return {
                'year': new Date().getFullYear(),
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>