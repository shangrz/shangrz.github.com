(function ($) {
  $(document).ready(function() {
    $.ajax({
      type: "POST",
      cache: false,
      url: Drupal.settings.statistics.url,
      data: Drupal.settings.statistics.data
    });
  });
})(jQuery);
;
/**
 * @file
 * nbastat specific theme-ish javscript.
 * Status: Half-updraded to D7 (4/23/2012)
 * D7js: http://drupal.org/node/756722
 */


/**
 * jQuery plugin, nbastat_hero_reveal
 *
 * Custom method for revealing hidden content in the hero area for a standard page.
 * Content may be standard HTML content or video. Should be called on the hero cck block:
 * e.g. $('#block-cck-blocks-field-hero').nbastat_hero_reveal({ __OPTIONS__ });
 *
 * Settings to use when initializing
 *
 * overlay        : jQuery selector for overlay content, defaults to DOM node with class .overlay-content in object
 * type           : data-type attribute on the overlay element, choose from- [ html | youtube | vimeo ]
 * reveal         : jQuery selector for element to trigger overlay, defaults to DOM node with class .overlay-reveal
 * toggleContent  : jQuery selector for content to toggle; defaults to siblings of overlay element
 * ytEl           : selector for the element to write youtube iframe to, typically div node
 * ytWidth        : youTube video width
 * ytHeight       : youTube video height
 * autoDisplay    : string for the URI hash to trigger showing overlay on pageload
*/
;(function ( $, window, document, undefined ) {
    // constants
    var YT_API = '//www.youtube.com/iframe_api'
        , VIMEO_API = '//a.vimeocdn.com/js/froogaloop2.min.js'
        , LANG = Drupal.settings.pathPrefix.split('-')[0];

    // Set plugin method name and defaults
    var pluginName = 'nbastat_hero_reveal',
        defaults = {
            ytEl : '#hero-video'
          , ytWidth : 640
          , ytHeight : 480
          , ytVars : {
              quality : 'default',
              wmode : 'transparent',
              showinfo : 0,
              color : 'white',
              rel : 0,
              autohide : 1,
              hl : LANG,
              cc_lang_pref : LANG
            }
          , autoDisplay : '#video'
        };

    // plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        var $element = $(element);

        // set overlay and type defaults
        defaults = $.extend( defaults, {
          overlay : $element.find('.overlay-content')
          , type : $element.find('.overlay-content').attr('data-type')
          , reveal : $element.find('.overlay-reveal')
          , toggleContent: $element.find('.overlay-content').siblings()
        });

        this._defaults = defaults;
        this._name = pluginName;

        this.options = $.extend(true, defaults, options);

        this.init();
    }

    // actual plugin fuction
    Plugin.prototype.init = function () {

      // cache common selectors and variables
      var $html = $('html')
          , $body = $('body')
          , $scroll = ($.browser.msie || $.browser.mozilla || $.browser.opera) ? $html : $body
          , $slide = $(this.element)
          , $overlayLocation = (!this.options.overlayLocation) ? $slide : this.options.overlayLocation
          , initHeight = (!this.options.overlayLocation) ? $slide.height() : this.options.overlayLocation.outerHeight()
          , $overlay = this.options.overlay
          , overlayType = (!this.options.type) ? 'html' : this.options.type
          , $revealEl = this.options.reveal
          , $toggleContent = this.options.toggleContent
          , $ytEl = $slide.find(this.options.ytEl)
          , ytSelector = this.options.ytEl
          , ytWidth = this.options.ytWidth
          , ytHeight = this.options.ytHeight
          , ytVars = this.options.ytVars
          , autovid = window.location.hash;

      // add and cache the overlay shading element
      if (!$overlayLocation.find('.overlay-shade').length) {
        $overlayLocation.prepend('<div class="overlay-shade"></div>');
      }
      $overlay.wrapInner('<div class="container-12"></div>').prepend('<a href="#" class="close">' + Drupal.t('Close') + '</a>');

      var $shade = $overlayLocation.find('.overlay-shade'),
          $close = $overlayLocation.find('.close, .overlay-shade');

      // Open overlay on play button click
      $revealEl.bind('click.reveal', function(e){
        e.preventDefault();
        // Scroll to a nice position.
        $scroll.animate({scrollTop: $overlayLocation.offset().top}, 500);

        // Mark the element active, expand to new content height, and show overlay
        $shade.fadeIn(500);
        if ($toggleContent.length) {
          $toggleContent.hide();
        }

        $overlay.detach().appendTo($overlayLocation).fadeIn(500);
        $slide.addClass('active');

        if ( $overlay.outerHeight() > initHeight ) {
          $overlayLocation.height($overlay.outerHeight());
        }
      });

      // Bind click event on close button
      $close.bind('click.reveal', function(e) {
        e.preventDefault();
        $overlayLocation.removeClass('active').height(initHeight);
        $overlay.hide();
        $shade.fadeOut(500);
        $toggleContent.fadeIn(500);
      });

      switch(overlayType) {
        case 'html':
          //console.log('html');

          break;

        case 'youtube':
          if ( !window.nbastatYT ) {
            window.nbastatYT = {};
          }

          var ytData = window.nbastatYT;

          // call the YT iframe API
          insertScriptEl( YT_API );

          // YouTube API callback function - needs to be global level, thus window scope
          if ( !window.onYouTubeIframeAPIReady ){
            window.onYouTubeIframeAPIReady = function(){
              var $ytArray = $('body').find(ytSelector).not('iframe');

              $ytArray.each(function(){
                var $this = $(this)
                    , ytVid = undefined
                    , player_vars = {};

                  // pull in extra params and extend into ytVars if present on video element
                  if ( $this.attr('data-param') && $this.attr('data-param') !== '' ) {
                    var params = $this.attr('data-param').split('&'),
                        extra = {};

                    for ( var i=0; i<params.length;i++){
                      var pair = params[i].split('=');

                      extra[pair[0]] = pair[1];
                    }
                  }
                  player_vars = $.extend({}, ytVars, extra );

                  ytVid = new YT.Player($(this)[0], {
                      height: ytHeight
                    , width: ytWidth
                    , videoId: $(this).attr('data-video')
                    , origin : window.location.protocol + '//' + window.location.host
                    , playerVars : player_vars
                    , events: {
                        'onReady' : function(event){
                          event.target.setPlaybackQuality( player_vars['quality'] );
                        }
                      }
                  });

                ytData[$(this).attr('id')] = {
                  'player' : ytVid,
                  'src' : $(ytVid.getVideoEmbedCode())[0].src
                }
              });
            }
          }

          if (Modernizr.postmessage) {
            $revealEl.bind('click.yt', function(e){
              var vid = $(this).parents($slide).find(ytSelector).attr('id'),
                  ytObj = ytData[vid].player,
                  os = UAParser().os.name.toLowerCase();

              e.preventDefault();

              // ios/android don't play nice with programmatically playing the video
              if (os != 'ios' && os != 'android') {
                ytObj.addEventListener('onReady', function(){
                  ytObj.playVideo();
                });
              }
            });
            // pause the video on close of overlay
            $close.bind('click.yt', function(e) {
              var vid = $(this).parents($slide).find(ytSelector).attr('id'),
                  ytObj = ytData[vid].player,
                  ytSrc = ytData[vid].src,
                  os = UAParser().os.name.toLowerCase();

              e.preventDefault();

              if (os == 'ios') {
                var iframe = $(this).parent().find('iframe');
                iframe.attr('src', ytSrc);
              } else {
                ytObj.pauseVideo();
              }
            });
          }
          break;

        case 'vimeo':
          // check for vimeo API presence, if not, do an async insert of the js API
          if ( !window.Froogaloop ) {
            insertScriptEl( VIMEO_API );
          }

          var $video, vimeo_obj;

          // Play vimeo on reveal click
          $revealEl.bind('click.vimeo', function(e){
            $video = $overlay.find('iframe[src*="player.vimeo"]')[0];
            vimeo_obj = $f($video);

            e.preventDefault();
            vimeo_obj.addEvent('ready',function(){
              setTimeout(function(){
                vimeo_obj.api('play');
              }, 510);
            });
          });
          $close.bind('click.vimeo', function(e) {
            e.preventDefault();
            vimeo_obj.api('pause');
          });
          break;
      };

      // Expands the slider when '#video' is in the url on page load
      if ( autovid != '' && autovid == this.options.autoDisplay ){
        $(window).load(function(){
          setTimeout(function(){
            $revealEl.trigger('click');
          }, 250)
        });
      }

    };

    // Lightweight constructor, preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    }
})( jQuery, window, document );


