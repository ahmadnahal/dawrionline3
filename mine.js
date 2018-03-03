 $(function () {
&quot;use strict&quot;;
$(&#39;.janp&#39;).height($(window).height());


});
  $(&quot;.nav-janp&quot;).click(function () {

      $(&quot;.janp&quot;).show(1000, function () {

        $(&quot;.janp h2&quot;).click(function () {

         $(&quot;.janp&quot;).fadeOut(1000,);
      });

   });  

});
   
$(window).on(&#39;load&#39;,function () {
    
    &quot;use strict&quot;;
    
    // Loading Elements
    
    $(&quot;.loading-overlay .spinner&quot;).fadeOut(2000, function () {
        
        // Show The Scroll

        $(&quot;body&quot;).css(&quot;overflow&quot;, &quot;auto&quot;);
        
        $(this).parent().fadeOut(1000, function () {
            
            $(this).remove();
        });
    });
});
$(document).ready(function(){ 
 var touch  = $('#resp-menu');
 var menu  = $('.menu');
 
 $(touch).on('click', function(e) {
  e.preventDefault();
  menu.slideToggle();
 });
 
 $(window).resize(function(){
  var w = $(window).width();
  if(w > 600 && menu.is(':hidden')) {
   menu.removeAttr('style');
  }
 });
});
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");
(function() {
    var po = document.createElement(&#39;script&#39;); po.type = &#39;text/javascript&#39;; po.async = true;
    po.src = &#39;https://apis.google.com/js/plusone.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(po, s);
  })();
$(window).scroll(function() {
    if($(this).scrollTop() &gt; 200) {
        $(&#39;#back-to-top&#39;).fadeIn();
    } else {
        $(&#39;#back-to-top&#39;).fadeOut();
    }
});
$(&#39;#back-to-top&#39;).hide().click(function() {
    $(&#39;html, body&#39;).animate({scrollTop:0}, 1000);
    return false;
});
