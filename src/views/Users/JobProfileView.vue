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
<section class="login-reg job-form">
    <div class="container">
        <div class="row">
            <div class="login-main add-list">
                <div class="log-bor">&nbsp;</div>
                <span class="steps">Job profile</span>
                <div class="log">
                    <form class="job_profile_for m" id="submit_job_profile_form" name="job_profile_form" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">Your Name*</label>
                                <input type="text" readonly name="profile_name" value="<?= $user_details->first_name ?> <?= $user_details->last_name ?>" class="form-control" >
                            </div> 
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">Phone Number</label>
                                <input type="text" required onkeypress="return isNumber(event)" name="phone_number" class="form-control">
                            </div> 
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">City</label>
                                <input type="text" required name="city" class="form-control">
                            </div>
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">State</label>
                                <input type="text" required name="state" class="form-control">
                            </div>
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">Open Time</label>
                                <input type="time" required name="open_time" value="10:30" class="form-control">
                            </div>
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">Close Time</label>
                                <input type="time" required name="close_time" value="10:30" class="form-control">
                            </div> 
                            <!-- <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">Job profile image</label>
                                <div class="fil-img-uplo">
                                    <span class="dumfil">Upload a file</span>
                                    <input type="file" required name="job_profile_image" accept="image/*,.jpg,.jpeg,.png" class="form-control">
                                </div>
                            </div>  -->
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">Job profession</label>
                                <select class="chosen-select" required name="category_id">
                                    <option value="" disabled>Select Category</option>
                                    <!-- <?php
                                            foreach($categories as $category){ ?> -->
                                            <option value="<?= $category->id ?>">{{category}}</option> 
                                    <!-- <?php }
                                    ?>  -->
                                </select>
                            </div>  
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <label class="tit">Skill set</label>
                                    <select required class="chosen-select" name="skill_id">
                                    <option value="" disabled>Select Skill</option>
                                        <!-- <?php
                                            foreach($skills as $category){ ?> -->
                                                <option value="<?= $category->id ?>">{{category}}</option> 
                                        <!-- <?php }
                                        ?> -->
                                    </select>
                                </div>
                            </div> 
                            <div class="col-md-4 d-flex justify-content-between align-items-center">
                                <label class="ti t">Online Booking</label>
                                <input type="checkbox" name="online_booking" checked class="fo rm-control">
                            </div> 
                            <div class="col-md-12">
                                <div class="form-group jb-fm-box-hig">
                                    <h5 data-toggle="collapse" data-target="#jb-expe1">About You</h5>
                                    <div id="jb-expe1" class="collapse coll-box">
                                        <input type="text" name="about" value="" class="form-control"> 
                                    </div>
                                </div> 
                            </div>
                            <div class="col-md-12">
                                <div class="form-group jb-fm-box-hig">
                                    <h5 data-toggle="collapse" data-target="#jb-expe2">Website</h5>
                                    <div id="jb-expe2" class="collapse coll-box">
                                        <input type="text" name="website" value="" class="form-control"> 
                                    </div>
                                </div> 
                            </div>
                            <div class="col-md-12">
                                <div class="form-group jb-fm-box-hig">
                                    <h5 data-toggle="collapse" data-target="#jb-expe3">Address</h5>
                                    <div id="jb-expe3" class="collapse coll-box">
                                        <input type="text" name="address" value="" class="form-control"> 
                                    </div>
                                </div> 
                            </div>
                            <div class="col-md-12">
                                <div class="form-group jb-fm-box-hig">
                                    <h5 data-toggle="collapse" data-target="#jb-expe4">Experiencekkkdlld Details</h5>
                                    <div id="jb-expe4" class="collapse coll-box">
                                        <input type="text" name="experience" value="" class="form-control"> 
                                    </div>
                                </div>  
                            </div>
                            <!-- <div class="col-md-12">
                                <div class="form-group jb-fm-box-hig">
                                    <h5 data-toggle="collapse" data-target="#jb-edu">Education &amp; Qualification</h5>
                                    <div id="jb-edu" class="collapse coll-box">
                                        <input type="text" name="education_1" value="ME - Information Technology - 2008 Passed out" class="form-control"> 
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group jb-fm-box-hig">
                                    <h5 data-toggle="collapse" data-target="#jb-addi">Additional information</h5>
                                    <div id="jb-addi" class="collapse coll-box">
                                        <input type="text" name="additional_info_1" value="NIIIT Web development training" class="form-control" placeholder="Extra courses">
                                        <hr>
                                        <input type="text" name="additional_info_2" value="6 months inplant training" class="form-control" placeholder="Training details">
                                        <hr>
                                        <input type="text" name="additional_info_3" value="" class="form-control" placeholder="Others 1">
                                        <hr>
                                        <input type="text" name="additional_info_4" value="" class="form-control" placeholder="Others 2">
                                    </div>
                                </div>
                            </div> 
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">Resume</label>
                                <div class="fil-img-uplo">
                                    <span class="dumfil">Upload a file</span>
                                    <input type="file" 
                                        name="job_profile_resume" 
                                        accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                                        class="form-control">
                                </div>

                                <label class="tit">Profile cover image</label>
                                <div class="fil-img-uplo">
                                    <span class="dumfil">Upload a file</span>
                                    <input type="file" name="cover_image" accept="image/*,.jpg,.jpeg,.png" class="form-control">
                                </div>
                            </div> 
                            <div class="form-group col-12 col-md-6 col-lg-6">
                                <label class="tit">Year(s) of experience</label>
                                <input type="text" onkeypress="return isNumber(event)" name="years_of_experience" value="10" class="form-control">
                            </div> -->
                            <div class="col-md-12">
                                <input type="hidden" name="create_job_listing" />
                                <button type="submit" value="submit" class="blu-upp btn btn-primary submit_button">
                                    Create Job Listing
                                </button> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section> 

