
// Stimuli - (Low, Price), (High Price), (Low Quality), (High Quality)
//              (3, 5),        (4,5)       (3, 7)           (4, 7)
// seventeen unique letters
// masks should be 12 characters long

var features = [												// Available phone features and the random values it can have
  ["Low Price", "High Price",],
  ["Low Quality", "High Quality",],
   ]; console.log(features[1][0])
let numPhones = 2
let mask = ['L','o','w','P','r','i','c','e',
'H','i','g','h','P',"r",'i','c','e','L',
'o','w','Q','u','a','l','i','t','y','H',
'i','g','h','Q','u','a','l','i','t','y',]
let maskLength = 12
let usingFeatures = [1,2]
let maskArray = []
let numFeatures = 2

function createAttributeMask () { // Create single attribute mask
  var attributeMask = []
    for (var i = 0; i < maskLength; i++) {
      // Generate random number from 0 - number of letters in mask array
      var maskElement = Math.floor(Math.random() * mask.length);
      // concatenate letters in 12 character string i.e. mask
      attributeMask += mask[maskElement]
    }
    return attributeMask
  }

function createMaskedPhone () { // Create array containing mask for single option i.e. two attributes
  var maskPhone = {atts:[]}
  for(var j = 0; j < numFeatures; j++ ) {    
    maskPhone.atts.push(createAttributeMask())
  }
return maskPhone
}

for(var k = 0; k < numFeatures; k++){
maskArray.push(createMaskedPhone())
}
console.log(maskArray)



