// Assignment 1 : Callback Function
function delayResult (n1,n2, delayTime, callback) {
    // write code here
    setTimeout(() => {
        // let ans = n1 + n2; // 先執行加法
        // callback(ans); // 再呼叫callback function 回傳結果 
        callback(n1+n2);
    }, delayTime);
}
delayResult(4, 5, 3000, function(result) {
    console.log(result);
})
delayResult(-5, 10 ,2000, function(result) {
    console.log(result);
})