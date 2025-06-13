{% include 'shogun-content-handler' %}
<!doctype html>

<!--
      ___                       ___           ___           ___
     /  /\                     /__/\         /  /\         /  /\
    /  /:/_                    \  \:\       /  /:/        /  /::\
   /  /:/ /\  ___     ___       \  \:\     /  /:/        /  /:/\:\
  /  /:/ /:/ /__/\   /  /\  ___  \  \:\   /  /:/  ___   /  /:/  \:\
 /__/:/ /:/  \  \:\ /  /:/ /__/\  \__\:\ /__/:/  /  /\ /__/:/ \__\:\
 \  \:\/:/    \  \:\  /:/  \  \:\ /  /:/ \  \:\ /  /:/ \  \:\ /  /:/
  \  \::/      \  \:\/:/    \  \:\  /:/   \  \:\  /:/   \  \:\  /:/
   \  \:\       \  \::/      \  \:\/:/     \  \:\/:/     \  \:\/:/
    \  \:\       \__\/        \  \::/       \  \::/       \  \::/
     \__\/                     \__\/         \__\/         \__\/

--------------------------------------------------------------------
#  Ira v4.2.0
#  Documentation: https://fluorescent.co/help/ira/
#  Purchase: https://themes.shopify.com/themes/ira/
#  A product by Fluorescent: https://fluorescent.co/
--------------------------------------------------------------------

-->

<html class="no-js" lang="{{ request.locale.iso_code }}">
<head>
<link rel='preconnect dns-prefetch' href='https://api.config-security.com/' crossorigin />
<link rel='preconnect dns-prefetch' href='https://conf.config-security.com/' crossorigin />
<link rel='preconnect dns-prefetch' href='https://whale.camera/' crossorigin />
<script>

</script>
  <script async src="https://chat-widget.getredo.com/widget.js?widgetId=0z4btetr6kujzdc"></script>
    <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="canonical" href="{{ canonical_url }}">
  
  {%- if settings.favicon != blank -%}
    <link rel="shortcut icon" href="{{ settings.favicon | img_url: '32x32' }}" type="image/png">
  {%- endif -%}

  {%- if page_description -%}
    <meta name="description" content="{{ page_description | escape }}">
  {%- endif -%}

  {% render 'social-meta-tags' %}


	<!-- Added by AVADA SEO Suite -->
	{% include 'avada-seo' %}
	<!-- /Added by AVADA SEO Suite -->
   <!-- Added by AVADA Cookies Bar -->
   {% include 'avada-cookies-bar' %}
   <!-- /Added by AVADA Cookies Bar -->
 
{% include "starapps-core" %}

{% render 'smart-cart-template' %}


  {%- capture seo_title -%}
    {%- if request.page_type == 'search' and search.performed == true -%}
      {{ 'search.heading' | t: count: search.results_count }}: {{ 'search.results_with_count' | t: terms: search.terms, count: search.results_count }}
    {%- else -%}
      {{ page_title }}
    {%- endif -%}
    {%- if current_tags -%}
      {%- assign meta_tags = current_tags | join: ', ' -%} &ndash; {{ 'general.meta.tags' | t: tags: meta_tags -}}
    {%- endif -%}
    {%- if current_page != 1 -%}
      &ndash; {{ 'general.meta.page' | t: page: current_page }}
    {%- endif -%}
    {%- assign escaped_page_title = page_title | escape -%}
    {%- unless escaped_page_title contains shop.name -%}
      &ndash; {{ shop.name }}
    {%- endunless -%}
  {%- endcapture -%}
  <title>{{ seo_title | strip }}</title>

  
  {% render 'theme-setup' %}
  {% render 'theme-setting-vars' %}
  {{ 'theme.css' | asset_url | stylesheet_tag }}
   {{ 'custom_new.css' | asset_url | stylesheet_tag }}
   {{ 'slick-theme.css' | asset_url | stylesheet_tag }}
   

  {% include 'globo.filter.script' %}{{ content_for_header }}
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css">
  <script src="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script> (function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : '', hideMobile : true, hideTrigger : false, disableBgProcess : false, language : 'en', position : 'left', leadColor : '#000000', triggerColor : '#000000', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'settings', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerOffsetX : 10, triggerOffsetY : 10, triggerRadius : '5px' } }); }; h.appendChild(s); })(); </script>
{% if template contains "index" %} {% else %} {% render "scripts" %} {% endif %}
<script src="https://cdn.shopify.com/s/files/1/0603/7530/2276/t/1/assets/globo-checkout.js"></script>
                  {% include 'bss-product-labels-configs' %}
  
  <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1723571064467364');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1723571064467364&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->


  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2SQJS4EEE2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2SQJS4EEE2');
  gtag('config', 'AW-10891387589');
