//Coding Challenge
//1.) Create variables for the heights and ages of two friends and assign them some values
var jHeight = 155;
var fHeight = 155;

var jAge = 25;
var fAge = 25;

//Calculate their score
//h + (5 * age)
var jTotal = jHeight + (5*jAge);
var fTotal = fHeight + (5*fAge);

//Get who wins
if (jTotal > fTotal) {
    console.log("John Wins " + jTotal);
} else if(fTotal > jTotal) {
    console.log("Friend Wins "  + fTotal);
} else if (jTotal == fTotal) {
    console.log("Tie " + jTotal);
} else {
    console.log("Error");
}