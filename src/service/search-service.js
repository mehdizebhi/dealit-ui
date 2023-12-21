export function searchJobs(text, filter, size, page) {
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
        size: 10,
        total: 25,
    }
}

export function searchTalent(text, size, page) {
    // TODO: Call API
    return {
        talents: [],
        page: 1,
        size: 10,
        total: 25
    }
}