</script>

<!-- Hotjar Tracking Code for https://www.monfrerefashion.com/ -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3458705,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
  
                    
  {% render 'shogun-head' %}
  
  <script>
  !function(v,i,b,e,c,o){if(!v[c]){var s=v[c]=function(){s.process?s.process.apply(s,arguments):s.queue.push(arguments)};s.queue=[],s.b=1*new Date;var t=i.createElement(b);t.async=!0,t.src=e;var n=i.getElementsByTagName(b)[0];n.parentNode.insertBefore(t,n)}}(window,document,"script","https://s.vibe.co/vbpx.js","vbpx");
  vbpx('init','bTJWgT');
  vbpx('event', 'page_view');
</script>
  
</head>
             

<body
  class="
    template-{{ request.page_type | handle }}
    {% if settings.enable_section_borders %}show-borders{% endif %}
  "
  {% if settings.cart_enable_ajax %}
    data-enable-cart-ajax="true"
  {% endif %}
>
<script>window.KlarnaThemeGlobals={};{%case template.name%} {%when"product"%} {% if product.first_available_variant.price %}window.KlarnaThemeGlobals.data_purchase_amount = {{ product.first_available_variant.price }};{% endif %}window.KlarnaThemeGlobals.productVariants={{product.variants|json}};window.KlarnaThemeGlobals.documentCopy=document.cloneNode(true);{%when"cart"%} window.KlarnaThemeGlobals.data_purchase_amount={{cart.total_price}};window.KlarnaThemeGlobals.documentCopy=document.cloneNode(true);{%endcase%}</script>













  <div class="page">
    <div class="theme-editor-scroll-offset"></div>

    <div class="header__space" data-header-space></div>
    {% section 'announcement-bar' %}
    {% section 'header' %}
    <main id="main" role='main' class="main">
      {{ content_for_layout }}
    </main>
    {% section 'popup' %}
    {% section 'footer' %}
    {% render 'store-availability-modal' %}

    {% if settings.enable_page_transitions %}
      <div class="active" id="page-transition-overlay"></div>
      <script>
        var pageTransitionOverlay = document.getElementById("page-transition-overlay"),
            internalReferrer = document.referrer.includes(document.location.origin),
            winPerf = window.performance,
            navTypeLegacy = winPerf && winPerf.navigation && winPerf.navigation.type,
            navType = winPerf && winPerf.getEntriesByType && winPerf.getEntriesByType("navigation")[0] && winPerf.getEntriesByType("navigation")[0].type;
            
        if (!internalReferrer || navType !== "navigate" || navTypeLegacy !== 0) {          
          {% comment %} 
          goal is to avoid transitioning if it isn't a navigation throughout the site to improve performance 
          {% endcomment %}
          pageTransitionOverlay.className = "active skip-animation";
          setTimeout(function(){
            pageTransitionOverlay.className = "skip-animation";
            setTimeout(function(){ pageTransitionOverlay.className = ""; }, 1);
          }, 1);
        } else { {% comment %} fallback if app js breaks {% endcomment %}
          setTimeout(function(){
            pageTransitionOverlay.className = "";
          }, 500);
        }
      </script>
    {% endif %}

  
  </div>

  {%- if request.page_type contains 'customers/' -%}
    <script src="{{ 'shopify_common.js' | shopify_asset_url }}" defer="defer"></script>
  {%- endif -%}
  
  {% comment %}
    Set the following line to true to use the single theme.classic.js (no code-splitting, editable)
  {% endcomment %}
  {% assign useLegacyThemeJS = false %}

  {% if useLegacyThemeJS %}
    {% comment %}This is the classic monolithic build that is optionally used by intermediary theme devs who need to edit the JS{% endcomment %}
    <script src="{{ 'theme.classic.aio.min.js' | asset_url }}" ></script>
  {% else %}
    {% comment %}This is the ES Module for modern browsers.  This features code splitting {% endcomment %}
    <script type="module" src="{{ 'theme.js' | asset_url }}" ></script>

    {% comment %}This is the fallback for browsers that don't support ES Modules, code-splitting is supported by systemJS{% endcomment %}
    <script nomodule src="{{ 's.aio.min.js' | asset_url }}"></script>
    <script nomodule>
        System.import('{{ 'theme.nomodule.aio.min.js' | asset_url }}');
    </script>
  {% endif %}

  {% comment %}
    Set the following line to true to import custom-events.js
  {% endcomment %}
  {% assign useCustomEvents = false %}

  {% if useCustomEvents %}
    <script src="{{ 'custom-events.js' | asset_url }}" ></script>
  {% endif %}
  
   <script src="{{ 'slick.min.js' | asset_url }}" ></script>

 

  
 <script src="https://a.klaviyo.com/media/js/onsite/onsite.js"></script>
