<template>
    <Nav/>
<section class=" login-reg">
<div class="container">
    <div class="row">
        <div class="login-main">
            <div class="log-bor">&nbsp;</div>
                <div class="log log-1">
                <div class="login login-new">
                    <h4>Confirm Password Reset</h4>
                    <form id="forget_form">
                        <div class="form-group">
                            <div class="password-container">
                                <input type="password" name="password" id="password" class="form-control" placeholder="Enter password*" required>
                                <i class="bi bi-eye-slash" id="togglePassword" @click="passwordToggle()"></i>
                        
                            </div>
                        </div>
                        <button type="submit" name="forgot_submit" class="btn btn-primary">Submit</button>

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
import Nav from '../../components/Nav.vue'
import Footer from '../../components/Footer.vue'
export default {
    name: "ConfirmPassResetView",
    components: { Nav, Footer},

    methods: {
        passwordToggle(){

            const togglePassword = document.querySelector('#togglePassword');
  
            const password = document.querySelector('#password');
    
            togglePassword.addEventListener('click', (event) => {
    
                // Toggle the type attribute using
                // getAttribure() method
                const type = password
                    .getAttribute('type') === 'password' ?
                    'text' : 'password';
                    
                password.setAttribute('type', type);
    
                // Toggle the eye and bi-eye icon
                event.target.classList.toggle('bi-eye');
                // this.
            });
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

</style>