<template>
    <Nav/>
<section class=" login-reg">
    <div class="container">
        <div class="row">
            <div class="login-main add-list">
                <div class="log-bor">&nbsp;</div>
                <span class="steps">Create new Ads</span>
                <div class="log">
                    <div class="login">

                        <h4>Submit your Ads</h4>
                        <form name="create_ads_form" id="create_ads_form" method="post" action="new_ads_insert.php" enctype="multipart/form-data" novalidate="novalidate">
                            <input type="hidden" value="NaN" name="ad_total_days" id="ad_total_days" class="validate">
                            <input type="hidden" value="20" name="ad_cost_per_day" id="ad_cost_per_day" class="validate">
                            <input type="hidden" value="NaN" name="ad_total_cost" id="ad_total_cost" class="validate">
                            <ul>
                                <li>
                                    <!--FILED START-->
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group ca-sh-user">
                                                <select name="all_ads_price_id" required="required" class="form-control valid" id="adposi">
                                                    <option value="">Choose Ads Position *</option>
                                                    <option mytag="70" value="1">Home page Bottom (70$ /per day)
                                                    </option>
                                                    <option mytag="50" value="2">All listing page Top (50$ /per day)
                                                    </option>
                                                    <option mytag="20" value="3">All listing page Bottom (20$ /per day)
                                                    </option>
                                                    <option mytag="70" value="4">All listing page Left (70$ /per day)
                                                    </option>
                                                    <option mytag="20" value="5">Listing detail page Right (20$ /per day)
                                                    </option>
                                                    <option mytag="40" value="6">Listing detail page Bottom (40$ /per day)
                                                    </option>
                                                    <option mytag="70" value="7">News Home Page (70$ /per day)
                                                    </option>
                                                    <option mytag="20" value="8">News Detail Page -1 (20$ /per day)
                                                    </option>
                                                    <option mytag="40" value="9">News Detail Page -2 (40$ /per day)
                                                    </option>
                                                </select>
                                                <a href="ad-details" class="frmtip" target="_blank">Pricing details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!--FILED END-->
                                    <!--FILED START-->
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="date" autocomplete="off" name="ad_start_date" class="form-control valid" placeholder="Ad start date (MM/DD/YYYY)" required=""><label for="ad_start_date" class="error" style="display: none;">Start Date is Required</label>
                                            </div>
                                        </div>
                                    </div>
                                    <!--FILED END-->
                                    <!--FILED START-->
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="date" autocomplete="off" name="ad_end_date" class="form-control valid" placeholder="Ad end date (MM/DD/YYYY)" required="">
                                            </div>
                                        </div>
                                    </div>
                                    <!--FILED END-->
                                    <!--FILED START-->
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Choose Ad image</label>
                                                <input type="file" name="ad_enquiry_photo" class="form-control" required="">
                                            </div>
                                        </div>
                                    </div>
                                    <!--FILED END-->
                                    <!--FILED START-->
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea id="ad_link" name="ad_link" class="form-control error" placeholder="Advertisement External link" required="" spellcheck="false"></textarea><label for="ad_link" class="error">Ad Link is Required</label>
                                                <grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: auto;" class="cGcvT"></grammarly-extension>
                                                <grammarly-extension data-grammarly-shadow-root="true" style="mix-blend-mode: darken; position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: auto;" class="cGcvT"></grammarly-extension>
                                            </div>
                                        </div>
                                    </div>
                                    <!--FILED END-->
                                    <!--FILED START-->
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="ad-pri-cal">
                                                <ul>
                                                    <li>
                                                        <div>
                                                            <span>Total days</span>
                                                            <h5 class="ad-tdays">NaN</h5>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <span>Cost Per Day</span>
                                                            <h5>$<b class="ad-pocost">20</b></h5>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <span>Tax</span>
                                                            <h5>$4</h5>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <span>Total Cost</span>
                                                            <h5>$<b class="ad-tcost">NaN</b></h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!--FILED END-->
                                </li>
                            </ul>
                            <!--FILED START-->
                            <div class="row">
                                <div class="col-md-12">
                                    <button type="submit" name="create_ad_submit" class="btn btn-primary">Publish this Ad</button>
                                </div>
                                <div class="col-md-12">
                                    <a href="/user/dashboard.php" class="skip">Go to user dashboard &gt;&gt;</a>
                                </div>
                            </div>
                            <!--FILED END-->
                        </form>
                        <div class="ud-notes">
                            <p><b>Notes:</b> Once you submit your Ad then Admin or support team will contact you shortly.</p>
                        </div>
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
        <li><a href="/"><img src="images/icon/home.png">Home</a></li>
        <li><span class="mob-sear"><img src="images/icon/search1.png">Search</span></li>
        <li><a href="/experts.php"><img src="images/icon/expert.png">Service Experts</a></li>
        <li><a href="/all-profiles.php"><img src="images/icon/employee.png">Service Providers</a></li> 
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