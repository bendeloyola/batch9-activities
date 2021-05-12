const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.

function moveRobot() {
    //add code here
    // var move = (parseInt(robot.style.left, 10) || 0) + 50;
    // robot.style.left = move + 'px'

    
    var move =+ 10
    robot.style.left = robot.offsetLeft + move + 'px'
    
}
robot.addEventListener('click', moveRobot)