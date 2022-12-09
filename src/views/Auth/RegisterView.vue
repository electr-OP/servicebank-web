<template>
    <section>
    <div class="str ind2-home">
           <Nav/>
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
                        <h4>Create an account</h4>
                        <p>Don't have an account? Create your account. It's take less then a minutes</p>

                        <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                        </button> -->
                        <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                    </div>
                        <form @submit.prevent="submitForm" id="register_user">
                            <div class="form-group">
                                <input type="text" autocomplete="off" v-model="first_name" id="first_name" class="form-control" placeholder="First Name*">
                            </div>
                            <div class="form-group">
                                <input type="text" autocomplete="off" v-model="last_name" id="last_name" class="form-control" placeholder="Last Name*">
                            </div>
                            <div class="form-group">
                                <vue-tel-input v-model="phone" ref="phoneRef" mode="international"  placeholder="Phone number*" required></vue-tel-input>
                            </div>
                            <div class="form-group">
                                <input type="email" autocomplete="off" v-model="email" id="email_id" class="form-control" placeholder="Email address*" required>
                            </div>
                            <div class="form-group">
                                <input :type="passwordVisible ? 'text' : 'password'" :class="{valid:passwordValidation.valid}" v-model="password" id="password" class="form-control searchtext" placeholder="Password*" required>
                                <i class="bi bi-eye-slash" id="togglePassword" @click="passwordToggle()"></i>
                            </div>
                                <transition name="hint" appear><div v-if='passwordValidation.errors.length > 0 && !submitted && password.length' class="hints"><h2>Hints: </h2><p v-for='error in passwordValidation.errors'>{{error}}</p></div></transition>
                            
                            <div class="form-group">
                                <input type="password" v-model="confirm_password" id="confirm_password" class="form-control" placeholder="Confirm Password*" required>
                                <i class="bi bi-eye-slash" id="confirmTogglePassword" @click="confirmPasswordToggle()"></i>
                            </div>
                            <div class="matches" v-if='notSamePasswords'><p>Passwords don't match.</p></div>
                            <div class="form-group ca-sh-user">
                                <select v-model="user_type" required id="user_type" name="User_Type" class="form-control ca-check-plan">
                                    <option value="">User type</option>
                                    <option value="General">General user</option>
                                    <option value="Service provider">Service provider</option>
                                </select> 
                            </div>
                            <div v-if="user_type == 'Service provider'" class="form-group">
                                <input type="text" autocomplete="off" v-model="business_name" id="business_name" class="form-control" placeholder="Business name*" required>
                            </div>
                           
                            <button type="submit" class="btn btn-primary submit_button" v-if='passwordsFilled && !notSamePasswords && passwordValidation.valid'>
                                Register Now 
                            </button>
                        </form>
                       
                    </div>
                </div>
                
                <div class="log-bot">
                    <ul>
                        <li>
                            <span class="ll-2"><RouterLink :to="{name: 'login'}">Login</RouterLink></span>
                        </li>
                        <!-- <li>
                            <span class="ll-1">Create an account?</span>
                        </li> -->
                        <li>
                            <span class="ll-3"><RouterLink :to="{name: 'forgot-password'}">Forgot password?</RouterLink></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!--END PRICING DETAILS-->

<section>
    <div class="pop-ups pop-quo">
        <!-- The Modal -->
        <div class="modal fade" id="quote">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <!-- Modal Header -->
                    <div class="quote-pop">
                        <h4>Get quote</h4>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter name*" required>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Enter email*" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address" required>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaining 9 digit with 0-9" required>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="3" placeholder="Enter your query or message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
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
    import Api from "../Api"
    import Nav from '../../components/Nav.vue'
    import Footer from "../../components/Footer.vue"
    export default {
        name: "RegisterView",
        components: { Nav, Footer},
        data(){
        return{
            first_name: '',
            last_name:'',
            phone:'',
            password:'',
            confirm_password:'',
            rules: [
				// { message:'One lowercase letter required.', regex:/[a-z]+/ },
				// { message:"One uppercase letter required.",  regex:/[A-Z]+/ },
				{ message:"* 8 characters minimum.", regex:/.{8,}/ },
				// { message:"One number required.", regex:/[0-9]+/ }
			],
            passwordVisible:false,
			submitted:false,
            email:'',
            is_artisan:false,
            errors: [],
            business_name:'',
            user_type:'',
        }
    },
        methods: {
            submitForm(e){
            this.errors.splice(0);
            console.log(this.user_type)
            if (this.user_type=='Service provider') {
                console.log(this.user_type)
                this.is_artisan = true
            }
            // const phone = this.$store.state.phone
            console.log(this.phone)
            const phone = this.$refs.phoneRef.phone.replace(/\s/g, "")
            const formData = {password: this.password, first_name: this.first_name, last_name:this.last_name, email:this.email, phone:phone, is_artisan:this.is_artisan,
                business_name:this.business_name}
            Api.axios_instance.post(Api.baseUrl+'api/auth/user/register', formData)
            .then(response =>{
                const data = {
                    token: response.data.token
              
                }
                this.$router.push({path: '/validate-otp'})
               
                window.localStorage.setItem('token', JSON.stringify(response.data.token))
                window.localStorage.setItem('phone', phone)
                window.localStorage.setItem('email', this.email)
                window.location.href = '/validate-otp'
            })
            .catch(error => {
               if(error.response){
                // console.log('kfkkssk')
                console.log(error.response)
                   for(const property in error.response.data){
                    //    this.errors.push(`${property}:${error.response.data}`)
                        console.log(error.response.data[property][0])
                       this.errors.push(error.response.data.detail)
                        console.log(this.errors);

                        return
                   }
                   
               }
            })
            },
            // resetPasswords () {
			// this.password = ''
			// this.confirm_assword = ''
			// this.submitted = true
			// setTimeout(() => {
			// 	this.submitted = false
			// }, 2000)
		    // },
            togglePasswordVisibility () {
			this.passwordVisible = !this.passwordVisible
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
                confirmPasswordToggle(){

                    const confirmTogglePassword = document.querySelector('#confirmTogglePassword');

                    const confirm_password = document.querySelector('#confirm_password');

                    confirmTogglePassword.addEventListener('click', (event) => {

                        // Toggle the type attribute using
                        // getAttribute() method

                        const confirm_type = confirm_password
                            .getAttribute('type') === 'password' ?
                            'text' : 'password';
                            
                        confirm_password.setAttribute('type', confirm_type);
                        // Toggle the eye and bi-eye icon
                        event.target.classList.toggle('bi-eye');
                        // this.
                    });
                },
                
    },
    computed: {
        notSamePasswords () {
			if (this.passwordsFilled) {
				return (this.password !== this.confirm_password)
			} else {
				return false
			}
		},
		passwordsFilled () {
			return (this.password !== '' && this.confirm_password !== '')
		},
        passwordValidation () {
			let errors = []
			for (let condition of this.rules) {
				if (!condition.regex.test(this.password)) {
					errors.push(condition.message)
				}
			}
			if (errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		}
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


.hints {
	max-width:400px;
	padding:1em;
	background:whitesmoke;
	margin: 1em 0;
	font-size: .9em;
	color:darken(#D4DEDF, 50%);
}
.hints h2 {
    /* margin: .5em 0 .2em 0; */
    font-size: medium;
}
.hints p {
		margin: 0;
		padding-left:1em;
		/* &::before { */
        content:">";
        color:red;
        font-size:.9em;
        margin-right:6px;
        display:inline-block;
		/* } */
}




</style>