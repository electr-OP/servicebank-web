<template>
    <div class="hom-top">
    <div class="container">
        <div class="row">
            <div class="hom-nav ">
                <!--MOBILE MENU-->
                <RouterLink :to="{name:'home'}" class="top-log">
                        <!-- <img src="/images/home/16077bizbook-white.png" style="width: 192px; height: auto;" alt="" class="ic-logo"> -->
                    <h3 class="ic -logo mt-2 text-white">SERVICE <span class="text-primary">BANK</span></h3>
                </RouterLink>
                <div class="menu">
                    <h4>Explore</h4>
                </div>
                <div class="pop-menu">
                    <div class="container">
                        <div class="row">
                            <i class="material-icons clopme">close</i>
                            <div class="pmenu-spri">
                                <ul>
                                    <li><a href="/" class="act"><img src="/images/icon/shop.png" alt="shop">Home </a></li>
                                    <li><a href="" class="act"><img src="/images/icon/expert.png" alt="expert">Service Experts </a></li>
                                    <li><a href="" class="act"><img src="/images/icon/employee.png" alt="employee">Service providers </a></li>
                                </ul>
                            </div>
                            <div class="pmenu-cat">
                                <h4>All Categories</h4>
                                <input type="text" id="pg-sear" placeholder="Search category">
                                <ul id="pg-resu">
                                    <li>
                                        <a href="">Spa and Facial</a>
                                    </li>
                                    <li>
                                        <a href="">Wedding halls</a>
                                    </li>
                                    <li>
                                        <a href="">Automobiles</a>
                                    </li>
                                    <li>
                                        <a href="">Restaurants</a>
                                    </li>
                                    <li>
                                        <a href="">Technology</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="dir-home-nav-bot">
                                <ul>
                                    <li>A few reasons you’ll love Online Business Directory <span>Call
                                            us on: +01 6214 6548</span></li>
                                    <li><a href="" class="waves-effect waves-light btn-large"><i class="material-icons">font_download</i> Advertise with
                                            us </a>
                                    </li>
                                    <!-- <li><a href="/pricing-details.php"
                                        class="waves-effect waves-light btn-large"> <i
                                            class="material-icons">store</i> Add your business </a>
                                </li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--END MOBILE MENU-->

                <div class="top-ser">
                    <form action="" name="filter _form" id="filte r_form" class="filt er_form">
                        <ul>
                            <li class="sr-sea">
                                <input type="text" autocomplete="off" id="top-select-search" name="name" placeholder="Who are you looking for?">
                            </li>

                            <li class="sbtn">
                                <button type="button" class="btn btn-success" id="top_filter_submit"><i class="material-icons">&nbsp;</i></button>
                            </li>
                        </ul>
                    </form>
                </div>
                <ul class="bl">
                    <!-- <?php -->
                    <!-- if (isset($_SESSION["login"])) {  ?> -->
                        <!-- <li>
                            <a href="/pricing-details">Add business</a>
                        </li> -->
                        <li>
                            <RouterLink :to="{name: 'dashboard'}">
                                Dashboard
                            </RouterLink>
                        </li>
                    <!-- <?php } else { ?> -->
                        <li>
                            <RouterLink :to="{name: 'login'}">Sign in</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{name : 'register'}">
                                Get Started
                            </RouterLink>
                        </li>
                        <li>
						<strong> <RouterLink :to="{name:'login'}" href="" @click="logout" style="color: #ff6600; "> <i class="fa fa-power-off" aria-hidden="true"></i> Log Out </RouterLink></strong>
					    </li>
                    <!-- <?php } ?> -->

                </ul>
                <!--MOBILE MENU-->
                <div class="mob-menu">
                    <div class="mob-me-ic"><i class="material-icons">menu</i></div>
                    <div class="mob-me-all">
                        <div class="mob-me-clo"><i class="material-icons">close</i></div>
                        <div class="mv-bus">
                            <h4></h4>
                            <ul>
                                <li>
                                    <RouterLink :to="{name: 'pricing-details'}">Add business</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{name: 'login'}">Sign in</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{name: 'dashboard'}">
                                        Dashboard
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                        <div class="mv-cate">
                            <h4>All Categories</h4>
                            <ul>
                                <li>
                                    <RouterLink :to="{name: 'all-profiles'}">Spa and Facial</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{name: 'all-profiles'}">Wedding halls</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{name: 'all-profiles'}">Automobiles</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{name: 'all-profiles'}">Restaurants</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :to="{name: 'all-profiles'}">Technology</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--END MOBILE MENU-->
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import {RouterLink, RouterView} from 'vue-router'
    export default {
        name: "Nav",
        methods: {
            logout(){
			    
                localStorage.clear();                
			    window.location.href="/login"
                
		},
        }
    }
</script>


<style lang="scss" scoped>

</style>