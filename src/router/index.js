import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/pages/PrivacyPolicy.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactPage",
    component: () => import("@/pages/ContactPage.vue"),
  },
  {
    path: "/term-of-use",
    name: "Term Of Use",
    component: () => import("@/pages/TermOfUse.vue"),
  },
  {
    path: "/legal-warning",
    name: "Leagal Warning",
    component: () => import("@/pages/LegalWarning.vue"),
  },
  {
    path: "/demo-page1",
    name: "DemoPage1",
    component: () => import("@/pages/DemoPage1.vue"),
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: () => import("@/pages/ThankYou.vue"),
  },
  {
    path: "/demo-page2",
    name: "DemoPage2",
    component: () => import("@/pages/DemoPage2.vue"),
  },
  {
    path: "/login-page",
    name: "LoginPage",
    component: () => import('@/pages/auths/LoginPage.vue')
  },
  {
    path: "/registration-page",
    name: "RegistrationPage",
    component: () => import('@/pages/auths/RegistrationPage.vue')
  },
  {
    path: "/forgot-password-page",
    name: "ForgotPasswordPage",
    component: () => import('@/pages/auths/ForgotPasswordPage.vue')
  },
  {
    path: "/reset-password-page",
    name: "ResetPasswordPage",
    component: () => import('@/pages/auths/ResetPasswordPage.vue')
  },
  {
    path: "/email-verification-page",
    name: "EmailVerificationPage",
    component: () => import('@/pages/auths/EmailVerificationPage.vue')
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import('@/pages/CareerPage.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
