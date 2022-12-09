<template>
    <div>

    </div>
</template>

<script>
    import Api from "../Api"

    export default {
        mounted () {
            const token = this.$route.params.token
            const formData = {token: token}
            console.log('here?')
            Api.axios_instance.post(Api.baseUrl+'api/auth/user/email-verify', formData)
            .then(response =>{
                console.log(response.data)
                const data = {
                    email:response.data.detail.email,
                    first_name: response.data.detail.first_name,
                    last_name:response.data.detail.last_name,          
                }
                
                // this.$store.commit('set_user_details', data)
                console.log('gothere?')
                window.localStorage.setItem('email', JSON.stringify(response.data.detail.email))
                window.localStorage.setItem('first_name', JSON.stringify(response.data.detail.first_name))
                window.localStorage.setItem('last_name', JSON.stringify(response.data.detail.last_name))
                // window.localStorage.setItem('phone', JSON.stringify(response.data.user_details.phone))
                window.localStorage.setItem('token', JSON.stringify(response.data.tokens))
                window.localStorage.setItem('referal_code', JSON.stringify(response.data.detail.referral_code))
                window.localStorage.setItem('isAuthenticated', true)
                console.log('got here too')
                this.$router.push('/profiles')
                this.$toast.success('Account Activated')

                window.localStorage.setItem('token', JSON.stringify(response.data.tokens))
                window.location.href = '/profiles'
                this.$toast.success('Account Activated')
            })
            .catch(error => {
                // console.log('dhjda', 'jakjk')
               if(error.response){
                // console.log('need to see this')
                //    for(const property in error.response.data){
                //     //    this.errors.push(`${property}:${error.response.data}`)
                //     //    this.errors.push(error.response.data.detail)
                //         return
                //    }
                   console.log(error.response.data.detail);
                   this.$router.push('/login')
                   this.$toast.error('Link is invalid')
               }
            })

        }
        
    }
</script>

<style lang="scss" scoped>

</style>