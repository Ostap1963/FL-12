function isLeapYear(yearDate) {
    let Year = new Date(yearDate);
    if (Year instanceof Date && !isNaN(Year)) {
        Year = Year.getFullYear();
        if (Year % 4 === 0 && Year % 100 !== 0 || Year % 400 === 0) {
            return `${Year} is a leap year`;
        } else {
            return `${Year} is not a leap year`;
        }
    } else {
        return Year;
    }
}
isLeapYear('2020-01-01 00:00:00'); 