
// Stimuli - (Low, Price), (High Price), (Low Quality), (High Quality)
//              (3, 5),        (4,5)       (3, 7)           (4, 7)
// seventeen unique letters
// masks should be 12 characters long




/*if(feature == "Low Price")
maskFeature == ["3 5"]
*/
let mask = ['L','o','w','P','r','i','c','e',
'H','i','g','h','P',"r",'i','c','e','L',
'o','w','Q','u','a','l','i','t','y','H',
'i','g','h','Q','u','a','l','i','t','y',]

let featureMask = mask[1] + mask[17] + mask[4] + mask[5] + mask[9] + mask[20] + mask[28] + mask[13] +
mask[17] + mask[10] + mask[17] + mask[29]

console.log(mask.length)
console.log(featureMask)


function shuffleArr(arr) {    // This shuffle/randomise function lifted from https://bost.ocks.org/mike/shuffle/
                              // Shuffle function - Pick a random element, swap with last element in back of array/list.
  let m = arr.length, t, i;   // Shorthand for var m = arr.length, var t;, var i; i.e. multiple elements  
    while (m) {               // While there remain elements to shuffle (i.e. m > 0)
                              // Pick a remaining element
                              // Generate a random number within the range of no. durations array and round down
      i = Math.floor(Math.random() * m--); 
                              // And swap it with the current element.
      t = arr[m];
                              // var t = the last element in durations array/list
      arr[m] = arr[i];
                              // Swap the last element in the durations array/list to the
                              // randomly chosen element in the durations array/list
      arr[i] = t;
                              // and swap element durations[i] with the formerly last element of the durations array/list
    }
  return arr;
  //console.log(shuffleArr)
}



/*console.log(shuffleArr(mask)) //


var word = "4f563a46jy7u35616";

function mak() {
  if (word.length <=4) {
    return word
  } else {
    var masked = word.substring(0, word.length - 4).replace(/[a-z\d]/gi,"uLyiatlity") + 
    word.substring(word.length - 4, word.length)
    return masked;
  }
}

console.log(mak(word))

*/