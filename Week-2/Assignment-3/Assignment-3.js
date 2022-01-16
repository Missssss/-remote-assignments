function count(input) {
    let ans = {};
    for(let i = 0; i < input.length; i++){
        if(input[i] in ans){
            ans[input[i]] = ans[input[i]] + 1;
            
        }else{
            ans[input[i]] = 1;
        }
    }
    
    return ans;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));// should print {a:3, b:1, c:2, x:1}



function groupByKey(input) {
    let ans = {};
    for(let i = 0; i < input.length; i++){
        let key = input[i].key;
        if(key in ans){
            ans[key] = ans[key] + input[i].value;
            
        }else{
            ans[key] =  input[i].value;
        }
    }
    
    return ans;
}
let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];

console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}

