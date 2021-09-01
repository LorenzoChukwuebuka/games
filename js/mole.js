document.addEventListener('DOMcontentLoaded', () => {
  //declare variables

  const squares = document.querySelectorAll('.square')
  const mole = document.querySelectorAll('.mole')
  const timeleft = document.querySelector('#time-left')
  let score = document.querySelector('#score')

  let result = 0
  let hitPosition
  let currentTime = timeleft.textContent

   
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})



function moveMole(){
    let timerId = null
    timerId =   setInterval(randomSquare,1000)
      
}


 function countDown(){
   currentTime--
   timeleft.textContent = currentTime

   if(currentTime==0){
     clearInterval(timerId)
     alert('Game Over. Your final score is'+ result)
   }
 }

 let timerId = setInterval(countDown,1000)





































})
