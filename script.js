// function firstNonRepeatedChar(str) {
 // Write your code here
	function firstNonRepeatedChar(str) {
    // Create a map to store the frequency of each character
    const charFrequency = new Map();

    // Iterate through the string and populate the frequency map
    for (const char of str) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Iterate through the string again to find the first non-repeated character
    for (const char of str) {
        if (charFrequency.get(char) === 1) {
            return char; // Found the first non-repeated character
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
