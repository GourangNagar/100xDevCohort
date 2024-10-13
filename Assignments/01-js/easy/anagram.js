/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(s, t) {
  return s.toLowerCase().split("").sort().join("") == t.toLowerCase().split("").sort().join("");
}

module.exports = isAnagram;
