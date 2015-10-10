$(document).ready(function(){
    
    var projectBlocks = [
        '#block3',
        '#block2',
        '#block1'
    ]
    
    $(function() {
 
        for (i = 0; i < projectBlocks.length; i++) {
        
       
            var controller = new ScrollMagic.Controller();  

            var blockHeight = $(projectBlocks[i]).height(); 

            
            
            
            
            // projectBlock fade-in tweens
            var projectBlockInTween = new TweenMax.to(projectBlocks[i], 0.2, {
                backgroundColor: 'none'
                
            }); 

            // project fade-in scenes
            var projectBlockInScene = new ScrollMagic.Scene({
                triggerElement: projectBlocks[i],
                offset: blockHeight/8
            })
            .addIndicators()
            .setTween(projectBlockInTween);


            
            

            // projectBlock fade-out tweens
            var projectBlockOutTween = new TweenMax.to(projectBlocks[i], 0.2, {
                backgroundColor: 'white'
            }); 

            // project fade-in scenes
            var projectBlockOutScene = new ScrollMagic.Scene({
                triggerElement: projectBlocks[i],
                triggerHook: 'onLeave',
                offset: blockHeight/2,
                
            })
            .addIndicators()
            .setTween(projectBlockOutTween);
  

            
            
            
            
            controller.addScene([
                projectBlockInScene,
                projectBlockOutScene
            ]);
        }
         
         });
    
    
    
    
    
    
    
    
});