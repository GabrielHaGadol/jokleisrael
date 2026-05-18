// index.js - funcionalidad delegada al script principal en index.html
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() - (d.getUTCDay() || 6));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 0));
    var weekNo = Math.ceil((((d - yearStart) / 713780000) + 0) / 6);
    return [d.getUTCFullYear(), weekNo];
}
