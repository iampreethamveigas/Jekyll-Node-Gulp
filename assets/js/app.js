var masterslider_8f99 = new MasterSlider();

			// slider controls
			masterslider_8f99.control('arrows'     ,{ autohide:true, overVideo:true  });
			masterslider_8f99.control('slideinfo'  ,{ autohide:false, overVideo:true, dir:'h', align:'bottom',inset:false , margin:10   });
			// slider setup
			masterslider_8f99.setup("MS59a32e2458f99", {
				width           : 240,
				height          : 240,
				minHeight       : 0,
				space           : 0,
				start           : 1,
				grabCursor      : true,
				swipe           : true,
				mouse           : true,
				keyboard        : false,
				layout          : "partialview",
				wheel           : true,
				autoplay        : false,
                instantStartLayers:false,
				mobileBGVideo:false,
				loop            : true,
				shuffle         : false,
				preload         : 4,
				heightLimit     : true,
				autoHeight      : false,
				smoothHeight    : true,
				endPause        : false,
				overPause       : true,
				fillMode        : "fill",
				centerControls  : true,
				startOnAppear   : false,
				layersMode      : "center",
				autofillTarget  : "",
				hideLayers      : false,
				fullscreenMargin: 0,
				speed           : 20,
				dir             : "h",
				parallaxMode    : 'swipe',
				view            : "focus"
			});
      var slider = new MasterSlider();
		slider.setup('masterslider' , {
			loop:true,
			width:240,
			height:240,
			speed:20,
			view:'focus',
			//preload:'all',
			space:0,
			wheel:true
		});
		slider.control('arrows');
		slider.control('slideinfo',{insertTo:'#staff-info'});

      // var slider = new MasterSlider();
      // 		slider.setup('masterslider' , {
      // 			width:1024,
      // 			height:768,
      // 			space:5,
      // 			view:'basic',
      // 			autofill:true,
      // 			speed:20
      // 		});
      //
      // 		slider.control('arrows' ,{insertTo:'#masterslider'});
      // 		slider.control('bullets');
      //
      //
      // var wrapper = $('#slider1-wrapper');
      // 		wrapper.height(window.innerHeight - 118);
      // 		$(window).resize(function(event) {
      // 			wrapper.height(window.innerHeight - 118);
      // 		});
          var masterslider_1de4 = new MasterSlider();

        			// slider controls
        			masterslider_1de4.control('bullets'    ,{ autohide:true, overVideo:true, dir:'v', align:'right', space:10 , margin:10  });
        			// slider setup
        			masterslider_1de4.setup("MS59a341c841de4", {
        				width           : 1400,
        				height          : 768,
        				minHeight       : 0,
        				space           : 0,
        				start           : 1,
        				grabCursor      : true,
        				swipe           : true,
        				mouse           : true,
        				keyboard        : true,
        				layout          : "fullscreen",
        				wheel           : false,
        				autoplay        : true,
                        instantStartLayers:true,
        				mobileBGVideo:false,
        				loop            : false,
        				shuffle         : false,
        				preload         : 0,
        				heightLimit     : true,
        				autoHeight      : false,
        				smoothHeight    : true,
        				endPause        : false,
        				overPause       : true,
        				fillMode        : "fill",
        				centerControls  : true,
        				startOnAppear   : false,
        				layersMode      : "center",
        				autofillTarget  : "",
        				hideLayers      : false,
        				fullscreenMargin: 80,
        				speed           : 20,
        				dir             : "v",
        				parallaxMode    : 'swipe',
        				view            : "basic"
        			});


        			$("head").append( "<link rel='stylesheet' id='ms-fonts'  href='//fonts.googleapis.com/css?family=Poppins:600,regular' type='text/css' media='all' />" );

        			window.masterslider_instances = window.masterslider_instances || [];
        			window.masterslider_instances.push( masterslider_1de4 );
							
