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
                    <!-- <div class="filt-com">
                        <div class="job-alert">
                            <h5>Are looking for Service Expert?</h5>
                            <p>We will help you to arrage best Service Expert.</p>
                            <a href="bike-service.html#" data-toggle="modal" data-target="#allexpfrm">Send your
                                queries</a>
                        </div>
                    </div> -->
                    <!--- END --->
                    <!--- START --->

                    <form action="search.php">

                        <div class="filt-co m lhs-cte">
                            <h6>User</h6>
                            <div class="form-group">
                                <input value="<?= isset($_GET['name']) ?  $_GET['name'] : '' ?>" type="text" name="name" class="form-control" placeholder="">
                            </div>
                        </div>


                        <div class="fil t-com lhs-cte">
                            <h6>Phone Number</h6>
                            <div class="form-group">
                                <input value="<?= isset($_GET['phone']) ?  $_GET['phone'] : '' ?>" type="digit" name="phone" class="form-control" placeholder="">
                            </div>
                        </div>

                        <!--- END --->
                        <!--- START --->
                        <div class="fi lt-com l">
                            <h6>Service</h6>
                            <div class="form-group">
                                <select class="chosen-select" name="category" id="city_check">
                                    <option selected value="">Service</option>
                                    <option value="Mechanic">Mechanic</option>
                                    <option value="Plumber">Plumber</option>
                                </select>
                            </div>
                        </div>
                        <!--- END --->
                        <div class="fil t-com lhs-lc">
                            <h6>Location </h6>
                            <div class="form-group">
                                <input type="text" value="<?= isset($_GET['location']) ?  $_GET['location'] : '' ?>" name="location" class="form-control" placeholder="">
                            </div>
                        </div>

                        <button class="btn btn-primary pull-right float-right " type="submit">Search</button>
                    </form>
                </div>
                <div class="col-md-9">
                    <!-- <div class="job-ser-cnt">Showing <?= $_GET['category'] ?></div> -->
                    <div class="job-list">
                        <ul>
                            <!-- <?php 
                                foreach($business_profile as $key => $profile){ ?> -->
                                    <li>
                                        <div class="job-box">
                                            <div class="job-box-img">
                                                <img src="http://via.placeholder.com/640x360" alt="">
                                            </div>
                                            <!-- <div class="ser-exp-ave" title="User currently available">
                                                    <span class="ser-avail-yes"></span>
                                                </div> -->
                                            <div class="job-days">
                                                <!-- <span class="ver"><i class="material-icons"
                                                            title="Verified expert">verified_user</i></span> -->
                                                <span class="rat" title="User rating 5 out of">3.2</span>
                                            </div>
                                            <div class="job-box-con">
                                                <h4>{{first_name}} {{last_name}}</h4>
                                                <span>{{skill}}</span>
                                                <span>{{category}}</span>
                                            </div>
                                            <div class="job-box-apl">
                                                <!-- <span class="job-box-cta" data-toggle="modal" data-target="#expfrm25<?= $key ?>">Contact me</span> -->
                                                <a href="./details.php?user_id=<?= $profile->user->id ?>" class="serexp-cta-more">More
                                                    details</a>
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
                                            <div class="modal fade" id="expfrm25<?= $key ?>">
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
                                                            <form method="post" name="expert_all_enquiry_form" id="expert_all_enquiry_form">
                                                                <input type="hidden" class="form-control" name="expert_id" value="25" placeholder="" required>
                                                                <input type="hidden" class="form-control" name="expert_user_id" value="328" placeholder="" required>
                                                                <input type="hidden" class="form-control" name="enquiry_sender_id" value="" placeholder="" required>
                                                                <input type="hidden" class="form-control" name="enquiry_source" value="Website" placeholder="" required>
                                                                <div class="form-group">
                                                                    <input type="text" name="enquiry_name" value="" required="required" class="form-control" placeholder="Enter name*">
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="email" class="form-control" placeholder="Enter email*" required="required" value="" name="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address">
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" value="" name="enquiry_mobile" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaining 9 digit with 0-9" required>
                                                                </div>
                                                                <div class="form-group">
                                                                    <select class="chosen-select" required="required" name="enquiry_category">
                                                                        <option value="">Select Category</option>
                                                                        <option value="27">Plumbers</option>
                                                                        <option value="23">AC Services</option>
                                                                        <option value="24">LED Tv Services</option>
                                                                        <option value="26">Electrical service</option>
                                                                        <option value="25">Car service</option>
                                                                        <option value="28">House Cleaning service</option>
                                                                        <option value="29">Bike service</option>
                                                                        <option value="30">Pest control service</option>
                                                                        <option value="31">Home restoration services
                                                                        </option>
                                                                        <option value="32">House Decoration Services
                                                                        </option>
                                                                        <option value="33">Laptop service</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6 serex-date">
                                                                    <input type="text" class="form-control" name="enquiry_date" placeholder="Preferred Date" id="newdate">
                                                                </div>
                                                                <div class="form-group col-md-6 serex-time">
                                                                    <select class="chosen-select" name="enquiry_time">
                                                                        <option value="">Preferred Time</option>
                                                                        <option value="5:00 AM">5:00 AM</option>
                                                                        <option value="6:00 AM">6:00 AM</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group">
                                                                    <textarea class="form-control" name="enquiry_location" id="enquiry_location" placeholder="Enter your Location"></textarea>
                                                                </div>
                                                                <div class="form-group">
                                                                    <textarea class="form-control" name="enquiry_message" id="enquiry_message" placeholder="Enter your query or message"></textarea>
                                                                </div>
                                                                <input type="hidden" name="" id="source">
                                                                <button disabled="disabled" type="submit" id="expert_all_enquiry_submit" name="expert_all_enquiry_submit" class="btn btn-primary"> Log In To Submit </button>
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
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';

    export default {
    components: { Footer, Nav }
}
</script>

<style lang="scss" scoped>

</style>