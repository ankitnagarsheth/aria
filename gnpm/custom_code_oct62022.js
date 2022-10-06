s.registerPostTrackCallback(function(){
  s.clearVars();
});

/* Plugin Config */
s.usePlugins=true
function s_doPlugins(s) {
/* Add calls to plugins here */
  s.eVar3=s.getPreviousValue(s.pageName,'gpv','');
  s.eVar31 =s.getTimeParting('d', '-5');
	s.eVar32 =s.getTimeParting('h', '-5');
	s.eVar33 =s.getTimeParting('w', '-5');
   s.eVar35=s.getNewRepeat(30,'s_getNewRepeat');
  s.prop3="D=v3"
  s.prop31 ="D=v31"
  s.prop32 ="D=v32" 
  s.prop33 ="D=v33"
  s.prop34="D=v34"
  s.prop35="D=v35"
  s.trackInlineStats = false;
  s.campaign=s.getValOnce(s.campaign,'s_cmp',30);
  s.trackExternalLinks=true
  s.linkInternalFilters="pma.greatwestlife.com,gwl.greatwestlife.com,qa.greatwestlife.com/app,qa.pma.greatwestlife.com,javascript:,mailto:,https://addevidint-lifeco.cs26.force.com,https://apreblddev-lifeco.cs99.force.com,https://apprebldft-lifeco.cs99.force.com"
  s.linkLeaveQueryString=false
  
  if(_satellite.getVar('content: site section') == "error-pages"){
    s.pageType="errorPage";
}
  
/* For download link tracking */
	 if (s.linkType == "d"){
		s.linkTrackVars = "eVar16,events";
		s.linkTrackEvents = "event11";
		s.eVar16 = s.linkURL;
		s.events = "event11";
	}
    
/* For outboundlink tracking */
	 if (s.linkType == "e"){
		s.linkTrackVars = "eVar17,events";
		s.linkTrackEvents = "event12";
		s.eVar17 = s.linkURL;
		s.events = "event12";
	}
 
/* set s.campaign */
    if(!s.campaign){
        s._utm_campaign=s.getQueryParam('utm_campaign');
        s._utm_source=s.getQueryParam('utm_source');
        s._utm_medium=s.getQueryParam('utm_medium');
        s._utm_term=s.getQueryParam('utm_term');
        s._utm_content=s.getQueryParam('utm_content');
        s.campaign=s._utm_campaign + "|" + s._utm_source + "|" + s._utm_medium + "|" + s._utm_term + "|" + s._utm_content;
        if(s.campaign === "||||"){s.campaign = ""}
    }
  
   if(!s.campaign){
    s.cpcsource=s.getQueryParam('cpcsource');
    s.cpcmedium=s.getQueryParam('cpcmedium');
    s.cpccampaign=s.getQueryParam('cpccampaign');
    s.glcid=s.getQueryParam('glcid');
    s.campaign=s.cpcsource + "|" + s.cpcmedium + "|" + s.cpccampaign + "|" + s.glcid;
      if(s.campaign === "|||"){s.campaign = ""}
    }
  

  
s.tempPath=window.location.pathname.toLowerCase();
 if(s.tempPath.indexOf('epmr/confirmation')>-1)

s.linkTrackVars="list1,list2,list3,events";
s.linkTrackEvents="event60";
s.events="event60"
s.list2=_satellite.getVar("pb: membertype");
s.list3=_satellite.getVar("pb: coverageamount");
s.list1=_satellite.getVar("pb: insurancetype");
  
/******************************************* BEGIN CODE TO DEPLOY *******************************************/
/* Adobe Consulting Plugin: apl (appendToList) v4.0 */
function apl(lv,va,d1,d2,cc){var b=lv,d=va,e=d1,c=d2,g=cc;if("-v"===b)return{plugin:"apl",version:"4.0"};var h=function(){if("undefined"!==typeof window.s_c_il)for(var k=0,b;k<window.s_c_il.length;k++)if(b=window.s_c_il[k],b._c&&"s_c"===b._c)return b}();"undefined"!==typeof h&&(h.contextData.apl="4.0");window.inList=window.inList||function(b,d,c,e){if("string"!==typeof d)return!1;if("string"===typeof b)b=b.split(c||",");else if("object"!==typeof b)return!1;c=0;for(a=b.length;c<a;c++)if(1==e&&d===b[c]||d.toLowerCase()===b[c].toLowerCase())return!0;return!1};if(!b||"string"===typeof b){if("string"!==typeof d||""===d)return b;e=e||",";c=c||e;1==c&&(c=e,g||(g=1));2==c&&1!=g&&(c=e);d=d.split(",");h=d.length;for(var f=0;f<h;f++)window.inList(b,d[f],e,g)||(b=b?b+c+d[f]:d[f])}return b};
/******************************************** END CODE TO DEPLOY ********************************************/  
  
s.events = apl(s.events,"event58=" + digitalData.transactionData.totalAmount);
s.events = apl(s.events,"event59=" + digitalData.transactionData.monthlyPremiumTotal);
s.events = apl(s.events,"event70=" + digitalData.products[0].monthlyPremium);
/*s.events = apl(s.events,"event71=" + digitalData.products[1].monthlyPremium);
s.events = apl(s.events,"event72=" + digitalData.products[2].monthlyPremium);
s.events = apl(s.events,"event73=" + digitalData.products[3].monthlyPremium);
s.events = apl(s.events,"event74=" + digitalData.products[4].monthlyPremium);
s.events = apl(s.events,"event75=" + digitalData.products[5].monthlyPremium);
s.events = apl(s.events,"event76=" + digitalData.products[6].monthlyPremium);
s.events = apl(s.events,"event77=" + digitalData.products[7].monthlyPremium);
s.events = apl(s.events,"event78=" + digitalData.products[8].monthlyPremium);
*/
}
s.doPlugins=s_doPlugins

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
2019:'4/7,10/6'}
 
