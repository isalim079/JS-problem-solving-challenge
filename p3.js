const palindrome = (string) => {
  const reversedString = string.split("").reverse().join("");
  if (reversedString === string) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("eye"));
