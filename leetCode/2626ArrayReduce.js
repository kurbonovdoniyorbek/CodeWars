const nums = [1, 2, 3, 4]
function fn(i, x) {
    return i + x
}
const init = 1000


var reduce = function (nums, fn, init) {
    if (nums.length === 0) {
        return init
    } else {
        var val = fn(init, nums[0])
        let r = []
        for (let i = 1; i < nums.length; i++) {
            var x = fn(val, nums[i])
            x += x
            r.push(x)
        }
        return r[-1]
    }
};
console.log(reduce(nums, fn, init));