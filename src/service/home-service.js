export function getAccountOverview() {
    // TODO: Call API
    return {
        message: 'سلام، وقت بخیر',
        info: 'خلاصه ای جزئیات حساب شما',
        freelancer: {
            jobs: '3',
            proposals: '12',
            income: '39,000,000'
        },
        client: {
            contracts: '5',
            proposals: '22',
            outcome: '53,000,000'
        }
    }
}

export function getTinyNotifications() {
    // TODO: Call API
    return [
        {
            title: '',
            text: '',
            type: '',
            link: '',
            linkTitle: ''
        }
    ]
}

export function getTinyStats() {
    // TODO: Call API
    return [
        {
            title: '',
            value: '',
            percentage: '',
            date: {
                labels: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10"],
                datasets: [
                    {
                        data: [85,60,120,70,100,15,65,80,60,75,45],
                        fill: true,
                        borderColor: 'blue',
                        tension: 0.5,
                        borderWidth: 2
                    }
                ]
            }
        }
    ]
}

export function getAccountActivities() {
    // TODO: Call API
    return [
        {
            timestamp: 1231,
            title: '',
            description: '',
            type: ''
        }
    ]
}

