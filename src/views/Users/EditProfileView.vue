<template>
    
<!-- START -->
<section>
    <div class="str ind2-home">
        <div>
            <Nav/>
        </div>
    </div>
</section>
<!-- END -->

<!--PRICING DETAILS-->
<section class=" ud">
    <div class="ud-inn">
        <Sidebar/>
        <div class="ud-main">
            <section class="login-reg job-form">
                <div class="container">   
                    <div class="ro w"> 
                        <div class="row">
                            <div class="col-md-2 col-lg-2"></div>
                            <ul class="nav nav-tabs ">
                                <li class="nav-item">
                                    <a href="#home" class="nav-link active" data-toggle="tab">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#profile" class="nav-link" data-toggle="tab">Image</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#messages" class="nav-link" data-toggle="tab">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content mt-5">
                            <div class="tab-pane fade show active" id="home">
                                <div class="login-main add-list">
                                    <div class="log-bor">&nbsp;</div>
                                    <span class="steps">Artisan profile</span>
                                    <div class="log">
                                        <form class="job_profile_for m" id="submit_update_job_profile_form" @submit.prevent="profile_form" enctype="multipart/form-data">
                                            <div class="row">
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Your Name*</label>
                                                    <input type="text" readonly :value="full_name" class="form-control" >
                                                </div> 
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Phone Number</label>
                                                    <input type="text" required readonly v-model="phone" class="form-control" >
                                                </div> 
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">City</label>
                                                    <select type="text" required v-model="city" class="form-control" >
                                                        <option value="" disabled>Select City</option>
                                                        <option v-for="loc in locations" :value="loc">{{loc}}</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">State</label>
                                                    <input type="text" required v-model="state" class="form-control">
                                                </div>
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Job profession</label>
                                                        <Multiselect class="chosen-select" mode="tags" v-model="professions" :options="professions_options"/>
                            
                                                </div>  
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Email</label>
                                                    <input type="text" required readonly v-model="email" class="form-control">
                                                </div> 
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Open Time</label>
                                                    <input type="time" required v-model="open_time" class="form-control">
                                                </div>
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Close Time</label>
                                                    <input type="time" required v-model="close_time" class="form-control">
                                                </div> 
                                                <!-- <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Job profile image</label>
                                                    <div class="fil-img-uplo">
                                                        <span class="dumfil">Upload a file</span>
                                                        <input type="file" required name="job_profile_image" accept="image/*,.jpg,.jpeg,.png" class="form-control">
                                                    </div>
                                                </div>  -->
                                                
                                                <div class="col-md-4 d-flex justify-content-between align-items-center">
                                                    <label class="ti t">Online Booking</label>
                                                    <input type="checkbox" name="online_booking" checked class="fo rm-control"   value="<?= $business_profile->online_booking ?>">
                                                </div> 
                                                <div class="col-md-12">
                                                    <div class="form-group jb-fm-box-hig">
                                                        <h5 data-toggle="collapse" data-target="#jb-expe1">Description</h5>
                                                        <div id="jb-expe1" class="collapse coll-box">
                                                            <input type="text" v-model="desc" class="form-control"> 
                                                        </div>
                                                    </div> 
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group jb-fm-box-hig">
                                                        <h5 data-toggle="collapse" data-target="#jb-expe2">Website</h5>
                                                        <div id="jb-expe2" class="collapse coll-box">
                                                            <input type="text" v-model="website" class="form-control" > 
                                                        </div>
                                                    </div> 
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group jb-fm-box-hig">
                                                        <h5 data-toggle="collapse" data-target="#jb-expe3">Address</h5>
                                                        <div id="jb-expe3" class="collapse coll-box">
                                                            <input type="text" v-model="address" class="form-control"> 
                                                        </div>
                                                    </div> 
                                                </div>

                                                <div class="col-md-12">
                                                
                                                    <button type="submit" value="submit" class="blu-upp btn btn-primary submit_button">
                                                        Update Profile
                                                    </button> 
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile">
                                <div class="login-main add-list">
                                    <div class="log-bor">&nbsp;</div>
                                    <span class="steps">Job profile</span>
                                    <div class="log">
                                        <form class="job_profile_for m" id="submit_job_profile_image" name="job_profile_form" method="post" enctype="multipart/form-data">
                                            <div class="row"> 
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Job profile image</label>
                                                    <div class="fil-img-uplo">
                                                        <span class="dumfil">Upload a file</span>
                                                        <input type="file" required name="job_profile_image" accept="image/*,.jpg,.jpeg,.png" class="form-control">
                                                    </div>
                                                </div>  
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit"></label>
                                                    <!-- <?= $business_profile->photo ?> -->
                                                    <!-- <div class="fil-img-uplo">
                                                        <span class="dumfil">Upload a file</span>
                                                        <input type="file" required name="job_profile_image" accept="image/*,.jpg,.jpeg,.png" class="form-control">
                                                    </div> -->
                                                </div>      
                                                <div class="col-md-12">
                                                    <input type="hidden" name="submit_update_job_profile_image" />
                                                    <input type="hidden" name="id" value="<?= $business_profile->id ?>" >
                                                    <button type="submit" value="submit" class="blu-upp btn btn-primary submit_job_profile_image">
                                                        Upload
                                                    </button> 
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="messages"> 
                                <div class="login-main add-list">
                                    <div class="log-bor">&nbsp;</div>
                                    <span class="steps">Job profile</span>
                                    <div class="log">
                                        <form class="submit_job_pricing m" id="submit_job_pricing" @submit.prevent="updatePricing" method="post" enctype="multipart/form-data">
                                            <div v-for="rec in pricing" :key="rec">
                                                <div class="ud-cen-s2 ud-pro-edit">
                                                <span >{{rec.name}}</span>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Minimum Price</label>
                                                    <input type="number" required v-model="rec.min_price" class="form-control">
                                                </div> 
                                                <div class="form-group col-12 col-md-6 col-lg-6">
                                                    <label class="tit">Maximum Price</label>
                                                    <input type="number" required v-model="rec.max_price" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                                <div class="col-md-12"> 
                                                    <button type="submit" value="submit" class="blu-upp btn btn-primary submit_job_pricing">
                                                        Update
                                                    </button> 
                                                </div>
                                            
                                        </form>
                                    </div>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</section>
