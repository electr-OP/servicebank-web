<template>
    
<!-- START -->
<section>
    <div class="str ind2-home">
        <div>
            <Nav/>
        </div>
    </div>
</section>

<section>
    <div class="v3-list-ql">
        <div class="container">
            <div class="row">
                <div class="v3-list-ql-inn">
                    <ul>
                        <li class="active"><a href="#ld-abo"><i class="material-icons">person</i> About </a>
                        </li>
                        <li><a href="#ld-ser"><i class="material-icons">business_center</i> Services </a>
                        </li>
                        <!-- <li><a href="#ld-gal"><i class="material-icons">photo</i> Gallery </a>
                        </li> -->
                        <li><a href="#ld-off"><i class="material-icons">style</i> Offers </a>
                        </li>
                        <!-- <li><a href="#ld-360"><i class="material-icons">camera</i> 360 View </a>
                        </li> -->
                        <li><a href="#ld-rev"><i class="material-icons">star_half</i> Write Review </a>
                        </li>
                        <li><a href="#" data-toggle="modal" data-target="#claim"><i class="material-icons">store</i>Claim business </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- END -->
<section>
    <div class="list-bann">
        <img src="/src/assets/images/listing-ban/1.jpg" alt="">
    </div>
</section>


<section class=" pg-list-1">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="pg-list-1-pro">
                    <img src="http://via.placeholder.com/640x360" alt="">
                    <span class="stat"><i class="material-icons">verified_user</i></span>
                </div>
                <div class="pg-list-1-left">
                    <h3>{{first_name}} {{last_name}}</h3>
                    <div class="list-rat-all">
                        <span>No Reviews Yet</span>
                    </div>

                    <p><b>Address:</b>{{address}}</p>
                    <div class="list-number pag-p1-phone">
                        <ul>
                            <a href="tel:<?= $business_profile->phone_number ?>">
                                <li class="ic-php"> {{phone_no}} </li>
                            </a>
                            <a href="mailto:<?= $business_profile->user->email ?>">
                                <li class="ic-mai">{{email}}</li>
                            </a>
                            <a href="mailto:<?= $business_profile->user->email ?>">
                                <li class="ic-time">{{open_time}} - {{close_time}}</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="list-ban-btn">
                    <ul>
                        <li>
                            <a href="tel:<?= $business_profile->phone_number ?>" class="cta cta-call">Call Now</a>
                        </li>
                        <li><span class="cta cta-like ldelik Animatedheartfunc498 " data-for="0" data-section="1" data-num="323" data-item="323" data-id="498">
                                <b class="like-content498">0</b> LIKES</span>
                        </li>
                        <li>
                            <span data-toggle="modal" data-target="#quote" class="pulse cta cta-get">Get quote</span>
                        </li>

                        <li><span class="share-new-top" data-toggle="modal" data-target="#sharepop"><i class="material-icons">share</i></span></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>

