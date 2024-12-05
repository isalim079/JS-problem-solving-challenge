const countVowel = (string) => {
  const word = string.toLowerCase().split("");

  const vowelList = ["a", "e", "i", "o", "u"];

  const arr = [];

  for (i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      arr.push(word[i]);
    }
  }

  return arr.length;
};

console.log(countVowel("Local Boys. Great Behavior"));
