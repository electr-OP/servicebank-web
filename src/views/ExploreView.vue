<template>
    <Nav/>
<!-- START -->
<section class=" ser-head">
    <div class="container">
        <div class="blog-head-inn">
            <h1>Search Results</h1>
        </div>
        <div class="ban-search">
            <form>
                <ul>
                    <li class="sr-sea">
                        <input type="text" id="select-search" class="autocomplete" placeholder="Search anything...">
                    </li>
                    <li class="sr-btn">
                        <input type="submit" id="filter_submit" name="filter_submit" value="Search" class="filter_submit">
                    </li>
                </ul>
            </form>
        </div>
    </div>
</section>
<!--END-->

<div class="container ser-re-hu">Hurray!!! 1 result(s) Found for <b>washing machines</b>.</div>


<!-- START -->
<section class=" event-body ser-resu">
    <div class="container">
        <div class="">
            <ul id="intseres">

                <li>
                    <div class="smbox">
                        <div class="ser0">
                            <img src="/src/assets/images/products/24905samsung-6-kg-5-star-inverter.jpeg" alt="">
                        </div>
                        <h6 class="ser 1 mt-3">
                            <a href="details.php">
                                SAMSUNG 6 kg 5 Star Inverter with Hygiene Steam
                            </a>
                        </h6>
                        <span class="ser2 ser-bl ">Product</span>
                        <div class="ser3">
                            Lorem Ipsum is simply dummy text of the printing and </div>
                        <span class="ser4">
                            <a href="details.php">https://bizbookdirectorytemplate.com/product/samsung-6-kg-5-star-inverter-with-hygiene-steam</a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</section>
<!--END-->

<Footer/>

<!-- START -->
<div class="fqui-menu">
    <ul>
        <li><a href="/"><img src="/src/assets/images/icon/home.png">Home</a></li>
        <li><span class="mob-sear"><img src="/src/assets/images/icon/search1.png">Search</span></li>
        <li><a href="/experts.php"><img src="/src/assets/images/icon/expert.png">Service Experts</a></li>
        <li><a href="/all-profiles.php"><img src="/src/assets/images/icon/employee.png">Service Providers</a></li> 
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
    components: { Nav, Footer }
}
</script>

<style lang="scss" scoped>

</style>