s.eVar40 = _satellite.getVisitorId().getMarketingCloudVisitorID();
s.eVar23 = _satellite.cookie.get("s_vi");
s.prop23 = ("d=v23");
s.prop16 = document.location.pathname+document.location.search+document.location.hash;
s.eVar18 = [location.host, location.pathname].join('');
s.prop18 = ("d=v18");

/* Plugin Config */
s.usePlugins=true


s.doPlugins=function(s) {
/* Add calls to plugins here */
var tp = s.getTimeParting('n','-5');
s.prop39 = tp;
s.prop41 = s.getVisitNum('w'); //resets weekly 
/* s.prop42 = s.getDaysSinceLastVisit();*/
/* s.eVar42=("d=c42");*/
s.prop43 = s.getNewRepeat(30,'s_getNewRepeat'); 
s.eVar43=("d=c43");
s.prop60 = s.getPreviousValue(s.pageName,'s_ppn'); //prop21: prev page name
s.prop59 = s.getPercentPageViewed(); //prop22: max % viewed of prev page
if(!s.prop60||s.prop60=='no value')s.prop59=''; //clear max % viewed if no prev page view


// if campaign doesn't have a value, get cid from the query string
if(!s.campaign)
s.campaign = s.Util.getQueryParam("cid");

/* To track the eloqua id */
if(s.Util.getQueryParam('elq_cid'))
{s.eVar88=s.Util.getQueryParam('elq_cid');}
if(s.Util.getQueryParam('elqTrackId'))
{s.eVar88=s.Util.getQueryParam('elqTrackId');}
if(s.Util.getQueryParam('elq_mid'))
{s.eVar89=s.Util.getQueryParam('elq_mid');}
  

}

/*
* Plugin: getVisitNum - version 3.0
*/
s.getVisitNum = new Function("tp", "c", "c2", "" +
"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}" +
"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi" +
"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!" +
"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn=" +
"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi" +
"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els" +
"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri" +
"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);" +
"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)" +
";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
s.dimo = new Function("m", "y", "" +
"var d=new Date(y,m+1,0);return d.getDate();");
s.endof = new Function("x", "" +
"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==" +
"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(" +
"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return " +
"t;");

//time parting configuration 
//Australia 
s._tpDST = { 
2012:'4/1,10/7', 
2013:'4/7,10/6', 
2014:'4/6,10/5', 
2015:'4/5,10/4', 
2016:'4/3,10/2', 
2017:'4/2,10/1', 
2018:'4/1,10/7', 
2019:'4/7,10/6',
2020:'4/5,10/4',
2021:'4/4,10/3',
2022:'4/3,10/2'} 

//US 
s._tpDST = { 
2012:'3/11,11/4', 
2013:'3/10,11/3', 
2014:'3/9,11/2', 
2015:'3/8,11/1', 
2016:'3/13,11/6', 
2017:'3/12,11/5', 
2018:'3/11,11/4', 
2019:'3/10,11/3',
2020:'3/8,11/1',
2021:'3/14,11/7',
2022:'3/13,11/6'} 

//Europe 
s._tpDST = { 
2012:'3/25,10/28', 
2013:'3/31,10/27', 
2014:'3/30,10/26', 
2015:'3/29,10/25', 
2016:'3/27,10/30', 
2017:'3/26,10/29', 
2018:'3/25,10/28', 
2019:'3/31,10/27',
2020:'3/29,10/25',
2021:'3/28,10/31',
2022:'3/27,10/30'}

/*
* Plugin: getTimeParting 3.4
*/
s.getTimeParting=new Function("h","z",""+
"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"+
"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"+
"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"+
"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"+
"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"+
"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"+
"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"+
"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"+
".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"+
"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");

/*
* Plugin: getPercentPageViewed v1.74
*/
s.getPercentPageViewed = new Function("n", "" +
"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load" +
"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o" +
"rientationchange','pan'],K='s_ppv',P=K+'l',I=n||s.pageName||documen" +
"t.location.href;W.s_Obj=s;if(!W.s_PPVevent){s.s_PPVg=function(n,o){" +
"var c=s.c_r(o?P:K)||'',a=c.indexOf(',')>-1?c.split(',',10):[''],i;a" +
"[0]=o?unescape(a[0]||''):I;for(i=1;i<9&&(i<a.length||!o);i++)a[i]=a" +
"[i]?parseInt(a[i])||0:0;if(a.length>9||!o)a[9]=a[9]&&a[9]!='L'&&a[9" +
"]!='LP'&&a[9]!='PL'?'P':a[9];return a};s.c_w(P,s.c_r(K)||'');s.c_w(" +
"K,escape(I)+',0,0,0,0,0,0,0,0');W.s_PPVevent=function(e){var W=wind" +
"ow,D=document||{},B=D.body,E=D.documentElement||{},S=window.screen|" +
"|{},Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWi" +
"dth',Hc='clientHeight',M=Math,C=100,J='object',N='number',Z=',',s=W" +
".s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e" +
"=e.substring(2);if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0}if(s" +
"&&typeof s==J&&B&&typeof B==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho" +
"],B[Hc]||E[Hc]||1),X=W.innerWidth||E[Wc]||B[Wc]||1,Y=W.innerHeight|" +
"|E[Hc]||B[Hc]||1,x=S.width||1,y=S.height||1,r=M.round(C*(W.devicePi" +
"xelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.r" +
"ound(C*b/h):1,O=W.orientation,o=!isNaN(O)?M.abs(O)%180:Y>X?0:90,a=s" +
".s_PPVg(n),L=(e=='load')||(a[1]<1),t,V=function(u,v,f,n){v=typeof v" +
"!=N?u:v;v=f||(u>v)?u:v;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iP" +
"od|iPad|iPhone)').exec((window.navigator&&navigator.userAgent)||'')" +
"&&o){t=x;x=y;y=t}o=o?'L':'P';a[9]=L||!a[9]?o:a[9].substring(0,1);if" +
"(a[9]!='L'&&a[9]!='P')a[9]=o;s.c_w(K,escape(a[0])+Z+V(a[1],p,!L)+Z+" +
"V(a[2],p,L)+Z+V(a[3],b,L,1)+Z+X+Z+Y+Z+x+Z+y+Z+r+Z+a[9]+(a[9]==o?'':" +
"o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)" +
"};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);" +
"else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg(n,1);return!argument" +
"s.length||n=='-'?a[1]:a");

/*
* Utility Function: split v1.5 - split a string (JS 1.0 compatible)
*/
s.split = new Function("l", "d", "" +
"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" +
"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