/**
 * Twistage play button with JS API.
 */
(function ($) {
  $(document).ready(function(){

    // Check for presence.
    if ($('a.play-video-tile, a.play-video').length > 0) {

      // Add API script.
      $.when( async_script_load('//api.twistage.com/api/script') ).done(function() {

        // Attach play button behavior.
        $('a.play-video-tile, a.play-video').live('click',function(e) {
          var videoID = $(this).attr('rel'), // rel contains the video id field value (can be supplied in views).
            $videoObj;
          e.preventDefault();

          // Per twistage, this returns a <script> string with a src attribute that contains the params below
          // The twistage API documention at http://console.twistage.com/doc/faq/player_dynamic_javascript is
          // outdated and doesn't include the jsonp_variable key / value pair
          var twistageScript = getVideoViewer(videoID, {'server_detection': true, 'width': 850, 'height': 663, 'player_profile': '7-large', 'jsonp_variable': 'tab_vid_' + videoID });

          // GET the script and evaluate the video object in callback
          $.getScript($(twistageScript)[0].src,function() {
            $videoObj = $( eval('tab_vid_' + videoID) );

            $.colorbox({
              html: $videoObj,
              //iframe: true,
              width: 850,
              height: 663
            });

          });

        })

      });
    }
  });
})(jQuery);


