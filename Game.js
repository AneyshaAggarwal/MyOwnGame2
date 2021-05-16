class Game 
{
  constructor()
  {

  }

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data)
    {
     gameState = data.val();
    })
  }

  update(state)
  {
    database.ref('/').update(
    {
     gameState: state
    });
  }

    async start()
    {
      if(gameState === 0)
      {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists())
        {
         playerCount = playerCountRef.val();
         player.getCount();
        }
        form = new Form()
        form.display();
      }
      queen= createSprite(344, 345, 20, 20);

      wc1= createSprite(345, 315, 20, 20);
      wc2= createSprite(312, 370, 20, 20);
      wc3= createSprite(372, 365, 20, 20);
      wc4= createSprite(345, 280, 20, 20);
      wc5= createSprite(280, 385, 20, 20);
      wc6= createSprite(400, 387, 20, 20);
      wc7= createSprite(340, 420, 20, 20);
      wc8= createSprite(400, 320, 20, 20);
      wc9= createSprite(280, 320, 20, 20);

      bc1= createSprite(325, 335, 20, 20);
      bc2= createSprite(355, 385, 20, 20);
      bc3= createSprite(385, 335, 20, 20);
      bc4= createSprite(392, 301, 20, 20);
      bc5= createSprite(415, 355, 20, 20);
      bc6= createSprite(380, 405, 20, 20);
      bc7= createSprite(320, 405, 20, 20);
      bc8= createSprite(320, 300, 20, 20);
      bc9= createSprite(290, 350, 20, 20);

      queen.addImage(qc);

      wc1.addImage(wc);
      wc2.addImage(wc);
      wc3.addImage(wc);
      wc4.addImage(wc);
      wc5.addImage(wc);
      wc6.addImage(wc);
      wc7.addImage(wc);
      wc8.addImage(wc);
      wc9.addImage(wc);

      bc1.addImage(bc);
      bc2.addImage(bc);
      bc3.addImage(bc);
      bc4.addImage(bc);
      bc5.addImage(bc);
      bc6.addImage(bc);
      bc7.addImage(bc);
      bc8.addImage(bc);
      bc9.addImage(bc);

      queen.scale= 0.25;

      wc1.scale= 0.15;
      wc2.scale= 0.15;
      wc3.scale= 0.15;
      wc4.scale= 0.15;
      wc5.scale= 0.15;
      wc6.scale= 0.15;
      wc7.scale= 0.15;
      wc8.scale= 0.15;
      wc9.scale= 0.15;

      bc1.scale= 0.35;
      bc2.scale= 0.35;
      bc3.scale= 0.35;
      bc4.scale= 0.35;
      bc5.scale= 0.35;
      bc6.scale= 0.35;
      bc7.scale= 0.35;
      bc8.scale= 0.35;
      bc9.scale= 0.35;

      drawSprites();
    }

    play()
    {
        form.hide();
        background("lightblue");
        image(bg, 0, 0, 700, 700);
        drawSprites();
    }

}