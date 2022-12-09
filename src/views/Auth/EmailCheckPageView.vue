<template>
    <section>
    <div class="str ind2-home">
           <Nav/>
    </div>
</section>
        
    
<section class=" login-reg">
    <div class="container">
        <h1>Please click the activation link we sent to your email</h1>
        <p class="paralargetext">
			An email has been sent to your email address <strong>
                {{ email }}
            </strong> containing an activation link. Please click on the link to activate your account. 
            <span style="color: red;">If you do not click the link your account will remain inactive and you will not be able to use Service Bank.</span>
             If you do not receive the email within a few minutes, please check your spam folder.</p>
        
    </div>
    </section>
        

    <Footer/>
</template>

<script>
import Footer from '../../components/Footer.vue';
import Nav from '../../components/Nav.vue';

    export default {
    components: { Nav, Footer },
    // props: ['email'],
    data () {
        return {
            email: this.$route.query.email
        }
    },

    mounted () {
        console.log('jdsjkj')

        console.log(this.$route.query.email)
    }

}
</script>

<style lang="scss" scoped>

</style>