function Game(level){
    this.level =level;
    this.timeToWalk = 11000;
}

Game.prototype.start = function(){
    console.log(this.level + ' rides');
};


var $gamefield  = $('#game-field'),
    $cowboy = $('#gunman1'),
    $base = $('#base'),
    $fire = $('#fire'),
    $start = $('#start'),
    $lose = $('#lose'),
    $audioIntro = $('#audio-intro'),
    $audioFire = $('#audio-fire'),
//$audioIntro = $('#audio-intro'),
//$audioIntro = $('#audio-intro'),
//$audioIntro = $('#audio-intro'),
    time = 11000;

//$(document).ready(function(){
//        $audioIntro.get(0).play();
//    });

$start.click(function(e){
        console.log(e);
        e.preventDefault();

    start();
    setTimeout(function(){
        var clicked = false;
        $fire.css('display', 'inline');

        shoot();

        clicked = $cowboy.on('click', function(){
            clicked = true;
            console.log(clicked + 'clicked to true');
            return clicked;

        });

        if (clicked == true){
            console.log(clicked+' clicked');
            $cowboy.stop().addClass('killed');
        } else{
            console.log('loser');
            $cowboy.on('animationend', function(){
                $lose.css('display', 'inline');
            });
        }

    }, time);
});

function start(e){
    console.log(e);
    $cowboy.css('display','block').addClass("walk");
}

function shoot(){
    $audioFire.get(0).play();
    $cowboy.removeClass('walk').addClass('shoot');
}

//function killed(elem){
//    elem.stop().addClass('killed');
//}



