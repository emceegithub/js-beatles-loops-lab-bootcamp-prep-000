function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArray = []
  for (var i=0;i<arrayOfMusicians.length;i++) {
    newArray[i] = arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]
  }
  return newArray
}

function johnLennonFacts(array) {
  for (var i=0;i<array.length;i++) {
    array[i] = array[i] + "!!!"
  }
  return array
}
