class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //question.input2.hide()

    textSize(30)
    text("result are:",350,50)
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo()
    if(allContestant !== undefined){
      var displayAnswer=230
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
    }
    for(var plr in allContestants){ 
      debugger; 
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer) 
      fill("Green") 
      else 
      fill("red");
       display_Answers+=30; 
       textSize(20); 
       text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers) }
    
  }

}
