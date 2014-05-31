/**
 * Global function to parse and return Demandbase data.
 */
var demandbaseParseData = function(data) {
  // Here's a map of industry names to industry tnids
  var industry_array = new Array();
  industry_array["Aerospace & Defense"] = 1600;
  industry_array["Agriculture & Mining"] = 1601;
  industry_array["Associations & Non-profits"] = 1602;
  industry_array["Automotive"] = 1366;
  industry_array["Banking & Finance"] = 1606;
  industry_array["Construction"] = 1603;
  industry_array["Food & Beverage"] = 1604;
  industry_array["Hardware"] = 1605;
  industry_array["Media, Entertainment & Publishing"] = 1607;
  industry_array["Business Services"] = 1367;
  industry_array["Consumer Goods & Services"] = 249;
  industry_array["Education"] = 283;
  industry_array["Government"] = 273;
  industry_array["Healthcare & Medical"] = 254;
  industry_array["Software & Technology"] = 272;
  industry_array["Insurance"] = 400;
  industry_array["Manufacturing"] = 1372;
  industry_array["Energy & Utilities"] = 432;
  industry_array["Retail & Distribution"] = 256;
  industry_array["Pharmaceuticals & Biotech"] = 611;
  industry_array["Investment Services"] = 311;
  industry_array["Telecommunications"] = 1371;
  industry_array["Transportation & Logistics"] = 1361;
  industry_array["Travel & Hospitality"] = 1370;
  industry_array["Other"] = 1369;

  var db_return = new Object;

  db_return["organization"] = data.company_name ? data.company_name : data.registry_company_name;
  db_return["industry"] = data.industry;
  db_return["industry_tnid"] = industry_array[data.industry];
  db_return["sub_industry"] = data.sub_industry;
  db_return["employee_count"] = data.employee_count;
  db_return["annual_sales"] = data.annual_sales;
  db_return["primary_sic"] = data.primary_sic;
  db_return["web_site"] = data.web_site;
  db_return["state"] = data.state ? data.state : data.registry_state;
  db_return["country"] = data.country ? data.country : data.registry_country_code;
  db_return["zip"] = data.zip;

  return db_return;
};

/**
 * Global function to alter reg. form based on Demandbase data.
 */
