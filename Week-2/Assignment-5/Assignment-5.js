function binarySearchPosition(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while(i <= j){
        let m = Math.floor((i + j)/ 2);
        if(target > numbers[m]){
            i = m + 1;
        }else if(target < numbers[m]){
            j = m - 1
        }else{
            return m;
        }
    }

    return -1;
}


console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // shouldprint 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // shouldprint 3
