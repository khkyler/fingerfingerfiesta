var totalScore = 0;
var minScore = 20;
var scoreMethods = {
    // score: 0,
    addScore: function() {
      console.log('this is score', totalScore)
      totalScore += 5;
       $('h1').text("Score: " + ""+totalScore+""+"/"+""+minScore+"");
      if (this.checkScore() === true) {
        alert('you passed!');
      }
    },
    subtractScore: function() {
      $('h1').text("Score: " + ""+totalScore+""+"/"+""+minScore+"");
      totalScore -= 5;
    },
    checkScore: function() {
      return totalScore >= minScore;
    }
}


 

 