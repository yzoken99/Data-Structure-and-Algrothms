const plusOne = function (arr) {
    if (digits.length >= 1 && digits.length <= 100) {
        let newArr = [];
        let carry = 1;
        for (let i = digits.length - 1; i >= 0; i--) {
            let sum = digits[i] + carry;
            carry = sum >= 10 ? 1 : 0;
            newArr.unshift(sum % 10);
            console.log(newArr);
        }
        if (carry === 1) {
            newArr.unshift(1);
        }
        return newArr;
    }
};
plusOne([1, 2, 3, 9]);
