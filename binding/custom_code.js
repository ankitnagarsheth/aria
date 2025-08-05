s.registerPostTrackCallback(function(){
  s.clearVars();
});

/* Plugin Config */
s.usePlugins = true;
function s_doPlugins(s) {
  
  if (document.location.hostname === "wt.contify.com") {
    s.abort = true; // stops the analytics call from firing
  }
  
  /* Add calls to plugins here */
  s.eVar1 = _satellite.getVar("content: page name");
  s.eVar34 = s.getTimeParting('d', '-5');
  s.eVar35 = s.getTimeParting('h', '-5');
  s.eVar37 = s.getTimeParting('w', '-5');
  s.prop36 = "D=v34";
  s.prop37 = "D=v35"; 
  s.prop38 = "D=v37"; // Fixed: was v32, should be v37 to match eVar37
  s.campaign = s.getValOnce(s.campaign,'s_cmp',30);
  s.trackExternalLinks = false;
  s.linkInternalFilters = "qa.,javascript:,mailto,www.thermofisher.com/bindingsite,bcove.video,tfcom-aem.";
  s.linkLeaveQueryString = false;
  s.eVar54 = _satellite.getVisitorId().getMarketingCloudVisitorID();

  // Custom implementation for getPreviousValue
  if (!window.s.getPreviousValue) {
    window.s.getPreviousValue = function(v, c, el) {
      var s = this, k = s.c_r(c), a = new Date();
      v = v ? v : s.pageName ? s.pageName : s.pageURL;
      a.setTime(a.getTime() + el * 1000);
      if (k) s.c_w(c, v, el === 0 ? el : a);
      return k;
    };
  }

  s.eVar4 = s.getPreviousValue(s.pageName, 'gpv_pn');
  s.prop1 = s.getPreviousValue(s.pageName, 'gpv_pn');

  /* For download link tracking */
  if (s.linkType == "d"){
    s.linkTrackVars = "eVar16,events"; 
    s.linkTrackEvents = "event11";
    s.eVar16 = s.linkURL;
    s.events = "event11";
  } 
   
  /* For outbound link tracking */
  if (s.linkType == "e"){
    s.linkTrackVars = "eVar26,events";
    s.linkTrackEvents = "event12";
    s.eVar26 = s.linkURL;
    s.events = "event12";
  }
  
  /* set s.campaign */
  s.campaign = _satellite.getVar("cid");
  if (document.location.search.indexOf("utm_") != -1 && (!s.campaign || s.campaign === "")){
    let utm_campaign = _satellite.getVar("utm_campaign") || "";
    let utm_source = _satellite.getVar("utm_source") || "";
    let utm_medium = _satellite.getVar("utm_medium") || "";
    let utm_content = _satellite.getVar("utm_content") || "";
    let utm_campaignchild = _satellite.getVar("utm_campaignchild") || "";
    let utm_specialty = _satellite.getVar("utm_specialty") || "";
    let utm_campaignregion = _satellite.getVar("utm_campaignregion") || "";
    let utm_campaigncountry = _satellite.getVar("utm_campaigncountry") || "";
    let utm_campaignassettype = _satellite.getVar("utm_campaignassettype") || "";
    let utm_term = _satellite.getVar("utm_term") || "";

    s.campaign = utm_campaign + "|" + utm_source + "|" + utm_medium + "|" + utm_content + "|" + utm_campaignchild + "|" + utm_specialty + "|" + utm_campaignregion + "|" + utm_campaigncountry + "|" + utm_campaignassettype + "|" + utm_term;

    if(s.campaign === "|||||||||"){
      s.campaign = "";
    }
  }  
}

s.doPlugins = s_doPlugins;

/*plugins*/
/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue = new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split = new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
* Plugin: getTimeParting 3.0 - Set timeparting values based on time zone - valid through 2014
*/
s.getTimeParting = new Function("t","z",""
+"var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A"
+"=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C"
+"='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A="
+"='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08"
+"';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if("
+"D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=p"
+"arseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H"
+"<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=n"
+"ew Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','"
+"Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J."
+"getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>=12)"
+"{P='PM';L=L-12};if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R"
+"+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q}}");

/*
 * Plugin Utility: Append to List v1.2
 */
s.apl = new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo"
+"r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe"
+"rCase()));}}if(!m)l=l?l+d+v:v;return l;");

/*
 * Plugin: getValOnce_v1.11
 */
s.getValOnce = new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

