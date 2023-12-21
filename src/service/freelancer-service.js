export function getSavedJobAds(size, page) {
    // TODO: Call API
    return {
        jobAds: [
            {
                id: '',
                title: '',
                description: '',
                price: '',
                requiredConnection: 0,
                badges: [],
                field: '',
                rating: 2,
                location: '',
                totalSpend: 350_000_000,
                saved: false,
                link: ''
            }
        ],
        page: 1,
        total: 25,
    }
}

export function getProposals(size, page) {
    // TODO: Call API
    return {
        active: [],
        sent: [],
        archive: [],
        invitation: []
    }
}

export function getProposalDetails(id) {
    // TODO: Call API
    return {

    }
}

export function getYourStats(dates) {
    // TODO: Call API
    return {
        profileViews: {},
        totalHoursSpends: {},
        income: {},
        proposals: {}
    }
}

export function getProfile() {
    // TODO: Call API
    return {
        stats: {},
        displayName: '',
        locations: '',
        about: '',
        experiences: [],
        educations: [],
        projects: []
    }
}

export function updateProfile(profile) {
    // TODO: Call API
    return {

    }
}

export function getJobs(size, page) {
    // TODO: Call API
    return {
        contract: [
            {
                title: '',
                hiredBy: '',
                type: '',
                price: '',
                startedAt: 45646545,
                endedAt: 446656546,
                status: ''
            }
        ],
        page: 1,
        total: 25
    }
}

export function getContracts(size, page) {
    // TODO: Call API
    return {
        contract: [
            {
                title: '',
                hiredBy: '',
                type: '',
                price: '',
                startedAt: 45646545,
                endedAt: 446656546,
                status: ''
            }
        ],
        page: 1,
        total: 25
    }
}

export function getContractDetails(id) {
    // TODO: Call API
    return {

    }
}