<Footer/>

<!-- <script>
    $(document).ready(function() { 
  
        var submit_button = $('.submit_button'); 
        var buttonText = submit_button.text();
        $('#submit_job_profile_form').submit(function(e) {
            e.preventDefault();
            submit_button.text('Loading ...');
            var data = new FormData($(this)[0]);
            $.ajax({ 
                url: '/controller/dashboard/JobController.php',
                method: 'POST',
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function() {
                    submit_button.text('Submitting ...');
                    submit_button.attr('disabled', true);
                },
                success: function(res) {
                    var response = JSON.parse(res)
                    console.log(response);
                    if (response['status'] == 1) {
                        toastr['success'](
                            response['msg'],
                            '👋 Successful', {
                                closeButton: true,
                                tapToDismiss: false,
                                progressBar: true,
                            }
                        )
                        window.location = './dashboard.php';
                    } else if(response['msg'] == "Validation error"){ 
                        for (const property in response['data']) {
                            toastr['error'](
                                `${response['data'][property]}`,
                                'Oppos!', {
                                    closeButton: true,
                                    tapToDismiss: false,
                                    progressBar: true,
                                }
                            ); 
                        }
                    }else if(response['msg'] == "Unauthorized"){ 
                        window.location = '/auth/login.php';
                    }else {
                        toastr['error'](
                            response['msg'],
                            'Oppos!', {
                                closeButton: true,
                                tapToDismiss: false,
                                progressBar: true,
                            }
                        );
                    }
                    submit_button.text(buttonText);
                    submit_button.attr('disabled', false);
                },
                error: function(err) {
                    // console.log(err)
                    submit_button.text(buttonText);
                    submit_button.attr('disabled', false);
                }
            })
        })
  
    })
</script> -->

</template>

<script>
import Footer from '../../components/Footer.vue';
import Nav from '../../components/Users/Layout/Nav.vue';
</script>

<style lang="scss" scoped>

</style>