<section class=" list-pg-bg">
    <div class="container">
        <div class="row">
            <div class="com-padd">
                <div id="ld-abo" class="list-pg-lt list-page-com-p"> 
                    <!--LISTING DETAILS: LEFT PART 1-->
                    <div class="pglist-bg pglist-p-com">
                        <div class="pglist-p-com-ti">
                            <h3>
                                <span>Pricings</span>
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp list-pg-inn-abo">
                            <p>Min Price &#8358;{{min_price}}</p>
                        </div>
                        <div class="list-pg-inn-sp list-pg-inn-abo">
                            <p>Min Price &#8358;{{max_price}}</p>
                        </div>
                    </div>
                    <!--LISTING DETAILS: LEFT PART 1-->
                    <div class="pglist-bg pglist-p-com">
                        <div class="pglist-p-com-ti">
                            <h3>
                                <span>About</span>
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp list-pg-inn-abo">
                            <p>{{about}}</p>
                        </div>
                    </div>
                    <!--LISTING DETAILS: LEFT PART 1-->
                    <div class="pglist-bg pglist-p-com">
                        <div class="pglist-p-com-ti">
                            <h3>
                                <span>Experience</span>
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp list-pg-inn-abo">
                            <p>{{experience}}</p>
                        </div>
                    </div>
                    <!--LISTING DETAILS: LEFT PART 1-->
                    <div class="pglist-bg pglist-p-com">
                        <div class="pglist-p-com-ti">
                            <h3>
                                <span>Address</span>
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp list-pg-inn-abo">
                            <p>{{address}}</p>
                        </div>
                    </div>

                    
                        <!--LISTING DETAILS: LEFT PART 6-->
                        <div class="pglist-b g pglist-p-cm" id="ld-rev">
                            <div class="pglist-p-com-ti">
                                <h3>
                                    <span>Write Your</span> Reviews
                                </h3>
                            </div>
                            <div class="list-pg-inn-sp">
                                <div class="list-pg-write-rev">
                                    <form class="col">
                                        <input type="hidden" class="form-control" name="listing_id" value="488">
                                        <input type="hidden" class="form-control" name="listing_user_id" value="323">
                                        <input name="review_user_id" value="" type="hidden">
                                        <p>Writing great reviews may help others discover the places that are just apt
                                            for them. Here are a few tips to write a good review:</p>
                                        <div id="review_success" style="text-align:center;display: none;color: green;">
                                            Thanks for your Review !! Your Review Is Successful!! </div>
                                        <div id="review_fail" style="text-align:center;display: none;color: red;">Oops!!
                                            Something Went Wrong Try Later!!!</div>
                                        <div class="row">
                                            <div>
                                                <fieldset class="rating">
                                                    <input type="radio" id="star5" name="price_rating"
                                                        class="price_rating" value="5" />
                                                    <label class="full" for="star5" title="Awesome"></label>
                                                    <input type="radio" id="star4" name="price_rating"
                                                        class="price_rating" value="4" />
                                                    <label class="full" for="star4" title="Excellent"></label>
                                                    <input type="radio" checked="checked" id="star3"
                                                        class="price_rating" name="price_rating" value="3" />
                                                    <label class="full" for="star3" title="Good"></label>
                                                    <input type="radio" id="star2" name="price_rating"
                                                        class="price_rating" value="2" />
                                                    <label class="full" for="star2" title="Average"></label>
                                                    <input type="radio" id="star1" name="price_rating"
                                                        class="price_rating" value="1" />
                                                    <label class="full" for="star1" title="Poor"></label>
                                                    <input type="radio" id="star0" name="price_rating"
                                                        class="price_rating" value="0" />
                                                    <label class="" for="star0" title="Very Poor"></label>
                                                </fieldset>
                                                <div id="star-value">3 Star</div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input id="review_name" name="review_name" type="text" value="">
                                            </div>
                                            <div class="input-field col s6">
                                                <input id="review_mobile" name="review_mobile" type="text" onkeypress="return isNumber(event)" placeholder="Mobile number" value="">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input id="review_email" name="review_email" type="email" placeholder="Email Id" value="">
                                            </div>
                                            <div class="input-field col s6">
                                                <input id="review_city" name="review_city" placeholder="City" type="text">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <textarea id="review_message" placeholder="Write review" name="review_message"></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="submit" id="" value="Submit Review">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!--END LISTING DETAILS: LEFT PART 6-->
                        <!--END LISTING DETAILS: LEFT PART 6-->


                    <!--END LISTING DETAILS: LEFT PART 1-->
                    <!--LISTING DETAILS: LEFT PART 2-->
                    <!-- <div id="ld-ser" class="pglist-bg pglist-p-com">
                        <div class="pglist-p-com-ti">
                            <h3>
                                <span>Services</span> Offered
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp">
                            <div class="row pg-list-ser">
                                <ul>
                                    <li class="col-md-3">
                                        <div class="pg-list-ser-p1"><img src="/src/assets/images/services/3286pexels-nikita-khandelwal-819805.jpg" alt="">
                                        </div>
                                        <div class="pg-list-ser-p2">
                                            <h4>sfs</h4>
                                        </div>
                                    </li>
                                    <li class="col-md-3">
                                        <div class="pg-list-ser-p1"><img src="/src/assets/images/services/3286pexels-nikita-khandelwal-819805.jpg" alt="">
                                        </div>
                                        <div class="pg-list-ser-p2">
                                            <h4>sfsf</h4>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div> -->
                    <!--END LISTING DETAILS: LEFT PART 2-->

                    <!--LISTING DETAILS: LEFT PART 3-->
                    <!--END LISTING DETAILS: LEFT PART 3-->
                    <!--LISTING DETAILS: LEFT PART 4-->
                    <!--<div id="ld-off" class="pglist-bg pglist-off-last pglist-p-com"> -->
                        <!-- <div class="pglist-p-com-ti">
                            <h3>
                                <span>Special</span> Offers
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp">
                            <div class="home-list-pop"> 
                                <div class="col-md-3"><img src="/src/assets/images/services/38752pexels-photo-331788.jpeg" alt=""></div>
                           
                                <div class="col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta"><a href="#!">
                                        <h3>adad</h3>
                                    </a>
                                    <p>wssfsfsf</p>
                                    <span class="home-list-pop-rat list-rom-pric">#554</span>
                                    <div class="list-enqu-btn">
                                        <ul>
                                            <li>
                                                <a href="#! ">view more</a>
                                            </li>
                                            <li><a href="#!" data-toggle="modal" data-target="#quote">Send enquiry</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>   -->

                    <div class="list-sh">
                        <span class="share-new" data-toggle="modal" data-target="#sharepop"><i class="material-icons">share</i> Share now</span>
                    </div>

                    <!--END 360 DEGREE MAP: LEFT PART 8-->
 
                    <!--LISTING DETAILS: LEFT PART 6-->
                    <!--END LISTING DETAILS: LEFT PART 6-->
                    <!--END LISTING DETAILS: LEFT PART 6-->
 
                    <!--LISTING DETAILS: LEFT PART 5-->
                    <div class="spa-first-review">Be the First One To Review This Listing!!!</div>

                    <!--END LISTING DETAILS: LEFT PART 5-->

                    <!--ADS-->
                    <!-- <div class="ban-ati-com ads-det-page">
                        <a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222"><span>Ad</span><img src="/src/assets/images/ads/4414ads2.png"></a>
                    </div> -->
                    <!--ADS-->

                    <!--RELATED PREMIUM LISTINGS-->
                    <div class="list-det-rel-pre">
                        <h2>Related listings:</h2>
                        <ul>
                            <!-- <?php 
                                foreach($related_profile as $key => $profile){
                                    if($key > 2){

                                    }else {
                                    ?> -->
                                    <li>
                                        <a class="land-pack-grid" target="_blank" href="./details.php?user_id=<?= $profile->user->id ?>">
                                            <div class="land-pack-grid-img">
                                                <img src="http://via.placeholder.com/640x360" alt="">
                                            </div>
                                            <div class="land-pack-grid-text">
                                                <h4>{{first_name}} {{last_name}}</h4>
                                                <div class="list-rat- all"> 
                                                    <div class="job-box-co=n mt-2 mb-3">
                                                        <span></span>
                                                        <span>{{category}}</span>
                                                        <!-- <span><?= $profile->category->name ?></span> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </a> 
                                    </li>
                                <!-- <?php
                                    }
                                }
                            ?> -->
                        </ul>
                    </div>
                    <!--RELATED PREMIUM LISTINGS-->

                </div>
                <div class="list-pg-rt">

                    <!--LISTING DETAILS: LEFT PART 9-->
                    <div class="list-rhs-form pglist-bg pglist-p-com">

                        <div class="quote-pop">
                            <h3><span>Get</span> Quote </h3>
                            <div id="detail_enq_success" class="log" style="display: none;">
                                <p>Your Enquiry Is Submitted Successfully!!!</p>
                            </div>
                            <div id="detail_enq_same" class="log" style="display: none;">
                                <p>You cannot make enquiry on your own listing!!</p>
                            </div>
                            <div id="detail_enq_fail" class="log" style="display: none;">
                                <p>Oops!! Something Went Wrong Try Later!!!</p>
                            </div>
                            <form method="post" name="detail_enquiry_form" id="detail_enquiry_form"> 
                                <div class="form-group ic-user">
                                    <input type="text" name="enquiry_name" value="" required="required" class="form-control" placeholder="Enter name*">
                                </div>
                                <div class="form-group ic-eml">
                                    <input type="email" class="form-control" placeholder="Enter email*" required="required" value="" name="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address">
                                </div>
                                <div class="form-group ic-pho">
                                    <input type="text" class="form-control" value="" name="enquiry_mobile" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaining 9 digit with 0-9" required="">
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="3" name="enquiry_message" placeholder="Enter your query or message"></textarea>
                                </div>
                                <input type="hidden" id="source" value="">
                                <button type="submit" id="detail_enquiry_submit" name="enquiry_submit" class="btn btn-primary">Submit </button>
                            </form>
                        </div>

                    </div> 
                    <!--ADS-->
                    <div class="ban-ati-com ads-det-page">
                        <!-- <a href=""><span>Ad</span><img src="/src/assets/ads/59040boat-728x90.png"></a> -->
                    </div>
                    <!--ADS-->
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="pop-ups pop-quo">
        <!-- The Modal -->
        <div class="modal fade" id="quote" aria-modal="true" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="log-bor">&nbsp;</div>
                    <span class="udb-inst">Send enquiry</span>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <!-- Modal Header -->
                    <div class="quote-pop">
                        <h4>Get quote</h4>
                        <div id="pop_enq_success" class="log" style="display: none;">
                            <p>Your Enquiry Is Submitted Successfully!!!</p>
                        </div>
                        <div id="pop_enq_same" class="log" style="display: none;">
                            <p>You cannot make enquiry on your own listing!!</p>
                        </div>
                        <div id="pop_enq_fail" class="log" style="display: none;">
                            <p>Oops!! Something Went Wrong Try Later!!!</p>
                        </div>
                        <form method="post" name="popup_enquiry_form" id="popup_enquiry_form"> 
                            <div class="form-group">
                                <input type="text" name="enquiry_name" value="" required="required" class="form-control" placeholder="Enter name*">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Enter email*" required="required" value="" name="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" value="" name="enquiry_mobile" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaining 9 digit with 0-9" required="">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="3" name="enquiry_message" placeholder="Enter your query or message"></textarea>
                            </div>
                            <input type="hidden" id="source">
                            <button type="submit" id="popup_enquiry_submit" name="popup_enquiry_submit" class="btn btn-primary">Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