/**
 * Twistage video embed fix
 *
 * This fixes a Twistage embed issue when used in a colorbox. The twistage embed uses a js <script>
 * for mobile detection and writes other script tags to document. However, these <script>s remain
 * in the inline <div>, so activating the inline-colorbox runs those scripts again, resulting
 * in a document.write on the whole page.
 *
 * Additionally, iOS devices have issues with colorbox + HTML5 video. Where the video only works
 * the first time it is loaded in a colorbox. Repopulating the src attr on the video on colorbox
 * complete callback fixes this.
 * http://stackoverflow.com/questions/14514271/html5-video-in-ipad-not-working-after-dom-changes
 */
(function ($) {
  var $vid_embed = $('.video-twistage');

  $(document).ready(function(){
    // if we have a video embed <div>
    if ( $vid_embed.length ) {
      $vid_embed.find('script.twistage-embed').remove();
    }

    // iOS devices
    if ( Tabia.mobileCheck('ios') ) {
      var $vidEl = $vid_embed.find('video');

      $(document).bind('cbox_complete', function(){
        var vid_src,
            $sources = $vid_embed.find('source');

        // in case there are multiple sources, loop through and find the iOS ones
        $sources.each(function(){
          if ( $(this)[0].type.match(/mp4|m4v|avc|quicktime/i) ) {
            vid_src = $(this)[0].src;
          }
        })

        $vidEl.attr('src',vid_src);
        //$vidEl[0].load();
      });
    }
  });
})(jQuery);


/**
 * Conditional mobile script. (Used for menus right now.)
 * Must be loaded late.
 */
(function ($) {
  Drupal.behaviors.ModernizedMobile = {
    attach: function (context, settings) {
      var isMobile = Tabia.mobileCheck();

      $(document).ready(function(){
        // Mobile only items...
        if (isMobile) {

          $('#block-menu-block-nbastat-menu-blocks-10 .navMain > .menu > li > a').bind('click', function(e) {
            $(this).parent().siblings('li').children('a').removeAttr('data-expanded');

            if($(this).attr('data-expanded') == undefined){
              $(this).attr('data-expanded', 'expanded');
              return (Tabia.mobileCheck('ios')) ? true : false;
            }
            else {
              $(this).removeAttr('data-expanded');
              return true;
            }
          });

        }
        // Desktop only items...
        else {

        }
      });
    }
  };
})(jQuery);