/******************************************* BEGIN CODE TO DEPLOY *******************************************/
/* Adobe Consulting Plugin: getQueryParam v4.0.1  */
function getQueryParam(a,d,f){function n(g,c){c=c.split("?").join("&");c=c.split("#").join("&");var e=c.indexOf("&");if(g&&(-1<e||c.indexOf("=")>e)){e=c.substring(e+1);e=e.split("&");for(var h=0,p=e.length;h<p;h++){var l=e[h].split("="),q=l[1];if(l[0].toLowerCase()===g.toLowerCase())return decodeURIComponent(q||!0)}}return""}if("-v"===a)return{plugin:"getQueryParam",version:"4.0.1"};var b=function(){if("undefined"!==typeof window.s_c_il)for(var g=0,c;g<window.s_c_il.length;g++)if(c=window.s_c_il[g],c._c&&"s_c"===c._c)return c}();"undefined"!==typeof b&&(b.contextData.getQueryParam="4.0");if(a){d=d||"";f=(f||"undefined"!==typeof b&&b.pageURL||location.href)+"";(4<d.length||-1<d.indexOf("="))&&f&&4>f.length&&(b=d,d=f,f=b);b="";for(var m=a.split(","),r=m.length,k=0;k<r;k++)a=n(m[k],f),"string"===typeof a?(a=-1<a.indexOf("#")?a.substring(0,a.indexOf("#")):a,b+=b?d+a:a):b=""===b?a:b+(d+a);return b}};
/******************************************** END CODE TO DEPLOY ********************************************/

/*
 *	pt - utility function
 */ 
s.pt = function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:""}return""};

/******************************************* BEGIN CODE TO DEPLOY *******************************************/
/* Adobe Consulting Plugin: getPageLoadTime v3.0 */
! function() {
  let e = globalThis.window || this;
  e.getPageLoadTime = function(t) {
    let i = function() {
      if (e.s_c_il) {
        for (let t in e.s_c_il)
          if ("s_c" === e.s_c_il[t]._c) return e.s_c_il[t]
      }
    }();

    function n() {
      var i = performance.timing;
      i.loadEventEnd > 0 && (clearInterval(e.pi), "" === e.cookieRead("s_plt") && e.cookieWrite("s_plt", function e(t,
        i) {
        if (t >= 0 && i >= 0) return t - i < 6e4 && t - i >= 0 ? parseFloat((t - i) / 1e3).toFixed(2) : 60
      }(i.loadEventEnd, i.navigationStart) + "," + t)), e.ptc = i.loadEventEnd
    }
    if (i && (i.contextData.getPageLoadTime = "3.1"), t = t || i && i.pageName || document.location.href, e
      .cookieWrite = e.cookieWrite || function(t, i, n) {
        if ("string" == typeof t) {
          if (g = function() {
              var t = e.location.hostname,
                i = e.location.hostname.split(".").length - 1;
              if (t && !/^[0-9.]+$/.test(t)) {
                i = 2 < i ? i : 2;
                var n = t.lastIndexOf(".");
                if (0 <= n) {
                  for (; 0 <= n && 1 < i;) n = t.lastIndexOf(".", n - 1), i--;
                  n = 0 < n ? t.substring(n) : t
                }
              }
              return n
            }(), i = void 0 !== i ? "" + i : "", n || "" === i) {
            if ("" === i && (n = -60), "number" == typeof n) {
              var o = new Date;
              o.setTime(o.getTime() + 6e4 * n)
            } else o = n
          }
          return !!t && (document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(i) + "; path=/;" + (n ?
              " expires=" + o.toUTCString() + ";" : "") + (g ? " domain=" + g + ";" : ""), "undefined" !=
            typeof cookieRead) && cookieRead(t) === i
        }
      }, e.cookieRead = e.cookieRead || function(e) {
        if ("string" != typeof e) return "";
        e = encodeURIComponent(e);
        var t = " " + document.cookie,
          i = t.indexOf(" " + e + "="),
          n = 0 > i ? i : t.indexOf(";", i);
        return (e = 0 > i ? "" : decodeURIComponent(t.substring(i + 2 + e.length, 0 > n ? t.length : n))) ? e : ""
      }, e.p_fo = e.p_fo || function(t) {
        return e.__fo || (e.__fo = {}), !e.__fo[t] && (e.__fo[t] = {}, !0)
      }, performance && e.p_fo("performance")) {
      var o = performance;
      o.clearResourceTimings(), "" !== e.cookieRead("s_plt") && (o.timing.loadEventEnd > 0 && clearInterval(e.pi),
        this._pltLoadTime = e.cookieRead("s_plt").split(",")[0], this._pltPreviousPage = e.cookieRead("s_plt")
        .split(",")[1], e.cookieWrite("s_plt", "")), 0 === o.timing.loadEventEnd ? e.pi = setInterval(function() {
        n()
      }, 250) : o.timing.loadEventEnd > 0 && (e.ptc ? e.ptc === o.timing.loadEventEnd && 1 === o.getEntries()
        .length && (e.pwp = setInterval(function() {
          var i;
          (i = performance).getEntries().length > 0 && (e.ppfe === i.getEntries().length ? clearInterval(e
            .pwp) : e.ppfe = i.getEntries().length), "" === e.cookieRead("s_plt") && e.cookieWrite("s_plt", ((
              i.getEntries()[i.getEntries().length - 1].responseEnd - i.getEntries()[0].startTime) / 1e3)
            .toFixed(2) + "," + t)
        }, 500)) : n())
    }
  }, e.getPageLoadTime.getVersion = function() {
    return {
      plugin: "getPageLoadTime",
      version: "3.0"
    }
  }
}();
/******************************************** END CODE TO DEPLOY ********************************************/
