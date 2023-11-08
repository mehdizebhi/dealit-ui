import {createRouter, createWebHistory} from 'vue-router';
import {isAuthenticated} from "@/util/auth-helper";

import Home from '../views/HomePage.vue';
import Login from '../views/auth/LoginPage.vue';
import Logout from '../views/auth/LogoutPage.vue';
import Register from "@/views/auth/RegisterPage.vue";
import Jobs from '../views/job/JobsExplorePage.vue';
import Chat from '../views/app/ChatPage.vue';
import Landing from '../views/LandingPage.vue';
import Wallet from '../views/app/WalletPage.vue';
import JobAdDetails from '../views/job/JobAdDetailsPage.vue';
import ProfilePage from "@/views/freelancer/ProfilePage.vue";
import SavedJobPage from "@/views/freelancer/SavedJobPage.vue";
import ProposalsPage from "@/views/freelancer/ProposalsPage.vue";
import FreelancerStatsPage from "@/views/freelancer/FreelancerStatsPage.vue";
import ProfileSettingPage from "@/views/freelancer/ProfileSettingPage.vue";
import YourContractsPage from "@/views/freelancer/YourContractsPage.vue";
import YourJobsPage from "@/views/freelancer/YourJobsPage.vue";

import ClientStatsPage from "@/views/client/ClientStatsPage.vue";

import CreateNewJobAdPage from "@/views/client/CreateNewJobAdPage.vue";

import TransactionHistoryPage from "@/views/report/TransactionHistoryPage.vue";

import NotFoundPage from "@/views/error/NotFoundPage.vue";

const routes = [
    {path: "/", name: "landing", component: Landing, meta: {requiresAuth: false}},
    {path: "/home", name: "home", component: Home, meta: {requiresAuth: true}},
    {path: "/login", name: "login", component: Login, meta: {requiresAuth: false},
        beforeEnter: () => {
            if (isAuthenticated()) return {name: 'home'};
        }
    },
    {path: "/logout", name: "logout", component: Logout, meta: {requiresAuth: true}},
    {path: "/signup", name: "signup", component: Register, meta: {requiresAuth: false}},
    {path: "/jobs", name: "jobs", component: Jobs, meta: {requiresAuth: true}},
    {path: "/chat", name: "chat", component: Chat, meta: {requiresAuth: true}},
    {path: "/wallet", name: "wallet", component: Wallet, meta: {requiresAuth: true}},
    {path: "/jobs/:id", name: "jobAdDetails", component: JobAdDetails, props: true, meta: {requiresAuth: true}},
    {path: "/profile", name: "profile", component: ProfilePage, meta: {requiresAuth: true}},
    {path: "/saved", name: "saved", component: SavedJobPage, meta: {requiresAuth: true}},
    {path: "/proposals", name: "proposals", component: ProposalsPage, meta: {requiresAuth: true}},
    {path: "/freelancer/stats", name: "stats", component: FreelancerStatsPage, meta: {requiresAuth: true}},
    {path: "/transactions", name: "transactions", component: TransactionHistoryPage, meta: {requiresAuth: true}},
    {path: "/change-profile", name: "changeProfile", component: ProfileSettingPage, meta: {requiresAuth: true}},
    {path: "/new", name: "newJob", component: CreateNewJobAdPage, meta: {requiresAuth: true}},
    {path: "/freelancer/contracts", name: "your-contracts", component: YourContractsPage, meta: {requiresAuth: true}},
    {path: "/freelancer/jobs", name: "your-jobs", component: YourJobsPage, meta: {requiresAuth: true}},
    {path: "/client/stats", name: "client-stats", component: ClientStatsPage, meta: {requiresAuth: true}},
    {path: "/:pathMatch(.*)*", component: NotFoundPage, meta: {requiresAuth: false}},


];
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Global Navigation Guards
router.beforeEach(function (to, from, next) {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next({name: 'login'});
    } else next();
});

export default router;