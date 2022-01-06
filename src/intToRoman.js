const romanNumberMap = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

const escapeNumberMap ={
  4: 'IV',
  9: 'IX',
  40: 'XL',
  90: 'XC',
  400: 'CD',
  900: 'CM'
}

let count = 1;
function getRomanNumber(intValue) {

  let romanNumber = '';
  
  //CASE 1
  if (romanNumberMap[intValue]) {
    return romanNumberMap[intValue];
  }
  
  //CASE 2 
  let keyArray = Object.keys(romanNumberMap)
  let intKeyArray =[]
  
  for(let i=0;i<keyArray.length;i++){
    intKeyArray.push(parseInt(keyArray[i]));
  }
  let tempRoman = 0;
  for(let x=0;x<intKeyArray.length;x++){
    if(intKeyArray[x] < intValue && intKeyArray[x+1] > intValue )
    {
      tempRoman = intKeyArray[x]
    }
  }
  
  let mod = intValue % tempRoman;
  let reminder  = parseInt(intValue/tempRoman);
  
  console.log('mod :', mod)
  console.log('reminder :', reminder)
  
  let sndPortion = intValue-tempRoman;
  let sndRomanNumber =''
  
  if (romanNumberMap[mod]) {
    sndRomanNumber=  romanNumberMap[mod];
  }  
  else if(escapeNumberMap[mod]){
    sndRomanNumber = escapeNumberMap[mod];
  }
  
  else {
     if(mod>0)
     sndRomanNumber = getRomanNumber(mod)
     
  } 
  
  let substring = '';
  for(let y=0;y<reminder;y++){
  substring = substring+romanNumberMap[tempRoman]
  }
  romanNumber =  substring+ sndRomanNumber
  return romanNumber;
}

const result = getRomanNumber(400);
console.log(result)
