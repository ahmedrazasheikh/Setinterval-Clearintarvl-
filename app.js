// Setinterval Work multiple time after the time you give them 
// for using clear interval you must have store setinterval in a Variable



 var animation=  setInterval(raza, 1000)


function raza (){


    var randomPosition = Math.floor(Math.random()*100)
    console.log(randomPosition)
    if(randomPosition === 77){
    clearInterval(animation);
    }else{
var ball = document.getElementById('circle')
// console.log(ball)

ball.style.marginTop = `${randomPosition}px`
    }

}