<Footer/>

</template>

<script>
import Nav from '../../components/Users/Layout/Nav.vue';
import Sidebar from '../../components/Users/Layout/Sidebar.vue';
import Footer from '../../components/Footer.vue';
import Api from '../Api';
import Multiselect from '@vueform/multiselect'

    export default {
    components: { Sidebar, Nav, Footer, Multiselect },

    data () {
        return {
            artisan_id: '',
            first_name: '',
            last_name: '',
            full_name: '',
            phone: '',
            email: '',
            city: '',
            state: '',
            open_time: '',
            close_time: '',
            locations: [],
            professions: [],
            pricing: [],
            professions_options: [],
            desc: '',
            website: '',
            address: '',

        }
    },

    mounted () {

        fetch('https://locus.fkkas.com/api/regions/lagos')
        .then((response) => response.json())
        .then((json) => {
            for (var obj in json.data) {
                // console.log(json.data[obj].name)
                this.locations.push(json.data[obj].name)
                
            }
        });
        const artisan_id = JSON.parse(localStorage.getItem('artisan_id'))
 
        Api.axios_instance.post(Api.baseUrl+'api/job/get/artisan', {'artisan_id': artisan_id})
        .then(response => {
            console.log(response.data.detail)
            this.first_name = response.data.detail.user.first_name
            this.last_name = response.data.detail.user.last_name
            this.full_name = this.first_name + ' ' + this.last_name
            this.phone = response.data.detail.phone
            this.email = response.data.detail.email
            this.city = response.data.detail.city
            this.state = response.data.detail.state
            this.open_time = response.data.detail.working_time_from
            this.close_time = response.data.detail.working_time_to
            this.desc = response.data.detail.description
            this.address = response.data.detail.address
            this.website = response.data.detail.website
            this.artisan_id = response.data.detail.artisan_id
            for (var obj in response.data.detail.profession) {
                    this.professions.push(response.data.detail.profession[obj])
                
            }

        })
        
        fetch('//localhost:8000/api/job/get/professions')
        .then((response) => response.json())
        .then((json) => {           
            for (var obj in json) {
                // console.log(json[obj])
                    this.professions_options.push(json[obj].name)               
            }
        })

        Api.axios_instance.post(Api.baseUrl+'api/job/get/pricing', {'artisan_id': artisan_id})
        .then((response) =>{
            console.log(response.data)
            for (var obj in response.data.detail) {
                this.pricing.push(response.data.detail[obj])   
            }
        })
        
    },

    methods: {
        profile_form (e) {
            const formData = {
                    artisan_id: this.artisan_id,
                    phone: this.phone,
                    email:this.email,
                    name: this.business_name,
                    last_name: this.last_name,
                    first_name: this.first_name,
                    city: this.city,
                    state: this.state,
                    address: this.address,
                    // latitude: this.latitude,
                    // longitude: this.longitude,
                    // state_code: this.state_code,
                    description: this.desc,
                    website: this.website,
                    working_time_from: this.open_time,
                    working_time_to: this.close_time,
                    profession : this.professions,
                }
            console.log(formData)
                Api.axios_instance.post(Api.baseUrl+'api/artisans/profile/update', formData)
                .then(response =>{          
                    this.$toast.success('Profile Updated')
                })
        },
        updatePricing () {
            const data = {"artisan_id": this.artisan_id, "list_of_data": this.pricing};
            Api.axios_instance.post(Api.baseUrl+'api/job/update/pricing', data)
            .then(response =>{
                console.log(response.data)
                this.$toast.success('Pricing Updated')
            })
        }
    }
}

</script>

<style scoped>
</style>
<style src="@vueform/multiselect/themes/default.css"></style>