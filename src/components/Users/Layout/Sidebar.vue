<template>
    <!--LEFT SECTION-->
<div class="ud-lhs">
    <div class="ud-lhs-s1">
        <img src="http://via.placeholder.com/640x360" alt="">
        <div class="ud-lhs-pro-bio">
            <h4> {{first_name}} </h4>
            <b>Join on {{ created_at }}</b>
            <RouterLink class="ud-lhs-view-pro" :to="{name: 'profile'}">My Profile</RouterLink>
        </div>
    </div>
    <div class="ud-lhs-s2">
        <ul>
            <li>
                <RouterLink :to="{name: 'dashboard'}" class="db-lact"><img src="/src/assets/images/icon/dbl1.png" alt=""> My Dashboard</RouterLink>
            </li>  
            <li>
                <h4>Jobs</h4>
                <RouterLink :to="{name: 'enquiry'}" class=""><img src="/src/assets/images/icon/tick.png" alt="">Enquirys</RouterLink>
            </li> 
            <li>
                <RouterLink :to="{name: 'edit-profile'}" class=""><img src="/src/assets/images/icon/expert.png" alt="">Edit Job Profile</RouterLink>
            </li>
            <li>  
                <h4>Account</h4>
                <RouterLink :to="{name: 'profile'}" class=""><img src="/src/assets/images/icon/dbl9.png" alt="">Account Profile</RouterLink>
            </li>  
            <!-- <li>
                <a href="notifications.php" class=""><img src="/src/assets/images/icon/dbl19.png" alt="">Notifications</a>
            </li>  -->
            <li>
                <RouterLink :to="{name:'login'}" class="" @click="logout"><img src="/src/assets/images/icon/dbl19.png" alt="">Logout</RouterLink>
            </li> 
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        methods: {
            logout(){	    
                localStorage.clear();                
			    window.location.href="/login"  
		    },
        }
        
    }
</script>

<style lang="scss" scoped>

</style>