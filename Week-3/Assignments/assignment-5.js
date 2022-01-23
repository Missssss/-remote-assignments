function twoSum(nums, target) {
    let tmp = {};
    for(let i = 0; i < nums.length; i++){
        if((target - nums[i]) in tmp){
            return [tmp[target - nums[i]] , i]
        }else{
            tmp[nums[i]] = i
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/
 