<template>
    <section class=" login-reg">
    <div class="container">
        <div class="row">
            <div class="login-main">
                <div class="log-bor">&nbsp;</div>
                    <div class="log log-1">
                    <div class="login login-new">
                        <h4>OTP VALIDATION  </h4>
                        <!-- <form id="forget_form"> -->
                            <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                <!-- <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                </button> -->
                                <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                            </div>
                            <div class="form-group">
                                <div style="display: flex; flex-direction: row;" class="centralize">
                                            <v-otp-input
                                            
                                            ref="otpInput"
                                            input-classes="otp-input"
                                            separator="-"
                                            :num-inputs="4"
                                            :should-auto-focus="true"
                                            :is-input-num="true"
                                            :conditionalClass="['one', 'two', 'three', 'four']"
                                            :placeholder="['*', '*', '*', '*']"
                                            @on-complete="handleOnComplete"
                                            />
                                        </div>
                            </div>
                            <!-- <button type="submit" name="forgot_submit" class="btn btn-primary">Submit</button> -->
                        <!-- </form> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>    
    </template>
    
    <script>
    import Api from "../Api"
    import VOtpInput from 'vue3-otp-input';
    export default {
        name: "ValidateOtpView",
        components: {VOtpInput,},
        data () {
            return {
                loading: false,
                errors:[],
                token: ''

            }
        },

        methods:{
        handleOnComplete(value){
            this.loading = true
            this.errors.splice(0);
            const phone = window.localStorage.getItem('phone')
            const email = window.localStorage.getItem('email')
            // const reference = this.$store.state.reference
            console.log(phone)
            const formData = {email: email, phone: phone, token: value}
            Api.axios_instance.post(Api.baseUrl+'api/auth/user/validate-otp', formData)
            .then(response =>{
                console.log(response)
                window.localStorage.setItem('email', JSON.stringify(response.data.detail.email))
                window.localStorage.setItem('first_name', JSON.stringify(response.data.detail.first_name))
                window.localStorage.setItem('last_name', JSON.stringify(response.data.detail.last_name))
                window.localStorage.setItem('wallet_balance', JSON.stringify(response.data.detail.wallet_balance))
                window.localStorage.setItem('phone', JSON.stringify(response.data.detail.phone))
                window.localStorage.setItem('image', JSON.stringify(response.data.detail.image))
                window.localStorage.setItem('token', JSON.stringify(response.data.tokens))
                window.localStorage.setItem('artisan', JSON.stringify(response.data.detail.artisan))
                window.localStorage.setItem('referal_code', JSON.stringify(response.data.detail.referral_code))
                // createToast('OTP Validated')
                this.$toast.success('Account Activated')
                if (response.data.detail.is_artisan == true) {
                    this.$router.push('/users/edit-profile')
                    window.localStorage.setItem('token', JSON.stringify(response.data.tokens))
                    window.location.href='/users/edit-profile'
                } else {
                    this.$router.push('/profiles')
                    window.localStorage.setItem('token', JSON.stringify(response.data.tokens))
                    window.location.href='/profiles'
                }
                
            })
            .catch(error => {
                if(error.response){
                    // console.log(error.response)
                    for(const property in error.response.data){
                    //    this.errors.push(`${property}:${error.response.data}`)
                        console.log(property)
                        this.errors.push(error.response.data.detail)
                        // console.log(this.errors);

                        return
                   }
                   
               }
            })
            .finally(() => {
                    this.loading = false
            })
        }
    }
    }

    
    </script>
    
    <style>
    .otp-input {
    width: 60px;
    height: 60px;
    padding: 5px;
    margin: 0 10px;
    font-size: 30px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
    }
    /* Background colour of an input field with value */
    .otp-input.is-complete {
    background-color: #D2D2CF;
    }
    .otp-input::-webkit-inner-spin-button,
    .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    input::placeholder {
    font-size: 15px;
    text-align: center;
    font-weight: 600;
    }

    .centralize{
        margin-left: 3rem !important;
    }
 

    </style>