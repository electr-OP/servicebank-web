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
                    <span class="udb-inst">All Listings</span>
                    <div class="ud-cen-s2">
                        <h2>Listing Details</h2>
                        <a href="add-listing-start" class="db-tit-btn">Add New Listing</a>
                        <div class="table-responsive">
                            <table class="table bordered">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Listing Name</th>
                                        <th>Rating</th>
                                        <th>Views</th>
                                        <th>Status</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><img src="/images/listings/hot4.jpg">adad <span>11, Jul 2022</span></td>
                                        <td><span class="db-list-rat">0</span></td>
                                        <td><span class="db-list-rat">8</span></td>
                                        <td><span class="db-list-ststus">Active</span></td>
                                        <td><a href="edit-listing-step-1?row=LIST498" class="db-list-edit">Edit</a></td>
                                        <td><a href="delete-listing?row=LIST498" class="db-list-edit">Delete</a></td>
                                        <td><a href="./job_details.php" class="db-list-edit" target="_blank">Preview</a></td>
                                    </tr> 
                                </tbody>
                            </table>
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
import Footer from '../../components/Footer.vue';
import Nav from '../../components/Users/Layout/Nav.vue';
import Sidebar from '../../components/Users/Layout/Sidebar.vue';

    export default {
    components: { Footer, Nav, Sidebar }
}
</script>

<style lang="scss" scoped>

</style>