//US
s._tpDST = {
2012:'3/11,11/4',
2013:'3/10,11/3',
2014:'3/9,11/2',
2015:'3/8,11/1',
2016:'3/13,11/6',
2017:'3/12,11/5',
2018:'3/11,11/4',
2019:'3/10,11/3'}
 
//Europe
s._tpDST = {
2012:'3/25,10/28',
2013:'3/31,10/27',
2014:'3/30,10/26',
2015:'3/29,10/25',
2016:'3/27,10/30',
2017:'3/26,10/29',
2018:'3/25,10/28',
2019:'3/31,10/27'}
/*plugins*/
/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
	/*
* Plugin: getTimeParting 3.0 - Set timeparting values based on time zone - valid through 2014
*/
s.getTimeParting=new Function("t","z",""
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
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Plugin: getValOnce_v1.11
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");




/******************************************* BEGIN CODE TO DEPLOY *******************************************/
/* Adobe Consulting Plugin: apl (appendToList) v4.0 */
function apl(lv,va,d1,d2,cc){var b=lv,d=va,e=d1,c=d2,g=cc;if("-v"===b)return{plugin:"apl",version:"4.0"};var h=function(){if("undefined"!==typeof window.s_c_il)for(var k=0,b;k<window.s_c_il.length;k++)if(b=window.s_c_il[k],b._c&&"s_c"===b._c)return b}();"undefined"!==typeof h&&(h.contextData.apl="4.0");window.inList=window.inList||function(b,d,c,e){if("string"!==typeof d)return!1;if("string"===typeof b)b=b.split(c||",");else if("object"!==typeof b)return!1;c=0;for(a=b.length;c<a;c++)if(1==e&&d===b[c]||d.toLowerCase()===b[c].toLowerCase())return!0;return!1};if(!b||"string"===typeof b){if("string"!==typeof d||""===d)return b;e=e||",";c=c||e;1==c&&(c=e,g||(g=1));2==c&&1!=g&&(c=e);d=d.split(",");h=d.length;for(var f=0;f<h;f++)window.inList(b,d[f],e,g)||(b=b?b+c+d[f]:d[f])}return b};
/******************************************** END CODE TO DEPLOY ********************************************/


/*
 *	getQueryParam v2.5 - H-code and AppMeasurement Compatible
 */ 
s.getQueryParam=function(p,d,u,h){var s=this,v="",i,j,t;d=d?d:"";u=u?u:s.pageURL?s.pageURL:s.wd?s.wd.location:window.location;while(p){i=p.indexOf(",");i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+"",h);if(t)t=t.indexOf("#")>-1?t.substring(0,t.indexOf("#")):t;if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v};
s.p_gpv=function(k,u,h){var s=this,v="",q;j=h==1?"#":"?";i=u.indexOf(j);if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,"&","p_gvf",k)}return v};
s.p_gvf=function(t,k){if(t){var s=this,i=t.indexOf("="),p=i<0?t:t.substring(0,i),v=i<0?true:t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa?s.epa(v):s.unescape(v)}return""};

/*
 *	pt - utility function
 */ 
s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:""}return""};