/**
 * Add OS attributes to trial/download links.
 *
 * Note to a future developer: Hey! Did you add another platform or OS here? You
 * probably also want to update a number of contexts tagged "Trial Confirmation
 * Variant."
 */
(function($) {
  Drupal.behaviors.osQueryParam = {
    attach: function(context, settings) {
      // If OS-based redirection is enabled, modify links.
      if (settings.nbastat_sitewide_tweaks.os_redirect) {
        var os = (UAParser().os.name !== undefined) ? UAParser().os.name.toLowerCase() : undefined;
        var isSpecial = function() {
          var path = window.location.pathname;
          return !(path.indexOf('products/server') === -1 &&
            path.indexOf('products/reader') === -1 &&
            path.indexOf('products/public') === -1 &&
            path.indexOf('products/online') === -1);
        };

        // When linking to a product download page, add a platform param.
        $('a[href*="desktop/download"], a[href*="reader/download"], a[href*="public/download"]').attr('href', function(i, val) {
          if (typeof os != 'undefined' && val.indexOf('os=') === -1) {
            if (val.indexOf('?') !== -1) {
              return val + '&os=' + encodeURIComponent(os);
            }
            else {
              return val + '?os=' + encodeURIComponent(os);
            }
          }

          return val;
        });

        // When on a mobile device, go directly to confirmation from trial links.
        // Avoid this special case when on a product page.
        $('a[href*="products/trial"]').attr('href', function(i, val) {
          if (typeof os != 'undefined' && val.indexOf('os=') === -1) {
            if (!isSpecial() && (os == 'ios' || os == 'android')) {
              val = val.replace('products/trial', 'products/desktop/download');
            }
            if (val.indexOf('?') !== -1) {
              return val + '&os=' + encodeURIComponent(os);
            }
            else {
              return val + '?os=' + encodeURIComponent(os);
            }
          }

          return val;
        });

        // Add user platform to reg form field.
        if ($('input[name="platform"]').length) {
          $('input[name="platform"]').val(os);
        }

      }
    }
  };
})(jQuery);


/**
 * IE8 specifc, force pseudo element re-layout for icon fonts.
 */
if(UAParser().browser.name === 'IE' && UAParser().browser.version == '8.0'){
  var head = document.getElementsByTagName('head')[0],
      style = document.createElement('style');
  style.type = 'text/css';
  style.styleSheet.cssText = ':before,:after{content:none !important';
  head.appendChild(style);
  setTimeout(function(){
      head.removeChild(style);
  }, 0);
}


/**
 * Fancy custom accordian setup.
 * TODO: Upgrade
 */
(function ($) {
  Drupal.behaviors.collapser = {
    attach: function (context, settings) {

      $("#steps .collapsible .step-content").css("display","none");
      $("#showAll").attr("checked", false);

      $("#showAll").click( function() {
        if( $("#showAll:checked").val() == null ) {
          $("#steps .collapsible .step-content").hide("slow");
          $("#steps .collapsible").removeClass("open");
        } else {
          $("#steps .collapsible .step-content").show("slow");
          $("#steps .collapsible").addClass("open");
        }
      });
      $("#steps .collapsible .header").click( function() {
        $(this).siblings(".step-content").toggle("slow");
        $(this).parent().toggleClass("open");
      });

    }
  };
})(jQuery);


/*
   References for slide toggle sideways, jquery default is vertical
   http://designreviver.com/tutorials/jquery-examples-horizontal-accordion/
   http://codingforums.com/showthread.php?t=157709
*/


/**
 * Video Autoplay.
 */
