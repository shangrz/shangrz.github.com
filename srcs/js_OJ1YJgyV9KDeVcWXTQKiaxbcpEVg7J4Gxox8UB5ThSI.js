
/**
 * jQuery Once Plugin v1.2
 * http://plugins.jquery.com/project/once
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function ($) {
  var cache = {}, uuid = 0;
 
  $.fn.once = function (id, fn) {
    if (typeof id != 'string') {
      // Generate a numeric ID if the id passed can't be used as a CSS class.
      if (!(id in cache)) {
        cache[id] = ++uuid;
      }
      // When the fn parameter is not passed, we interpret it from the id.
      if (!fn) {
        fn = id;
      }
      id = 'jquery-once-' + cache[id];
    }
    // Remove elements from the set that have already been processed.
    var name = id + '-processed';
    var elements = this.not('.' + name).addClass(name);

    return $.isFunction(fn) ? elements.each(fn) : elements;
  };

  /**
   * Filters elements that have been processed once already.
   *
   * @param id
   *   A required string representing the name of the class which should be used
   *   when filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   */
  $.fn.removeOnce = function (id, fn) {
    var name = id + '-processed';
    var elements = this.filter('.' + name).removeClass(name);

    return $.isFunction(fn) ? elements.each(fn) : elements;
  };
})(jQuery);
;
/** Underscore.js 1.5.2
 * http://underscorejs.org
 * @license (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 */
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n"," ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
;
/**
 * @license Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-boxshadow-textshadow-cssgradients-cssreflections-csstransforms-video-input-inputtypes-postmessage-geolocation-svg-touch-mq-cssclasses-addtest-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.backgroundsize=function(){return I("backgroundSize")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'locale': {} };

// Allow other JavaScript libraries to use $.
jQuery.noConflict();

(function ($) {

/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See http://bugs.jquery.com/ticket/9521
 */
var jquery_init = $.fn.init;
$.fn.init = function (selector, context, rootjQuery) {
  // If the string contains a "#" before a "<", treat it as invalid HTML.
  if (selector && typeof selector === 'string') {
    var hash_position = selector.indexOf('#');
    if (hash_position >= 0) {
      var bracket_position = selector.indexOf('<');
      if (bracket_position > hash_position) {
        throw 'Syntax error, unrecognized expression: ' + selector;
      }
    }
  }
  return jquery_init.call(this, selector, context, rootjQuery);
};
$.fn.init.prototype = jquery_init.prototype;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-JavaScript UIs. Behaviors are registered in the Drupal.behaviors
 * object using the method 'attach' and optionally also 'detach' as follows:
 * @code
 *    Drupal.behaviors.behaviorName = {
 *      attach: function (context, settings) {
 *        ...
 *      },
 *      detach: function (context, settings, trigger) {
 *        ...
 *      }
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/Ajax in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use
 * @code
 *   $(selector).once('behavior-name', function () {
 *     ...
 *   });
 * @endcode
 * to ensure the behavior is attached only once to a given element. (Doing so
 * enables the reprocessing of given elements, which may be needed on occasion
 * despite the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 * @param settings
 *   An object containing settings for the current context. If none given, the
 *   global Drupal.settings object is used.
 */
Drupal.attachBehaviors = function (context, settings) {
  context = context || document;
  settings = settings || Drupal.settings;
  // Execute all of them.
  $.each(Drupal.behaviors, function () {
    if ($.isFunction(this.attach)) {
      this.attach(context, settings);
    }
  });
};

/**
 * Detach registered behaviors from a page element.
 *
 * Developers implementing AHAH/Ajax in their solutions should call this
 * function before page content is about to be removed, feeding in an element
 * to be processed, in order to allow special behaviors to detach from the
 * content.
 *
 * Such implementations should look for the class name that was added in their
 * corresponding Drupal.behaviors.behaviorName.attach implementation, i.e.
 * behaviorName-processed, to ensure the behavior is detached only from
 * previously processed elements.
 *
 * @param context
 *   An element to detach behaviors from. If none is given, the document element
 *   is used.
 * @param settings
 *   An object containing settings for the current context. If none given, the
 *   global Drupal.settings object is used.
 * @param trigger
 *   A string containing what's causing the behaviors to be detached. The
 *   possible triggers are:
 *   - unload: (default) The context element is being removed from the DOM.
 *   - move: The element is about to be moved within the DOM (for example,
 *     during a tabledrag row swap). After the move is completed,
 *     Drupal.attachBehaviors() is called, so that the behavior can undo
 *     whatever it did in response to the move. Many behaviors won't need to
 *     do anything simply in response to the element being moved, but because
 *     IFRAME elements reload their "src" when being moved within the DOM,
 *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
 *     take some action.
 *   - serialize: When an Ajax form is submitted, this is called with the
 *     form as the context. This provides every behavior within the form an
 *     opportunity to ensure that the field elements have correct content
 *     in them before the form is serialized. The canonical use-case is so
 *     that WYSIWYG editors can update the hidden textarea to which they are
 *     bound.
 *
 * @see Drupal.attachBehaviors
 */
Drupal.detachBehaviors = function (context, settings, trigger) {
  context = context || document;
  settings = settings || Drupal.settings;
  trigger = trigger || 'unload';
  // Execute all of them.
  $.each(Drupal.behaviors, function () {
    if ($.isFunction(this.detach)) {
      this.detach(context, settings, trigger);
    }
  });
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 *
 * @ingroup sanitization
 */
Drupal.checkPlain = function (str) {
  var character, regex,
      replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  str = String(str);
  for (character in replace) {
    if (replace.hasOwnProperty(character)) {
      regex = new RegExp(character, 'g');
      str = str.replace(regex, replace[character]);
    }
  }
  return str;
};

/**
 * Replace placeholders with sanitized values in a string.
 *
 * @param str
 *   A string with placeholders.
 * @param args
 *   An object of replacements pairs to make. Incidences of any key in this
 *   array are replaced with the corresponding value. Based on the first
 *   character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *
 * @see Drupal.t()
 * @ingroup sanitization
 */
Drupal.formatString = function(str, args) {
  // Transform arguments before inserting them.
  for (var key in args) {
    switch (key.charAt(0)) {
      // Escaped only.
      case '@':
        args[key] = Drupal.checkPlain(args[key]);
      break;
      // Pass-through.
      case '!':
        break;
      // Escaped and placeholder.
      case '%':
      default:
        args[key] = Drupal.theme('placeholder', args[key]);
        break;
    }
    str = str.replace(key, args[key]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   See Drupal.formatString().
 *
 * @param options
 *   - 'context' (defaults to the empty context): The context the source string
 *     belongs to.
 *
 * @return
 *   The translated string.
 */
Drupal.t = function (str, args, options) {
  options = options || {};
  options.context = options.context || '';

  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[options.context] && Drupal.locale.strings[options.context][str]) {
    str = Drupal.locale.strings[options.context][str];
  }

  if (args) {
    str = Drupal.formatString(str, args);
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   See Drupal.formatString().
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @param options
 *   The options to pass to the Drupal.t() function.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function (count, singular, plural, args, options) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args, options);
  }
  else if (index == 1) {
    return Drupal.t(plural, args, options);
  }
  else {
    args['@count[' + index + ']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count[' + index + ']'), args, options);
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML for text that should be emphasized and
 * displayed as a placeholder inside a sentence, call
 * Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function (func) {
  var args = Array.prototype.slice.apply(arguments, [1]);

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  $('<div id="freeze-height"></div>').css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).appendTo('body');
};

/**
 * Unfreeze the body height.
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Encodes a Drupal path for use in a URL.
 *
 * For aesthetic reasons slashes are not escaped.
 */
Drupal.encodePath = function (item, uri) {
  uri = uri || location.href;
  return encodeURIComponent(item).replace(/%2F/g, '/');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof element.selectionStart != 'number' && document.selection) {
    // The current selection.
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from an Ajax response.
 */
Drupal.ajaxError = function (xmlhttp, uri) {
  var statusCode, statusText, pathText, responseText, readyStateText, message;
  if (xmlhttp.status) {
    statusCode = "\n" + Drupal.t("An AJAX HTTP error occurred.") +  "\n" + Drupal.t("HTTP Result Code: !status", {'!status': xmlhttp.status});
  }
  else {
    statusCode = "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");
  }
  statusCode += "\n" + Drupal.t("Debugging information follows.");
  pathText = "\n" + Drupal.t("Path: !uri", {'!uri': uri} );
  statusText = '';
  // In some cases, when statusCode == 0, xmlhttp.statusText may not be defined.
  // Unfortunately, testing for it with typeof, etc, doesn't seem to catch that
  // and the test causes an exception. So we need to catch the exception here.
  try {
    statusText = "\n" + Drupal.t("StatusText: !statusText", {'!statusText': $.trim(xmlhttp.statusText)});
  }
  catch (e) {}

  responseText = '';
  // Again, we don't have a way to know for sure whether accessing
  // xmlhttp.responseText is going to throw an exception. So we'll catch it.
  try {
    responseText = "\n" + Drupal.t("ResponseText: !responseText", {'!responseText': $.trim(xmlhttp.responseText) } );
  } catch (e) {}

  // Make the responseText more readable by stripping HTML tags and newlines.
  responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");
  responseText = responseText.replace(/[\n]+\s+/g,"\n");

  // We don't need readyState except for status == 0.
  readyStateText = xmlhttp.status == 0 ? ("\n" + Drupal.t("ReadyState: !readyState", {'!readyState': xmlhttp.readyState})) : "";

  message = statusCode + pathText + statusText + responseText + readyStateText;
  return message;
};

// Class indicating that JS is enabled; used for styling purpose.
$('html').addClass('js');

// 'js enabled' cookie.
document.cookie = 'has_js=1; path=/';

/**
 * Additions to jQuery.support.
 */
$(function () {
  /**
   * Boolean indicating whether or not position:fixed is supported.
   */
  if (jQuery.support.positionFixed === undefined) {
    var el = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
    jQuery.support.positionFixed = el[0].offsetTop === 10;
    el.remove();
  }
});

//Attach all behaviors.
$(function () {
  Drupal.attachBehaviors(document, Drupal.settings);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  }
};

})(jQuery);
;
// ColorBox v1.3.19 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php

/**
 * ColorBox v1.3.19 - jQuery lightbox plugin
 * (c) 2011 Jack Moore - jacklmoore.com
 * @license License: http://www.opensource.org/licenses/mit-license.php
 */
(function(a,b,c){function Z(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function $(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function _(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function ba(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function bb(){var b;K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function bc(b,c){a.event.trigger(b),c&&c.call(P)}function bd(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(K.loop||y[Q+1])a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function be(b){U||(P=b,bb(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1)),S||(S=T=!0,r.show(),K.returnFocus&&a(P).blur().one(l,function(){a(this).focus()}),q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=_(K.initialWidth,"x"),K.h=_(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),bc(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()),W.load(!0))}function bf(){!r&&b.body&&(Y=!1,z=a(c),r=Z(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}).hide(),q=Z(X,"Overlay",o?"position:absolute":"").hide(),s=Z(X,"Wrapper"),t=Z(X,"Content").append(A=Z(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Z(X,"LoadingOverlay").add(Z(X,"LoadingGraphic")),D=Z(X,"Title"),E=Z(X,"Current"),G=Z(X,"Next"),H=Z(X,"Previous"),F=Z(X,"Slideshow").bind(h,bd),I=Z(X,"Close")),s.append(Z(X).append(Z(X,"TopLeft"),u=Z(X,"TopCenter"),Z(X,"TopRight")),Z(X,!1,"clear:left").append(v=Z(X,"MiddleLeft"),t,w=Z(X,"MiddleRight")),Z(X,!1,"clear:left").append(Z(X,"BottomLeft"),x=Z(X,"BottomCenter"),Z(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Z(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function bg(){return r?(Y||(Y=!0,L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))}),a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),be(this))})),!0):!1}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=!a.support.opacity&&!a.support.style,o=n&&!c.XMLHttpRequest,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div",Y;if(a.colorbox)return;a(bf),W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},bf();if(bg()){if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b))}).addClass(g),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&be(f[0])}return f},W.position=function(a,b){function i(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset(),g=z.scrollTop(),h=z.scrollLeft();z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),K.fixed&&!o?(e.top-=g,e.left-=h,r.css({position:"fixed"})):(c=g,d=h,r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-_(K.right,"x"),0):K.left!==!1?d+=_(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-_(K.bottom,"y"),0):K.top!==!1?c+=_(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){i(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+f,W.position)},1),b&&b()},step:function(){i(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=_(a.width,"x")-O-M),a.innerWidth&&(K.w=_(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=_(a.height,"y")-N-L),a.innerHeight&&(K.h=_(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Z(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function q(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p;if(!S)return;l=function(){clearTimeout(V),C.hide(),bc(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[$(-1),$(1)];while(c=y[b.pop()])o=a.data(c,e).href||c.href,a.isFunction(o)&&(o=o.call(c)),ba(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Z("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,q):q()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||bb(),bc(m),bc(i,K.onLoad),K.h=K.height?_(K.height,"y")-N-L:K.innerHeight&&_(K.innerHeight,"y"),K.w=K.width?_(K.width,"x")-O-M:K.innerWidth&&_(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=_(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=_(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Z(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):ba(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Z(X,"Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Z(X,"Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=$(1),W.load())},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=$(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,bc(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),bc(m),A.remove(),setTimeout(function(){U=!1,bc(l,K.onClosed)},1)}))},W.remove=function(){a([]).add(r).add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g).die()},W.element=function(){return a(P)},W.settings=d})(jQuery,document,this);
;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('a, area, input', context)
      .filter('.colorbox')
      .once('init-colorbox-processed')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxStockholmsyndromeStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_open', function () {
      // Hide close button initially.
      $('#cboxClose', context).css('opacity', 0);
    });
    $(document).bind('cbox_load', function () {
      // Hide close button. (It doesn't handle the load animation well.)
      $('#cboxClose', context).css('opacity', 0);
    });
    $(document).bind('cbox_complete', function () {
      // Show close button with a delay.
      $('#cboxClose', context).fadeTo('fast', 0, function () {$(this).css('opacity', 1)});
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('a, area, input', context)
      .filter('.colorbox-load')
      .once('init-colorbox-load-processed', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxInline = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParam = function(name, url){
      if (name == 'fragment') {
        var results = new RegExp('(#[^&#]*)').exec(url);
      }
      else {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      }
      if (!results) { return ''; }
      return results[1] || '';
    };
    $('a, area, input', context).filter('.colorbox-inline').once('init-colorbox-inline-processed').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
      innerWidth:function(){
        return $.urlParam('width', $(this).attr('href'));
      },
      innerHeight:function(){
        return $.urlParam('height', $(this).attr('href'));
      },
      title:function(){
        return decodeURIComponent($.urlParam('title', $(this).attr('href')));
      },
      iframe:function(){
        return $.urlParam('iframe', $(this).attr('href'));
      },
      inline:function(){
        return $.urlParam('inline', $(this).attr('href'));
      },
      href:function(){
        return $.urlParam('fragment', $(this).attr('href'));
      }
    });
  }
};

})(jQuery);
;
/**
 * Defer image load magic that replaces the placeholder markup with the actual
 * image either on wondow load or document ready based on configuration.
 */
(function ($) {
  // Decide whether to use window load or document ready
  $(document).ready(function(){
    if (Drupal.settings.deferImage != undefined) {
      if (Drupal.settings.deferImage.deferTiming == 'load') {
        $(window).load(function() {
          loadImages();
        });
      } else {
        loadImages();
      }
    }
  });

  // Creates an image element with all attributes passed from the placeholder
  // element.
  function loadImages() {
    var defer_class = '.' + Drupal.settings.deferImage.deferClass,
        $defer_img = $(defer_class);
    if ($defer_img.length) {
      $defer_img.each(function(){
        var $this = $(this),
            src = $(this).data('defer-src'),
            attrs = 'src="' + src + '" ';
        $.each($this.data(), function(index, value) {
          if (index.indexOf('defer-') != -1) {
            attrs += index.replace('defer-', '') + '="' + value + '" ';
          }
        });
        $this.removeClass(defer_class).html('<img ' + attrs + '/>');
      });
    }
  }
})(jQuery);
;
/**
 * Either returns or acts on user browser language preference, depending on what
 * parameters are passed.
 *
 * @param mixed async
 *   If a callable is passed, the callable will be called when a browser's
 *   language preference is determined, with the language preference as its only
 *   argument. Nothing will be returned. If a boolean false is passed, the check
 *   for language preference will be performed synchronously and the result
 *   returned.
 * @return
 *   If called with async=false, the language preference will be returned.
 *   Otherwise,
 */
