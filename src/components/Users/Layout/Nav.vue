<template>

<div class="hom-top">
    <div class="container">
        <div class="row">
            <div class="hom-nav  db-open ">
                <!--MOBILE MENU-->
                <a href="/" class="top-log">
                        <!-- <img src="/src/assets/images/home/16077bizbook-white.png" style="width: 192px; height: auto;" alt="" class="ic-logo"> -->
                    <h3 class="ic -logo mt-2 text-white">SERVICE <span class="text-primary">BANK</span></h3>
                    <!-- <img src="/src/assets/images/home/16077bizbook-white.png" style="width: 192px; height: auto;" alt="" class="ic-logo"> -->
                </a>
                <div class="menu">
                    <h4>Explore</h4>
                </div>

                <div class="pop-menu">
                    <div class="container">
                        <div class="row">
                            <i class="material-icons clopme">close</i>
                            <div class="pmenu-spri">
                                <ul>
                                    <li><a href="/" class="act"><img src="/src/assets/images/icon/shop.png">Home </a></li>
                                    <li><a href="/experts.php" class="act"><img src="/src/assets/images/icon/expert.png">Service Experts </a></li>
                                    <li><a href="/all-profiles.php" class="act"><img src="/src/assets/images/icon/employee.png">Service providers </a></li>
                                </ul>
                            </div>
                            <div class="pmenu-cat">
                                <h4>All Categories</h4>
                                <input type="text" id="pg-sear" placeholder="Search category">
                                <ul id="pg-resu">
                                    <li>
                                        <a href="/search.php?category=Spa and Facial">Spa and Facial</a>
                                    </li>
                                    <li>
                                        <a href="/search.php?category=Wedding halls">Wedding halls</a>
                                    </li>
                                    <li>
                                        <a href="/search.php?category=Automobiles">Automobiles</a>
                                    </li>
                                    <li>
                                        <a href="/search.php?category=Restaurants">Restaurants</a>
                                    </li>
                                    <li>
                                        <a href="/search.php?category=Technology">Technology</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="dir-home-nav-bot">
                                <ul>
                                    <li>A few reasons you’ll love Online Business Directory <span>Call
                                            us on: +01 6214 6548</span></li>
                                    <li><a href="/post-your-ads.php" class="waves-effect waves-light btn-large"><i class="material-icons">font_download</i> Advertise with
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
                    <form action="/search.php" name="filter _form" id="filte r_form" class="filt er_form">
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
                <div class="top-noti">
                    <span class="material-icons db-menu-noti"><i id="noti-count">0</i>notifications</span>
                    <div class="db-noti top-noti-win">
                        <span class="material-icons db-menu-clo">close</span>
                        <h4>Notifications</h4>
                        <ul id="all-notif-ul">
                        </ul>
                        <span id="no-noti-clr-noti" class="no-noti-clr-noti">No Notifications to Show</span>
                    </div>
                </div>
                <!--END TOP NOTIFICATIONS-->
                <div class="al">
                    <div class="head-pro">
                        <img src="http://via.placeholder.com/640x360" alt="User" title="Go to dashboard">
                        <span class="fclick near-pro-cta"></span>
                    </div>
                    <div class="db-menu">
                        <span class="material-icons db-menu-clo">close</span>
                        <div class="ud-lhs-s1">
                            <img src="http://via.placeholder.com/640x360" alt="">
                            <div class="ud-lhs-pro-bio">
                                <h4> {{first_name}} {{last_name}}</h4>
                                <b>Join on {{created_at}}</b>
                                <a class="ud-lhs-view-pro" target="_blank" href="http://<?= $_SERVER['HTTP_HOST'].'/details.php?user_id='.$user_details->id ?>">My Profile</a>
                            </div>
                        </div> 
                        <ul>
                            <li>
                                <a href="/users/dashboard.php" class="db-lact"><img src="/src/assets/images/icon/dbl1.png" alt=""> My Dashboard</a>
                            </li>
                            <li>
                                <a href="/users/setting.php" class=""><img src="/src/assets/images/icon/dbl210.png" alt="">Setting</a>
                            </li>
                            <li>
                                <a href="/logout.php"><img src="/src/assets/images/icon/dbl12.png" alt="">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--MOBILE MENU-->
                <div class="mob-menu">
                    <div class="mob-me-ic"><i class="material-icons">menu</i></div>
                    <div class="mob-me-all">
                        <div class="mob-me-clo"><i class="material-icons">close</i></div>
                        <div class="mv-pro ud-lhs-s1">
                            <img src="http://via.placeholder.com/640x360" alt="">
                            <h4>{{first_name}} {{last_name}}</h4>
                            <b>Join on {{created_at}}</b>
                        </div>
                        <div class="mv-pro-menu ud-lhs-s2">
                            <ul>
                                <li>
                                    <a href="/users/dashboard.php" class="db-lact"><img src="/src/assets/images/icon/dbl1.png" alt=""> My Dashboard</a>
                                </li>
                                <li>
                                    <a href="/logout.php"><img src="/src/assets/images/icon/dbl12.png" alt="">Log Out</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mv-cate">
                            <ul>
                                <li>
                                    <a href="/users/dashboard.php" class="db-lact"><img src="/src/assets/images/icon/dbl1.png" alt=""> My Dashboard</a>
                                </li>
                                <li>
                                    <h4>Jobs</h4>
                                    <a href="/enquiry.php" class=""><img src="/src/assets/images/icon/tick.png" alt="">Enquirys</a>
                                </li>
                                <li>
                                    <a href="/listings.php" class=""><img src="/src/assets/images/icon/expert.png" alt="">Job Listings</a>
                                </li>
                                <li>
                                    <a href="/job_profile.php" class=""><img src="/src/assets/images/icon/expert.png" alt="">Profile</a>
                                </li>
                                <li>
                                    <h4>Account</h4>
                                    <a href="profile.php" class=""><img src="/src/assets/images/icon/dbl9.png" alt="">Profile</a>
                                </li>
                                <li>
                                    <a href="notifications.php" class=""><img src="/src/assets/images/icon/dbl19.png" alt="">Notifications</a>
                                </li>
                                <li>
                                    <a href="/" class=""><img src="/src/assets/images/icon/dbl19.png" alt="">Logout</a>
                                </li>
                            </ul>
                            <h4>All Categories</h4>
                            <ul>
                                <li>
                                    <a href="#">Automobile</a>
                                </li>
                                <li>
                                    <a href="#">Plumbing</a>
                                </li>
                                <li>
                                    <a href="#">Cleaners</a>
                                </li>
                                <li>
                                    <a href="#">Security</a>
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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>