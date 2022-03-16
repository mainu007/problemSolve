// ## Palindrome Number
// reads as value from left to right and from right to left;
const value = 121;

const isPalindrome = (x) => {
    let value = x;
    let reverseValue = 0;
    while (value > 0) {
        reverseValue = reverseValue * 10 + (value % 10);
        value = Math.trunc(value / 10);
    }
    return reverseValue === x;
};

console.log(isPalindrome(value));
