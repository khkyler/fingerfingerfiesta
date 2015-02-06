var Xcheckline = function(touchesStoreX, touchesStoreY, ctx){
  var beginX = touchesStoreX[0];
  var beginY = touchesStoreY[0];
  var endX = touchesStoreX[touchesStoreX.length-1];
  var endY = touchesStoreY[touchesStoreX.length-1];
  var slope = -(endX-beginX)/(endY-beginY);
  console.log('SLOPE', slope);

  var maxHeight = 900;
  var minHeight = 700;
  var mustBeLeftOf = 375;
  var mustBeRightOf = 625;
  if(beginX<=mustBeLeftOf && endX>=mustBeRightOf){
    for(var i = 0; i < touchesStoreY.length; i++){
      // console.log(i, touchesStoreY[i])
      if(touchesStoreY[i] < maxHeight && touchesStoreY[i] > minHeight){
        // console.log("YAY!!!");
        // scoreMethods.addScore();
        //below clears the line 
        ctx.clearRect(0,0,canvas.width,canvas.height);
        //check if line hits square HERE
        //ctx.clearRect(square.x,square.y,square.w,square.h);
      }
    }
  }

}
var timeUp = false;

var timer = function () {
  timeUp = false;
  var now = Date.now();
  var end = now + 30000;
  var didYouWin = true;
  while(now < end){
    now = Date.now();
  }
  //if timer reaches zero
  didYouWin = false;
  timeUp = true; 
  console.log('Time Up!');
  endLevel(didYouWin); //pass it loss condition
};

var endLevel = function (didYouWin) {
  //render something depending on win state
  //clear screen
  if(didYouWin){
    alert('You Win! Get ready for the next level!');
    initLevel("nextLevel");
  }else{
    alert('You Lose! Back to Level 1');
    initLevel("level1");
  }
};


var incrementScore = function () {
  //add to score
  //check for score win
    endLevel(); //win condition is passed
};

var initLevel = function (level) {
  timer();
  //run the box spawner
};
