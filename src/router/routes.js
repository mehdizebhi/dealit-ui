import {createRouter, createWebHistory} from 'vue-router';
import {isAuthenticated} from "@/util/auth-helper";
import {getAccessTokenCookie} from "@/util/cookie-helper";
import { useStore } from 'vuex';

import Home from '../views/HomePage.vue';
import Login from '../views/auth/LoginPage.vue';
import Logout from '../views/auth/LogoutPage.vue';
import Register from "@/views/auth/RegisterPage.vue";
import ForgetPasswordPage from "@/views/auth/ForgetPasswordPage.vue";
import ResetPasswordPage from "@/views/auth/ResetPasswordPage.vue";
import VerifyPhoneNumberPage from "@/views/auth/VerifyPhoneNumberPage.vue";
import VerifyEmailPage from "@/views/auth/VerifyEmailPage.vue";

import ContractDetailsPage from "@/views/job/ContractDetailsPage.vue";
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
// import SubmitJobPage from "@/views/job/SubmitJobPage.vue";
import StepperSubmitJobPage from "@/views/job/StepperSubmitJobPage.vue";
import ProposalDetailsPage from "@/views/freelancer/ProposalDetailsPage.vue";

import ClientStatsPage from "@/views/client/ClientStatsPage.vue";
import ProjectsPage from "@/views/client/ProjectsPage.vue";
import JobsPage from "@/views/client/JobsPage.vue";
import ContractsPage from "@/views/client/ContractsPage.vue";
import EmploymentHistoryPage from "@/views/client/EmploymentHistoryPage.vue";
import YourJobAdPage from "@/views/client/YourJobAdPage.vue";
import CreateNewJobAdPage from "@/views/client/CreateNewJobAdPage.vue";
import ClientJobAdDetailsPage from "@/views/client/ClientJobAdDetailsPage.vue";

import TransactionHistoryPage from "@/views/report/TransactionHistoryPage.vue";
import ConnectionHistoryPage from "@/views/report/ConnectionHistoryPage.vue";
import SettingPage from "@/views/account/SettingPage.vue";

import CalendarPage from "@/views/app/CalendarPage.vue";

import NotFoundPage from "@/views/error/NotFoundPage.vue";
import {extractClaim} from "@/util/jwt-helper";

