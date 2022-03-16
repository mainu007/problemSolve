// ## Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const value = '(){[]}';

const isValid = (s) => {
    if (s.length % 2) return false;
    const bracketsValue = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    const firstBrackets = [];
    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];
        if (currentBracket.match(/\(|\{|\[/g)) {
            firstBrackets.push(bracketsValue[currentBracket]);
        } else if (firstBrackets?.pop() !== currentBracket) {
            return false;
        }
    }
    if (firstBrackets.length) return false;
    return true;
};

const result = isValid(value);
console.log(result);
