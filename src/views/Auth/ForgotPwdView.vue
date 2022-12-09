<template>
        <Nav/>
    <section class=" login-reg">
    <div class="container">
        <div class="row">
            <div class="login-main">
                <div class="log-bor">&nbsp;</div>
                    <div class="log log-1">
                    <div class="login login-new">
                        <h4>Forgot password</h4>
                        <form id="forget_form">
                            <div class="form-group">
                                <input type="email" autocomplete="off" name="email_id" id="email_id" class="form-control" placeholder="Enter email*" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address" required>
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
        name: "ForgotPwdView",
        components: { Nav, Footer}
    }
</script>

<style lang="scss" scoped>

</style>