const routes = [
    {
        path: "/", name: "landing", component: Landing, meta: {requiresAuth: false},
        beforeEnter: () => {
            if (isAuthenticated()) return {name: 'home'};
            return {name: 'login'};
        }
    },
    {path: "/home", name: "home", component: Home, meta: {requiresAuth: true}},
    {path: "/login", name: "login", component: Login, meta: {requiresAuth: false},
        beforeEnter: () => {
            if (isAuthenticated()) return {name: 'home'};
        }
    },
    {path: "/logout", name: "logout", component: Logout, meta: {requiresAuth: true}},
    {path: "/signup", name: "signup", component: Register, meta: {requiresAuth: false},
        beforeEnter: () => {
            if (isAuthenticated()) return {name: 'home'};
        }
    },
    {path: "/forget-password", name: "forget-password", component: ForgetPasswordPage, meta: {requiresAuth: false},
        beforeEnter: () => {
            if (isAuthenticated()) return {name: 'home'};
        }
    },
    {path: "/reset-password", name: "reset-password", component: ResetPasswordPage, meta: {requiresAuth: false},
        beforeEnter: () => {
            if (isAuthenticated()) return {name: 'home'};
        }
    },
    {path: "/verify-phone", name: "verify-phone", component: VerifyPhoneNumberPage, meta: {requiresAuth: true}},
    {path: "/verify-email", name: "verify-email", component: VerifyEmailPage, meta: {requiresAuth: true}},


    {path: "/wallet", name: "wallet", component: Wallet, meta: {requiresAuth: true}},
    {path: "/change-profile", name: "changeProfile", component: ProfileSettingPage, meta: {requiresAuth: true}},
    {path: "/setting", name: "setting", component: SettingPage, meta: {requiresAuth: true}},
    {
        path: "/jobs",
        name: "jobs",
        component: Jobs,
        meta: {requiresAuth: true},
        children: [
            {path: ":id", name: "jobAdDetails", component: JobAdDetails, props: true},
        ]
    },
    {
        path: "/chat",
        name: "chat",
        component: Chat,
        meta: {requiresAuth: true},
        children: []
    },

    {
        path: "/freelancer",
        meta: {requiresAuth: true, requiresFreelancer: true, requiresClient: false},
        children: [
            {path: "profile", name: "profile", component: ProfilePage},
            {path: "saved", name: "saved", component: SavedJobPage},
            {path: "stats", name: "stats", component: FreelancerStatsPage},
            {path: "jobs", name: "your-jobs", component: YourJobsPage},
            {path: "contracts", name: "your-contracts", component: YourContractsPage},
            {path: "contracts/:id", name: "freelancer-contract-details", component: ContractDetailsPage, props: true},
            {path: "proposals", name: "proposals", component: ProposalsPage},
            {path: "proposals/:id", name: "proposals-details", component: ProposalDetailsPage},
            {path: "submit/:adId", name: "submit", component: StepperSubmitJobPage},
        ],
        beforeEnter: () => {
            const token = getAccessTokenCookie();
            if (!extractClaim(token, "isFreelancer")) {
                return {path: '/404'};
            }
        }
    },

    {
        path: "/client",
        meta: {requiresAuth: true, requiresFreelancer: false, requiresClient: true},
        children: [
            {path: "new", name: "newJob", component: CreateNewJobAdPage},
            {path: "stats", name: "client-stats", component: ClientStatsPage},
            {path: "projects", name: "project-space", component: ProjectsPage},
            {path: "positions", name: "job-positions", component: JobsPage},
            {path: "contracts", name: "client-contracts", component: ContractsPage},
            {path: "contracts/:id", name: "client-contract-details", component: ContractDetailsPage, props: true},
            {path: "employment-history", name: "employment-history", component: EmploymentHistoryPage},
            {path: "ads", name: "job-ads", component: YourJobAdPage},
            {path: "ads/:id", name: "job-ad-details", component: ClientJobAdDetailsPage},
        ],
        beforeEnter: () => {
            const token = getAccessTokenCookie();
            if (!extractClaim(token, "isClient")) {
                return {path: '/404'};
            }
        }
    },

/*    {path: "/contracts/:id", name: "contract-details", component: ContractDetailsPage, props: true, meta: {requiresAuth: true}},
    {path: "/profile", name: "profile", component: ProfilePage, meta: {requiresAuth: true}},
    {path: "/saved", name: "saved", component: SavedJobPage, meta: {requiresAuth: true}},
    {path: "/proposals", name: "proposals", component: ProposalsPage, meta: {requiresAuth: true}},
    {path: "/proposals/:id", name: "proposals-details", component: ProposalDetailsPage, meta: {requiresAuth: true}},
    {path: "/freelancer/stats", name: "stats", component: FreelancerStatsPage, meta: {requiresAuth: true}},*/

    /*    {path: "/freelancer/contracts", name: "your-contracts", component: YourContractsPage, meta: {requiresAuth: true}},
        {path: "/freelancer/jobs", name: "your-jobs", component: YourJobsPage, meta: {requiresAuth: true}},
        {path: "/submit2", name: "submit2", component: SubmitJobPage, meta: {requiresAuth: true}},
        {path: "/submit", name: "submit", component: StepperSubmitJobPage, meta: {requiresAuth: true}},
        */
    /*{path: "/new", name: "newJob", component: CreateNewJobAdPage, meta: {requiresAuth: true}},
    {path: "/client/stats", name: "client-stats", component: ClientStatsPage, meta: {requiresAuth: true}},
    {path: "/client/projects", name: "project-space", component: ProjectsPage, meta: {requiresAuth: true}},
    {path: "/client/positions", name: "job-positions", component: JobsPage, meta: {requiresAuth: true}},
    {path: "/client/contracts", name: "client-contracts", component: ContractsPage, meta: {requiresAuth: true}},
    {path: "/client/employment-history", name: "employment-history", component: EmploymentHistoryPage, meta: {requiresAuth: true}},
    {path: "/client/ads", name: "job-ads", component: YourJobAdPage, meta: {requiresAuth: true}},
    {path: "/client/jobs/:id", name: "job-ad-details", component: ClientJobAdDetailsPage, meta: {requiresAuth: true}},*/

    {path: "/report/transactions", name: "transactions", component: TransactionHistoryPage, meta: {requiresAuth: true}},
    {path: "/report/connections", name: "connections-history", component: ConnectionHistoryPage, meta: {requiresAuth: true}},

    {path: "/app/calendar", name: "app-calendar", component: CalendarPage, meta: {requiresAuth: true}},

    {path: "/:pathMatch(.*)*", component: NotFoundPage, meta: {requiresAuth: false}},

];
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Global Navigation Guards
router.beforeEach(function (to, from, next) {
    const accessToken = getAccessTokenCookie();
    if (to.meta.requiresAuth && accessToken === null) {
        next({name: 'login'});
    } else if (to.meta.requiresAuth && accessToken !== null) {
        const store = useStore();
        if (!store.getters.isUserPresent) {
            store.dispatch("getUserInfo");
        }
        next();
    } else {
        next();
    }
});

export default router;