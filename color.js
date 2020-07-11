(function() {
  var newColor = document.getElementById('getColor');
  console.log(newColor)
  var bodyColor = document.querySelector('body');
  console.log(bodyColor)
  const hexValue = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];
  console.log(hexValue)
  const value = document.getElementById('hexHere');
  console.log(value)


  newColor.addEventListener('click', consoleE)


  
  // var corBack = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
  // span.innerHTML = color;

  function consoleE() {
    let hex = '#'

    for(let i = 0; i < 6; i++){
     
      const index = Math.floor(Math.random()*hexValue.length)
      console.log('testes')
      hex += hexValue[index];
      console.log(hex)
    }
    value.textContent = hex
    bodyColor.style.backgroundColor = hex;
  }
})()



// (function() {
//   const button = document.querySelector('#btn')
//   const body = document.querySelector('body')
//   const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
//   const value = document.querySelector('#hex-value')

//   button.addEventListener('click', changeHex)

//   function changeHex(){
//       let hex = '#'

//       for (let i = 0; i < 6; i++){
//           const index = Math.floor(Math.random()*hexValues.length)
//           hex += hexValues[index]
//       }
//       value.textContent = hex
//       body.style.backgroundColor = hex
//   }
// } )()