<script>
    var klaviyo = klaviyo || [];
    klaviyo.init({
      account: "HdPDx3",
      platform: "shopify",
      exclude_on_tags: "nobis"
    });
    klaviyo.enable("backinstock",{ 
    trigger: {
      product_page_text: "Notify Me When Available",
      product_page_class: "btn",
      product_page_text_align: "center",
      product_page_margin: "0px",
      replace_anchor: false
    },
    modal: {
     headline: "{product_name}",
     body_content: "Register to receive a notification when this item comes back in stock.",
     email_field_label: "Email",
     button_label: "Notify me when available",
     subscription_success_label: "You're in! We'll let you know when it's back.",
     footer_content: '',
     additional_styles: "@import url('https://fonts.googleapis.com/css?family=Helvetica+Neue');",
     drop_background_color: "#000",
     background_color: "#fff",
     text_color: "#222",
     button_text_color: "#fff",
     button_background_color: "#439fdb",
     close_button_color: "#ccc",
     error_background_color: "#fcd6d7",
     error_text_color: "#C72E2F",
     success_background_color: "#d3efcd",
     success_text_color: "#1B9500"
    }
  });
</script>
{% include 'globo.filter.action' %}
  
  
<!-- {% if request.page_type == 'product' %}
    {% if product.options contains 'Size' %}
        {% render 'size-chart' %}
    {% endif %}
{% endif %} -->
 
   <script>
     
     $(".product--accordion .accordion__text.fs-body-small img").on('click', function() {
  $(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
  $(".custom-model-main").removeClass('model-open');
});

//        $("ul.header__links-list.fs-body-base li").hover(
//   function () {
//     $(this).find('ul.navigation__submenu.fs-body-baseclick').addClass("active");;
//   },
//   function () {
//     $(this).find('ul.navigation__submenu.fs-body-baseclick').removeClass("active");
//   }
// );
  </script> 

  <!-- LOM B2b2c element js code start -->
      <script type="module" src="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/bundles/monfrere/dist/mz-quidget_cart.js"></script>
      <script src="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/Troubleshooters/shopify-theme/monfrere/ira/mzcart-dupsize-detect.js" async></script> 
  <!-- LOM B2b2c element js code end -->
  
 
{% if content_for_header contains 'product_label' %}{% include 'bss-product-label-js' %}{% include 'bss-label-style-css' %}{% include 'bss-product-label-fonts' %}{% endif %}{% render 'rebuy-smartcart-extensions' %}{{ "//cdn.shopify.com/s/files/1/0633/1672/1913/t/1/assets/splide.min.js" | script_tag}}</body>
</html>