</section>


<section>
    <div class="pop-ups pop-quo">
        <!-- The Modal -->
        <div class="modal fade" id="review" aria-modal="true" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="log-bor">&nbsp;</div>
                    <span class="udb-inst">Write Review</span>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <!-- Modal Header -->
                    <div class="quote-pop">
                        <h4>Review</h4> 
                        <form method="post" name="popup_enquiry_form" id="popup_enquiry_form"> 
                            <div class="form-group">
                                <input type="text"  alue="" required="required" class="form-control" placeholder="Enter name*">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Enter email*" required="required" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaining 9 digit with 0-9" required="">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="3" placeholder="Enter your query or message"></textarea>
                            </div>
                            <input type="hidden" id="source">
                            <button type="submit" id="popup_enquiry_submit" name="popup_enquiry_submit" class="btn btn-primary">Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
</section>

<div class="modal fade sharepop" id="sharepop" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-sm">
        <div class="modal-content"> 
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Share now</h4>
                <button type="button" class="close" data-dismiss="modal">×</button>
            </div> 
            <!-- Modal body -->
            <div class="modal-body">
                <input type="text" value="http://<?= $_SERVER['HTTP_HOST'].'/details.php?user_id='.$user_details->id ?>" id="shareurl">
                <div class="shareurltip">
                    <button onclick="shareurl()" onmouseout="shareurlout()">
                        <span class="shareurltxt" id="myTooltip">Copy to clipboard</span>
                        Copy text </button>
                </div>
            </div>

        </div>
    </div>
</div>

<Footer/>
<!-- <div class="modal-backdrop fade"></div> -->

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