(function ($) {
    $(document).ready(function() {
        var autovid = window.location.hash;
        if (autovid != '') {
            if (autovid == '#video' && $('#video-autoplay').length != 0) {
                //$('#video-autoplay').css({visibility: "hidden", display: "block"});
                var vidwidth = $('#video-autoplay').width();
                var vidheight = $('#video-autoplay').height()+10;
                //$('#video-autoplay').css({visibility: "visible", display: "none"});
                $.fn.colorbox({width: vidwidth, height: vidheight, inline: true, href:"#video-autoplay"});
            }
        }
    });
})(jQuery);

/**
 * Find and prepare contact us form links for modal display. See the nbastat
 * Contact Form module for details.
 */
(function($) {
  // A function to open a contact form colorbox.
  var _open_contact_form = function(form) {
    // Language negotation logic.
    var _lang_prefix = '/' + Drupal.settings.pathPrefix;

    $.colorbox({
      href:_lang_prefix + 'about/contact/form/' + form,
      iframe:true,
      width:380,
      height:600,
      open:true
    });
  };

  // Check for a hash to auto-open a contact form.
  if (window.location.hash.indexOf('#contact_') == 0) {
    _open_contact_form(window.location.hash.substr(9));
  }

  // Check all links on click for the #contact_ hash.
  $('a').bind('click', function() {
    if (this.hash.indexOf('#contact_') == 0) {
      _open_contact_form(this.hash.substr(9));
    }
  });

  // Search for links of the following form; force them to open via colorbox.
  $('a[href*="/about/contact/form/"]').each(function() {
    $(this).click(function(e) {
      e.preventDefault();
      $.colorbox({
        href:e.target.href,
        iframe:true,
        width:380,
        height:600,
        open:true
      });
    });
  });
})(jQuery);


/**
 * Autofocus on fields that have the "autofocus" class.
 */
(function ($) {
  // Create a non-scrolling focus option.
  $.fn.focusWithoutScrolling = function() {
    // Much better than Skrillex.
    var x = (window.scrollX !== undefined) ? window.scrollX : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
        y = (window.scrollY !== undefined) ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    this.focus();

    // 1ms delay for IE
    setTimeout(function(){
      window.scrollTo(x, y);
    },1);
  };
})(jQuery);

(function ($) {
  // Check for any visible autofocused fields.
  // NOTE: Also included in reg form popup.
  if ($(".autofocus:visible").length > 0) {
    // Vizes steal focus after they load so if the page has a viz, we wait for
    // it to load before adding focus. This is only a catch-most. :(
    if (typeof window.nbastat != 'undefined') {
        setTimeout(function(){
                $(".autofocus:visible").last().focusWithoutScrolling();
            }, 3000
        );
    }
    else{
        $(".autofocus:visible").last().focusWithoutScrolling();
    }
  }
})(jQuery);


/**
 * Smooth scroll machine.
 *
 * To smooth scroll to another position on the page, create a link with a class
 * of 'smooth-scroll' and set the href to be the target (#top, an element's ID,
 * or an anchor link's 'name' attribute).
 */
(function ($) {
  var $html = $('html'),
      $body = $('body'),
      $scroll = ($.browser.msie || $.browser.mozilla || $.browser.opera) ? $html : $body;

  $('a.smooth-scroll').click(function(e) {
    var element = $(this).attr('href');
    // Check first if we're targeting the page top, then if an element with
    // matching ID exists, and finally if an anchor with a matching name exists
    if (element == '#top') {
      var $target = $('#skip-link');
    } else if ($(element).length > 0){
      var $target = $(element);
    } else if ($('a[name="' + element.substr(1) + '"]').length > 0) {
      var target = $('a[name="' + element.substr(1) + '"]');
    }
    // Make sure there is a target to go to
    if (typeof $target === 'object') {
      $scroll.animate({scrollTop: $target.offset().top}, 500);
    }
    e.preventDefault();
  });
})(jQuery);


/**
 * Prevent premature search form submissions.
 */
(function ($) {
  $('#google-appliance-block-form, #google-appliance-block-form--2').submit(function(e) {
    if ($(this).find('input[name="search_keys"]').val().length == 0) {
      e.preventDefault();
      return false;
    }
  });
  $('#google-appliance-block-form input, #google-appliance-block-form--2 input').bind('keypress keydown keyup', function(e) {
    if (e.which == 13) {
      if ($(this).val().length == 0) {
        e.stopImmediatePropagation();
        return false;
      }
    }
  });
})(jQuery);


