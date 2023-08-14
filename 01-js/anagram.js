function sort(str) {
  let arr = str.split("");
  arr = arr.sort(); //sort() function can only be used on arrays not on strings
  let sortedString = arr.join("");
  return sortedString;
}
function isAnagram(str1, str2) {
  // Checking for length of string.
  if (str1.length !== str2.length) {
    return false;
  }

  // Converting to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // rearranging & SORTING
  if (sort(str1) == sort(str2)) {
    return true;
  } else {
    return false;
  }
}
let ans = isAnagram("112", "211");
console.log(ans);
