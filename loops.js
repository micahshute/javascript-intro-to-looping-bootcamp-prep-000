function whileLoop(num){
  while(--num > 0){
    console.log(num)
  }
  console.log(num)
  return 'done'
}

function forLoop(array){
  for(let i = 0; i < 25; i++){
    var optionalS = ((i == 1) ? "" : "s")
    console.log(`I am ${i} strange loop${optionalS}`)
    array.push(`I am ${i} strange loop${optionalS}`)
  }
  return array
}


function doWhileLoop(array){
  while(!(array.length <= 0 || !maybeTrue())){
    console.log("pop")
    array.pop()
  }
  return array
}

function maybeTrue(){
  var val =  Math.random() 
  var rand = val >= 0.5
  console.log(val)
  return rand
}