/**
 * Custom Colorbox implementation that doesn't require query params. Target link
 * must have class of "colorbox-custom-inline" and data- attributes for width,
 * height, and content which is the wrapper ID of the content to be loaded.
 */
(function ($) {
  $(document).ready(function(){
    if($('.colorbox-custom-inline').length) {
      $('.colorbox-custom-inline').colorbox({
        inline: true,
        width: function(){ return $(this).attr('data-width');},
        height: function(){ return $(this).attr('data-height');},
        href: function(){ return '#' + $(this).attr('data-content');}
      });
    }

    // re: #2816, Adding a pop tab solution for solution pages.
    if ($('.node-type-page-solution').length) {
      var param = getURLParameter('tabpop');
      if (param !== null) {
        var ind = parseInt(param)-1;
        $('.ui-tabs-panel').eq(ind).find('a[class^="colorbox"]').trigger('click');
      }
    }
  });
})(jQuery);


/**
 * Touch interaction for views_slideshows
 */
(function( $ ) {
  $(document).ready(function(){
    if ( Tabia.mobileCheck() && $('.views-slideshow-cycle-main-frame').length ) {
      var $slider = $('.views-slideshow-cycle-main-frame')
          , opts = {
            start: {x: 0, y: 0},
            end: {x: 0, y: 0},
            hdiff: 0,
            vdiff: 0,
            length: 0,
            angle: null,
            direction: null
          }
          , optsReset = $.extend(true, {}, opts)
          , H_THRESHOLD =  110 // roughly one inch effective resolution on ipad
          , V_THRESHOLD = 50;

      $slider.each(function(){
        $(this).data('bw', opts)
          .bind('touchstart.cycle', function (e) {
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

            if ( e.originalEvent.touches.length == 1 ) {
              var data = $(this).data('bw');

              data.start.x = touch.pageX;
              data.start.y = touch.pageY;
              $(this).data('bw', data);
              //e.preventDefault();
            }
          })
          .bind('touchend.cycle', function (e) {
              var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
              var data = $(this).data('bw');

              data.end.x = touch.pageX;
              data.end.y = touch.pageY;
              $(this).data('bw', data);

              if ( data.start.x != 0 && data.start.y != 0 ) {
                data.vdiff = data.start.x - data.end.x;
                data.hdiff = data.end.y - data.start.y;

                if ( Math.abs(data.vdiff) == data.start.x && Math.abs(data.hdiff) == data.start.y ){
                  data.vdiff = 0;
                  data.hdiff = 0;
                }

                var length = Math.round(Math.sqrt(Math.pow(data.vdiff,2) + Math.pow(data.hdiff,2)));
                var rads = Math.atan2(data.hdiff, data.vdiff);
                var angle = Math.round(rads*180/Math.PI);

                if ( angle < 0 ) { angle = 360 - Math.abs(angle); }

                if (length > H_THRESHOLD && V_THRESHOLD > data.hdiff ) {
                  e.preventDefault();
                  $(this).find('.close').trigger('click');
                  if (angle > 135 && angle < 225) {
                    var cyopt = $slider.data('cycle.opts');
                    if (cyopt.currSlide > 0) {
                      $(this).cycle((cyopt.currSlide - 1), 'scrollRight');
                    }
                    else {
                       $(this).cycle((cyopt.slideCount - 1), 'scrollRight');
                    }
                  }
                  else if (angle > 315 || angle < 45) {
                    $(this).cycle('next');
                  }
                }
              }

            data = $.extend(true, {}, optsReset);
          });


      })
    }
  });
})( jQuery );


/**
 * Async tracking of fonts usage from fonts.com.
 */
(function($) {
  var MTIProjectId='9d450c16-aa24-4a0c-8612-02551cfbe308';
  $(window).bind('load',function(){
    $.get('//fast.fonts.com/t/1.css?apiType=css&projectid=' + MTIProjectId);
  });
})(jQuery);


