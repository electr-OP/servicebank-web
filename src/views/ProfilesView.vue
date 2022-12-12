<template>
    <Nav/>
<!-- START -->
<section>
    <div class="all-listing all-jobs all-serexp">
        <!--FILTER ON MOBILE VIEW-->
        <div class="fil-mob fil-mob-act">
            <h4>Listing filters <i class="material-icons">filter_list</i></h4>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 fil-mob-view">
                    <!--- START --->
                    <div class="filt-com">
                        <div class="job-alert">
                            <h5>Are looking for Service Expert?</h5>
                            <p>We will help you to arrage best Service Expert.</p>
                            <a href="#" data-toggle="modal" data-target="#allexpfrm" @click="searchArtisans">Search</a>
                        </div>
                    </div>
                    <!--- END --->
                    <!--- START --->
                    <div class="filt-com lhs-cate">
                        <h4>Categories</h4>
                        <div class="form-group">
                            <select v-model="category" id="cat_check" class="cat_check chosen-select">
                                <option value="">Select Category</option>
                                <option :value="profession" v-for="profession in professions" :key="profession">{{profession}}</option>
                            </select>
                        </div>
                    </div>
                    <!--- END --->
                    <!--- START --->
                    <div class="filt-com lhs-loc">
                        <h4>Location</h4>
                        <div class="form-group">
                            <select class="city_check chosen-select" v-model="city" id="city_check">
                                <option value="">Select City</option>
                                <option :value=loc v-for="loc in locations" :key="loc">{{loc}}</option>
                                
                            </select>
                        </div>
                    </div>
                    <!--- END --->

                    <!--- START --->
                    <div class="filt-com lhs-rati lhs-avail">
                        <h4>Availability</h4>
                        <ul>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="" v-model="status" class="availability_check" id="avail1"/>
                                    <label for="avail1">All</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="AVAILABLE" v-model="status" class="availability_check" id="avail2" checked />
                                    <label for="avail2">Available</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="BUSY" v-model="status" class="availability_check" id="avail3" />
                                    <label for="avail3">Busy</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="CLOSED" v-model="status" class="availability_check" id="avail4" />
                                    <label for="avail4">Closed today</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--- END --->

                    <!--- START --->
                    <div class="filt-com lhs-rati lhs-ver">
                        <h4>Verified</h4>
                        <ul>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="1" v-model="verified" class="expert_veri" id="exver1" checked />
                                    <label for="exver1">All</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="2" v-model="verified" class="expert_veri" id="exver2" />
                                    <label for="exver2">Verified experts</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--- END --->

                    <!--- START --->
                    <div class="filt-com lhs-rati">
                        <h4>Rating</h4>
                        <ul>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="0" v-model="rating" class="rating_check" id="exrat6" checked />
                                    <label for="exrat6">All</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="5" v-model="rating" class="rating_check" id="exrat1" />
                                    <label for="exrat1">5 Star</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="4" v-model="rating" class="rating_check" id="exrat2" />
                                    <label for="exrat2">4 Star</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="3" v-model="rating" class="rating_check" id="exrat3" />
                                    <label for="exrat3">3 Star</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="2" v-model="rating" class="rating_check" id="exrat4" />
                                    <label for="exrat4">2 Star</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="1" v-model="rating" class="rating_check" id="exrat5" />
                                    <label for="exrat5">1 Star</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--- END --->
                    <!--- START --->
                    <!-- <div class="filt-com lhs-rati lhs-ver">
                        <h4>Services Done</h4>
                        <ul>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="0" v-model="rating" class="expert_ser_cou" id="exsercou1" checked />
                                    <label for="exsercou1">All</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="2" name="expert_ser_cou" class="expert_ser_cou" id="exsercou2" />
                                    <label for="exsercou2">High - Low</label>
                                </div>
                            </li>
                            <li>
                                <div class="rbbox">
                                    <input type="radio" value="1" name="expert_ser_cou" class="expert_ser_cou" id="exsercou3" />
                                    <label for="exsercou3">Low - High</label>
                                </div>
                            </li>
                        </ul>
                    </div> -->
                    <!--- END --->
                </div>
                <div class="col-md-9">
                    <div class="job-ser-cnt">Showing {{artisansResult.length}} Experts</div>
                    <div class="job-list">
                        <ul>
                                    <li v-for="profile in artisansResult" :key="profile">

                                        <div class="job-box">
                                            <div class="job-box-img">
                                                <img :src=profile.logo alt="#">
                                            </div>
                                            <!-- <div class="ser-exp-ave" title="User currently available">
                                                    <span class="ser-avail-yes"></span>
                                                </div> -->
                                            <div class="job-days">
                                                <!-- <span class="ver"><i class="material-icons"
                                                            title="Verified expert">verified_user</i></span> -->
                                                <span class="rat" title="User rating 5 out of">{{profile.rating}}</span>
                                            </div>
                                            <div class="job-box-con">
                                                <h4> {{profile.name}} </h4>
                                                <span> {{category}} </span>
                                                <span> {{category}} </span>
                                            </div>
                                            <div class="job-box-apl">
                                                <span class="job-box-cta" data-toggle="modal" data-target="#expfrm25" @click="dataToModal(profile)">Book me</span>
                                                <RouterLink :to="{name:'job-details', params: {id:profile.artisan_id}}" class="serexp-cta-more">More
                                                    details</RouterLink>
                                            </div>
                                        </div>
                                    </li>
                                <!-- <?php }
                            ?> -->
                            <!--  Quick View box starts  -->
                            <!-- START -->
                            <!-- <?php 
                                foreach($business_profile as $key => $profile){ ?> -->
                                    <section>
                                        <div class="pop-ups pop-quo">
                                            <!-- The Modal -->
                                            <div class="modal fade" id="expfrm25">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="log-bor">&nbsp;</div>
                                                        <span class="udb-inst">Contact</span>
                                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                        <!-- Modal Header -->
                                                        <div class="quote-pop">
                                                            <div id="expert_pop_enq_success" class="log" style="display: none;">
                                                                <p>Your Enquiry Is Submitted Successfully!!!</p>
                                                            </div>
                                                            <div id="expert_pop_enq_same" class="log" style="display: none;">
                                                                <p>You cannot make enquiry on your own Service!!</p>
                                                            </div>
                                                            <div id="expert_pop_enq_fail" class="log" style="display: none;">
                                                                <p>Oops!! Something Went Wrong Try Later!!!</p>
                                                            </div>
                                                            <div class="ser-exp-wel">Hey <b>{{first_name}} {{last_name}}</b></div>
                                                            <form method="post" id="expert_all_enquiry_form" @submit.prevent="detail_enquiry_form">
                                                               
                                                                <div class="form-group">
                                                                    <input type="text" v-model="enquiry_name" required="required" class="form-control" placeholder="Enter name*">
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="email" class="form-control" placeholder="Enter email*" required="required" v-model="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address">
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" v-model="enquiry_mobile" placeholder="Enter mobile number *" pattern="[0-1]{1}[0-9]{9}" title="Phone number starting with 0-1 and remaining 9 digit with 0-9" required>
                                                                </div>
                                                                
                                                                <div class="form-group col-md-6 serex-date">
                                                                    <input type="date" class="form-control" v-model="enquiry_date" placeholder="Preferred Date" id="newdate">
                                                                </div>
                                                                <div class="form-group col-md-6 serex-date">
                                                                    <input type="time" class="form-control" v-model="enquiry_time" placeholder="Preferred time" id="newdate">
                                                                </div>
                                                                <div class="form-group">
                                                                    <textarea class="form-control" v-model="enquiry_address" id="enquiry_location" placeholder="Enter your Address"></textarea>
                                                                </div>
                                                                <div class="form-group">
                                                                    <textarea class="form-control" v-model="enquiry_message" id="enquiry_message" placeholder="Enter your query or message"></textarea>
                                                                </div>
                                                                
                                                                <button type="submit" id="expert_all_enquiry_submit" class="btn btn-primary"> Submit </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section> 
                                <!-- <?php }
                            ?> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>





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
import Api from './Api';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';
import { RouterLink } from 'vue-router';

    export default {
    components: { Nav, Footer },
    data () {
        return {
            category: '',
            city: '',
            status: '',
            verified: '',
            rating: '',
            professions:[],
            locations: [],
            selected_artisan: '',
            artisansResult: '',
            enquiry_name: '',
            enquiry_email: '',
            enquiry_mobile: '',
            enquiry_date: '',
            enquiry_time: '',
            enquiry_address: '',
            enquiry_message: '',

        }
    },
    mounted () {
        fetch('https://locus.fkkas.com/api/regions/lagos')
        .then((response) => response.json())
        .then((json) => {
            for (var obj in json.data) {
                // console.log(json[obj])
                    this.locations.push(json.data[obj].name)
                
            }
        });
        fetch('//localhost:8000/api/job/get/professions')
        .then((response) => response.json())
        .then((json) => {
            
            for (var obj in json) {
                // console.log(json[obj])
                    this.professions.push(json[obj].name)
                
            }
        })
        // Api.axios_instance.get(Api.baseUrl+'api/job/get/professions')
        // .then(response => {
        //     this.professions = response.data
        // })
        // .catch(error => {
        //     this.professions = []
        // })
        
    },
    methods : {
        searchArtisans () {
            
            const formData = {location:this.city, profession:this.category, status:this.status}
            console.log(formData)
            Api.axios_instance.post(Api.baseUrl+'api/job/search/professionals', formData)
            .then(response => {
                console.log(response.data.detail)
                this.artisansResult = response.data.detail
            })
            .catch(error => {
                console.log(error)
            })
        },

        detail_enquiry_form (e) {
            const formData = {
                artisan: this.selected_artisan.artisan_id,
                name: this.enquiry_name,
                phone: this.enquiry_mobile,
                email: this.enquiry_email,
                date: this.enquiry_date,
                time: this.enquiry_time,
                location: this.enquiry_address,
                message: this.enquiry_message

            }
            console.log(this.selected_artisan)
            Api.axios_instance.post(Api.baseUrl+'api/job/create/enquiry', formData)
            .then(response=>{
                this.$toast.success("Booking Sent")
                this.enquiry_name = ''
                this.enquiry_mobile = ''
                this.enquiry_email = ''
                this.enquiry_message = ''
                this.enquiry_address = ''
                this.date = ''
                this.time = ''

            })
            $("#expfrm25").modal('hide')
        },
        dataToModal (profile) {
            this.selected_artisan = profile
        }
    }

}
</script>

<style scoped>

</style>