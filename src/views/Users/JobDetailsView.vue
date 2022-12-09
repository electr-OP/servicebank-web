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
                        <!-- <li><a href="#ld-off"><i class="material-icons">style</i> Offers </a>
                        </li> -->
                        <!-- <li><a href="#ld-360"><i class="material-icons">camera</i> 360 View </a>
                        </li> -->
                        <li><a href="#ld-rev"><i class="material-icons">star_half</i> Write Review </a>
                        </li>
                        <!-- <li><a href="#" data-toggle="modal" data-target="#claim"><i class="material-icons">store</i>Claim business </a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- END -->
<section>
    <div class="list-bann">
        <img :src="artisanDetails.logo" alt="">
    </div>
</section>


<section class=" pg-list-1">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="pg-list-1-pro">
                    <img src="/images/user/user4.jpg" alt="">
                    <span class="stat"><i class="material-icons">verified_user</i></span>
                </div>
                <div class="pg-list-1-left">
                    <h3>{{artisanDetails.name}}</h3>
                    <div class="list-rat-all">
                        <span>No Reviews Yet</span>
                    </div>

                    <p><b>Address:</b>{{artisanDetails.address}}</p>
                    <div class="list-number pag-p1-phone">
                        <ul>
                            <a :href="'tel:'+artisanDetails.phone">
                                <li class="ic-php"> {{artisanDetails.phone}} </li>
                            </a>
                            <a :href="'mailto:'+artisanDetails.email">
                                <li class="ic-mai"> {{artisanDetails.email}} </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="list-ban-btn">
                    <ul>
                        <li>
                            <a :href="'tel:'+artisanDetails.phone" class="cta cta-call">Call Now</a>
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
                                <span>About</span> {{artisanDetails.description}}
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp list-pg-inn-abo">
                            <p></p>
                        </div>
                    </div>

                    <!--END LISTING DETAILS: LEFT PART 1-->
                    <!--LISTING DETAILS: LEFT PART 2-->
                    <div id="ld-ser" class="pglist-bg pglist-p-com">
                        <div class="pglist-p-com-ti">
                            <h3>
                                <span>Services</span> Offered
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp">
                            <div class="row pg-list-ser">
                                <ul>
                                    <li v-for="prof in artisanDetails.profession" class="col-md-3">
                                        <div class="pg-list-ser-p1"><img src="/images/services/3286pexels-nikita-khandelwal-819805.jpg" alt="">
                                        </div>
                                        <div class="pg-list-ser-p2">
                                            <h4>{{prof}}</h4>
                                        </div>
                                    </li>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--END LISTING DETAILS: LEFT PART 2-->

                    <!--LISTING DETAILS: LEFT PART 3-->
                    <!--END LISTING DETAILS: LEFT PART 3-->
                    <!--LISTING DETAILS: LEFT PART 4-->
                    <!-- <div id="ld-off" class="pglist-bg pglist-off-last pglist-p-com"> -->
                        <!-- <div class="pglist-p-com-ti">
                            <h3>
                                <span>Special</span> Offers
                            </h3>
                        </div>
                        <div class="list-pg-inn-sp">
                            <div class="home-list-pop"> -->
                                <!--LISTINGS IMAGE-->
                                <!-- <div class="col-md-3"><img src="/images/services/38752pexels-photo-331788.jpeg" alt=""></div> -->
                                <!--LISTINGS: CONTENT-->
                                <!-- <div class="col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta"><a href="#!"> -->
                                        <!-- <h3>adad</h3>
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

                    </div> -->

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
                    <div class="ban-ati-com ads-det-page">
                        <a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222"><span>Ad</span><img src="/images/ads/4414ads2.png"></a>
                    </div>
                    <!--ADS-->

                    <!--RELATED PREMIUM LISTINGS-->
                    <div class="list-det-rel-pre">
                        <h2>Related listings:</h2>
                        <ul>
                            <li>
                                <div class="land-pack-grid">
                                    <div class="land-pack-grid-img">
                                        <img src="/images/listings/hot4.jpg" alt="">
                                    </div>
                                    <div class="land-pack-grid-text">
                                        <h4>test</h4>
                                        <div class="list-rat-all">
                                            <b></b>
                                        </div>
                                    </div>
                                    <a target="_blank" href="#listing/test6" class="land-pack-grid-btn"></a>
                                </div>
                            </li>
                            <li>
                                <div class="land-pack-grid">
                                    <div class="land-pack-grid-img">
                                        <img src="/images/listings/hot4.jpg" alt="">
                                    </div>
                                    <div class="land-pack-grid-text">
                                        <h4>TEST</h4>
                                        <div class="list-rat-all">
                                            <b></b>
                                        </div>
                                    </div>
                                    <a target="_blank" href="#listing/test5" class="land-pack-grid-btn"></a>
                                </div>
                            </li>
                            <li>
                                <div class="land-pack-grid">
                                    <div class="land-pack-grid-img">
                                        <img src="/images/listings/hot4.jpg" alt="">
                                    </div>
                                    <div class="land-pack-grid-text">
                                        <h4>Teste da minha lojinha</h4>
                                        <div class="list-rat-all">
                                            <b></b>
                                        </div>
                                    </div>
                                    <a target="_blank" href="#listing/teste-da-minha-lojinha" class="land-pack-grid-btn"></a>
                                </div>
                            </li>
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
                            <form method="post" @submit.prevent="detail_enquiry_form" id="detail_enquiry_form">
                                <div class="form-group ic-user">
                                    <input type="text" v-model="enquiry_name" required="required" class="form-control" placeholder="Enter name*">
                                </div>
                                <div class="form-group ic-eml">
                                    <input type="email" class="form-control" placeholder="Enter email*" required="required" v-model="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address">
                                </div>
                                <div class="form-group ic-pho">
                                    <input type="text" class="form-control" v-model="enquiry_mobile" placeholder="Enter mobile number *" pattern="[0-1]{1}[0-9]{9}" title="Phone number starting with 0-1 and remaining 9 digit with 0-9" required="">
                                </div>
                                <div class="form-group ic-eml">
                                    <input type="text" class="form-control" v-model="enquiry_address" placeholder="Enter Address*" required="">
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="3" v-model="enquiry_message" placeholder="Enter your query or message"></textarea>
                                </div>
                                
                                <button type="submit" id="detail_enquiry_submit" class="btn btn-primary">Submit </button>
                            </form>
                        </div>

                    </div>
                    <!--END LISTING DETAILS: LEFT PART 9-->
                    <!--LISTING DETAILS: COMPANY BADGE-->
                    <div class="ld-rhs-pro pglist-bg pglist-p-com">
                        <div class="lis-comp-badg">
                            <div class="s1">
                                <div>
                                    <span class="by">Business profile</span>
                                    <img class="proi" src="/images/user/user4.jpg" alt="">
                                    <h4>Rockit Design</h4>
                                    <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                                    <ul>
                                        <li><a href="https://www.facebook.com/rn53themes" target="_blank"><img src="/images/social/3.png"></a></li>
                                        <li><a href="https://twitter.com/Rn53_themes" target="_blank"><img src="/images/social/2.png"></a></li>
                                        <li><a href="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg/videos?view=0&amp;sort=dd&amp;shelf_id=0&amp;view_as=subscriber" target="_blank"><img src="/images/social/5.png"></a></li>
                                        <li><a href="+01 5426 24400" target="_blank"><img src="/images/social/6.png"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="s2">
                                <a target="_blank" href="#company/rockit-design" class="use-fol">View profile</a>
                                <a target="_blank" href="#company/rockit-design#home_enquiry_form">Get in touch with us</a>
                            </div>
                        </div>
                    </div>
                    <!--END LISTING DETAILS: COMPANY BADGE-->

                    <!--ADS-->
                    <div class="ban-ati-com ads-det-page">
                        <a href=""><span>Ad</span><img src="/images/ads/59040boat-728x90.png"></a>
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
                            <input type="hidden" class="form-control" name="listing_id" value="498" placeholder="" required="">
                            <input type="hidden" class="form-control" name="listing_user_id" value="323" placeholder="" required="">
                            <input type="hidden" class="form-control" name="enquiry_sender_id" value="323" placeholder="" required="">
                            <input type="hidden" class="form-control" name="enquiry_source" value="Website" placeholder="" required="">
                            <div class="form-group">
                                <input type="text" name="enquiry_name" value="Rn53" required="required" class="form-control" placeholder="Enter name*">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Enter email*" required="required" value="rn53themes@gmail.com" name="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" value="08027337500" name="enquiry_mobile" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaining 9 digit with 0-9" required="">
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
                <input type="text" value="" id="shareurl">
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
import Nav from '../../components/Users/Layout/Nav.vue';
import Api from '../Api'

    export default {
    components: { Nav },
    data () {
        return {
            artisan_id : this.$route.params.id,
            artisanDetails : '',
            enquiry_name: '',
            enquiry_mobile: '',
            enquiry_message: '',
            enquiry_date: '',
            enquiry_time: '',
            enquiry_address: ''
        }
    },
    mounted () {
        console.log(this.artisan_id)
        Api.axios_instance.post(Api.baseUrl+'api/job/get/artisan', {'artisan_id': this.artisan_id})
        .then(response => {
            console.log(response.data.detail)
            this.artisanDetails = response.data.detail
        })
    },
    methods: {
        detail_enquiry_form (e) {
            const formData = {
                artisan: this.artisan_id,
                name: this.enquiry_name,
                phone: this.enquiry_mobile,
                email: this.enquiry_email,
                message: this.enquiry_message
            }
            Api.axios_instance.post(Api.baseUrl+'api/job/create/enquiry', formData)
            .then(response=>{
                this.$toast.success("Query Sent")
                this.enquiry_name = ''
                this.enquiry_mobile = ''
                this.enquiry_email = ''
                this.enquiry_message = ''
            })

        }
    }
}
</script>

<style lang="scss" scoped>

</style>