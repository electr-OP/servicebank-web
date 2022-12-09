<template>
    <Nav/>

<section class="abou-pg commun-pg-main">
    <div class="about-ban comunity-ban">
        <h1>All Services</h1>
        <p>Connect with the right Service Experts</p>
        <input type="text" id="tail-se" placeholder="Search sub category here..">
    </div>
</section>

<!-- START -->
<section>
    <div class="str all-cate-pg">
        <div class="container">
            <div class="row">
                <div class="sh-all-scat"> 
                    <ul id="tail-re">
                        <li>
                            <div class="sh-all-scat-box">
                                <div class="lhs">
                                    <img src="images/services/69336spa1.jpg" alt="">
                                </div>
                                <div class="rhs">  
                                    <h4>
                                        <a href="./all-profiles.php?type=spa-and-facial">Spa and Facial </a><span>06</span>
                                    </h4>
                                    <ol> 
                                        <li>
                                            <a href="./all-profiles.php?type=spa-and-facial/health---beauty">Health &
                                                Beauty <span>05</span></a>
                                        </li>
                                        <li>
                                            <a href="./all-profiles.php?type=spa-and-facial/health-beauty">Health &Beauty
                                                <span>05</span></a>
                                        </li>
                                        <li>
                                            <a href="./all-profiles.php?type=spa-and-facial/hospitals-diagnostic-supply">Hospitals&
                                                Diagnostic Supply <span>05</span></a>
                                        </li>
                                        <li>
                                            <a href="./all-profiles.php?type=spa-and-facial/gifts-crafts">Gifts &Crafts
                                                <span>00</span></a>
                                        </li>
                                        <li>
                                            <a href="./all-profiles.php?type=spa-and-facial/gifts--crafts">Gifts & Crafts
                                                <span>00</span></a>
                                        </li>
                                        <li>
                                            <a href="./all-profiles.php?type=spa-and-facial/face--body">Face & Body
                                                <span>05</span></a>
                                        </li>
                                        <li>
                                            <a href="./all-profiles.php?type=spa-and-facial/massage">Massage
                                                <span>05</span></a>
                                        </li>
                                        <li>
                                            <a href="./all-profiles.php?type=spa-and-facial/facial">Facial
                                                <span>05</span></a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul id="tail-re">
                        <li>
                            <div class="sh-all-scat-box">
                                <div class="lhs">
                                    <img src="images/services/48466ser4.jpg" alt="">
                                </div>
                                <div class="rhs">
                                    <h4>
                                        <a href="./all-profiles.php?type=wedding-halls">Wedding halls </a><span>04</span>
                                    </h4>
                                    <ol>
                                        <li>
                                            <a href="./all-profiles.php?type=wedding-halls/viki">viki <span>00</span></a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </li>
                    </ul>  
                </div>
            </div>
        </div>
    </div>
</section>
<!-- END -->

<Footer/>

<!-- START -->
<div class="fqui-menu">
    <ul>
        <li><a href="/"><img src="images/icon/home.png">Home</a></li>
        <li><span class="mob-sear"><img src="images/icon/search1.png">Search</span></li>
        <li><a href="/experts.php"><img src="images/icon/expert.png">Service Experts</a></li>
        <li><a href="/all-profiles.php"><img src="jobs/images/icon/employee.png">Service Providers</a></li> 
    </ul>
</div>
<!-- END -->
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->

</template>

<script>
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';

    export default {
    components: { Footer, Nav }
}
</script>

<style lang="scss" scoped>

</style>