// build time:Sat Oct 05 2019 20:58:33 GMT+0800 (GMT+08:00)
(function(t){var e=t(".search-form-wrap"),a=false,n=200;var o=function(){a=true};var r=function(t){setTimeout(function(){a=false;t&&t()},n)};t(".nav-item-search").on("click",function(){if(a)return;o();e.addClass("on");r(function(){t(".local-search-input").focus()})});t(document).mouseup(function(a){var n=t(".local-search");if(!n.is(a.target)&&n.has(a.target).length===0){e.removeClass("on")}});var i={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return i.Android()||i.BlackBerry()||i.iOS()||i.Opera()||i.Windows()}};if(t(".local-search").size()&&!i.any()){t.getScript("/js/search.js",function(){searchFunc("/search.xml","local-search-input","local-search-result")})}t("body").on("click",function(){t(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(e){e.stopPropagation();var a=t(this),n=a.attr("data-url"),o=encodeURIComponent(n),r="article-share-box-"+a.attr("data-id"),i=a.offset();if(t("#"+r).length){var c=t("#"+r);if(c.hasClass("on")){c.removeClass("on");return}}else{var s=['<div id="'+r+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+o+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+o+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+o+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+o+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join("");var c=t(s);t("body").append(c)}t(".article-share-box.on").hide();c.css({top:i.top+25,left:i.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){t(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault();t.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")});if(t.fancybox){t("[data-fancybox]").fancybox({protect:true})}t(".lazy").lazyload();t(document).ready(function(t){t(".anchor").click(function(e){e.preventDefault();t("html,body").animate({scrollTop:t(this.hash).offset().top},500)})});(function(t){var e=1e3;var a=t("#totop");var n=1600;a.hide();t(window).scroll(function(){var n=t(document).scrollTop();if(n>e){t(a).stop().fadeTo(300,1)}else{t(a).stop().fadeTo(300,0)}});t(a).click(function(){t("html, body").animate({scrollTop:0},n);return false})})(jQuery);var c=t(".content"),s=t(".sidebar"),l=false,u=200;var f=function(){l=true};var h=function(){setTimeout(function(){l=false},u)};t(".navbar-toggle").on("click",function(){if(l)return;f();c.toggleClass("on");s.toggleClass("on");h()});t(c).on("click",function(){if(l||!c.hasClass("on"))return;c.removeClass("on");s.removeClass("on")})})(jQuery);
//rebuild by neat 