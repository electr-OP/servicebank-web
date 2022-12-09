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
            <div class="ud-main-inn ud-no-rhs">
                <div class="ud-cen">
                    <div class="log-bor">&nbsp;</div>
                    <span class="udb-inst">Enquiries</span>
                    <div class="ud-cen-s2">
                        <h2>Enquiry Details</h2>
                        <div class="row">
                            <div class="col-md-2 col-lg-2"></div>
                            <ul class="nav nav-tabs ">
                                <li class="nav-item">
                                    <a href="#pending" class="nav-link active" data-toggle="tab">Pending</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#all" class="nav-link" data-toggle="tab">All</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#accept" class="nav-link" data-toggle="tab">Accepted</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content mt-5">
                        <div class="tab-pane fade show active" id="pending">
                        <table class="responsive-table bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th> 
                                    <th>Response</th>
                                </tr>
                            </thead>
                            <tbody> 
                                <tr v-for="enquiry in pendingEnquiryDetails" :key="enquiry">
                                    <td>{{(pendingEnquiryDetails.indexOf(enquiry)+1)}}</td>
                                    <td>
                                        {{enquiry.name}} 
                                        <span>{{enquiry.date}}</span>
                                    </td>
                                    <td>{{enquiry.email}}</td>
                                    <td>{{enquiry.phone}}</td>
                                    <td>{{enquiry.message}}</td> 
                                    <td><a class="db-list-edit" @click="responseButton('ACCEPT', enquiry.id)">Accept</a> <a class="db-list-edit" @click="responseButton('REJECT', enquiry.id)">Reject</a></td>
                                </tr> 
                            </tbody>
                        </table>
                        </div>

                        <div class="tab-pane fade" id="all">
                        <table class="responsive-table bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th> 
                                    <!-- <th>Delete</th> -->
                                </tr>
                            </thead>
                            <tbody> 
                                <tr v-for="enquiry in allEnquiryDetails" :key="enquiry">
                                    <td>{{(allEnquiryDetails.indexOf(enquiry)+1)}}</td>
                                    <td>
                                        {{enquiry.name}} 
                                        <span>{{enquiry.date}}</span>
                                    </td>
                                    <td>{{enquiry.email}}</td>
                                    <td>{{enquiry.phone}}</td>
                                    <td>{{enquiry.message}}</td> 
                                    <!-- <td><a href="enquiry_trash.php?messageenquirymessageenquirymessageenquirymessageenquiry=58" class="db-list-edit">Delete</a></td> -->
                                </tr> 
                            </tbody>
                        </table>
                        </div>

                        <div class="tab-pane fade" id="accept">
                        <table class="responsive-table bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th> 
                                    <!-- <th>Delete</th> -->
                                </tr>
                            </thead>
                            <tbody> 
                                <tr v-for="enquiry in acceptEnquiryDetails" :key="enquiry">
                                    <td>{{(acceptEnquiryDetails.indexOf(enquiry)+1)}}</td>
                                    <td>
                                        {{enquiry.name}} 
                                        <span>{{enquiry.date}}</span>
                                    </td>
                                    <td>{{enquiry.email}}</td>
                                    <td>{{enquiry.phone}}</td>
                                    <td>{{enquiry.message}}</td> 
                                    <!-- <td><a href="enquiry_trash.php?messageenquirymessageenquirymessageenquirymessageenquiry=58" class="db-list-edit">Delete</a></td> -->
                                </tr> 
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</section>
<Footer/>

</template>

<script>
    import Nav from '../../components/Users/Layout/Nav.vue'
    import Sidebar from '../../components/Users/Layout/Sidebar.vue'
    import Footer from '../../components/Footer.vue'
    import Api from '../Api'

    export default {
    components: { Sidebar, Nav, Footer },

    data () {
        return {
            allEnquiryDetails: [],
            pendingEnquiryDetails: [],
            acceptEnquiryDetails: []
        }
    },

    mounted () {
        this.getEnquiries()
    },
    
    methods: {
        responseButton (resp, enquiry_id) {
            const data = {enquiry_id:enquiry_id, response:resp}
            Api.axios_instance.post(Api.baseUrl+'api/artisans/update/enquiry', data)
            .then(response=>{
                this.getEnquiries()
            })
            .catch(error=>{
            })
        },
        getEnquiries () {
            const artisan_id = JSON.parse(localStorage.getItem('artisan_id'))
        Api.axios_instance.post(Api.baseUrl+'api/artisans/get/enquiries', {'artisan_id': artisan_id})
        .then(response=>{
            // console.log(response.data.detail)
            console.log(response.data.detail)
            this.allEnquiryDetails = response.data.detail.all
            this.pendingEnquiryDetails = response.data.detail.pending
            this.acceptEnquiryDetails = response.data.detail.accept
        })
        }
    },
    updated () {
        
    }
}
</script>

<style lang="scss" scoped>

</style>