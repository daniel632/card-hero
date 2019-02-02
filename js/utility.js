// Returns a random number between low and high (inclusively)
let randomNumberBetween = function(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}