var demandbaseApplyData = function(data, user_facing, geo_only) {
  // Default args.
  user_facing = typeof user_facing !== 'undefined' ? user_facing : false;
  geo_only = typeof geo_only !== 'undefined' ? geo_only : false;

  (function ($) {
    // Clear hidden fields each time we get new data.
    $('input#edit-db-industry').val();
    $('input#edit-db-industry').val();
    $('input#edit-db-sub-industry').val();
    $('input#edit-db-employee-count').val();
    $('input#edit-db-annual-sales').val();
    $('input#edit-db-sic').val();
    $('input#edit-db-web-site').val();
    $('input#edit-db-state').val();
    $('input#edit-db-country').val();
    $('input#edit-db-zip').val();

    // Update the hidden fields we provide.
    // Allow just geo-fields for testing accuracy of IP-only based matching.
    if (!geo_only) {
      if (data["industry"]) {$('input#edit-db-industry').val(data["industry"]);}
      if (data["sub_industry"]) {$('input#edit-db-sub-industry').val(data["sub_industry"]);}
      if (data["employee_count"]) {$('input#edit-db-employee-count').val(data["employee_count"]);}
      if (data["annual_sales"]) {$('input#edit-db-annual-sales').val(data["annual_sales"]);}
      if (data["primary_sic"]) {$('input#edit-db-sic').val(data["primary_sic"]);}
      if (data["web_site"]) {$('input#edit-db-web-site').val(data["web_site"]);}
    }
    if (data["state"]) {$('input#edit-db-state').val(data["state"]);}
    if (data["country"]) {$('input#edit-db-country').val(data["country"]);}
    if (data["zip"]) {$('input#edit-db-zip').val(data["zip"]);}

    // Update user-facing fields, if necessary.
    if (user_facing) {
      if (!geo_only) {
        if (data["organization"]) {$('#edit-profile-about-you-field-profile-organization-und-0-value').val(data["organization"]);}
        // Update industry first, no dependency on addressfield.
        if ($("#edit-profile-about-you-taxonomy-vocabulary-4-und option[value='" + data["industry_tnid"] + "']").length > 0) {
          $('select#edit-profile-about-you-taxonomy-vocabulary-4-und').val(data["industry_tnid"]);
          $("select#edit-profile-about-you-taxonomy-vocabulary-4-und option[value='" + data["industry_tnid"] + "']").attr('selected','selected');
        }
      }
      // Only update country if it differs from the current value (Addressfield).
      var db_change_timeout = 0;
      if (data["country"] != $('#edit-profile-about-you-field-profile-address-und-0-country').val() && data["country"]+'*' != $('#edit-profile-about-you-field-profile-address-und-0-country').val()) {
        $('#edit-profile-about-you-field-profile-address-und-0-country').val(data["country"]).change();
        $("select#edit-profile-about-you-field-profile-address-und-0-country option[value='" + data["country"] + "']").attr('selected','selected');
        db_change_timeout = 1500;
      }
      // If we're changing countries from what's displayed, wait for addressfield.
      setTimeout(function() {
        // Location fields.
        $('#edit-profile-about-you-field-profile-address-und-0-administrative-area').val(data["state"]);
        $("#edit-profile-about-you-field-profile-address-und-0-administrative-area option[value='" + data["state"] + "']").attr('selected','selected');
        $('#edit-profile-about-you-field-profile-address-und-0-postal-code').val(data["zip"]);
      }, db_change_timeout);
    }
  })(jQuery);
};
;
(function ($) {
  Drupal.behaviors.nbastat_demandbase_integration = {
    attach: function(context, settings) {
      // Only run this once so that autocomplete based data can overwrite it.
      // @todo, should/could poll for DB results.
      if (typeof this.first == 'undefined') {
        if (typeof db_company !== 'undefined' && !db_company.isp) {
          db_source = 'ip';
          // Determine and apply values to the reg form.
          demandbaseApplyData(demandbaseParseData(db_company), true, false);
        }
        else if (typeof db_company !== 'undefined' && db_company.isp) {
          db_source = 'ip_isp';
          // Apply just geo data for ISP-based reg values.
          demandbaseApplyData(demandbaseParseData(db_company), false, true);
        }
        else {
          db_source = '';
        }
        this.first = false;
      }
    }
  }
})(jQuery);
;
﻿/**
 * @preserve hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 *
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne <brian@cherne.net>
 */
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;
/**
 * Make sure main nav dropdowns don't display prematurely.
 */
Drupal.behaviors.nbastatMenu = {
  attach: function() {
    (function ($) {
      $(document).ready(function(){
        $.when(Tabia.nbastat_ajax_menu).done(function(){
          // Grab settings from admin config page: admin/config/user-interface/nbastat-menu-blocks
          var sensitivity = Drupal.settings.nbastat_menu_blocks.hoverintent_sensitivity,
              interval = Drupal.settings.nbastat_menu_blocks.hoverintent_interval,
              timeout = Drupal.settings.nbastat_menu_blocks.hoverintent_timeout,
              effect = Drupal.settings.nbastat_menu_blocks.dropdown_effect,
              effectTime = parseInt(Drupal.settings.nbastat_menu_blocks.dropdown_effect_time);

          if (!Tabia.mobileCheck('ios')) {
            var hoverSettings = {
                over: hover,
                out: hover,
                sensitivity: sensitivity,
                interval: interval,
                timeout: timeout
              }
            $('#block-menu-block-nbastat-menu-blocks-10 .navMain').addClass('hoverintent');
            $('#block-menu-block-nbastat-menu-blocks-10 .navMain > ul.menu > li').hoverIntent(hoverSettings);
          }
          function hover(event) {
            switch (effect) {
              case "fade":
                $(this).find("ul.menu").fadeToggle(effectTime);
                break;
              case "slide":
                $(this).find("ul.menu").slideToggle(effectTime);
                break;
              case "none":
                $(this).find("ul.menu").toggle();
            }
          }
        });
      });
    })(jQuery);
  }
}
;
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
