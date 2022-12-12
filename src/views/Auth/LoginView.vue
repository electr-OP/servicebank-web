<template>
    <!-- START -->
<section>
    <div class="str ind2-home">
        <div>
            <Nav/>
        </div>
    </div>
</section>
<!--PRICING DETAILS-->
<section class=" login-reg">
    <div class="container">
        <div class="row">
            <div class="login-main">
                <div class="log-bor">&nbsp;</div>
                <div class="log log-1">
                    <div class="login login-new">
                        <h4>Member Login</h4>
                        <div class="alert alert-danger fade show" v-if="errors.length">        
                                      <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                  </div>
                        <form @submit="submitForm" id="login_user">
                            <input type="hidden" autocomplete="off" name="src" id="src" value="">
                            <div v-if="phone_active" class="form-group">
                                <vue-tel-input v-model="phone" ref="phoneRef" mode="international"  placeholder="Phone number*" required></vue-tel-input>
                                
                                <a @click="togglePhoneActive"> Switch to email</a>
                            </div>
                            
                            <div v-else class="form-group">
                                <input type="email" autocomplete="off" name="email" id="email" class="form-control" placeholder="Enter email*" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Enter email address" required>
                                <a @click="togglePhoneActive"> Switch to phone</a>
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="password" id="password" class="form-control" placeholder="Enter password*" required>
                                <i class="bi bi-eye-slash" id="togglePassword" @click="passwordToggle()"></i>
                            </div>
                            <input type="hidden" name="login_submit" />
                            <button type="submit" value="submit" class="btn btn-primary submit_button">
                                Sign in
                            </button>
                        </form>

                        <!-- SOCIAL MEDIA LOGIN -->
                        <div class="soc-log">
                            <ul>
                                <li>
                                    <div class="g-signin2" data-onsuccess="onSignIn"></div>

                                </li>
                                <!-- <li>
                                    <a href="javascript:void(0);" onclick="fbLogin();" class="login-fb"><img src="/src/assets/images/icon/facebook.png"> Continue with Facebook </a>
                                </li> -->

                            </ul>

                        </div>
                        <!-- END SOCIAL MEDIA LOGIN -->

                    </div>
                </div>
                
                
                <div class="log-bot">
                    <ul>
                        <li>
                            <RouterLink :to="{name:'register'}"><span class="ll-2">Create an account?</span></RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{name: 'forgot-password'}">
                            <span class="ll-3">Forgot password?</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!--END PRICING DETAILS-->
<Footer/>
</template>

<script>
    import Nav from '../../components/Nav.vue'
    import Footer from '../../components/Footer.vue'
    import Api from "../Api.js"
    export default {
        name: "LoginView",
        components: { Nav, Footer},
        data(){
            return{
                password: '',
                email:'',
                // phoneInput: '',
                // country: 'NG',
                // login_mode: 'EMAIL',
                phone:'',
                phone_active:true,
                errors: [],
                loading: false,
                // phone_active: false,
                
            }
        },

        methods: {
            togglePhoneActive(){
                this.phone_active = !this.phone_active
            },
            submitForm(e){
                e.preventDefault();
                try{
                    this.errors = [];
                }
                catch(err) {
                    console(err);
                    }
                this.loading = true
                let formData;
                if(this.phone_active){
                    let phoneData = this.$refs.phoneRef.phone.replace(/\s/g, "")
                   formData= {password: this.password, email:phoneData} 
                }
                else{
                    formData= {password: this.password, email:this.email} 
                } 
                console.log(formData)
                Api.axios_instance.post(Api.baseUrl+'api/auth/user/login', formData)
                .then(response => {
                    // const data = {
                    //     email:response.data.user_details.email,
                    //     first_name: response.data.user_details.first_name,
                    //     last_name:response.data.user_details.last_name,
                    //     wallet_balance: response.data.user_details.wallet_balance,
                    //     phone: response.data.user_details.phone,
                    //     image: response.data.user_details.image,
                    // }
                    // this.$store.commit('set_user_details', data)
                    window.localStorage.setItem('email', JSON.stringify(response.data.user_details.email))
                    window.localStorage.setItem('first_name', JSON.stringify(response.data.user_details.first_name))
                    window.localStorage.setItem('last_name', JSON.stringify(response.data.user_details.last_name))
                    window.localStorage.setItem('wallet_balance', JSON.stringify(response.data.user_details.wallet_balance))
                    window.localStorage.setItem('phone', JSON.stringify(response.data.user_details.phone))
                    window.localStorage.setItem('image', JSON.stringify(response.data.user_details.image))
                    window.localStorage.setItem('token', JSON.stringify(response.data.token))
                    window.localStorage.setItem('referal_code', JSON.stringify(response.data.user_details.referral_code))
                    window.localStorage.setItem('isAuthenticated', true)
                    console.log('jakjka')
                    if (response.data.user_details.is_artisan == true) {
                        console.log('jakjkfkjslklsl')
                        this.$router.push('/users/edit-profile')
                        window.localStorage.setItem('token', JSON.stringify(response.data.token))
                        window.localStorage.setItem('artisan_id', JSON.stringify(response.data.user_details.artisan.artisan_id))
                        window.location.href='/users/edit-profile'
                    } else {
                        console.log('jakjka')
                        this.$router.push('/profiles')
                        window.localStorage.setItem('token', JSON.stringify(response.data.token))
                        window.location.href='/profiles'
                    }
                    
                })
                .catch(error =>{
                    if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${error.response.data.detail}`)
                        }
                    }
                })
                .finally(() => {
                    this.loading = false
                })
            },
            passwordToggle(){

                const togglePassword = document.querySelector('#togglePassword');

                const password = document.querySelector('#password');

                togglePassword.addEventListener('click', (event) => {

                    // Toggle the type attribute using
                    // getAttribute() method
                    const type = password
                        .getAttribute('type') === 'password' ?
                        'text' : 'password';
                        
                    password.setAttribute('type', type);
                        
                    // Toggle the eye and bi-eye icon
                    event.target.classList.toggle('bi-eye');
                    // this.
                });
                },
        }
    }
</script>

<style scoped>

.password-container{
  width: 400px;
  position: relative;
}
.password-container input[type="password"],
.password-container input[type="text"]{
  width: 100%;
  padding: 12px 36px 12px 12px;
  box-sizing: border-box;
}
i {
  position: absolute;
  top: 28%;
  right: 7%;
  cursor: pointer;
  color: lightgray;
}


</style>