Drupal.getLanguagePreference = function (async) {
  var preference = '';
  var from_cookie = (function() {
    var parts = document.cookie.split('langPref=');
    return parts.length == 2 ? parts.pop().split(';').shift() : '';
  })();

  // Only perform the HTTP request if the value isn't already known.
  if (!from_cookie) {
    // Perform a request for parsed accept-language header data.
    var ajaxAsync = (typeof async === 'boolean') ? async : true;
    jQuery.ajax({
      url: Drupal.settings.getLanguagePreferencePath,
      async: ajaxAsync,
      success: function (data) {
        preference = data[1] || 'und';

        // Store the language preference in a cookie to minimize requests.
        document.cookie = 'langPref=' + preference + '; path=/';

        // Call the callback with the language preference.
        if (typeof async === 'function') {
          async(preference);
        }
      }
    });
  }
  else {
    // If we already have the value, just call the callback.
    if (typeof async === 'function') {
      async(from_cookie);
    }
  }

  // Only return a value if this method was intended to be called synchronously.
  if (typeof async === 'boolean' && !async) {
    return preference || from_cookie;
  }
};
;
jQuery.url=function(){var segments={};var parsed={};var options={url:window.location,strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var parseUri=function(){str=decodeURI(options.url);var m=options.parser[options.strictMode?"strict":"loose"].exec(str);var uri={};var i=14;while(i--){uri[options.key[i]]=m[i]||""}uri[options.q.name]={};uri[options.key[12]].replace(options.q.parser,function($0,$1,$2){if($1){uri[options.q.name][$1]=$2}});return uri};var key=function(key){if(!parsed.length){setUp()}if(key=="base"){if(parsed.port!==null&&parsed.port!==""){return parsed.protocol+"://"+parsed.host+":"+parsed.port+"/"}else{return parsed.protocol+"://"+parsed.host+"/"}}return(parsed[key]==="")?null:parsed[key]};var param=function(item){if(!parsed.length){setUp()}return(parsed.queryKey[item]===null)?null:parsed.queryKey[item]};var setUp=function(){parsed=parseUri();getSegments()};var getSegments=function(){var p=parsed.path;segments=[];segments=parsed.path.length==1?{}:(p.charAt(p.length-1)=="/"?p.substring(1,p.length-1):path=p.substring(1)).split("/")};return{setMode:function(mode){strictMode=mode=="strict"?true:false;return this},setUrl:function(newUri){options.url=newUri===undefined?window.location:newUri;setUp();return this},segment:function(pos){if(!parsed.length){setUp()}if(pos===undefined){return segments.length}return(segments[pos]===""||segments[pos]===undefined)?null:segments[pos]},attr:key,param:param}}();;
/**
 * @file
 * Needed for releasing content from lock.
 */

// Append the current page as a destination.
Drupal.behaviors.content_lock_release = {
  attach: function(context) {
    (function($) {
      $(document).ready(function() {

          // NOTE: There is already a token, so we can append & without an issue.
          $('.messages a[href*="content_lock/releaseown"]').attr('href', function(i, val) {
            return val + '&destination=' + $.url.attr('path').replace(/^\//,'');
          });

      });
    })(jQuery);
  }
};
;
/*
 * Tiny Scrollbar
 * http://www.baijs.nl/tinyscrollbar/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-2.0.php
 *
 * Date: 13 / 08 / 2012
 * @version 1.81
 * @author Maarten Baijs
 */
(function(a){a.tiny=a.tiny||{};a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto",invertscroll:true}};a.fn.tinyscrollbar=function(d){var c=a.extend({},a.tiny.scrollbar.options,d);this.each(function(){a(this).data("tsb",new b(a(this),c))});return this};a.fn.tinyscrollbar_update=function(c){return a(this).data("tsb").update(c)};function b(q,g){var k=this,t=q,j={obj:a(".viewport",q)},h={obj:a(".overview",q)},d={obj:a(".scrollbar",q)},m={obj:a(".track",d.obj)},p={obj:a(".thumb",d.obj)},l=g.axis==="x",n=l?"left":"top",v=l?"Width":"Height",r=0,y={start:0,now:0},o={},e="ontouchstart" in document.documentElement;function c(){k.update();s();return k}this.update=function(z){j[g.axis]=j.obj[0]["offset"+v];h[g.axis]=h.obj[0]["scroll"+v];h.ratio=j[g.axis]/h[g.axis];d.obj.toggleClass("disable",h.ratio>=1);m[g.axis]=g.size==="auto"?j[g.axis]:g.size;p[g.axis]=Math.min(m[g.axis],Math.max(0,(g.sizethumb==="auto"?(m[g.axis]*h.ratio):g.sizethumb)));d.ratio=g.sizethumb==="auto"?(h[g.axis]/m[g.axis]):(h[g.axis]-j[g.axis])/(m[g.axis]-p[g.axis]);r=(z==="relative"&&h.ratio<=1)?Math.min((h[g.axis]-j[g.axis]),Math.max(0,r)):0;r=(z==="bottom"&&h.ratio<=1)?(h[g.axis]-j[g.axis]):isNaN(parseInt(z,10))?r:parseInt(z,10);w()};function w(){var z=v.toLowerCase();p.obj.css(n,r/d.ratio);h.obj.css(n,-r);o.start=p.obj.offset()[n];d.obj.css(z,m[g.axis]);m.obj.css(z,m[g.axis]);p.obj.css(z,p[g.axis])}function s(){if(!e){p.obj.bind("mousedown",i);m.obj.bind("mouseup",u)}else{j.obj[0].ontouchstart=function(z){if(1===z.touches.length){i(z.touches[0]);z.stopPropagation()}}}if(g.scroll&&window.addEventListener){t[0].addEventListener("DOMMouseScroll",x,false);t[0].addEventListener("mousewheel",x,false)}else{if(g.scroll){t[0].onmousewheel=x}}}function i(A){a("body").addClass("noSelect");var z=parseInt(p.obj.css(n),10);o.start=l?A.pageX:A.pageY;y.start=z=="auto"?0:z;if(!e){a(document).bind("mousemove",u);a(document).bind("mouseup",f);p.obj.bind("mouseup",f)}else{document.ontouchmove=function(B){B.preventDefault();u(B.touches[0])};document.ontouchend=f}}function x(B){if(h.ratio<1){var A=B||window.event,z=A.wheelDelta?A.wheelDelta/120:-A.detail/3;r-=z*g.wheel;r=Math.min((h[g.axis]-j[g.axis]),Math.max(0,r));p.obj.css(n,r/d.ratio);h.obj.css(n,-r);if(g.lockscroll||(r!==(h[g.axis]-j[g.axis])&&r!==0)){A=a.event.fix(A);A.preventDefault()}}}function u(z){if(h.ratio<1){if(g.invertscroll&&e){y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+(o.start-(l?z.pageX:z.pageY)))))}else{y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+((l?z.pageX:z.pageY)-o.start))))}r=y.now*d.ratio;h.obj.css(n,-r);p.obj.css(n,y.now)}}function f(){a("body").removeClass("noSelect");a(document).unbind("mousemove",u);a(document).unbind("mouseup",f);p.obj.unbind("mouseup",f);document.ontouchmove=document.ontouchend=null}return c()}}(jQuery));

(function($){

  // Global Variables
  var	$html = $('html'),
      $body = $('body'),
      $scroll = ($.browser.msie || $.browser.mozilla || $.browser.opera) ? $html : $body,
      $slider = $('#views_slideshow_cycle_teaser_section_homepage_slider-block'),
      $slides = $slider.find('.views-slideshow-cycle-main-frame-row-item'),
      $product_tiles = $('#block-nodeblock-20934'),
      slideshowOn = true,
      inOverlay = false;

  $(document).ready(function() {
    // Slideshow Controls Tweaks    
    $('#widget_pager_bottom_homepage_slider-block .views-content-nid').click(function(){
      $slider.cycle('pause');
      slideshowOn = false;
    });
    
    $slider.hover(
      function(){
        if (slideshowOn) {
          $slider.cycle('pause');
        }
      },
      function(){
        if (slideshowOn && !inOverlay) {
          $slider.cycle('resume');
        }
      }
    );
    
    // Slider Overlay Content
    $slides.each(function(){
      var $slide = $(this);
      
      if ( $slide.find('.overlay-content').length ) {
        $slide.nbastat_hero_reveal({
          ytEl : '.hp-video',
          ytWidth : 940,
          ytHeight : 529,
          ytVars : {
            quality : 'hd720'
          },
          autoDisplay : null
        });
      }

      $slide.find('.overlay-reveal').live('click.home', function(e){
        e.preventDefault();
        inOverlay = true;
        $product_tiles.toggle();
        $slider.cycle('pause');
        $slider.css('z-index', 20);        
      });
      
      // Close and Remove Overlay
      $slide.find('.close, .overlay-shade').live('click.home', function(e){
        e.preventDefault();
        inOverlay = false;
        $product_tiles.toggle();
        if (slideshowOn) {
          $slider.cycle('resume');
        }
        $slider.css('z-index', '');
      });
    });
    
    /*
    * Impact section interactions
    */
    $('#block-views-homepage-impact-tabcontent').find('.impact-item').hide().end().expandableContent();
    
  });
  
  
  // Expandable Content
  $.fn.expandableContent = function(){
    return this.each(function(){
      var $expandable = $(this),
        $initHeight = $expandable.height(),
        $content = $expandable.find('.impact-item')
        $contentScroll = $content.find('.views-field-body .field-content'),
        $thumbs = $expandable.find('.impact-tabbar'),
        $thumbsLeft = $thumbs.position().left,
        $thumbsLink = $thumbs.find('a'),
        $thumbsBar = $expandable.find('.bar'),
        $openLink = $expandable.find('.arrow.expand'),
        $closeLink = $expandable.find('.arrow.up');
  
      $thumbsLink.bind('click',function(e){
        var ind = $thumbsLink.index( $(this) ),
            $this = $(this),
            $trgt = $expandable.offset().top,
            $pos =  $this.position().left  - $thumbsLeft;
        
        e.preventDefault();

        // trigger active tab image
        $thumbsLink.removeClass('active');
        $this.addClass('active');

        if ( !$expandable.hasClass('open') ) {
          $scroll.animate({scrollTop: $trgt}, 500);
          $expandable.addClass('open');
          $openLink.fadeOut();
          $closeLink.fadeIn();
          $thumbsBar.fadeIn();
        }
        
        $thumbsBar.animate({left: $pos}, 500, function() {  });
        
        // Animate and Load Content
        $expandable.stop().animate({'height': '742px'}, 500, function() {
          $content.hide().eq(ind).fadeIn();
          
          $contentScroll.tinyscrollbar({ lockscroll: false });
        });

      });
      
      // Collapse Content
      $expandable.find('.arrow').bind('click', function(e){
        var $this = $(this);
        e.preventDefault();
        
        if ( $this.hasClass('expand') ){
          $this.hide();
          $closeLink.fadeIn();
          $thumbsBar.fadeIn();
          $thumbsLink.eq(0).trigger('click');
        } else if ( $this.hasClass('up') ){
          // Fade Out Content
          $content.fadeOut();
          
          // Collapse Container and Remove Classes
          $expandable.stop().animate({'height': $initHeight}, 500, function() {
            $expandable.removeClass('open');
          });
          
          $closeLink.hide();
          // Show Text Link
          $openLink.fadeIn();
          // Hide Thumbnail Active Bar
          $thumbsBar.fadeOut();
        }
      });
        
    });	
  };
})(jQuery);


var _gaq = _gaq || [];

function extFlashEvent(config){

  var use_trackers = [ '', 'rollup' ], debug = false, config = jQuery.parseJSON(config);
 
  function _track(ar){
    if(debug){
      if(window.console && window.console.info) window.console.info(ar);
    } else {
      for(var i = 0; i < use_trackers.length; i++){
        _gaq.push([ use_trackers[i] ? use_trackers[i] + '.' + ar[0] : ar[0] ].concat(ar.slice(1)));
      }
    }
  }
 
  _track([ '_trackEvent', config.name, config.action, config.element, config.value || 0 ]);
 
  return undefined;
}
;
// MSDropDown - jquery.dd.js
// author: Marghoob Suleman - Search me on google
// Date: 12th Aug, 2009
// Version: 2.38.4
// Revision: 38
// web: www.giftlelo.com | www.marghoobsuleman.com
/*
// msDropDown is free jQuery Plugin: you can redistribute it and/or modify
// it under the terms of the either the MIT License or the Gnu General Public License (GPL) Version 2
*/
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(6($){3 1N="";3 3B=6(s,u){3 v=s;3 x=1b;3 u=$.3C({1c:4s,2w:7,2S:23,1O:9,1P:4t,3D:\'2g\',1J:10,3E:\'4u\',2T:\'\',2U:9,1k:\'\'},u);1b.1Z=21 3F();3 y="";3 z={};z.2V=9;z.2x=10;z.2y=1r;3 A=10;3 B={2W:\'4v\',1Q:\'4w\',1K:\'4x\',2h:\'4y\',1g:\'4z\',2X:\'4A\',2Y:\'4B\',4C:\'4D\',2z:\'4E\',3G:\'4F\'};3 C={2g:u.3D,2Z:\'2Z\',31:\'31\',32:\'32\',1w:\'1w\',1l:.30,1R:\'1R\',2A:\'2A\',2B:\'2B\',15:\'15\'};3 D={3H:"2C,33,34,1S,2D,2E,1s,1A,2F,1T,4G,22,35",1a:"1B,1x,1l,4H"};1b.1U=21 3F();3 E=$(v).1a("1d");5(1e(E)=="14"||E.18<=0){E="4I"+$.1V.3I++;$(v).2i("1d",E)};3 F=$(v).1a("1k");u.1k+=(F==14)?"":F;3 G=$(v).3J();A=($(v).1a("1B")>1||$(v).1a("1x")==9)?9:10;5(A){u.2w=$(v).1a("1B")};3 H={};3 I=0;3 J=10;3 K;3 L=10;3 M={};3 N="";3 O=6(a){5(1e(M[a])=="14"){M[a]=1o.4J(a)}11 M[a]};3 P=6(a){11 E+B[a]};3 Q=6(a){3 b=a;3 c=$(b).1a("1k");11(1e c=="14")?"":c.4K};3 R=6(a){3 b=$("#"+E+" 36:15");5(b.18>1){1C(3 i=0;i<b.18;i++){5(a==b[i].1j){11 9}}}19 5(b.18==1){5(b[0].1j==a){11 9}};11 10};3 S=6(a,b,c,d){3 e="";3 f=(d=="3a")?P("2Y"):P("2X");3 g=(d=="3a")?f+"3b"+(b)+"3b"+(c):f+"3b"+(b);3 h="";3 t="";3 i="";3 j="";5(u.1J!=10){i=\' \'+u.1J+\' \'+a.3K}19{h=$(a).1a("1p");3 k=21 3L(/^\\{.*\\}$/);3 l=k.3M(h);5(u.2U==9&&l==9){5(h.18!=0){3 m=24("["+h+"]");1W=(1e m[0].2j=="14")?"":m[0].2j;t=(1e m[0].1p=="14")?"":m[0].1p;j=(1e m[0].3N=="14")?"":m[0].3N;h=(1W.18==0)?"":\'<1W 2G="\'+1W+\'" 2H="2I" /> \'}}19{h=(h.18==0)?"":\'<1W 2G="\'+h+\'" 2H="2I" /> \'}};3 n=$(a).1t();3 o=$(a).4L();3 p=($(a).1a("1l")==9)?"1l":"3c";H[g]={1L:h+n,2k:o,1t:n,1j:a.1j,1d:g,1p:t};3 q=Q(a);5(R(a.1j)==9){e+=\'<a 3O="3P:3Q(0);" 1u="\'+C.15+\' \'+p+i+\'"\'}19{e+=\'<a  3O="3P:3Q(0);" 1u="\'+p+i+\'"\'};5(q!==10&&q!==14&&q.18!=0){e+=" 1k=\'"+q+"\'"};5(t!==""){e+=" 1p=\'"+t+"\'"};e+=\' 1d="\'+g+\'">\';e+=h+\'<1y 1u="\'+C.1w+\'">\'+n+\'</1y>\';5(j!==""){e+=j};e+=\'</a>\';11 e};3 T=6(t){3 b=t.3d();5(b.18==0)11-1;3 a="";1C(3 i 2l H){3 c=H[i].1t.3d();5(c.3R(0,b.18)==b){a+="#"+H[i].1d+", "}};11(a=="")?-1:a};3 U=6(){3 f=G;5(f.18==0)11"";3 g="";3 h=P("2X");3 i=P("2Y");f.3e(6(c){3 d=f[c];5(d.4M.4N().3d()=="4O"){g+="<1z 1u=\'4P\'>";g+="<1y 1k=\'3S-4Q:4R;3S-1k:4S;4T:4U;\'>"+$(d).1a("4V")+"</1y>";3 e=$(d).3J();e.3e(6(a){3 b=e[a];g+=S(b,c,a,"3a")});g+="</1z>"}19{g+=S(d,c,"","")}});11 g};3 V=6(){3 a=P("1Q");3 b=P("1g");3 c=u.1k;25="";25+=\'<1z 1d="\'+b+\'" 1u="\'+C.32+\'"\';5(!A){25+=(c!="")?\' 1k="\'+c+\'"\':\'\'}19{25+=(c!="")?\' 1k="2J-1D:4W 4X #4Y;1q:2m;1m:2K;\'+c+\'"\':\'\'};25+=\'>\';11 25};3 W=6(){3 a=P("1K");3 b=P("2z");3 c=P("2h");3 d=P("3G");3 e="";3 f="";5(O(E).1E.18>0){e=$("#"+E+" 36:15").1t();f=$("#"+E+" 36:15").1a("1p")};3 g="";3 t="";3 h=21 3L(/^\\{.*\\}$/);3 i=h.3M(f);5(u.2U==9&&i==9){5(f.18!=0){3 j=24("["+f+"]");g=(1e j[0].2j=="14")?"":j[0].2j;t=(1e j[0].1p=="14")?"":j[0].1p;f=(g.18==0||u.1O==10||u.1J!=10)?"":\'<1W 2G="\'+g+\'" 2H="2I" /> \'}}19{f=(f.18==0||f==14||u.1O==10||u.1J!=10)?"":\'<1W 2G="\'+f+\'" 2H="2I" /> \'};3 k=\'<1z 1d="\'+a+\'" 1u="\'+C.2Z+\'"\';k+=\'>\';k+=\'<1y 1d="\'+b+\'" 1u="\'+C.31+\'"></1y><1y 1u="\'+C.1w+\'" 1d="\'+c+\'">\'+f+\'<1y 1u="\'+C.1w+\'">\'+e+\'</1y></1y></1z>\';11 k};3 X=6(){3 c=P("1g");$("#"+c+" a.3c").1F("1S");$("#"+c+" a.3c").1f("1S",6(a){a.26();3f(1b);28();5(!A){$("#"+c).1F("1A");29(10);3 b=(u.1O==10)?$(1b).1t():$(1b).1L();1X(b);x.2n()}})};3 Y=6(){3 d=10;3 e=P("1Q");3 f=P("1K");3 g=P("2h");3 h=P("1g");3 i=P("2z");3 j=$("#"+E).4Z();3 k=u.1k;5($("#"+e).18>0){$("#"+e).2L();d=9};3 l=\'<1z 1d="\'+e+\'" 1u="\'+C.2g+\'"\';l+=(k!="")?\' 1k="\'+k+\'"\':\'\';l+=\'>\';l+=W();l+=V();l+=U();l+="</1z>";l+="</1z>";5(d==9){3 m=P("2W");$("#"+m).3g(l)}19{$("#"+E).3g(l)};5(A){3 f=P("1K");$("#"+f).2o()};$("#"+e).12("3T",j+"1v");$("#"+h).12("3T",(j-2)+"1v");5(G.18>u.2w){3 n=2p($("#"+h+" a:3h").12("2q-3U"))+2p($("#"+h+" a:3h").12("2q-1D"));3 o=((u.2S)*u.2w)-n;$("#"+h).12("1c",o+"1v")}19 5(A){3 o=$("#"+E).1c();$("#"+h).12("1c",o+"1v")};5(d==10){3V();3W(E)};5($("#"+E).1a("1l")==9){$("#"+e).12("2M",C.1l)};3X();$("#"+f).1f("1A",6(a){3i(1)});$("#"+f).1f("1T",6(a){3i(0)});X();$("#"+h+" a.1l").12("2M",C.1l);5(A){$("#"+h).1f("1A",6(c){5(!z.2x){z.2x=9;$(1o).1f("22",6(a){3 b=a.3Y;z.2y=b;5(b==39||b==40){a.26();a.2r();3j();28()};5(b==37||b==38){a.26();a.2r();3k();28()}})}})};$("#"+h).1f("1T",6(a){29(10);$(1o).1F("22",2N);z.2x=10;z.2y=1r});$("#"+f).1f("1S",6(b){29(10);5($("#"+h+":2a").18==1){$("#"+h).1F("1A")}19{$("#"+h).1f("1A",6(a){29(9)});x.3Z()}});$("#"+f).1f("1T",6(a){29(10)});5(u.1O&&u.1J!=10){2s()}};3 Z=6(a){1C(3 i 2l H){5(H[i].1j==a){11 H[i]}};11-1};3 3f=6(a){3 b=P("1g");5($("#"+b+" a."+C.15).18==1){y=$("#"+b+" a."+C.15).1t()};5(!A){$("#"+b+" a."+C.15).1M(C.15)};3 c=$("#"+b+" a."+C.15).1a("1d");5(c!=14){3 d=(z.2b==14||z.2b==1r)?H[c].1j:z.2b};5(a&&!A){$(a).1G(C.15)};5(A){3 e=z.2y;5($("#"+E).1a("1x")==9){5(e==17){z.2b=H[$(a).1a("1d")].1j;$(a).50(C.15)}19 5(e==16){$("#"+b+" a."+C.15).1M(C.15);$(a).1G(C.15);3 f=$(a).1a("1d");3 g=H[f].1j;1C(3 i=3l.51(d,g);i<=3l.52(d,g);i++){$("#"+Z(i).1d).1G(C.15)}}19{$("#"+b+" a."+C.15).1M(C.15);$(a).1G(C.15);z.2b=H[$(a).1a("1d")].1j}}19{$("#"+b+" a."+C.15).1M(C.15);$(a).1G(C.15);z.2b=H[$(a).1a("1d")].1j}}};3 3W=6(a){3 b=a;O(b).53=6(e){$("#"+b).1V(u)}};3 29=6(a){z.2V=a};3 41=6(){11 z.2V};3 3X=6(){3 b=P("1Q");3 c=D.3H.54(",");1C(3 d=0;d<c.18;d++){3 e=c[d];3 f=2c(e);5(f==9){2O(e){1h"2C":$("#"+b).1f("55",6(a){O(E).2C()});1i;1h"1S":$("#"+b).1f("1S",6(a){$("#"+E).1H("1S")});1i;1h"2D":$("#"+b).1f("2D",6(a){$("#"+E).1H("2D")});1i;1h"2E":$("#"+b).1f("2E",6(a){$("#"+E).1H("2E")});1i;1h"1s":$("#"+b).1f("1s",6(a){$("#"+E).1H("1s")});1i;1h"1A":$("#"+b).1f("1A",6(a){$("#"+E).1H("1A")});1i;1h"2F":$("#"+b).1f("2F",6(a){$("#"+E).1H("2F")});1i;1h"1T":$("#"+b).1f("1T",6(a){$("#"+E).1H("1T")});1i}}}};3 3V=6(){3 a=P("2W");$("#"+E).3g("<1z 1u=\'"+C.1R+"\' 1k=\'1c:3m;42:43;1m:2P;\' 1d=\'"+a+"\'></1z>");$("#"+E).56($("#"+a))};3 1X=6(a){3 b=P("2h");$("#"+b).1L(a)};3 3n=6(w){3 a=w;3 b=P("1g");3 c=$("#"+b+" a:2a");3 d=c.18;3 e=$("#"+b+" a:2a").1j($("#"+b+" a.15:2a"));3 f;2O(a){1h"3o":5(e<d-1){e++;f=c[e]};1i;1h"44":5(e<d&&e>0){e--;f=c[e]};1i};5(1e(f)=="14"){11 10};$("#"+b+" a."+C.15).1M(C.15);$(f).1G(C.15);3 g=f.1d;5(!A){3 h=(u.1O==10)?H[g].1t:$("#"+g).1L();1X(h);2s(H[g].1j)};5(a=="3o"){5(2p(($("#"+g).1m().1D+$("#"+g).1c()))>=2p($("#"+b).1c())){$("#"+b).2t(($("#"+b).2t())+$("#"+g).1c()+$("#"+g).1c())}}19{5(2p(($("#"+g).1m().1D+$("#"+g).1c()))<=0){$("#"+b).2t(($("#"+b).2t()-$("#"+b).1c())-$("#"+g).1c())}}};3 3j=6(){3n("3o")};3 3k=6(){3n("44")};3 2s=6(i){5(u.1J!=10){3 a=P("2h");3 b=(1e(i)=="14")?O(E).1n:i;3 c=O(E).1E[b].3K;5(c.18>0){3 d=P("1g");3 e=$("#"+d+" a."+c).1a("1d");3 f=$("#"+e).12("1Y-2j");3 g=$("#"+e).12("1Y-1m");5(g==14){g=$("#"+e).12("1Y-1m-x")+" "+$("#"+e).12("1Y-1m-y")};3 h=$("#"+e).12("2q-45");5(f!=14){$("#"+a).2u("."+C.1w).2i(\'1k\',"1Y:"+f)};5(g!=14){$("#"+a).2u("."+C.1w).12(\'1Y-1m\',g)};5(h!=14){$("#"+a).2u("."+C.1w).12(\'2q-45\',h)};$("#"+a).2u("."+C.1w).12(\'1Y-47\',\'57-47\');$("#"+a).2u("."+C.1w).12(\'2q-3U\',\'58\')}}};3 28=6(){3 a=P("1g");3 b=$("#"+a+" a."+C.15);5(b.18==1){3 c=$("#"+a+" a."+C.15).1t();3 d=$("#"+a+" a."+C.15).1a("1d");5(d!=14){3 e=H[d].2k;O(E).1n=H[d].1j};5(u.1O&&u.1J!=10)2s()}19 5(b.18>1){1C(3 i=0;i<b.18;i++){3 d=$(b[i]).1a("1d");3 f=H[d].1j;O(E).1E[f].15="15"}};3 g=O(E).1n;x.1Z["1n"]=g};3 2c=6(a){5($("#"+E).1a("59"+a)!=14){11 9};3 b=$("#"+E).3p("5a");5(b&&b[a]){11 9};11 10};3 3q=6(a){$("#"+E).2C();$("#"+E)[0].33();28();$(1o).1F("1s",2Q);$(1o).1F("1s",3q)};3 48=6(){3 a=P("1g");5(2c(\'34\')==9){3 b=H[$("#"+a+" a.15").1a("1d")].1t;5($.49(y)!==$.49(b)&&y!==""){$("#"+E).1H("34")}};5(2c(\'1s\')==9){$("#"+E).1H("1s")};5(2c(\'33\')==9){$(1o).1f("1s",3q)};11 10};3 3i=6(a){3 b=P("2z");5(a==1)$("#"+b).12({4a:\'0 5b%\'});19 $("#"+b).12({4a:\'0 0\'})};3 4b=6(){1C(3 i 2l O(E)){5(1e(O(E)[i])!==\'6\'&&1e(O(E)[i])!=="14"&&1e(O(E)[i])!=="1r"){x.1I(i,O(E)[i],9)}}};3 4c=6(a,b){5(Z(b)!=-1){O(E)[a]=b;3 c=P("1g");$("#"+c+" a."+C.15).1M(C.15);$("#"+Z(b).1d).1G(C.15);3 d=Z(O(E).1n).1L;1X(d)}};3 4d=6(i,a){5(a==\'d\'){1C(3 b 2l H){5(H[b].1j==i){5c H[b];1i}}};3 c=0;1C(3 b 2l H){H[b].1j=c;c++}};3 2R=6(){3 a=P("1g");3 b=P("1Q");3 c=$("#"+b).5d();3 d=$("#"+b).1c();3 e=$(4e).1c();3 f=$(4e).2t();3 g=$("#"+a).1c();3 h={1P:u.1P,1D:(d)+"1v",1q:"2d"};3 i=u.3E;3 j=10;3 k=C.2B;$("#"+a).1M(C.2B);$("#"+a).1M(C.2A);5((e+f)<3l.5e(g+d+c.1D)){3 l=g;h={1P:u.1P,1D:"-"+l+"1v",1q:"2d"};i="2e";j=9;k=C.2A};11{3r:j,4f:i,12:h,2J:k}};3 3s=6(){5(x.1U["4g"]!=1r){24(x.1U["4g"])(x)}};3 3t=6(){48();5(x.1U["4h"]!=1r){24(x.1U["4h"])(x)}};3 2N=6(a){3 b=P("1g");3 c=a.3Y;5(c==8){a.26();a.2r();N=(N.18==0)?"":N.3R(0,N.18-1)};2O(c){1h 39:1h 40:a.26();a.2r();3j();1i;1h 37:1h 38:a.26();a.2r();3k();1i;1h 27:1h 13:x.2n();28();1i;4i:5(c>46){N+=5f.5g(c)};3 d=T(N);5(d!=-1){$("#"+b).12({1c:\'5h\'});$("#"+b+" a").2o();$(d).2e();3 e=2R();$("#"+b).12(e.12);$("#"+b).12({1q:\'2m\'})}19{$("#"+b+" a").2e();$("#"+b).12({1c:K+\'1v\'})};1i};5(2c("22")==9){O(E).5i()};11 10};3 2Q=6(a){5(41()==10){x.2n()};11 10};3 3u=6(a){5($("#"+E).1a("4j")!=14){O(E).4j()};11 10};1b.3Z=6(){5((x.2f("1l",9)==9)||(x.2f("1E",9).18==0))11;3 a=P("1g");5(1N!=""&&a!=1N){$("#"+1N).4k("3v");$("#"+1N).12({1P:\'0\'})};5($("#"+a).12("1q")=="2d"){y=H[$("#"+a+" a.15").1a("1d")].1t;N="";K=$("#"+a).1c();$("#"+a+" a").2e();$(1o).1f("22",2N);$(1o).1f("35",3u);$(1o).1f("1s",2Q);3 b=2R();$("#"+a).12(b.12);5(b.3r==9){$("#"+a).12({1q:\'2m\'});$("#"+a).1G(b.2J);3s()}19{$("#"+a)[b.4f]("3v",6(){$("#"+a).1G(b.2J);3s()})};5(a!=1N){1N=a}}};1b.2n=6(){3 b=P("1g");5(!$("#"+b).4l(":2a")||L)11;L=9;5($("#"+b).12("1q")=="2d"){11 10};3 c=$("#"+P("1K")).1m().1D;3 d=2R();J=10;5(d.3r==9){$("#"+b).5j({1c:0,1D:c},6(){$("#"+b).12({1c:K+\'1v\',1q:\'2d\'});3t();L=10})}19{$("#"+b).4k("3v",6(a){3t();$("#"+b).12({1P:\'0\'});$("#"+b).12({1c:K+\'1v\'});L=10})};2s();$(1o).1F("22",2N);$(1o).1F("35",3u);$(1o).1F("1s",2Q)};1b.1n=6(i){5(1e(i)=="14"){11 x.2f("1n")}19{x.1I("1n",i)}};1b.4m=6(a){5(1e(a)=="14"||a==9){$("."+C.1R).5k("1k")}19{$("."+C.1R).2i("1k","1c:3m;42:43;1m:2P")}};1b.1I=6(a,b,c){5(1e a=="14"||1e b=="14")11 10;x.1Z[a]=b;5(c!=9){2O(a){1h"1n":4c(a,b);1i;1h"1l":x.1l(b,9);1i;1h"1x":O(E)[a]=b;A=($(v).1a("1B")>0||$(v).1a("1x")==9)?9:10;5(A){3 d=$("#"+E).1c();3 f=P("1g");$("#"+f).12("1c",d+"1v");3 g=P("1K");$("#"+g).2o();3 f=P("1g");$("#"+f).12({1q:\'2m\',1m:\'2K\'});X()};1i;1h"1B":O(E)[a]=b;5(b==0){O(E).1x=10};A=($(v).1a("1B")>0||$(v).1a("1x")==9)?9:10;5(b==0){3 g=P("1K");$("#"+g).2e();3 f=P("1g");$("#"+f).12({1q:\'2d\',1m:\'2P\'});3 h="";5(O(E).1n>=0){3 i=Z(O(E).1n);h=i.1L;3f($("#"+i.1d))};1X(h)}19{3 g=P("1K");$("#"+g).2o();3 f=P("1g");$("#"+f).12({1q:\'2m\',1m:\'2K\'})};1i;4i:4n{O(E)[a]=b}4o(e){};1i}}};1b.2f=6(a,b){5(a==14&&b==14){11 x.1Z};5(a!=14&&b==14){11(x.1Z[a]!=14)?x.1Z[a]:1r};5(a!=14&&b!=14){11 O(E)[a]}};1b.2a=6(a){3 b=P("1Q");5(a==9){$("#"+b).2e()}19 5(a==10){$("#"+b).2o()}19{11 $("#"+b).12("1q")}};1b.5l=6(a,b){3 c=a;3 d=c.1t;3 e=(c.2k==14||c.2k==1r)?d:c.2k;3 f=(c["1p"]==14||c["1p"]==1r)?\'\':c["1p"];3 i=(b==14||b==1r)?O(E).1E.18:b;O(E).1E[i]=21 5m(d,e);5(f!=\'\')O(E).1E[i]["1p"]=f;3 g=Z(i);5(g!=-1){3 h=S(O(E).1E[i],i,"","");$("#"+g.1d).1L(h)}19{3 h=S(O(E).1E[i],i,"","");3 j=P("1g");$("#"+j).5n(h);X()}};1b.2L=6(i){O(E).2L(i);5((Z(i))!=-1){$("#"+Z(i).1d).2L();4d(i,\'d\')};5(O(E).18==0){1X("")}19{3 a=Z(O(E).1n).1L;1X(a)};x.1I("1n",O(E).1n)};1b.1l=6(a,b){O(E).1l=a;3 c=P("1Q");5(a==9){$("#"+c).12("2M",C.1l);x.2n()}19 5(a==10){$("#"+c).12("2M",1)};5(b!=9){x.1I("1l",a)}};1b.3w=6(){11(O(E).3w==14)?1r:O(E).3w};1b.3x=6(){5(2v.18==1){11 O(E).3x(2v[0])}19 5(2v.18==2){11 O(E).3x(2v[0],2v[1])}19{5o{5p:"5q 1j 4l 5r!"}}};1b.4p=6(a){11 O(E).4p(a)};1b.1x=6(a){5(1e(a)=="14"){11 x.2f("1x")}19{x.1I("1x",a)}};1b.1B=6(a){5(1e(a)=="14"){11 x.2f("1B")}19{x.1I("1B",a)}};1b.5s=6(a,b){x.1U[a]=b};1b.5t=6(a){24(x.1U[a])(x)};1b.5u=6(r){5(1e r=="14"||r==0){11 10};3 a=P("1g");3 b=$("#"+a+" a:3h").1c();3 c=(b==0)?u.2S:b;3 d=r*c;$("#"+a).12("1c",d+"1v")};3 4q=6(){x.1I("3y",$.1V.3y);x.1I("3z",$.1V.3z)};3 4r=6(){Y();4b();4q();5(u.2T!=\'\'){24(u.2T)(x)}};4r()};$.1V={3y:\'2.38.4\',3z:"5v 5w",3I:20,4m:6(v){5(v==9){$(".1R").12({1c:\'5x\',1m:\'2K\'})}19{$(".1R").12({1c:\'3m\',1m:\'2P\'})}},5y:6(a,b){11 $(a).1V(b).3p("2g")}};$.3A.3C({1V:6(b){11 1b.3e(6(){3 a=21 3B(1b,b);$(1b).3p(\'2g\',a)})}});5(1e($.3A.1a)==\'14\'){$.3A.1a=6(w,v){5(1e v=="14"){11 $(1b).2i(w)};4n{$(1b).2i(w,v)}4o(e){}}}})(5z);',62,346,'|||var||if|function|||true|||||||||||||||||||||||||||||||||||||||||||||||||||||false|return|css||undefined|selected|||length|else|prop|this|height|id|typeof|bind|postChildID|case|break|index|style|disabled|position|selectedIndex|document|title|display|null|mouseup|text|class|px|ddTitleText|multiple|span|div|mouseover|size|for|top|options|unbind|addClass|trigger|set|useSprite|postTitleID|html|removeClass|bB|showIcon|zIndex|postID|ddOutOfVision|click|mouseout|onActions|msDropDown|img|bJ|background|ddProp||new|keydown||eval|sDiv|preventDefault||bO|bF|visible|oldIndex|bP|none|show|get|dd|postTitleTextID|attr|image|value|in|block|close|hide|parseInt|padding|stopPropagation|bN|scrollTop|find|arguments|visibleRows|keyboardAction|currentKey|postArrowID|borderTop|noBorderTop|focus|dblclick|mousedown|mousemove|src|align|absmiddle|border|relative|remove|opacity|bZ|switch|absolute|ca|bW|rowHeight|onInit|jsonTitle|insideWindow|postElementHolder|postAID|postOPTAID|ddTitle||arrow|ddChild|blur|change|keyup|option||||opt|_|enabled|toLowerCase|each|bD|after|first|bS|bL|bM|Math|0px|bK|next|data|bQ|opp|bX|bY|cb|fast|form|item|version|author|fn|bC|extend|mainCSS|animStyle|Object|postInputhidden|actions|counter|children|className|RegExp|test|postHTML|href|javascript|void|substr|font|width|bottom|bI|bE|bH|keyCode|open||bG|overflow|hidden|previous|left||repeat|bR|trim|backgroundPosition|bT|bU|bV|window|ani|onOpen|onClose|default|onkeyup|slideUp|is|debug|try|catch|namedItem|cc|cd|120|9999|slideDown|_msddHolder|_msdd|_title|_titletext|_child|_msa|_msopta|postInputID|_msinput|_arrow|_inp|keypress|tabindex|msdrpdd|getElementById|cssText|val|nodeName|toString|optgroup|opta|weight|bold|italic|clear|both|label|1px|solid|c3c3c3|outerWidth|toggleClass|min|max|refresh|split|mouseenter|appendTo|no|2px|on|events|100|delete|offset|floor|String|fromCharCode|auto|onkeydown|animate|removeAttr|add|Option|append|throw|message|An|required|addMyEvent|fireEvent|showRows|Marghoob|Suleman|20px|create|jQuery'.split('|'),0,{}));;
/**
 * UAParser.js v0.6.0
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * @license Copyright © 2012-2013 Faisalman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */
(function(e,t){"use strict";var n="",r="?",i="function",s="undefined",o="object",u="major",a="model",f="name",l="type",c="vendor",h="version",p="architecture",d="console",v="mobile",m="tablet",g={has:function(e,t){return t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()}},y={rgx:function(){for(var e,n=0,r,u,a,f,l,c,h=arguments;n<h.length;n+=2){var p=h[n],d=h[n+1];if(typeof e===s){e={};for(a in d)f=d[a],typeof f===o?e[f[0]]=t:e[f]=t}for(r=u=0;r<p.length;r++){l=p[r].exec(this.getUA());if(!!l){for(a in d)c=l[++u],f=d[a],typeof f===o&&f.length>0?f.length==2?typeof f[1]==i?e[f[0]]=f[1].call(this,c):e[f[0]]=f[1]:f.length==3?typeof f[1]===i&&(!f[1].exec||!f[1].test)?e[f[0]]=c?f[1].call(this,c,f[2]):t:e[f[0]]=c?c.replace(f[1],f[2]):t:f.length==4&&(e[f[0]]=c?f[3].call(this,c.replace(f[1],f[2])):t):e[f]=c?c:t;break}}if(!!l)break}return e},str:function(e,n){for(var i in n)if(typeof n[i]===o&&n[i].length>0){for(var s in n[i])if(g.has(n[i][s],e))return i===r?t:i}else if(g.has(n[i],e))return i===r?t:i;return e}},b={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",RT:"ARM"}}}},w={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[f,h,u],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[f,"Opera"],h,u],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt)\/((\d+)?[\w\.-]+)/i],[f,h,u],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[f,"Yandex"],h,u],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[f,/_/g," "],h,u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],[f,h,u],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[f,"Dolphin"],h,u],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[f,"Chrome"],h,u],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[h,u,[f,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[h,u,f],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[f,[u,y.str,b.browser.oldsafari.major],[h,y.str,b.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[f,h,u],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[f,"Netscape"],h,u],[/(swiftfox)/i,/(iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[f,h,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",g.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[p,g.lowerize]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[a,c,[l,m]],[/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,a,[l,m]],[/\((ip[honed]+);.+(apple)/i],[a,c,[l,v]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,a,[l,v]],[/\((bb10);\s(\w+)/i],[[c,"BlackBerry"],a,[l,v]],[/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i],[[c,"Asus"],a,[l,m]],[/(sony)\s(tablet\s[ps])/i],[c,a,[l,m]],[/(nintendo)\s([wids3u]+)/i],[c,a,[l,d]],[/((playstation)\s[3portablevi]+)/i],[[c,"Sony"],a,[l,d]],[/(sprint\s(\w+))/i],[[c,y.str,b.device.sprint.vendor],[a,y.str,b.device.sprint.model],[l,v]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[c,[a,/_/g," "],[l,v]],[/\s((milestone|droid[2x]?))[globa\s]*\sbuild\//i,/(mot)[\s-]?(\w+)*/i],[[c,"Motorola"],a,[l,v]],[/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i],[[c,"Motorola"],a,[l,m]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i],[[c,"Samsung"],a,[l,m]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[c,"Samsung"],a,[l,v]],[/(sie)-(\w+)*/i],[[c,"Siemens"],a,[l,v]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[c,"Nokia"],a,[l,v]],[/android\s3\.[\s\w-;]{10}((a\d{3}))/i],[[c,"Acer"],a,[l,m]],[/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],a,[l,m]],[/((nexus\s4))/i,/(lg)[e;\s-\/]+(\w+)*/i],[[c,"LG"],a,[l,v]],[/(mobile|tablet);.+rv\:.+gecko\//i],[l,c,a]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[f,h],[/rv\:([\w\.]+).*(gecko)/i],[h,f]],os:[[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[f,[h,y.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[f,"Windows"],[h,y.str,b.os.windows.version]],[/\((bb)(10);/i],[[f,"BlackBerry"],h],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)\/([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],[f,h],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[f,"Symbian"],h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[f,"Firefox OS"],h],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[f,h],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[f,"Chromium OS"],h],[/(sunos)\s?([\w\.]+\d)*/i],[[f,"Solaris"],h],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[f,h],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[f,"iOS"],[h,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],[f,[h,/_/g,"."]],[/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,/(unix)\s?([\w\.]+)*/i],[f,h]]},E=function(t){var r=t||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:n);if(!(this instanceof E))return(new E(t)).getResult();this.getBrowser=function(){return y.rgx.apply(this,w.browser)},this.getCPU=function(){return y.rgx.apply(this,w.cpu)},this.getDevice=function(){return y.rgx.apply(this,w.device)},this.getEngine=function(){return y.rgx.apply(this,w.engine)},this.getOS=function(){return y.rgx.apply(this,w.os)},this.getResult=function(){return{browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this.setUA(r)};if(typeof exports!==s)typeof module!==s&&module.exports&&(exports=module.exports=E),exports.UAParser=E;else{e.UAParser=E,typeof define===i&&define.amd&&define(function(){return E});if(typeof e.jQuery!==s){var S=e.jQuery,x=new E;S.ua=x.getResult(),S.ua.get=function(){return x.getUA()},S.ua.set=function(e){x.setUA(e);var t=x.getResult();for(var n in t)S.ua[n]=t[n]}}}})(this);;
(function($, window){
  var Tabia = window.Tabia || {};

  Tabia.mobileCheck = function(os_name) {
    var isMobile = false;
    if (typeof(window.UAParser) == 'function' && typeof(window.Modernizr) == 'object') {
      var os = (UAParser().os.name !== undefined) ? UAParser().os.name.toLowerCase() : undefined,
          mobileOS = (os == 'android' || os == 'ios' || os == 'blackberry' || os == 'windows mobile' || os == 'windows phone');

      // Evaluation: If os_name passed as param, check against the name returned by UAParser().
      // Otherwise, compare against known mobile OS names.
      // Both compare against Modernizr.touch detection.
      isMobile = (os_name != undefined && os_name != '') ? (Modernizr.touch && os == os_name.toLowerCase()) : (Modernizr.touch && mobileOS);
    }
    return isMobile;
  }

})(jQuery, window);
;
var Froogaloop=function(){function e(a){return new e.fn.init(a)}function h(a,c,b){if(!b.contentWindow.postMessage)return!1;var f=b.getAttribute("src").split("?")[0],a=JSON.stringify({method:a,value:c});"//"===f.substr(0,2)&&(f=window.location.protocol+f);b.contentWindow.postMessage(a,f)}function j(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(f){}"ready"==b&&!i&&(i=!0);if(a.origin!=k)return!1;var a=c.value,e=c.data,g=""===g?null:c.player_id;c=g?d[g][b]:d[b];b=[];if(!c)return!1;void 0!==
a&&b.push(a);e&&b.push(e);g&&b.push(g);return 0<b.length?c.apply(null,b):c.call()}function l(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},i=!1,k="";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;a=this.element.getAttribute("src");"//"===a.substr(0,2)&&(a=window.location.protocol+a);for(var a=a.split("/"),c="",b=0,f=a.length;b<f;b++){if(3>b)c+=a[b];else break;2>b&&(c+="/")}k=c;return this},api:function(a,c){if(!this.element||
!a)return!1;var b=this.element,f=""!==b.id?b.id:null,d=!c||!c.constructor||!c.call||!c.apply?c:null,e=c&&c.constructor&&c.call&&c.apply?c:null;e&&l(a,e,f);h(a,d,b);return this},addEvent:function(a,c){if(!this.element)return!1;var b=this.element,d=""!==b.id?b.id:null;l(a,c,d);"ready"!=a?h("addEventListener",a,b):"ready"==a&&i&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b;a:{if((b=""!==c.id?c.id:null)&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=
!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&h("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",j,!1):window.attachEvent("onmessage",j);return window.Froogaloop=window.$f=e}();
;
(function ($) {

/**
 * Attaches the autocomplete behavior to all required fields.
 */
Drupal.behaviors.autocomplete = {
  attach: function (context, settings) {
    var acdb = [];
    $('input.autocomplete', context).once('autocomplete', function () {
      var uri = this.value;
      if (!acdb[uri]) {
        acdb[uri] = new Drupal.ACDB(uri);
      }
      var $input = $('#' + this.id.substr(0, this.id.length - 13))
        .attr('autocomplete', 'OFF')
        .attr('aria-autocomplete', 'list');
      $($input[0].form).submit(Drupal.autocompleteSubmit);
      $input.parent()
        .attr('role', 'application')
        .append($('<span class="element-invisible" aria-live="assertive"></span>')
          .attr('id', $input.attr('id') + '-autocomplete-aria-live')
        );
      new Drupal.jsAC($input, acdb[uri]);
    });
  }
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).length == 0;
};

/**
 * An AutoComplete object.
 */
Drupal.jsAC = function ($input, db) {
  var ac = this;
  this.input = $input[0];
  this.ariaLive = $('#' + this.input.id + '-autocomplete-aria-live');
  this.db = db;

  $input
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event.
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow.
      this.selectDown();
      return false;
    case 38: // up arrow.
      this.selectUp();
      return false;
    default: // All other keys.
      return true;
  }
};

/**
 * Handler for the "keyup" event.
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // Shift.
    case 17: // Ctrl.
    case 18: // Alt.
    case 20: // Caps lock.
    case 33: // Page up.
    case 34: // Page down.
    case 35: // End.
    case 36: // Home.
    case 37: // Left arrow.
    case 38: // Up arrow.
    case 39: // Right arrow.
    case 40: // Down arrow.
      return true;

    case 9:  // Tab.
    case 13: // Enter.
    case 27: // Esc.
      this.hidePopup(e.keyCode);
      return true;

    default: // All other keys.
      if (input.value.length > 0 && !input.readOnly) {
        this.populatePopup();
      }
      else {
        this.hidePopup(e.keyCode);
      }
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field.
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = $(node).data('autocompleteValue');
};

/**
 * Highlights the next suggestion.
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else if (this.popup) {
    var lis = $('li', this.popup);
    if (lis.length > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion.
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion.
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
  $(this.ariaLive).html($(this.selected).html());
};

/**
 * Unhighlights a suggestion.
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Hides the autocomplete suggestions.
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed.
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.input.value = $(this.selected).data('autocompleteValue');
  }
  // Hide popup.
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function () { $(popup).remove(); });
  }
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Positions the suggestions popup and starts a search.
 */
Drupal.jsAC.prototype.populatePopup = function () {
  var $input = $(this.input);
  var position = $input.position();
  // Show popup.
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = $('<div id="autocomplete"></div>')[0];
  this.popup.owner = this;
  $(this.popup).css({
    top: parseInt(position.top + this.input.offsetHeight, 10) + 'px',
    left: parseInt(position.left, 10) + 'px',
    width: $input.innerWidth() + 'px',
    display: 'none'
  });
  $input.before(this.popup);

  // Do search.
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received.
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches.
  var ul = $('<ul></ul>');
  var ac = this;
  for (key in matches) {
    $('<li></li>')
      .html($('<div></div>').html(matches[key]))
      .mousedown(function () { ac.select(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); })
      .data('autocompleteValue', key)
      .appendTo(ul);
  }

  // Show popup with matches, if any.
  if (this.popup) {
    if (ul.children().length) {
      $(this.popup).empty().append(ul).show();
      $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
    }
    else {
      $(this.popup).css({ visibility: 'hidden' });
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      $(this.ariaLive).html(Drupal.t('Searching for matches...'));
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object.
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search.
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this string needs to be searched for anyway.
  searchString = searchString.replace(/^\s+|\s+$/, '');
  if (searchString.length <= 0 ||
    searchString.charAt(searchString.length - 1) == ',') {
    return;
  }

  // See if this key has been searched for before.
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search.
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function () {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion. We use Drupal.encodePath instead of
    // encodeURIComponent to allow autocomplete search terms to contain slashes.
    $.ajax({
      type: 'GET',
      url: db.uri + '/' + Drupal.encodePath(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches.status == 'undefined' || matches.status != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see.
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ajaxError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request.
 */
Drupal.ACDB.prototype.cancel = function () {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};

})(jQuery);
;
(function ($) {
  /**
   * CJK regex patterns:
   * JP - Hiragana               \u3040-\u309F
   * JP - Katakana               \u30A0-\u30FF
   * KO - Hangul alphabet        \uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\u3200-\u32FF\uA960-\uA97F\uD7B0-\uD7FF\uFF00-\uFFEF
   * CJK Unified Ideographs      \u4E00-\u9FFF
   */

  var cjkFlag = false;
  var cjkRegex = /[\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\u3200-\u32FF\uA960-\uA97F\uD7B0-\uD7FF\uFF00-\uFFEF\u4E00-\u9FFF]+?/g;

  /**
   * Overwrites Drupal's default in misc/autocomplete.js to submit when
   * selected. This applies to clicking only.
   */
  Drupal.jsAC.prototype.select = function (node) {
    this.input.value = $(node).data('autocompleteValue');
    if($(this.input).hasClass('auto_submit')){
      this.input.form.submit();
    }
  };

  /**
   * Overwrites Drupal's default in misc/autocomplete.js to submit when a user
   * hits the enter key. Otherwise, it behaves normally.
   */
  Drupal.jsAC.prototype.onkeyup = function (input, e) {
    if (!e) {
      e = window.event;
    }

    /**
     * Check if the last two characters contain a CJK symbol, using 2 chars
     * to account for syllable input.
     */
    var lcharFlag = input.value.charAt(input.value.length-2).match(cjkRegex);

    cjkFlag = (cjkRegex.test(input.value)) ? true : false;

    switch (e.keyCode) {
      case 16: // Shift.
      case 17: // Ctrl.
      case 18: // Alt.
      case 20: // Caps lock.
      case 33: // Page up.
      case 34: // Page down.
      case 35: // End.
      case 36: // Home.
      case 37: // Left arrow.
      case 38: // Up arrow.
      case 39: // Right arrow.
      case 40: // Down arrow.
        return true;

      case 13: // Enter.
        if (cjkFlag && input.value.length > 0) {
          this.populatePopup();
          return false;
        }
        else {
          this.hidePopup(e.keyCode);
        }

        this.hidePopup(e.keyCode);
        this.input.form.submit();
        return true;

      case 9:  // Tab.
      case 27: // Esc.
        this.hidePopup(e.keyCode);
        return true;

      default: // All other keys.
        if (!cjkFlag && input.value.length > 0 && lcharFlag === null){
          // Immediate populate with non-CJK characters.
          this.populatePopup();
        }
        else {
          this.hidePopup(e.keyCode);
        }
        return true;
    }
  };

  /**
   * Overwrites default AJAX autocomplete error handling to fail silently rather
   * than alert an error. This code block can be removed once the following core
   * issue is resolved.
   *
   * @see http://drupal.org/node/1232416
   */
  $(document).ready(function() {
    $.ajaxSetup({
      beforeSend: function(jqXHR, settings) {
        settings.error = function(jqXHR, textStatus, errorThrown) {
          // If no console exists (IE), fake one.
          if (typeof console === 'undefined') {
            console = {};
            'log info warn error dir clear'.replace(/\w+/g,function(f) {
              if (!(f in console)) console[f] = console.log||new Function;
            });
          }
          console.log('ajax error: ' + textStatus);
        };
      }
    });
  });
}) (jQuery);
;
(function ($) {
Drupal.behaviors.lang_dropdown = {
  attach: function (context, settings) {
    var settings = settings || Drupal.settings;

    if (settings.lang_dropdown) {
      var flags = settings.lang_dropdown.jsWidget.languageicons;
      if (flags) {
        $.each(flags, function(index, value) {
          $('select.lang-dropdown-select-element option[value="' + index + '"]').attr('title', value);
        });
      }
      var msddSettings = settings.lang_dropdown.jsWidget;

      $('select.lang-dropdown-select-element').msDropDown({
        visibleRows: msddSettings.visibleRows,
        rowHeight: msddSettings.rowHeight,
        animStyle: msddSettings.animStyle,
        mainCSS: msddSettings.mainCSS
      });
    }

    try {
      $('select.lang-dropdown-select-element').change(function() {
        var lang = this.options[this.selectedIndex].value;
        var href = $(this).parents('form').find('input[name="' + lang + '"]').val();
        window.location.href = href;
      });
    } catch (e) {
      if (console) { console.log(e); }
    }

    $('form#lang-dropdown-form').after('<div style="clear:both;"></div>');
  }
};
})(jQuery);
;
/**
 * Display a message highlighting the language drop down when the browser's
 * language preference does not match the current page and a translation exists.
 */
(function($) {
  $(document).ready(function() {
    var maxRepeats = Drupal.settings.lang_dropdown_remind.repeat;
    var repeated = (function() {
      var parts = document.cookie.split('langDropdownReminded=');
      return parts.length == 2 ? parts.pop().split(';').shift() : 0;
    })();

    // Ensure we only show the message as many times as specified
    if (repeated < maxRepeats) {
      Drupal.getLanguagePreference(function(langPref) {
        // Support XHTML and HTML5 language identification methods.
        var docLang = $('html').attr('xml:lang') || $('html').attr('lang');

        // Ignore language locales for now.
        var langOnly = langPref.substr(0, 2);

        // We care if the language preference and document language don't match.
        if (docLang.indexOf(langOnly) == -1) {
          // Note: lang_dropdown 1.x uses the former while 2.x uses the latter.
          var $input = $('#lang-dropdown-form input[name^="' + langOnly + '"], #lang_dropdown_form_language input[name^="' + langOnly + '"]');

          // Furthermore, we only care if an appropriate translation exists.
          if ($input.length !== 0 && $input.attr('value').indexOf('node') == -1) {
            // Create, insert, and display the message.
            var message = Drupal.settings.lang_dropdown_remind.messages[langOnly] || Drupal.settings.lang_dropdown_remind.messages['default'];
            var closeMsg = Drupal.settings.lang_dropdown_remind.close[langOnly] || Drupal.settings.lang_dropdown_remind.close['default'];
            var close = '<a id="langdropdown-reminder-close">' + closeMsg + '</a>';
            var $markup = $('<div id="langdropdown-reminder">' +
              Drupal.settings.lang_dropdown_remind.markup.replace('!message', message).replace('!close_button', close) +
              '</div>');
            $markup.hide();
            $(Drupal.settings.lang_dropdown_remind.prependto).prepend($markup);
            // Triggering a custom event that can be used for custom interaction
            // in a theme.
            $(Drupal.settings.lang_dropdown_remind.prependto).trigger('lang_dropdown_remind_ready');

            $('#langdropdown-reminder').slideDown();

            // Allow something to trigger opening of the language dropdown.
            $('#trigger-langdropdown').click(function() {$('#edit-lang-dropdown-select_child').toggle();});

            // Behavior for the "close" button.
            $('#langdropdown-reminder-close').click(function() {
              $('#langdropdown-reminder').slideUp();

              // Ensure the language switcher dropdown is also gone (otherwise,
              // it would be awkwardly stuck open with no way to close it).
              $('#edit-lang-dropdown-select_child').css('display', '');

              // If a user physically clicked the "close" button, don't ever
              // display the reminder again (for this session).
              document.cookie = 'langDropdownReminded=' + maxRepeats + '; path=/';
            });

            // Increment the repeated value in the cookie.
            document.cookie = 'langDropdownReminded=' + ++repeated + '; path=/';
          }
        }
      });
    }
  });
})(jQuery);
;
(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).removeClass('views-slideshow-controls-text-status-play');
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).addClass('views-slideshow-controls-text-status-pause');
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).removeClass('views-slideshow-controls-text-status-pause');
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).addClass('views-slideshow-controls-text-status-play');
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager != "undefined" && typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager != "undefined" && typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            };

            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            };

            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    };

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;
tabAjaxMenu = function(data) {
  (function($) {
     
  })(jQuery);
};
;
/**
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * @license Copyright (c) 2007-2012 M. Alsup
 * Version: 2.9999.81 (15-JAN-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */
;(function(e,t){"use strict";function r(t){if(e.fn.cycle.debug)i(t)}function i(){if(window.console&&console.log)console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function s(t,n,r){var i=e(t).data("cycle.opts");if(!i)return;var s=!!t.cyclePause;if(s&&i.paused)i.paused(t,i,n,r);else if(!s&&i.resumed)i.resumed(t,i,n,r)}function o(n,r,o){function l(t,n,r){if(!t&&n===true){var s=e(r).data("cycle.opts");if(!s){i("options not found, can not resume");return false}if(r.cycleTimeout){clearTimeout(r.cycleTimeout);r.cycleTimeout=0}p(s.elements,s,1,!s.backwards)}}if(n.cycleStop===t)n.cycleStop=0;if(r===t||r===null)r={};if(r.constructor==String){switch(r){case"destroy":case"stop":var u=e(n).data("cycle.opts");if(!u)return false;n.cycleStop++;if(n.cycleTimeout)clearTimeout(n.cycleTimeout);n.cycleTimeout=0;if(u.elements)e(u.elements).stop();e(n).removeData("cycle.opts");if(r=="destroy")a(n,u);return false;case"toggle":n.cyclePause=n.cyclePause===1?0:1;l(n.cyclePause,o,n);s(n);return false;case"pause":n.cyclePause=1;s(n);return false;case"resume":n.cyclePause=0;l(false,o,n);s(n);return false;case"prev":case"next":u=e(n).data("cycle.opts");if(!u){i('options not found, "prev/next" ignored');return false}e.fn.cycle[r](u);return false;default:r={fx:r}}return r}else if(r.constructor==Number){var f=r;r=e(n).data("cycle.opts");if(!r){i("options not found, can not advance slide");return false}if(f<0||f>=r.elements.length){i("invalid slide index: "+f);return false}r.nextSlide=f;if(n.cycleTimeout){clearTimeout(n.cycleTimeout);n.cycleTimeout=0}if(typeof o=="string")r.oneTimeFx=o;p(r.elements,r,1,f>=r.currSlide);return false}return r}function u(t,n){if(!e.support.opacity&&n.cleartype&&t.style.filter){try{t.style.removeAttribute("filter")}catch(r){}}}function a(t,n){if(n.next)e(n.next).unbind(n.prevNextEvent);if(n.prev)e(n.prev).unbind(n.prevNextEvent);if(n.pager||n.pagerAnchorBuilder)e.each(n.pagerAnchors||[],function(){this.unbind().remove()});n.pagerAnchors=null;e(t).unbind("mouseenter.cycle mouseleave.cycle");if(n.destroy)n.destroy(n)}function f(n,r,o,a,f){var d;var y=e.extend({},e.fn.cycle.defaults,a||{},e.metadata?n.metadata():e.meta?n.data():{});var b=e.isFunction(n.data)?n.data(y.metaAttr):null;if(b)y=e.extend(y,b);if(y.autostop)y.countdown=y.autostopCount||o.length;var w=n[0];n.data("cycle.opts",y);y.$cont=n;y.stopCount=w.cycleStop;y.elements=o;y.before=y.before?[y.before]:[];y.after=y.after?[y.after]:[];if(!e.support.opacity&&y.cleartype)y.after.push(function(){u(this,y)});if(y.continuous)y.after.push(function(){p(o,y,0,!y.backwards)});l(y);if(!e.support.opacity&&y.cleartype&&!y.cleartypeNoBg)g(r);if(n.css("position")=="static")n.css("position","relative");if(y.width)n.width(y.width);if(y.height&&y.height!="auto")n.height(y.height);if(y.startingSlide!==t){y.startingSlide=parseInt(y.startingSlide,10);if(y.startingSlide>=o.length||y.startSlide<0)y.startingSlide=0;else d=true}else if(y.backwards)y.startingSlide=o.length-1;else y.startingSlide=0;if(y.random){y.randomMap=[];for(var E=0;E<o.length;E++)y.randomMap.push(E);y.randomMap.sort(function(e,t){return Math.random()-.5});if(d){for(var S=0;S<o.length;S++){if(y.startingSlide==y.randomMap[S]){y.randomIndex=S}}}else{y.randomIndex=1;y.startingSlide=y.randomMap[1]}}else if(y.startingSlide>=o.length)y.startingSlide=0;y.currSlide=y.startingSlide||0;var x=y.startingSlide;r.css({position:"absolute",top:0,left:0}).hide().each(function(t){var n;if(y.backwards)n=x?t<=x?o.length+(t-x):x-t:o.length-t;else n=x?t>=x?o.length-(t-x):x-t:o.length-t;e(this).css("z-index",n)});e(o[x]).css("opacity",1).show();u(o[x],y);if(y.fit){if(!y.aspect){if(y.width)r.width(y.width);if(y.height&&y.height!="auto")r.height(y.height)}else{r.each(function(){var t=e(this);var n=y.aspect===true?t.width()/t.height():y.aspect;if(y.width&&t.width()!=y.width){t.width(y.width);t.height(y.width/n)}if(y.height&&t.height()<y.height){t.height(y.height);t.width(y.height*n)}})}}if(y.center&&(!y.fit||y.aspect)){r.each(function(){var t=e(this);t.css({"margin-left":y.width?(y.width-t.width())/2+"px":0,"margin-top":y.height?(y.height-t.height())/2+"px":0})})}if(y.center&&!y.fit&&!y.slideResize){r.each(function(){var t=e(this);t.css({"margin-left":y.width?(y.width-t.width())/2+"px":0,"margin-top":y.height?(y.height-t.height())/2+"px":0})})}var T=(y.containerResize||y.containerResizeHeight)&&!n.innerHeight();if(T){var N=0,C=0;for(var k=0;k<o.length;k++){var L=e(o[k]),A=L[0],O=L.outerWidth(),M=L.outerHeight();if(!O)O=A.offsetWidth||A.width||L.attr("width");if(!M)M=A.offsetHeight||A.height||L.attr("height");N=O>N?O:N;C=M>C?M:C}if(y.containerResize&&N>0&&C>0)n.css({width:N+"px",height:C+"px"});if(y.containerResizeHeight&&C>0)n.css({height:C+"px"})}var _=false;if(y.pause)n.bind("mouseenter.cycle",function(){_=true;this.cyclePause++;s(w,true)}).bind("mouseleave.cycle",function(){if(_)this.cyclePause--;s(w,true)});if(c(y)===false)return false;var D=false;a.requeueAttempts=a.requeueAttempts||0;r.each(function(){var t=e(this);this.cycleH=y.fit&&y.height?y.height:t.height()||this.offsetHeight||this.height||t.attr("height")||0;this.cycleW=y.fit&&y.width?y.width:t.width()||this.offsetWidth||this.width||t.attr("width")||0;if(t.is("img")){var n=this.cycleH===0&&this.cycleW===0&&!this.complete;if(n){if(f.s&&y.requeueOnImageNotLoaded&&++a.requeueAttempts<100){i(a.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){e(f.s,f.c).cycle(a)},y.requeueTimeout);D=true;return false}else{i("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}}return true});if(D)return false;y.cssBefore=y.cssBefore||{};y.cssAfter=y.cssAfter||{};y.cssFirst=y.cssFirst||{};y.animIn=y.animIn||{};y.animOut=y.animOut||{};r.not(":eq("+x+")").css(y.cssBefore);e(r[x]).css(y.cssFirst);if(y.timeout){y.timeout=parseInt(y.timeout,10);if(y.speed.constructor==String)y.speed=e.fx.speeds[y.speed]||parseInt(y.speed,10);if(!y.sync)y.speed=y.speed/2;var P=y.fx=="none"?0:y.fx=="shuffle"?500:250;while(y.timeout-y.speed<P)y.timeout+=y.speed}if(y.easing)y.easeIn=y.easeOut=y.easing;if(!y.speedIn)y.speedIn=y.speed;if(!y.speedOut)y.speedOut=y.speed;y.slideCount=o.length;y.currSlide=y.lastSlide=x;if(y.random){if(++y.randomIndex==o.length)y.randomIndex=0;y.nextSlide=y.randomMap[y.randomIndex]}else if(y.backwards)y.nextSlide=y.startingSlide===0?o.length-1:y.startingSlide-1;else y.nextSlide=y.startingSlide>=o.length-1?0:y.startingSlide+1;if(!y.multiFx){var H=e.fn.cycle.transitions[y.fx];if(e.isFunction(H))H(n,r,y);else if(y.fx!="custom"&&!y.multiFx){i("unknown transition: "+y.fx,"; slideshow terminating");return false}}var B=r[x];if(!y.skipInitializationCallbacks){if(y.before.length)y.before[0].apply(B,[B,B,y,true]);if(y.after.length)y.after[0].apply(B,[B,B,y,true])}if(y.next)e(y.next).bind(y.prevNextEvent,function(){return v(y,1)});if(y.prev)e(y.prev).bind(y.prevNextEvent,function(){return v(y,0)});if(y.pager||y.pagerAnchorBuilder)m(o,y);h(y,o);return y}function l(t){t.original={before:[],after:[]};t.original.cssBefore=e.extend({},t.cssBefore);t.original.cssAfter=e.extend({},t.cssAfter);t.original.animIn=e.extend({},t.animIn);t.original.animOut=e.extend({},t.animOut);e.each(t.before,function(){t.original.before.push(this)});e.each(t.after,function(){t.original.after.push(this)})}function c(t){var n,s,o=e.fn.cycle.transitions;if(t.fx.indexOf(",")>0){t.multiFx=true;t.fxs=t.fx.replace(/\s*/g,"").split(",");for(n=0;n<t.fxs.length;n++){var u=t.fxs[n];s=o[u];if(!s||!o.hasOwnProperty(u)||!e.isFunction(s)){i("discarding unknown transition: ",u);t.fxs.splice(n,1);n--}}if(!t.fxs.length){i("No valid transitions named; slideshow terminating.");return false}}else if(t.fx=="all"){t.multiFx=true;t.fxs=[];for(var a in o){if(o.hasOwnProperty(a)){s=o[a];if(o.hasOwnProperty(a)&&e.isFunction(s))t.fxs.push(a)}}}if(t.multiFx&&t.randomizeEffects){var f=Math.floor(Math.random()*20)+30;for(n=0;n<f;n++){var l=Math.floor(Math.random()*t.fxs.length);t.fxs.push(t.fxs.splice(l,1)[0])}r("randomized fx sequence: ",t.fxs)}return true}function h(t,n){t.addSlide=function(r,i){var s=e(r),o=s[0];if(!t.autostopCount)t.countdown++;n[i?"unshift":"push"](o);if(t.els)t.els[i?"unshift":"push"](o);t.slideCount=n.length;if(t.random){t.randomMap.push(t.slideCount-1);t.randomMap.sort(function(e,t){return Math.random()-.5})}s.css("position","absolute");s[i?"prependTo":"appendTo"](t.$cont);if(i){t.currSlide++;t.nextSlide++}if(!e.support.opacity&&t.cleartype&&!t.cleartypeNoBg)g(s);if(t.fit&&t.width)s.width(t.width);if(t.fit&&t.height&&t.height!="auto")s.height(t.height);o.cycleH=t.fit&&t.height?t.height:s.height();o.cycleW=t.fit&&t.width?t.width:s.width();s.css(t.cssBefore);if(t.pager||t.pagerAnchorBuilder)e.fn.cycle.createPagerAnchor(n.length-1,o,e(t.pager),n,t);if(e.isFunction(t.onAddSlide))t.onAddSlide(s);else s.hide()}}function p(n,i,s,o){function m(){var e=0,t=i.timeout;if(i.timeout&&!i.continuous){e=d(n[i.currSlide],n[i.nextSlide],i,o);if(i.fx=="shuffle")e-=i.speedOut}else if(i.continuous&&u.cyclePause)e=10;if(e>0)u.cycleTimeout=setTimeout(function(){p(n,i,0,!i.backwards)},e)}var u=i.$cont[0],a=n[i.currSlide],f=n[i.nextSlide];if(s&&i.busy&&i.manualTrump){r("manualTrump in go(), stopping active transition");e(n).stop(true,true);i.busy=0;clearTimeout(u.cycleTimeout)}if(i.busy){r("transition active, ignoring new tx request");return}if(u.cycleStop!=i.stopCount||u.cycleTimeout===0&&!s)return;if(!s&&!u.cyclePause&&!i.bounce&&(i.autostop&&--i.countdown<=0||i.nowrap&&!i.random&&i.nextSlide<i.currSlide)){if(i.end)i.end(i);return}var l=false;if((s||!u.cyclePause)&&i.nextSlide!=i.currSlide){l=true;var c=i.fx;a.cycleH=a.cycleH||e(a).height();a.cycleW=a.cycleW||e(a).width();f.cycleH=f.cycleH||e(f).height();f.cycleW=f.cycleW||e(f).width();if(i.multiFx){if(o&&(i.lastFx===t||++i.lastFx>=i.fxs.length))i.lastFx=0;else if(!o&&(i.lastFx===t||--i.lastFx<0))i.lastFx=i.fxs.length-1;c=i.fxs[i.lastFx]}if(i.oneTimeFx){c=i.oneTimeFx;i.oneTimeFx=null}e.fn.cycle.resetState(i,c);if(i.before.length)e.each(i.before,function(e,t){if(u.cycleStop!=i.stopCount)return;t.apply(f,[a,f,i,o])});var h=function(){i.busy=0;e.each(i.after,function(e,t){if(u.cycleStop!=i.stopCount)return;t.apply(f,[a,f,i,o])});if(!u.cycleStop){m()}};r("tx firing("+c+"); currSlide: "+i.currSlide+"; nextSlide: "+i.nextSlide);i.busy=1;if(i.fxFn)i.fxFn(a,f,i,h,o,s&&i.fastOnEvent);else if(e.isFunction(e.fn.cycle[i.fx]))e.fn.cycle[i.fx](a,f,i,h,o,s&&i.fastOnEvent);else e.fn.cycle.custom(a,f,i,h,o,s&&i.fastOnEvent)}else{m()}if(l||i.nextSlide==i.currSlide){var v;i.lastSlide=i.currSlide;if(i.random){i.currSlide=i.nextSlide;if(++i.randomIndex==n.length){i.randomIndex=0;i.randomMap.sort(function(e,t){return Math.random()-.5})}i.nextSlide=i.randomMap[i.randomIndex];if(i.nextSlide==i.currSlide)i.nextSlide=i.currSlide==i.slideCount-1?0:i.currSlide+1}else if(i.backwards){v=i.nextSlide-1<0;if(v&&i.bounce){i.backwards=!i.backwards;i.nextSlide=1;i.currSlide=0}else{i.nextSlide=v?n.length-1:i.nextSlide-1;i.currSlide=v?0:i.nextSlide+1}}else{v=i.nextSlide+1==n.length;if(v&&i.bounce){i.backwards=!i.backwards;i.nextSlide=n.length-2;i.currSlide=n.length-1}else{i.nextSlide=v?0:i.nextSlide+1;i.currSlide=v?n.length-1:i.nextSlide-1}}}if(l&&i.pager)i.updateActivePagerLink(i.pager,i.currSlide,i.activePagerClass)}function d(e,t,n,i){if(n.timeoutFn){var s=n.timeoutFn.call(e,e,t,n,i);while(n.fx!="none"&&s-n.speed<250)s+=n.speed;r("calculated timeout: "+s+"; speed: "+n.speed);if(s!==false)return s}return n.timeout}function v(t,n){var r=n?1:-1;var i=t.elements;var s=t.$cont[0],o=s.cycleTimeout;if(o){clearTimeout(o);s.cycleTimeout=0}if(t.random&&r<0){t.randomIndex--;if(--t.randomIndex==-2)t.randomIndex=i.length-2;else if(t.randomIndex==-1)t.randomIndex=i.length-1;t.nextSlide=t.randomMap[t.randomIndex]}else if(t.random){t.nextSlide=t.randomMap[t.randomIndex]}else{t.nextSlide=t.currSlide+r;if(t.nextSlide<0){if(t.nowrap)return false;t.nextSlide=i.length-1}else if(t.nextSlide>=i.length){if(t.nowrap)return false;t.nextSlide=0}}var u=t.onPrevNextEvent||t.prevNextClick;if(e.isFunction(u))u(r>0,t.nextSlide,i[t.nextSlide]);p(i,t,1,n);return false}function m(t,n){var r=e(n.pager);e.each(t,function(i,s){e.fn.cycle.createPagerAnchor(i,s,r,t,n)});n.updateActivePagerLink(n.pager,n.startingSlide,n.activePagerClass)}function g(t){function n(e){e=parseInt(e,10).toString(16);return e.length<2?"0"+e:e}function i(t){for(;t&&t.nodeName.toLowerCase()!="html";t=t.parentNode){var r=e.css(t,"background-color");if(r&&r.indexOf("rgb")>=0){var i=r.match(/\d+/g);return"#"+n(i[0])+n(i[1])+n(i[2])}if(r&&r!="transparent")return r}return"#ffffff"}r("applying clearType background-color hack");t.each(function(){e(this).css("background-color",i(this))})}var n="2.9999.81";e.expr[":"].paused=function(e){return e.cyclePause};e.fn.cycle=function(t,n){var s={s:this.selector,c:this.context};if(this.length===0&&t!="stop"){if(!e.isReady&&s.s){i("DOM not ready, queuing slideshow");e(function(){e(s.s,s.c).cycle(t,n)});return this}i("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var u=o(this,t,n);if(u===false)return;u.updateActivePagerLink=u.updateActivePagerLink||e.fn.cycle.updateActivePagerLink;if(this.cycleTimeout)clearTimeout(this.cycleTimeout);this.cycleTimeout=this.cyclePause=0;this.cycleStop=0;var a=e(this);var l=u.slideExpr?e(u.slideExpr,this):a.children();var c=l.get();if(c.length<2){i("terminating; too few slides: "+c.length);return}var h=f(a,l,c,u,s);if(h===false)return;var v=h.continuous?10:d(c[h.currSlide],c[h.nextSlide],h,!h.backwards);if(v){v+=h.delay||0;if(v<10)v=10;r("first timeout: "+v);this.cycleTimeout=setTimeout(function(){p(c,h,0,!u.backwards)},v)}})};e.fn.cycle.resetState=function(t,n){n=n||t.fx;t.before=[];t.after=[];t.cssBefore=e.extend({},t.original.cssBefore);t.cssAfter=e.extend({},t.original.cssAfter);t.animIn=e.extend({},t.original.animIn);t.animOut=e.extend({},t.original.animOut);t.fxFn=null;e.each(t.original.before,function(){t.before.push(this)});e.each(t.original.after,function(){t.after.push(this)});var r=e.fn.cycle.transitions[n];if(e.isFunction(r))r(t.$cont,e(t.elements),t)};e.fn.cycle.updateActivePagerLink=function(t,n,r){e(t).each(function(){e(this).children().removeClass(r).eq(n).addClass(r)})};e.fn.cycle.next=function(e){v(e,1)};e.fn.cycle.prev=function(e){v(e,0)};e.fn.cycle.createPagerAnchor=function(t,n,i,o,u){var a;if(e.isFunction(u.pagerAnchorBuilder)){a=u.pagerAnchorBuilder(t,n);r("pagerAnchorBuilder("+t+", el) returned: "+a)}else a='<a href="#">'+(t+1)+"</a>";if(!a)return;var f=e(a);if(f.parents("body").length===0){var l=[];if(i.length>1){i.each(function(){var t=f.clone(true);e(this).append(t);l.push(t[0])});f=e(l)}else{f.appendTo(i)}}u.pagerAnchors=u.pagerAnchors||[];u.pagerAnchors.push(f);var c=function(n){n.preventDefault();u.nextSlide=t;var r=u.$cont[0],i=r.cycleTimeout;if(i){clearTimeout(i);r.cycleTimeout=0}var s=u.onPagerEvent||u.pagerClick;if(e.isFunction(s))s(u.nextSlide,o[u.nextSlide]);p(o,u,1,u.currSlide<t)};if(/mouseenter|mouseover/i.test(u.pagerEvent)){f.hover(c,function(){})}else{f.bind(u.pagerEvent,c)}if(!/^click/.test(u.pagerEvent)&&!u.allowPagerClickBubble)f.bind("click.cycle",function(){return false});var h=u.$cont[0];var d=false;if(u.pauseOnPagerHover){f.hover(function(){d=true;h.cyclePause++;s(h,true,true)},function(){if(d)h.cyclePause--;s(h,true,true)})}};e.fn.cycle.hopsFromLast=function(e,t){var n,r=e.lastSlide,i=e.currSlide;if(t)n=i>r?i-r:e.slideCount-r;else n=i<r?r-i:r+e.slideCount-i;return n};e.fn.cycle.commonReset=function(t,n,r,i,s,o){e(r.elements).not(t).hide();if(typeof r.cssBefore.opacity=="undefined")r.cssBefore.opacity=1;r.cssBefore.display="block";if(r.slideResize&&i!==false&&n.cycleW>0)r.cssBefore.width=n.cycleW;if(r.slideResize&&s!==false&&n.cycleH>0)r.cssBefore.height=n.cycleH;r.cssAfter=r.cssAfter||{};r.cssAfter.display="none";e(t).css("zIndex",r.slideCount+(o===true?1:0));e(n).css("zIndex",r.slideCount+(o===true?0:1))};e.fn.cycle.custom=function(t,n,r,i,s,o){var u=e(t),a=e(n);var f=r.speedIn,l=r.speedOut,c=r.easeIn,h=r.easeOut;a.css(r.cssBefore);if(o){if(typeof o=="number")f=l=o;else f=l=1;c=h=null}var p=function(){a.animate(r.animIn,f,c,function(){i()})};u.animate(r.animOut,l,h,function(){u.css(r.cssAfter);if(!r.sync)p()});if(r.sync)p()};e.fn.cycle.transitions={fade:function(t,n,r){n.not(":eq("+r.currSlide+")").css("opacity",0);r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.cssBefore.opacity=0});r.animIn={opacity:1};r.animOut={opacity:0};r.cssBefore={top:0,left:0}}};e.fn.cycle.ver=function(){return n};e.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animOut:null,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!e.support.opacity,cleartypeNoBg:false,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:t,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);(function(e){"use strict";e.fn.cycle.transitions.none=function(t,n,r){r.fxFn=function(t,n,r,i){e(n).show();e(t).hide();i()}};e.fn.cycle.transitions.fadeout=function(t,n,r){n.not(":eq("+r.currSlide+")").css({display:"block",opacity:1});r.before.push(function(t,n,r,i,s,o){e(t).css("zIndex",r.slideCount+(o!==true?1:0));e(n).css("zIndex",r.slideCount+(o!==true?0:1))});r.animIn.opacity=1;r.animOut.opacity=0;r.cssBefore.opacity=1;r.cssBefore.display="block";r.cssAfter.zIndex=0};e.fn.cycle.transitions.scrollUp=function(t,n,r){t.css("overflow","hidden");r.before.push(e.fn.cycle.commonReset);var i=t.height();r.cssBefore.top=i;r.cssBefore.left=0;r.cssFirst.top=0;r.animIn.top=0;r.animOut.top=-i};e.fn.cycle.transitions.scrollDown=function(t,n,r){t.css("overflow","hidden");r.before.push(e.fn.cycle.commonReset);var i=t.height();r.cssFirst.top=0;r.cssBefore.top=-i;r.cssBefore.left=0;r.animIn.top=0;r.animOut.top=i};e.fn.cycle.transitions.scrollLeft=function(t,n,r){t.css("overflow","hidden");r.before.push(e.fn.cycle.commonReset);var i=t.width();r.cssFirst.left=0;r.cssBefore.left=i;r.cssBefore.top=0;r.animIn.left=0;r.animOut.left=0-i};e.fn.cycle.transitions.scrollRight=function(t,n,r){t.css("overflow","hidden");r.before.push(e.fn.cycle.commonReset);var i=t.width();r.cssFirst.left=0;r.cssBefore.left=-i;r.cssBefore.top=0;r.animIn.left=0;r.animOut.left=i};e.fn.cycle.transitions.scrollHorz=function(t,n,r){t.css("overflow","hidden").width();r.before.push(function(t,n,r,i){if(r.rev)i=!i;e.fn.cycle.commonReset(t,n,r);r.cssBefore.left=i?n.cycleW-1:1-n.cycleW;r.animOut.left=i?-t.cycleW:t.cycleW});r.cssFirst.left=0;r.cssBefore.top=0;r.animIn.left=0;r.animOut.top=0};e.fn.cycle.transitions.scrollVert=function(t,n,r){t.css("overflow","hidden");r.before.push(function(t,n,r,i){if(r.rev)i=!i;e.fn.cycle.commonReset(t,n,r);r.cssBefore.top=i?1-n.cycleH:n.cycleH-1;r.animOut.top=i?t.cycleH:-t.cycleH});r.cssFirst.top=0;r.cssBefore.left=0;r.animIn.top=0;r.animOut.left=0};e.fn.cycle.transitions.slideX=function(t,n,r){r.before.push(function(t,n,r){e(r.elements).not(t).hide();e.fn.cycle.commonReset(t,n,r,false,true);r.animIn.width=n.cycleW});r.cssBefore.left=0;r.cssBefore.top=0;r.cssBefore.width=0;r.animIn.width="show";r.animOut.width=0};e.fn.cycle.transitions.slideY=function(t,n,r){r.before.push(function(t,n,r){e(r.elements).not(t).hide();e.fn.cycle.commonReset(t,n,r,true,false);r.animIn.height=n.cycleH});r.cssBefore.left=0;r.cssBefore.top=0;r.cssBefore.height=0;r.animIn.height="show";r.animOut.height=0};e.fn.cycle.transitions.shuffle=function(t,n,r){var i,s=t.css("overflow","visible").width();n.css({left:0,top:0});r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,true,true,true)});if(!r.speedAdjusted){r.speed=r.speed/2;r.speedAdjusted=true}r.random=0;r.shuffle=r.shuffle||{left:-s,top:15};r.els=[];for(i=0;i<n.length;i++)r.els.push(n[i]);for(i=0;i<r.currSlide;i++)r.els.push(r.els.shift());r.fxFn=function(t,n,r,i,s){if(r.rev)s=!s;var o=s?e(t):e(n);e(n).css(r.cssBefore);var u=r.slideCount;o.animate(r.shuffle,r.speedIn,r.easeIn,function(){var n=e.fn.cycle.hopsFromLast(r,s);for(var a=0;a<n;a++){if(s)r.els.push(r.els.shift());else r.els.unshift(r.els.pop())}if(s){for(var f=0,l=r.els.length;f<l;f++)e(r.els[f]).css("z-index",l-f+u)}else{var c=e(t).css("z-index");o.css("z-index",parseInt(c,10)+1+u)}o.animate({left:0,top:0},r.speedOut,r.easeOut,function(){e(s?this:t).hide();if(i)i()})})};e.extend(r.cssBefore,{display:"block",opacity:1,top:0,left:0})};e.fn.cycle.transitions.turnUp=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,true,false);r.cssBefore.top=n.cycleH;r.animIn.height=n.cycleH;r.animOut.width=n.cycleW});r.cssFirst.top=0;r.cssBefore.left=0;r.cssBefore.height=0;r.animIn.top=0;r.animOut.height=0};e.fn.cycle.transitions.turnDown=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,true,false);r.animIn.height=n.cycleH;r.animOut.top=t.cycleH});r.cssFirst.top=0;r.cssBefore.left=0;r.cssBefore.top=0;r.cssBefore.height=0;r.animOut.height=0};e.fn.cycle.transitions.turnLeft=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,false,true);r.cssBefore.left=n.cycleW;r.animIn.width=n.cycleW});r.cssBefore.top=0;r.cssBefore.width=0;r.animIn.left=0;r.animOut.width=0};e.fn.cycle.transitions.turnRight=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,false,true);r.animIn.width=n.cycleW;r.animOut.left=t.cycleW});e.extend(r.cssBefore,{top:0,left:0,width:0});r.animIn.left=0;r.animOut.width=0};e.fn.cycle.transitions.zoom=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,false,false,true);r.cssBefore.top=n.cycleH/2;r.cssBefore.left=n.cycleW/2;e.extend(r.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH});e.extend(r.animOut,{width:0,height:0,top:t.cycleH/2,left:t.cycleW/2})});r.cssFirst.top=0;r.cssFirst.left=0;r.cssBefore.width=0;r.cssBefore.height=0};e.fn.cycle.transitions.fadeZoom=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,false,false);r.cssBefore.left=n.cycleW/2;r.cssBefore.top=n.cycleH/2;e.extend(r.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH})});r.cssBefore.width=0;r.cssBefore.height=0;r.animOut.opacity=0};e.fn.cycle.transitions.blindX=function(t,n,r){var i=t.css("overflow","hidden").width();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.animIn.width=n.cycleW;r.animOut.left=t.cycleW});r.cssBefore.left=i;r.cssBefore.top=0;r.animIn.left=0;r.animOut.left=i};e.fn.cycle.transitions.blindY=function(t,n,r){var i=t.css("overflow","hidden").height();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.animIn.height=n.cycleH;r.animOut.top=t.cycleH});r.cssBefore.top=i;r.cssBefore.left=0;r.animIn.top=0;r.animOut.top=i};e.fn.cycle.transitions.blindZ=function(t,n,r){var i=t.css("overflow","hidden").height();var s=t.width();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.animIn.height=n.cycleH;r.animOut.top=t.cycleH});r.cssBefore.top=i;r.cssBefore.left=s;r.animIn.top=0;r.animIn.left=0;r.animOut.top=i;r.animOut.left=s};e.fn.cycle.transitions.growX=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,false,true);r.cssBefore.left=this.cycleW/2;r.animIn.left=0;r.animIn.width=this.cycleW;r.animOut.left=0});r.cssBefore.top=0;r.cssBefore.width=0};e.fn.cycle.transitions.growY=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,true,false);r.cssBefore.top=this.cycleH/2;r.animIn.top=0;r.animIn.height=this.cycleH;r.animOut.top=0});r.cssBefore.height=0;r.cssBefore.left=0};e.fn.cycle.transitions.curtainX=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,false,true,true);r.cssBefore.left=n.cycleW/2;r.animIn.left=0;r.animIn.width=this.cycleW;r.animOut.left=t.cycleW/2;r.animOut.width=0});r.cssBefore.top=0;r.cssBefore.width=0};e.fn.cycle.transitions.curtainY=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,true,false,true);r.cssBefore.top=n.cycleH/2;r.animIn.top=0;r.animIn.height=n.cycleH;r.animOut.top=t.cycleH/2;r.animOut.height=0});r.cssBefore.height=0;r.cssBefore.left=0};e.fn.cycle.transitions.cover=function(t,n,r){var i=r.direction||"left";var s=t.css("overflow","hidden").width();var o=t.height();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.cssAfter.display="";if(i=="right")r.cssBefore.left=-s;else if(i=="up")r.cssBefore.top=o;else if(i=="down")r.cssBefore.top=-o;else r.cssBefore.left=s});r.animIn.left=0;r.animIn.top=0;r.cssBefore.top=0;r.cssBefore.left=0};e.fn.cycle.transitions.uncover=function(t,n,r){var i=r.direction||"left";var s=t.css("overflow","hidden").width();var o=t.height();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,true,true,true);if(i=="right")r.animOut.left=s;else if(i=="up")r.animOut.top=-o;else if(i=="down")r.animOut.top=o;else r.animOut.left=-s});r.animIn.left=0;r.animIn.top=0;r.cssBefore.top=0;r.cssBefore.left=0};e.fn.cycle.transitions.toss=function(t,n,r){var i=t.css("overflow","visible").width();var s=t.height();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,true,true,true);if(!r.animOut.left&&!r.animOut.top)e.extend(r.animOut,{left:i*2,top:-s/2,opacity:0});else r.animOut.opacity=0});r.cssBefore.left=0;r.cssBefore.top=0;r.animIn.left=0};e.fn.cycle.transitions.wipe=function(t,n,r){var i=t.css("overflow","hidden").width();var s=t.height();r.cssBefore=r.cssBefore||{};var o;if(r.clip){if(/l2r/.test(r.clip))o="rect(0px 0px "+s+"px 0px)";else if(/r2l/.test(r.clip))o="rect(0px "+i+"px "+s+"px "+i+"px)";else if(/t2b/.test(r.clip))o="rect(0px "+i+"px 0px 0px)";else if(/b2t/.test(r.clip))o="rect("+s+"px "+i+"px "+s+"px 0px)";else if(/zoom/.test(r.clip)){var u=parseInt(s/2,10);var a=parseInt(i/2,10);o="rect("+u+"px "+a+"px "+u+"px "+a+"px)"}}r.cssBefore.clip=r.cssBefore.clip||o||"rect(0px 0px 0px 0px)";var f=r.cssBefore.clip.match(/(\d+)/g);var l=parseInt(f[0],10),c=parseInt(f[1],10),h=parseInt(f[2],10),p=parseInt(f[3],10);r.before.push(function(t,n,r){if(t==n)return;var o=e(t),u=e(n);e.fn.cycle.commonReset(t,n,r,true,true,false);r.cssAfter.display="block";var a=1,f=parseInt(r.speedIn/13,10)-1;(function d(){var e=l?l-parseInt(a*(l/f),10):0;var t=p?p-parseInt(a*(p/f),10):0;var n=h<s?h+parseInt(a*((s-h)/f||1),10):s;var r=c<i?c+parseInt(a*((i-c)/f||1),10):i;u.css({clip:"rect("+e+"px "+r+"px "+n+"px "+t+"px)"});a++<=f?setTimeout(d,13):o.css("display","none")})()});e.extend(r.cssBefore,{display:"block",opacity:1,top:0,left:0});r.animIn={left:0};r.animOut={left:0}}})(jQuery);
;
/*
    json2.js
    2012-10-08

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
;

(function($) {

/**
 * Drupal FieldGroup object.
 */
Drupal.FieldGroup = Drupal.FieldGroup || {};
Drupal.FieldGroup.Effects = Drupal.FieldGroup.Effects || {};
Drupal.FieldGroup.groupWithfocus = null;

Drupal.FieldGroup.setGroupWithfocus = function(element) {
  element.css({display: 'block'});
  Drupal.FieldGroup.groupWithfocus = element;
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processFieldset = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.fieldset', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $('legend span.fieldset-legend', $(this)).eq(0).append(' ').append($('.form-required').eq(0).clone());
        }
        if ($('.error', $(this)).length) {
          $('legend span.fieldset-legend', $(this)).eq(0).addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processAccordion = {
  execute: function (context, settings, type) {
    $('div.field-group-accordion-wrapper', context).once('fieldgroup-effects', function () {
      var wrapper = $(this);

      wrapper.accordion({
        autoHeight: false,
        active: '.field-group-accordion-active',
        collapsible: true,
        changestart: function(event, ui) {
          if ($(this).hasClass('effect-none')) {
            ui.options.animated = false;
          }
          else {
            ui.options.animated = 'slide';
          }
        }
      });

      if (type == 'form') {
        // Add required fields mark to any element containing required fields
        wrapper.find('div.accordion-item').each(function(i){
          if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
            $('h3.ui-accordion-header').eq(i).append(' ').append($('.form-required').eq(0).clone());
          }
          if ($('.error', $(this)).length) {
            $('h3.ui-accordion-header').eq(i).addClass('error');
            var activeOne = $(this).parent().accordion("activate" , i);
            $('.ui-accordion-content-active', activeOne).css({height: 'auto', width: 'auto', display: 'block'});
          }
        });
      }
    });
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processHtabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any element containing required fields
      $('fieldset.horizontal-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('horizontalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('horizontalTab').link.parent().addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
          $(this).data('horizontalTab').focus();
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processTabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.vertical-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('verticalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('verticalTab').link.parent().addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
          $(this).data('verticalTab').focus();
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 *
 * TODO clean this up meaning check if this is really
 *      necessary.
 */
Drupal.FieldGroup.Effects.processDiv = {
  execute: function (context, settings, type) {

    $('div.collapsible', context).once('fieldgroup-effects', function() {
      var $wrapper = $(this);

      // Turn the legend into a clickable link, but retain span.field-group-format-toggler
      // for CSS positioning.

      var $toggler = $('span.field-group-format-toggler:first', $wrapper);
      var $link = $('<a class="field-group-format-title" href="#"></a>');
      $link.prepend($toggler.contents());

      // Add required field markers if needed
      if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
        $link.append(' ').append($('.form-required').eq(0).clone());
      }

      $link.appendTo($toggler);

      // .wrapInner() does not retain bound events.
      $link.click(function () {
        var wrapper = $wrapper.get(0);
        // Don't animate multiple times.
        if (!wrapper.animating) {
          wrapper.animating = true;
          var speed = $wrapper.hasClass('speed-fast') ? 300 : 1000;
          if ($wrapper.hasClass('effect-none') && $wrapper.hasClass('speed-none')) {
            $('> .field-group-format-wrapper', wrapper).toggle();
          }
          else if ($wrapper.hasClass('effect-blind')) {
            $('> .field-group-format-wrapper', wrapper).toggle('blind', {}, speed);
          }
          else {
            $('> .field-group-format-wrapper', wrapper).toggle(speed);
          }
          wrapper.animating = false;
        }
        $wrapper.toggleClass('collapsed');
        return false;
      });

    });
  }
};

/**
 * Behaviors.
 */
Drupal.behaviors.fieldGroup = {
  attach: function (context, settings) {
    if (settings.field_group == undefined) {
      return;
    }

    // Execute all of them.
    $.each(Drupal.FieldGroup.Effects, function (func) {
      // We check for a wrapper function in Drupal.field_group as
      // alternative for dynamic string function calls.
      var type = func.toLowerCase().replace("process", "");
      if (settings.field_group[type] != undefined && $.isFunction(this.execute)) {
        this.execute(context, settings, settings.field_group[type]);
      }
    });

    // Fixes css for fieldgroups under vertical tabs.
    $('.fieldset-wrapper .fieldset > legend').css({display: 'block'});
    $('.vertical-tabs fieldset.fieldset').addClass('default-fallback');

  }
};

})(jQuery);;

/**
 *  @file
 *  A simple jQuery Cycle Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
(function ($) {
  Drupal.behaviors.viewsSlideshowCycle = {
    attach: function (context) {
      $('.views_slideshow_cycle_main:not(.viewsSlideshowCycle-processed)', context).addClass('viewsSlideshowCycle-processed').each(function() {
        var fullId = '#' + $(this).attr('id');
        var settings = Drupal.settings.viewsSlideshowCycle[fullId];
        settings.targetId = '#' + $(fullId + " :first").attr('id');

        settings.slideshowId = settings.targetId.replace('#views_slideshow_cycle_teaser_section_', '');
        // Pager after function.
        var pager_after_fn = function(curr, next, opts) {
          // Need to do some special handling on first load.
          var slideNum = opts.currSlide;
          if (typeof settings.processedAfter == 'undefined' || !settings.processedAfter) {
            settings.processedAfter = 1;
            slideNum = (typeof settings.opts.startingSlide == 'undefined') ? 0 : settings.opts.startingSlide;
          }
          Drupal.viewsSlideshow.action({ "action": 'transitionEnd', "slideshowID": settings.slideshowId, "slideNum": slideNum });
        }
        // Pager before function.
        var pager_before_fn = function(curr, next, opts) {
          var slideNum = opts.nextSlide;

          // Remember last slide.
          if (settings.remember_slide) {
            createCookie(settings.vss_id, slideNum, settings.remember_slide_days);
          }

          // Make variable height.
          if (!settings.fixed_height) {
            //get the height of the current slide
            var $ht = $(next).height();
            //set the container's height to that of the current slide
            $(next).parent().animate({height: $ht});
          }

          // Need to do some special handling on first load.
          if (typeof settings.processedBefore == 'undefined' || !settings.processedBefore) {
            settings.processedBefore = 1;
            slideNum = (typeof opts.startingSlide == 'undefined') ? 0 : opts.startingSlide;
          }

          Drupal.viewsSlideshow.action({ "action": 'transitionBegin', "slideshowID": settings.slideshowId, "slideNum": slideNum });
        }
        settings.loaded = false;

        settings.opts = {
          speed:settings.speed,
          timeout:settings.timeout,
          delay:settings.delay,
          sync:settings.sync,
          random:settings.random,
          nowrap:settings.nowrap,
          after:pager_after_fn,
          before:pager_before_fn,
          cleartype:(settings.cleartype)? true : false,
          cleartypeNoBg:(settings.cleartypenobg)? true : false
        }

        // Set the starting slide if we are supposed to remember the slide
        if (settings.remember_slide) {
          var startSlide = readCookie(settings.vss_id);
          if (startSlide == null) {
            startSlide = 0;
          }
          settings.opts.startingSlide = parseInt(startSlide);
        }

        if (settings.effect == 'none') {
          settings.opts.speed = 1;
        }
        else {
          settings.opts.fx = settings.effect;
        }

        // Take starting item from fragment.
        var hash = location.hash;
        if (hash) {
          var hash = hash.replace('#', '');
          var aHash = hash.split(';');
          var aHashLen = aHash.length;

          // Loop through all the possible starting points.
          for (var i = 0; i < aHashLen; i++) {
            // Split the hash into two parts. One part is the slideshow id the
            // other is the slide number.
            var initialInfo = aHash[i].split(':');
            // The id in the hash should match our slideshow.
            // The slide number chosen shouldn't be larger than the number of
            // slides we have.
            if (settings.slideshowId == initialInfo[0] && settings.num_divs > initialInfo[1]) {
              settings.opts.startingSlide = parseInt(initialInfo[1]);
            }
          }
        }

        // Pause on hover.
        if (settings.pause) {
          var mouseIn = function() {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId });
          }

          var mouseOut = function() {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": settings.slideshowId });
          }

          if (jQuery.fn.hoverIntent) {
            $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).hoverIntent(mouseIn, mouseOut);
          }
          else {
            $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).hover(mouseIn, mouseOut);
          }
        }

        // Pause on clicking of the slide.
        if (settings.pause_on_click) {
          $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).click(function() {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId, "force": true });
          });
        }

        if (typeof JSON != 'undefined') {
          var advancedOptions = JSON.parse(settings.advanced_options);
          for (var option in advancedOptions) {
            switch(option) {

              // Standard Options
              case "activePagerClass":
              case "allowPagerClickBubble":
              case "autostop":
              case "autostopCount":
              case "backwards":
              case "bounce":
              case "cleartype":
              case "cleartypeNoBg":
              case "containerResize":
              case "continuous":
              case "delay":
              case "easeIn":
              case "easeOut":
              case "easing":
              case "fastOnEvent":
              case "fit":
              case "fx":
              case "height":
              case "manualTrump":
              case "metaAttr":
              case "next":
              case "nowrap":
              case "pager":
              case "pagerEvent":
              case "pause":
              case "pauseOnPagerHover":
              case "prev":
              case "prevNextEvent":
              case "random":
              case "randomizeEffects":
              case "requeueOnImageNotLoaded":
              case "requeueTimeout":
              case "rev":
              case "slideExpr":
              case "slideResize":
              case "speed":
              case "speedIn":
              case "speedOut":
              case "startingSlide":
              case "sync":
              case "timeout":
              case "width":
                var optionValue = advancedOptions[option];
                optionValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(optionValue);
                settings.opts[option] = optionValue;
                break;

              // These process options that look like {top:50, bottom:20}
              case "animIn":
              case "animOut":
              case "cssBefore":
              case "cssAfter":
              case "shuffle":
                var cssValue = advancedOptions[option];
                cssValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(cssValue);
                settings.opts[option] = eval('(' + cssValue + ')');
                break;

              // These options have their own functions.
              case "after":
                var afterValue = advancedOptions[option];
                afterValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(afterValue);
                // transition callback (scope set to element that was shown): function(currSlideElement, nextSlideElement, options, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  pager_after_fn(currSlideElement, nextSlideElement, options);
                  eval(afterValue);
                }
                break;

              case "before":
                var beforeValue = advancedOptions[option];
                beforeValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(beforeValue);
                // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  pager_before_fn(currSlideElement, nextSlideElement, options);
                  eval(beforeValue);
                }
                break;

              case "end":
                var endValue = advancedOptions[option];
                endValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(endValue);
                // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
                settings.opts[option] = function(options) {
                  eval(endValue);
                }
                break;

              case "fxFn":
                var fxFnValue = advancedOptions[option];
                fxFnValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(fxFnValue);
                // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag) {
                  eval(fxFnValue);
                }
                break;

              case "onPagerEvent":
                var onPagerEventValue = advancedOptions[option];
                onPagerEventValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPagerEventValue);
                settings.opts[option] = function(zeroBasedSlideIndex, slideElement) {
                  eval(onPagerEventValue);
                }
                break;

              case "onPrevNextEvent":
                var onPrevNextEventValue = advancedOptions[option];
                onPrevNextEventValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPrevNextEventValue);
                settings.opts[option] = function(isNext, zeroBasedSlideIndex, slideElement) {
                  eval(onPrevNextEventValue);
                }
                break;

              case "pagerAnchorBuilder":
                var pagerAnchorBuilderValue = advancedOptions[option];
                pagerAnchorBuilderValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerAnchorBuilderValue);
                // callback fn for building anchor links:  function(index, DOMelement)
                settings.opts[option] = function(index, DOMelement) {
                  var returnVal = '';
                  eval(pagerAnchorBuilderValue);
                  return returnVal;
                }
                break;

              case "pagerClick":
                var pagerClickValue = advancedOptions[option];
                pagerClickValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerClickValue);
                // callback fn for pager clicks:    function(zeroBasedSlideIndex, slideElement)
                settings.opts[option] = function(zeroBasedSlideIndex, slideElement) {
                  eval(pagerClickValue);
                }
                break;

              case "paused":
                var pausedValue = advancedOptions[option];
                pausedValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pausedValue);
                // undocumented callback when slideshow is paused:    function(cont, opts, byHover)
                settings.opts[option] = function(cont, opts, byHover) {
                  eval(pausedValue);
                }
                break;

              case "resumed":
                var resumedValue = advancedOptions[option];
                resumedValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(resumedValue);
                // undocumented callback when slideshow is resumed:    function(cont, opts, byHover)
                settings.opts[option] = function(cont, opts, byHover) {
                  eval(resumedValue);
                }
                break;

              case "timeoutFn":
                var timeoutFnValue = advancedOptions[option];
                timeoutFnValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(timeoutFnValue);
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  eval(timeoutFnValue);
                }
                break;

              case "updateActivePagerLink":
                var updateActivePagerLinkValue = advancedOptions[option];
                updateActivePagerLinkValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(updateActivePagerLinkValue);
                // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
                settings.opts[option] = function(pager, currSlideIndex) {
                  eval(updateActivePagerLinkValue);
                }
                break;
            }
          }
        }

        // If selected wait for the images to be loaded.
        // otherwise just load the slideshow.
        if (settings.wait_for_image_load) {
          // For IE/Chrome/Opera we if there are images then we need to make
          // sure the images are loaded before starting the slideshow.
          settings.totalImages = $(settings.targetId + ' img').length;
          if (settings.totalImages) {
            settings.loadedImages = 0;

            // Add a load event for each image.
            $(settings.targetId + ' img').each(function() {
              var $imageElement = $(this);
              $imageElement.bind('load', function () {
                Drupal.viewsSlideshowCycle.imageWait(fullId);
              });

              // Removing the source and adding it again will fire the load event.
              var imgSrc = $imageElement.attr('src');
              $imageElement.attr('src', '');
              $imageElement.attr('src', imgSrc);
            });

            // We need to set a timeout so that the slideshow doesn't wait
            // indefinitely for all images to load.
            setTimeout("Drupal.viewsSlideshowCycle.load('" + fullId + "')", settings.wait_for_image_load_timeout);
          }
          else {
            Drupal.viewsSlideshowCycle.load(fullId);
          }
        }
        else {
          Drupal.viewsSlideshowCycle.load(fullId);
        }
      });
    }
  };

  Drupal.viewsSlideshowCycle = Drupal.viewsSlideshowCycle || {};

  // Cleanup the values of advanced options.
  Drupal.viewsSlideshowCycle.advancedOptionCleanup = function(value) {
    value = $.trim(value);
    value = value.replace(/\n/g, '');
    if (!isNaN(parseInt(value))) {
      value = parseInt(value);
    }
    else if (value.toLowerCase() == 'true') {
      value = true;
    }
    else if (value.toLowerCase() == 'false') {
      value = false;
    }

    return value;
  }

  // This checks to see if all the images have been loaded.
  // If they have then it starts the slideshow.
  Drupal.viewsSlideshowCycle.imageWait = function(fullId) {
    if (++Drupal.settings.viewsSlideshowCycle[fullId].loadedImages == Drupal.settings.viewsSlideshowCycle[fullId].totalImages) {
      Drupal.viewsSlideshowCycle.load(fullId);
    }
  };

  // Start the slideshow.
  Drupal.viewsSlideshowCycle.load = function (fullId) {
    var settings = Drupal.settings.viewsSlideshowCycle[fullId];

    // Make sure the slideshow isn't already loaded.
    if (!settings.loaded) {
      $(settings.targetId).cycle(settings.opts);
      settings.loaded = true;

      // Start Paused
      if (settings.start_paused) {
        Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId, "force": true });
      }

      // Pause if hidden.
      if (settings.pause_when_hidden) {
        var checkPause = function(settings) {
          // If the slideshow is visible and it is paused then resume.
          // otherwise if the slideshow is not visible and it is not paused then
          // pause it.
          var visible = viewsSlideshowCycleIsVisible(settings.targetId, settings.pause_when_hidden_type, settings.amount_allowed_visible);
          if (visible) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": settings.slideshowId });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId });
          }
        }

        // Check when scrolled.
        $(window).scroll(function() {
         checkPause(settings);
        });

        // Check when the window is resized.
        $(window).resize(function() {
          checkPause(settings);
        });
      }
    }
  };

  Drupal.viewsSlideshowCycle.pause = function (options) {
    //Eat TypeError, cycle doesn't handle pause well if options isn't defined.
    try{
      if (options.pause_in_middle && $.fn.pause) {
        $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).pause();
      }
      else {
        $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('pause');
      }
    }
    catch(e){
      if(!e instanceof TypeError){
        throw e;
      }
    }
  };

  Drupal.viewsSlideshowCycle.play = function (options) {
    Drupal.settings.viewsSlideshowCycle['#views_slideshow_cycle_main_' + options.slideshowID].paused = false;
    if (options.pause_in_middle && $.fn.resume) {
      $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).resume();
    }
    else {
      $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('resume');
    }
  };

  Drupal.viewsSlideshowCycle.previousSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('prev');
  };

  Drupal.viewsSlideshowCycle.nextSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('next');
  };

  Drupal.viewsSlideshowCycle.goToSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle(options.slideNum);
  };

  // Verify that the value is a number.
  function IsNumeric(sText) {
    var ValidChars = "0123456789";
    var IsNumber=true;
    var Char;

    for (var i=0; i < sText.length && IsNumber == true; i++) {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1) {
        IsNumber = false;
      }
    }
    return IsNumber;
  }

  /**
   * Cookie Handling Functions
   */
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else {
      var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  /**
   * Checks to see if the slide is visible enough.
   * elem = element to check.
   * type = The way to calculate how much is visible.
   * amountVisible = amount that should be visible. Either in percent or px. If
   *                it's not defined then all of the slide must be visible.
   *
   * Returns true or false
   */
  function viewsSlideshowCycleIsVisible(elem, type, amountVisible) {
    // Get the top and bottom of the window;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var docViewLeft = $(window).scrollLeft();
    var docViewRight = docViewLeft + $(window).width();

    // Get the top, bottom, and height of the slide;
    var elemTop = $(elem).offset().top;
    var elemHeight = $(elem).height();
    var elemBottom = elemTop + elemHeight;
    var elemLeft = $(elem).offset().left;
    var elemWidth = $(elem).width();
    var elemRight = elemLeft + elemWidth;
    var elemArea = elemHeight * elemWidth;

    // Calculate what's hiding in the slide.
    var missingLeft = 0;
    var missingRight = 0;
    var missingTop = 0;
    var missingBottom = 0;

    // Find out how much of the slide is missing from the left.
    if (elemLeft < docViewLeft) {
      missingLeft = docViewLeft - elemLeft;
    }

    // Find out how much of the slide is missing from the right.
    if (elemRight > docViewRight) {
      missingRight = elemRight - docViewRight;
    }

    // Find out how much of the slide is missing from the top.
    if (elemTop < docViewTop) {
      missingTop = docViewTop - elemTop;
    }

    // Find out how much of the slide is missing from the bottom.
    if (elemBottom > docViewBottom) {
      missingBottom = elemBottom - docViewBottom;
    }

    // If there is no amountVisible defined then check to see if the whole slide
    // is visible.
    if (type == 'full') {
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop)
      && (elemLeft >= docViewLeft) && (elemRight <= docViewRight)
      && (elemLeft <= docViewRight) && (elemRight >= docViewLeft));
    }
    else if(type == 'vertical') {
      var verticalShowing = elemHeight - missingTop - missingBottom;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((verticalShowing/elemHeight)*100) >= parseInt(amountVisible));
      }
      else {
        return (verticalShowing >= parseInt(amountVisible));
      }
    }
    else if(type == 'horizontal') {
      var horizontalShowing = elemWidth - missingLeft - missingRight;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((horizontalShowing/elemWidth)*100) >= parseInt(amountVisible));
      }
      else {
        return (horizontalShowing >= parseInt(amountVisible));
      }
    }
    else if(type == 'area') {
      var areaShowing = (elemWidth - missingLeft - missingRight) * (elemHeight - missingTop - missingBottom);

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((areaShowing/elemArea)*100) >= parseInt(amountVisible));
      }
      else {
        return (areaShowing >= parseInt(amountVisible));
      }
    }
  }
})(jQuery);
;
