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
                    <span class="udb-inst">User Profile</span>
                    <div class="ud-cen-s2 ud-pro-edit">
                        <h2>Profile Details</h2>
                        <form id="profile_update" name="profile_update" action="profile_update.php" method="post" enctype="multipart/form-data">
                            <input type="hidden" value="61924img_9120.jpg" autocomplete="off" name="profile_image_old" id="profile_image_old" required="" class="validate">
                            <input type="hidden" value="18254ld+chi.jpg" autocomplete="off" name="cover_image_old" id="cover_image_old" required="" class="validate">
                            <input type="hidden" value="81970437398_46c3_10.jpg" autocomplete="off" name="profile_id_proof_old" id="profile_id_proof_old" required="" class="validate">
                            <input type="hidden" value="a4d88d3410db1a1f8a3bc9fcb4029a80" autocomplete="off" name="password_old" id="password_old" required="" class="validate">
                            <table class="responsive-table bordered">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td> {{first_name}} {{last_name}} </td>
                                    </tr>
                                    <tr>
                                        <td>Email Id</td>
                                        <td> {{email}} </td>
                                    </tr>
                                    <!-- <tr>
                                        <td>Account Type</td>
                                        <td><?= $user_details->user_type ?></td>
                                    </tr> -->
                                    <!-- <tr>
                                        <td>Profile Password</td>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="password" placeholder="Change password">
                                            </div>
                                        </td>
                                    </tr>-->
                                    <tr>
                                        <!-- <td>
                                            <button type="submit" name="profile_update_submit" class="db-pro-bot-btn">Save Changes</button>
                                            <a href="db-payment" class="db-pro-bot-btn">Upgrade</a>
                                        </td> -->
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</section>

<Footer/>
</template>

<script>
import Nav from '../../components/Users/Layout/Nav.vue';
import Sidebar from '../../components/Users/Layout/Sidebar.vue';
import Footer from '../../components/Footer.vue';

    export default {
    components: { Sidebar, Nav, Footer }
}
</script>

<style lang="scss" scoped>

</style>