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

 <!-- START -->
 <!--PRICING DETAILS-->
 <section class=" ud">
     <div class="ud-inn">
         <Sidebar/>
         <!--CENTER SECTION-->
         <div class="ud-main">
             <div class="ud-main-inn">
                 <div class="ud-cen">
                     <div class="cd-cen-intr">
                         <div class="cd-cen-intr-inn">
                             <h6>Welcome back, <b> {{first_name}} {{last_name}} </b></h6>
                             <p>Stay up to date reports in your listing, products, events and blog reports here</p>
                         </div>
                     </div>
                     <div class="ud-cen-s1">
                         <ul>
                             <li>
                                 <div>
                                     <b>0</b>
                                     <h4>All Listings</h4>
                                     <p>Total no of listings</p>
                                     <a href="#">&nbsp;</a>
                                 </div>
                             </li>
                             <li>
                                 <div>
                                     <b>0</b>
                                     <h4>Enquiries</h4>
                                     <p>Total no of enquiry</p>
                                     <a href="#">&nbsp;</a>
                                 </div>
                             </li>
                             <li>
                                 <div>
                                     <b>0</b>
                                     <h4>Followings</h4>
                                     <p>Total no of followings</p>
                                     <a href="#">&nbsp;</a>
                                 </div>
                             </li>
                         </ul>
                     </div>
                     <!-- START -->
                     <div class="ud-cen-s3 ud-cen-s4">
                         <h2>Profile page</h2>
                         <a href="./edit_profile.php" class="db-tit-btn">Edit profile page</a>
                         <!-- <?php -->
                            <!-- if($business_profile){  ?> -->
                                <!-- <div class="ud-payment ud-pro-link">
                                    <div class="pay-lhs">
                                        <div class="lis-pro-badg">
                                            <div>
                                                <img src="http://via.placeholder.com/640x360" alt="">
                                                <h4><?= $user_details->first_name ?> <?= $user_details->last_name ?></h4>
                                                <p>Member since  <?= date_format(date_create($user_details->created_at), 'd M, Y') ?></p>
                                            </div>
                                            <a href="#" class="fclick" target="_blank">&nbsp;</a>
                                        </div>
                                    </div>
                                    <div class="pay-rhs">
                                        <ul>
                                            <li><b>Name : </b><?= $user_details->first_name ?> <?= $user_details->last_name ?></li>
                                            <li><b>Followers : </b> <span>0</span></li>
                                            <li><b>City : </b>  <?= $business_profile->city ?></li>
                                            <li><b>Email : </b> <?= $user_details->email ?></li>
                                            <li><b>Category : </b>  <?= $business_profile->category->name ?></li>
                                            <li><b>Skill : </b> <?= $business_profile->skill->name ?></li>
                                            <?php 
                                                if(isset($pricing)){ ?>
                                                    <li><b>Min Price : </b> &#8358; <?= number_format($pricing->min_price) ?></li>
                                                    <li><b>Max Price : </b> &#8358; <?= number_format($pricing->max_price) ?></li>
                                            
                                            <?php }
                                            ?> 
                                            <li class="pro">
                                                <input type="text" value="http://<?= $_SERVER['HTTP_HOST'].'/details.php?user_id='.$user_details->id ?>" readonly="">
                                            </li>
                                            <li class="pre">
                                                <a target="_blank" href="http://<?= $_SERVER['HTTP_HOST'].'/details.php?user_id='.$user_details->id ?>">View my profile page</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> -->
                        <!-- <?php } ?>  -->
                     </div> 
                 </div>
                 <!--RIGHT SECTION-->
                 <div class="ud-rhs">
                     <div class="ud-rhs-promo">
                         <h3>Promote my business</h3>
                         <p>Your listing show on the top of the respective category page</p>
                         <a href="/post-your-ads.php">Start now</a>
                     </div>

                     <div class="ud-rhs-pay">
                         <div class="ud-rhs-pay-inn justify-content-around">
                             <h3>Wallet Information</h3>
                             <ul>
                                 <li><span>Ballance : </span> &#8358; 0</li>
                                 <li><span>Last Top Up: </span> </li>
                             </ul>
                             <div class="d-flex justify-content-around ">
                                 <button data-toggle="modal" data-target="#fundWallet" class="btn btn-sm btn-primary">Fund</button>
                                 <button data-toggle="modal" data-target="#withdrawal" class="btn btn-sm btn-primary">Withdraw</button>
                             </div>
                         </div>
                     </div> 
                     <!-- <div class="ud-rhs-pay ud- rhs-repo">
                         <div class="ud-rhs-pay-inn">
                             <h3>Last week report</h3>
                             <ul>
                                 <li>
                                     <span class="view">Enquiry</span>
                                     <span class="cout">00</span>
                                     <span class="name">Leads</span>
                                 </li>
                                 <li>
                                     <span class="view">Views</span>
                                     <span class="cout">41</span>
                                     <span class="name">Listing</span>
                                 </li>
                                 <li>
                                     <span class="cout">00</span>
                                     <span class="name">Messages</span>
                                 </li>
                             </ul>
                         </div>
                     </div> --> 
                 </div>
             </div>
         </div>
     </div>
 </section>
 <!--END PRICING DETAILS-->
 <!-- START -->

 <section>
     <div class="pop-ups pop-quo">
         <!-- The Modal -->
         <div class="modal fade" id="fundWallet" aria-modal="true" style="display: none;">
             <div class="modal-dialog">
                 <div class="modal-content">
                     <div class="log-bor">&nbsp;</div>
                     <span class="udb-inst">Fund Wallet</span>
                     <button type="button" class="close" data-dismiss="modal">×</button>
                     <!-- Modal Header -->
                     <div class="quote-pop">
                         <h4>Fund Wallet</h4>
                         <form method="post" name="popup_enquiry_form" id="popup_enquiry_form">
                             <div class="form-group">
                                 <input type="number" v-model="fund_amount" required="required" class="form-control" placeholder="Enter amount*">
                             </div>
                             <input type="hidden" id="source">
                             <button id="popup_enquiry_submit" @click="payWithPaystack" class="btn btn-primary">Fund </button>
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
         <div class="modal fade" id="withdrawal" aria-modal="true" style="display: none;">
             <div class="modal-dialog">
                 <div class="modal-content">
                     <div class="log-bor">&nbsp;</div>
                     <span class="udb-inst">Fund Withdrawal</span>
                     <button type="button" class="close" data-dismiss="modal">×</button>
                     <!-- Modal Header -->
                     <div class="quote-pop">
                         <h4>Fund Withdrawal</h4>
                         <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="paymentError.length">
                            <button type="button" class="close" data-dismiss="alert" aria-label="close">x
                            </button>
                            <span v-for="error in paymentError" :key="error"><strong>{{error}}<br></strong></span>
                        </div>
                         <form method="post" id="popup_enquiry_form">
                             <div class="form-group">
                                 <input type="number" v-model="withdraw_amount" required="required" class="form-control" placeholder="Enter amount*">
                             </div>
                             <div class="form-group">
                                 <input type="text" v-model="account_number" required="required" class="form-control" placeholder="Account Number*">
                             </div>
                             <div class="form-group">
                             <select
														id="bankCode"
													    v-model="bank_code"
														class="form-control form-control-alternative"
													    >
														<option value="">--Select Bank--</option>

														<option value="801">
														Abbey Mortgage Bank
														</option>

														<option value="044">
														Access Bank
														</option>

														<option value="063">
														Access Bank (Diamond)
														</option>

														<option value="035A">
														ALAT by WEMA
														</option>

														<option value="401">
														ASO Savings and Loans
														</option>

														<option value="50931">
														Bowen Microfinance Bank
														</option>

														<option value="50823">
														CEMCS Microfinance Bank
														</option>

														<option value="023">
														Citibank Nigeria
														</option>

														<option value="559">
														Coronation Merchant Bank
														</option>

														<option value="050">
														Ecobank Nigeria
														</option>

														<option value="562">
														Ekondo Microfinance Bank
														</option>

														<option value="50126">
														Eyowo
														</option>

														<option value="070">
														Fidelity Bank
														</option>

														<option value="51314">
														Firmus MFB
														</option>

														<option value="011">
														First Bank of Nigeria
														</option>

														<option value="214">
														First City Monument Bank
														</option>

														<option value="501">
														FSDH Merchant Bank Limited
														</option>

														<option value="00103">
														Globus Bank
														</option>

														<option value="058">
														Guaranty Trust Bank
														</option>

														<option value="51251">
														Hackman Microfinance Bank
														</option>

														<option value="50383">
														Hasal Microfinance Bank
														</option>

														<option value="030">
														Heritage Bank
														</option>

														<option value="51244">
														Ibile Microfinance Bank
														</option>

														<option value="50457">
														Infinity MFB
														</option>

														<option value="301">
														Jaiz Bank
														</option>

														<option value="082">
														Keystone Bank
														</option>

														<option value="50211">
														Kuda Bank
														</option>

														<option value="90052">
														Lagos Building Investment Company Plc.
														</option>

														<option value="50563">
														Mayfair MFB
														</option>

														<option value="50304">
														Mint MFB
														</option>

														<option value="565">
														One Finance
														</option>

														<option value="999991">
														PalmPay
														</option>

														<option value="526">
														Parallex Bank
														</option>

														<option value="311">
														Parkway - ReadyCash
														</option>

														<option value="999992">
														Paycom
														</option>

														<option value="50746">
														Petra Mircofinance Bank Plc
														</option>

														<option value="076">
														Polaris Bank
														</option>

														<option value="101">
														Providus Bank
														</option>

														<option value="502">
														Rand Merchant Bank
														</option>

														<option value="125">
														Rubies MFB
														</option>

														<option value="51310">
														Sparkle Microfinance Bank
														</option>

														<option value="221">
														Stanbic IBTC Bank
														</option>

														<option value="068">
														Standard Chartered Bank
														</option>

														<option value="232">
														Sterling Bank
														</option>

														<option value="100">
														Suntrust Bank
														</option>

														<option value="302">
														TAJ Bank
														</option>

														<option value="51211">
														TCF MFB
														</option>

														<option value="102">
														Titan Bank
														</option>

														<option value="032">
														Union Bank of Nigeria
														</option>

														<option value="033">
														United Bank For Africa
														</option>

														<option value="215">
														Unity Bank
														</option>

														<option value="566">
														VFD Microfinance Bank Limited
														</option>

														<option value="035">
														Wema Bank
														</option>

														<option value="057">
														Zenith Bank
														</option>
													</select>
                                                </div>
                             
                             <input type="hidden" id="source">
                             <button id="popup_enquiry_submit" class="btn btn-primary" @click="makeWithdrawal" :disabled="loading">{{loading?"Please wait":"Make Withdrawal"}}</button>
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
    import Nav from '../../components/Users/Layout/Nav.vue'
    import Sidebar from '../../components/Users/Layout/Sidebar.vue'
    import Footer from '../../components/Footer.vue'
    import Api from '../Api'
    export default {
        components: {Nav, Sidebar, Footer},
        data () {
            return {
                email: '',
                bank_code: '',
                account_number: '',
                fund_amount: '',
                withdraw_amount: '',
                paymentError: [],
                loading: false
            }
        },

        mounted () {
            const popup = document.createElement('script')
            popup.setAttribute('src', 'https://js.paystack.co/v1/inline.js')
            popup.async = true
            document.head.appendChild(popup)
            // console.log(JSON.parse(window.localStorage.getItem('email')))
        },
        methods: {
            clearErrors(){
                    this.paymentError.splice(0);
            },
            payWithPaystack(e) {
                e.preventDefault();
                if(this.fund_amount==''){
				 this.paymentError.push("Please enter amount")
				 return
			    }
                const paystackOptions = {
                    key: 'pk_test_dec27949827d4966818f0f2621696b6198c5c0e0',
                    email: JSON.parse(window.localStorage.getItem('email')),
                    firstname: JSON.parse(window.localStorage.getItem('first_name)')),
                    lastname: JSON.parse(window.localStorage.getItem('last_name')),
                    amount: parseFloat(this.fund_amount) *100,
                    ref: Math.random().toString(36),
                    callback: response => {
					const data = {token:response.reference, amount:this.fund_amount}
                    Api.axios_instance.post(Api.baseUrl+'api/payment/wallet/fund/paystack', data)
					.then(response => {
						$('#fundWallet').modal('hide')
						// Api.axios_instance.get(Api.baseUrl+'api/auth/user/profile/get')
						// .then(response => {
							// createToast('Wow, easy')
							// this.update_user_details()
							// })
							
						// .catch(error =>{
						// 	console.log(error.response);	
						// })
					})
                    .catch(error =>{
							console.log(error.response);
						})
                    },
                    onClose: () => {
                        this.close();
                    },
                };
                if (this.embed) {
                paystackOptions.container = "paystackEmbedContainer";
                }
                const handler = window.PaystackPop.setup(paystackOptions);
                if (!this.embed) {
                    handler.openIframe();
                }
                },


            makeWithdrawal(e){
                e.preventDefault();
                this.clearErrors()
                if(this.account_number=='' ||this.bank_code == '' || this.withdrawal_amount==''){
                    this.paymentError.push("All fields are required")
                    return
                }

                this.loading = true
                const data = {
                    account_no: this.account_number,
                    bank_code: this.bank_code,
                    amount: this.withdraw_amount
                }
                console.log(data)
                Api.axios_instance.post(Api.baseUrl + 'api/payment/wallet/withdraw', data)
                    .then(response => { 
                        this.$toast.success(`Withdrawal Request Made`)
                        // $('#makeWithdrawal').collapse('hide');
                        this.account_no = ''
                        this.bank_code = ''
                        this.withdrawal_amount = ''
                    })
                    .catch(error =>{
                        console.log("Checking if this wrong")
                        if(error.response){
                            console.log(error.response.data)
                            for(const property in error.response.data){
                                this.paymentError.push(`${error.response.data[property]}`)
                                break
                            }
                        }
                    })
                    .finally(() => {
                        this.loading = false
                    })
            
            
            },
		
        
        }
        }   
</script>

<style lang="scss" scoped>

</style>