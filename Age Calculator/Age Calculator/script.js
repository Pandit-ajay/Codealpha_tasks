function age() {
    let d1 = parseInt(document.getElementById('date').value);
    let m1 = parseInt(document.getElementById('month').value);
    let y1 = parseInt(document.getElementById('year').value);

    let date = new Date();
    let d2 = date.getDate();
    let m2 = date.getMonth() + 1; // Months are 0-based in JS
    let y2 = date.getFullYear();

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap year
    if ((y2 % 4 === 0 && y2 % 100 !== 0) || (y2 % 400 === 0)) {
        month[1] = 29; // February has 29 days in a leap year
    }

    if (d1 > d2) {
        d2 += month[m2 - 2]; // Use previous month's days
        m2 -= 1;
    }

    if (m1 > m2) {
        m2 += 12;
        y2 -= 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

     document.getElementById('age').innerHTML = 
      `Your age is ${y} year${y !== 1 ? 's' : ''}, ${m} month${m !== 1 ? 's' : ''}, and ${d} day${d !== 1 ? 's' : ''}.`;

}
