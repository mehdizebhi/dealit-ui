export function convertToPersianNumber(englishNumber) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(englishNumber).replace(/\d/g, (digit) => persianDigits[digit]);
}

function formatNumberToPrice(number) {
    // Use toLocaleString to add commas for thousands separators
    return Number(number).toLocaleString('en-US', {
        minimumFractionDigits: 2, // Ensures that there are always two decimal places
        maximumFractionDigits: 2,
    });
}