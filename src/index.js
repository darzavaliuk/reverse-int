module.exports = function reverse (n) {
    n = n + "";
    if (n > 0) {
        return n.split("").reverse("").join("")
    }
    else {
        let res = Math.abs(n).toString();
        return res.split("").reverse("").join("")
    }
        
}
