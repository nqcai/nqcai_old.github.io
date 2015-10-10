$(document).ready(function(){
    var navHeight = $(".main-nav").height();
    var mn = $(".main-nav");  // this means mn takes place of .main-nav
    var hdr = $('#cover').height() - navHeight; 
    
    /*$(window).scroll(function() {
        if( $(this).scrollTop() >= hdr ) {
            mn.addClass("main-nav-scrolled"); 
            $(".unselect").addClass("floatingA"); 
            //mn.animate({height: 45}); 
        } 
        else {
            mn.removeClass("main-nav-scrolled");
            // $(".unselect").removeClass("floatingA"); 
            // mn.animate({height: 70});  
        }
    }); 
    */
    
    
    /*$(".button").toggle(function() {
        $("#projSmall1").animate({
            "height":"70vh", 
            "width":"90vw"
        }, {
            duration: 500, 
            easing: 'easeInOutExpo'
        })
    }, function() {
        $("#projSmall1").animate({
            "height":"205px", 
            "width":"400px"
        }, {
            duration: 500, 
            easing: 'easeInOutExpo'
        });
    });  
    */
    
    // $(".button").click(function() {
            $(".preview").toggle(
                function() {$(this).stop().animate({width: "90vw", height: "60vh"}, 500, "easeOutExpo");
                            $(".expand").fadeOut(300);},
                function() {$(this).stop().animate({width: "315px", height: "225px"}, 500, "easeOutExpo");
                           $(".expand").fadeOut(300);}
            );
    // });
    
  /*  $("#projSmall1").hover(function() {
        $(this).animate({width: 425, height: 225}, 500); 
    }, function() {
            $(this).animate({width: 400, height: 205}, 500);
        });
    
    }); 
    
$("#projSmall1").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });*/
    
    $(".preview").mouseenter(function(){
            $(this).animate({
                height: 260,
                width: 320
            }, 150, "easeInOutExpo");
            $(".expand").delay(75).fadeIn(100); 
        }).mouseleave(function(){
            $(this).animate({
                height: 225,
                width: 315
            }, 300, "easeInOutExpo");
            $(".expand").delay(50).fadeOut(195);
        });
       
    $('#projUnit1').parallax({imageSrc: '../pics/desk.jpg', speed: 0.6, bleed: 10}); 
    $('#projUnit2').parallax({imageSrc: '../pics/Paris.jpg', speed: 0.6, bleed: 10}); 
    // $('#cover').parallax({imageSrc: '../pics/lake.jpg', speed: 0.8, bleed: 10}); 
    
    
    
    
    // SCROLL MAGIC
    
    // Cover image
    
    $(function() {
        var controller = new ScrollMagic.Controller();  
        
        var coverTween = new TweenMax.to('#welcome', 1.5, {
            
            //y: 200
            
        }); 
        
        var coverScene = new ScrollMagic.Scene({
            triggerElement: '.main-nav', triggerHook: 'onEnter', offset: 70, duration: 600
        })
        .setTween(coverTween)
        .addTo(controller); 
    });
    
    

    
    
    
    
    
    
    // Scroll Down
    
    if (window.pageYOffset === 0 || document.body.scrollTop === 0) {
        
        $(function() {
        
        var hdr = $('#cover').height();
        
        var controller = new ScrollMagic.Controller(); 
    
        var arrowDownTween = new TweenMax.to('#arrow', 0.3, {
            ease: Expo.easeInOutExpo,
            y: hdr * 0.03,
            opacity: 1
        }); 

        var textDownTween = new TweenMax.to('#scrollDown', 0.3, {
            ease: Expo.easeInOutExpo,
            y: hdr * 0.04,
            opacity: 1
        });

        arrowDownTween.delay(0.3 + 0.15);
        textDownTween.delay(0.3 + 0.15);

        var arrowUpTween = new TweenMax.to('#arrow', 0.4, {
            y: 0
        });

        var textUpTween = new TweenMax.to('#scrollDown', 0.4, {
            y: 0
        });

        arrowUpTween.delay(0.6 + 0.15);
        textUpTween.delay(0.6 + 0.15);

        var arrowDownTween2 = new TweenMax.to('#arrow', 0.3, {
            ease: Expo.easeInOutExpo,
            y: hdr * 0.03
        }); 

        var textDownTween2 = new TweenMax.to('#scrollDown', 0.3, {
            ease: Expo.easeInOutExpo,
            y: hdr * 0.04
        });

        arrowDownTween2.delay(1.05 + 0.15);
        textDownTween2.delay(1.05 + 0.15);

        var arrowUpTween2 = new TweenMax.to('#arrow', 0.5, {
            y: 0
        });

        var textUpTween2 = new TweenMax.to('#scrollDown', 0.5, {
            y: 0
        });

        arrowUpTween2.delay(1.35 + 0.15);
        textUpTween2.delay(1.35 + 0.15);
    
    });
    }
    
    
    $(function() {
        
        var hdr = $('#cover').height();
        
        var controller = new ScrollMagic.Controller();
       
        var textFadeTween = new TweenMax.to('#scrollDown', 0.9, {
            opacity: 0,
            y: (hdr * 0.09) 
        });   
         
        var arrowFadeTween = new TweenMax.to('#arrow', 0.9, {
            opacity: 0,
            y: (hdr * 0.05)
        }); 

        var textFadeScene = new ScrollMagic.Scene({
            triggerElement: '.main-nav', triggerHook: 'onEnter', offset: 70, duration: 300
        })
        // .addIndicators()
        .setTween(textFadeTween);
        
         var arrowFadeScene = new ScrollMagic.Scene({
            triggerElement: '.main-nav', triggerHook: 'onEnter', offset: 70, duration: 100
        })
        // .addIndicators()
        .setTween(arrowFadeTween);
        
        controller.addScene([
            arrowFadeScene,
            textFadeScene
        ]);
    
    });
   
    //triggerElement: '.main-nav', triggerHook: 'onEnter', offset: 70, duration: 600
    
    
    
    
    
    
    // About Me
    
    $(function() {
        var controller = new ScrollMagic.Controller();  
        
        // picture tween
        var profilePicTween = new TweenMax.to('#profile', 0.8, {
            transform: "translateY(0)",
            ease: Expo.easeInOut,
            opacity: 1     
        }); 
        
        profilePicTween.delay(0); 
        
        // about text tween
        var aboutTextTween = new TweenMax.to('#title h3', 0.5, {
            transform: "translateY(0)",
            ease: Expo.easeInOut,
            opacity: 1     
        });
        
        //line tween
        var lineTween = new TweenMax.to('#line', 0.65, {
            width: '90%',
            ease: Expo.easeInOut,
               
        });
        
        lineTween.delay(0.0); 
        
        // picture scene
        var profilePicScene = new ScrollMagic.Scene({
            triggerElement: '#title h3', triggerHook: 'onEnter', offset: 250
        })
        // .addIndicators()
        .setTween(profilePicTween);
        
        // about text scene
        var aboutTextScene = new ScrollMagic.Scene({
            triggerElement: '#title h3', triggerHook: 'onEnter', offset: 170
        })
        // .addIndicators()
        .setTween(aboutTextTween);
        
        var lineScene = new ScrollMagic.Scene({
            triggerElement: '#title h3', triggerHook: 'onEnter', offset: 170
        })
        // .addIndicators()
        .setTween(lineTween);
        
        controller.addScene([
            profilePicScene,
            aboutTextScene,
            lineScene
        ]);
    }); 
    
    
    // Navigation Bar
    
    $(function() {
        var hdr = $('#cover').height() * 3 / 4;
        var windowHeight = $(window).height();
        
        var controller = new ScrollMagic.Controller(); 
        

        // Nav Tween
        var navBarTween = new TweenMax.to('.main-nav', 0.8, {   
            backgroundColor: 'white',
            opacity: 1
        }); 
        
        // Current Tween
        var navBarCurrentTween = new TweenMax.to('#current', 0.8, {
            backgroundColor: '#111122',
            color: 'white'
        }); 
        
        // Font Tween
        var navBarFontTween = new TweenMax.to('.unselect', 0.8, {
            className: "+=floatingA"
        }); 
        
        // Nicholas Home Tween
        var nicholasHomeTween = new TweenMax.to('#hamburger', 0.8, {
            color: 'black'
            
        });
        
        // Nav Scene
        var navBarScene = new ScrollMagic.Scene({
            triggerElement: '#cover', triggerHook: 'onLeave', offset: hdr, duration: hdr / 3 - 70
        })
        .setTween(navBarTween);
        
        // Current Scene
        var navBarCurrentScene = new ScrollMagic.Scene({
            triggerElement: '#cover', triggerHook: 'onLeave', offset: hdr, duration: hdr /3 - 70
        })
        
        .setTween(navBarCurrentTween);
        
        // Font Scene
        
        var navBarFontScene = new ScrollMagic.Scene({
            triggerElement: '#cover', triggerHook: 'onLeave', offset: hdr + 100, duration: hdr / 3 - 70
        })
        .setTween(navBarFontTween);
        
        var nicholasHomeScene = new ScrollMagic.Scene({
            triggerElement: '#cover', triggerHook: 'onLeave', offset: hdr + 100, duration: hdr / 3 - 70
        })
        .setTween(nicholasHomeTween);
        
        // Sticky Scene
        
        var stickyScene = new ScrollMagic.Scene({
            triggerElement: '.main-nav', triggerHook: 'onLeave'})
            .setPin('.main-nav');
            
        
        controller.addScene([
            navBarScene,
            navBarCurrentScene,
            navBarFontScene,
            nicholasHomeScene,
            stickyScene
            
        ]); 
        
    }); 
    
    $(function() {
        
        var controller = new ScrollMagic.Controller(); 
        
        var stickyScene = new ScrollMagic.Scene({
            triggerElement: '.main-nav', triggerHook: 'onLeave'})
            .setPin('.main-nav');
        
        controller.addScene([
            stickyScene
        ]);
            
    });
    
    /*
    $(function() {
        var hdr = $('#cover').height() / 2;
        
        var controller = new ScrollMagic.Controller(); 

        var navBarFontTween = new TweenMax.to('#current', 0.8, {
            backgroundColor: '#111122',
            color: 'white'
        }); 
        
        var navBarScene = new ScrollMagic.Scene({
            triggerElement: '#cover', triggerHook: 'onLeave', offset: hdr, duration: hdr - 70
        })
        
        .setTween(navBarFontTween)
        .addIndicators() 
        .addTo(controller); 
    });
    */
    
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
    
    
    
    
    
    