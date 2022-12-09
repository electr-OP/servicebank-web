<template>
    <Nav/>
<section class=" login-reg">
<div class="container">
    <div class="row">
        <div class="login-main">
            <div class="log-bor">&nbsp;</div>
                <div class="log log-1">
                <div class="login login-new">
                    <h4>Validate Token</h4>
                    <form id="forget_form">
                        <div class="form-group">
                            <!-- <div class="mb-3"> -->
                                    <v-otp-input
                                    ref="otpInput"
                                    input-classes="otp-input"
                                    separator="-"
                                    :num-inputs="4"
                                    :should-auto-focus="true"
                                    :is-input-num="true"
                                    :conditionalClass="['one', 'two', 'three', 'four']"
                                    :placeholder="['*', '*', '*', '*']"
                                    pattern="[0-9]*"
                                    @on-change="handleOnChange"
                                    @onComplete="complete" 
                                    />
                                <!-- <input type="number" class="form-control" name="token" v-model="token" required> -->
                            <!-- </div> -->
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
import VOtpInput from 'vue3-otp-input';
export default {
    name: "ValidatePassResetTokenView",
    components: { Nav, Footer, VOtpInput}
}
</script>

<style lang="scss" scoped>

</style>

<style >
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