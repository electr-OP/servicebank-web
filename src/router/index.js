import { createRouter, createWebHistory } from 'vue-router'
// import {HomeView} from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/email-sent',
      name: 'email-sent',
      component: () => import('../views/Auth/EmailCheckPageView.vue'),
      props: true
    },
    {
      path: '/email-verify/:token',
      name: 'email-verify',
      component: () => import('../views/Auth/EmailVerificationView.vue'),
      props: true
    },
    {
      path: '/validate-email',
      name: 'validate-email',
      component: () => import('../views/Auth/ValidateEmailView.vue')
    },
    {
      path: '/validate-otp',
      name: 'validate-otp',
      component: () => import('../views/Auth/ValidateOtpView.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/Auth/ForgotPwdView.vue')
    },
    {
      path: '/validate-token',
      name: 'validate-token',
      component: () => import('../views/Auth/ValidatePassResetTokenView.vue')
    },
    {
      path: '/confirm-pass-reset',
      name: 'confirm-pass-reset',
      component: () => import('../views/Auth/ConfirmPassResetView.vue')
    },
    {
      path: '/users/dashboard',
      name: 'dashboard',
      component: () => import('../views/Users/DashboardView.vue')
    },
    {
      path: '/users/profile',
      name: 'profile',
      component: () => import('../views/Users/ProfileView.vue')
    },
    {
      path: '/users/edit-profile',
      name: 'edit-profile',
      component: () => import('../views/Users/EditProfileView.vue')
    },
    {
      path: '/users/enquiry',
      name: 'enquiry',
      component: () => import('../views/Users/EnquiryView.vue')
    },
    {
      path: '/users/listings',
      name: 'listings',
      component: () => import('../views/Users/ListingsView.vue')
    },
    {
      path: '/users/job-profile',
      name: 'job-profile',
      component: () => import('../views/Users/JobProfileView.vue')
    },
    {
      path: '/users/job-details/:id',
      name: 'job-details',
      component: () => import('../views/Users/JobDetailsView.vue'),
      props: true
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingView.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: () => import('../views/ProfilesView.vue')
    },
    {
      path: '/experts',
      name: 'experts',
      component: () => import('../views/ExpertsView.vue')
    },
    {
      path: '/pricing-details',
      name: 'pricing-details',
      component: () => import('../views/PricingDetailsView.vue')
    },
    {
      path: '/post-your-ads',
      name: 'post-your-ads',
      component: () => import('../views/PostYourAdsView.vue')
    },
    {
      path: '/all-profiles',
      name: 'all-profiles',
      component: () => import('../views/AllProfilesView.vue')
    },
    {
      path: '/all-category',
      name: 'all-category',
      component: () => import('../views/AllCategoryView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