/**
 * Ad-hoc slideshow from markup alone.
 */
(function ($) {
  $(function() {
    var ssObj = $('.adhoc-slideshow');

    if(ssObj.length){
      // Grab the jQuery cycle plugin and cache it.
      $.ajax({
        url: '/sites/all/libraries/jquery.cycle/jquery.cycle.all.min.js',
        cache: true
      })
      .done(function(script, textStatus) {
        ssObj.each(function(){
          var $this = $(this),
              $container = $this.find('.container'),
              speed = 5000;

          // Make controls if need be.
          if ($this.attr('data-controls')){
            $this.after('<div class="adhoc-slideshow-pager"></div>');
            $this.prepend('<a class="controls-prev"></a><a class="controls-next"></a>');
          }

          // Override the slide speed if set.
          if ($this.attr('data-speed')){
            speed = parseInt($this.attr('data-speed'));
          }

          $container.cycle({
            fx: 'scrollHorz',
            timeout: speed,
            slideExpr:  $this.find('.slide'),
            pager: $this.next('.adhoc-slideshow-pager'),
            pause: 0,
            pauseOnPagerHover: 0,
            prev: $this.find('.controls-prev'),
            next: $this.find('.controls-next')
          });
        });
      })
      .fail(function(jqxhr, settings, exception) {
        console.log('nope');
      });
    }
  });
})(jQuery);


/**
 * Custom setup for the language_dropdown_reminder banner to make sure it
 * doesn't overlap anything and plays nicely with admin bars and such.
 */
(function( $ ) {
  if (Drupal.settings.lang_dropdown_remind !== undefined) {
    $(Drupal.settings.lang_dropdown_remind.prependto).bind('lang_dropdown_remind_ready', function(){
      var $reminder = $('#langdropdown-reminder');
      var $body = $('body');
      var push = parseInt($body.css('margin-top'));
      var bodyStyle = $body.attr('style');
      // If we have an admin menu, remove position: fixed
      if (push > 0) {
        $reminder.css('position', 'absolute');
        $reminder.css('top', push);
      }
      $body.animate({
        paddingTop: "+=" + $reminder.height()
      }, 400);
      $('#langdropdown-reminder-close').click(function() {
        $body.animate({
          paddingTop: "-=" + $reminder.height()
        }, 400);
      });
    });
  }
})(jQuery);


/**
 * Utility Functions...
 */

// Write script tag to DOM. NOTE: Appropraite when you know the page has already loaded.
function async_script_load(src) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g, '%20'))||null
}

/**
 * Handle URLs in JS.
 * This does not depend on jQuery so it is not namespaced.
 */
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
      source: url,
      protocol: a.protocol.replace(':',''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function(){
          var ret = {},
        seg = a.search.replace(/^\?/,'').split('&'),
        len = seg.length, i = 0, s;
          for (;i<len;i++) {
        if (!seg[i]) { continue; }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
          }
          return ret;
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
      hash: a.hash.replace('#',''),
      path: a.pathname.replace(/^([^\/])/,'/$1'),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
      segments: a.pathname.replace(/^\//,'').split('/')
    };
}

/**
 * Added for use in nbastat_lite_carousel.
 * http://phpjs.org/functions/is_numeric
 */
function is_numeric (mixed_var) {
 return (typeof(mixed_var) === 'number' || typeof(mixed_var) === 'string') && mixed_var !== '' && !isNaN(mixed_var);
}

/**
 * Borrowing Google's async js for inserting js libraries.
 */
function insertScriptEl(script_uri) {
  var tag = document.createElement('script'),
      firstScriptTag = document.getElementsByTagName('script')[0];

  tag.src = script_uri;
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function quick_hash(s){
  var n;
  if (typeof(s) == 'number' && s === parseInt(s, 10)){
    s = Array(s + 1).join('x');
  }
  return s.replace(/x/g, function(){
    var n = Math.round(Math.random() * 61) + 48;
    n = n > 57 ? (n + 7 > 90 ? n + 13 : n + 7) : n;
    return String.fromCharCode(n);
  });
}
;
