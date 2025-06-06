s.registerPostTrackCallback(function(){
    s.clearVars();
  });
  
  /* Plugin Config */
  s.usePlugins=true
  function s_doPlugins(s) {
  
  // !!!!! SDK SWAP - STOpping Analytics - Adding Abort plugin in relation to SDK Switch
    //s.abort = true; 
    
  /* Add calls to plugins here */
   s.list1=s.gatherIntPromo('intcid',0);
    s.eVar3=s.getPreviousValue(s.pageName,'s_ppn');
    s.prop3="D=v3"
    s.eVar31 =s.getTimeParting('d', '-5');
      s.eVar32 =s.getTimeParting('h', '-5');
      s.eVar33 =s.getTimeParting('w', '-5');
    s.eVar34 =s.getVisitNum();
    s.prop31 ="D=v31"
    s.prop32 ="D=v32" 
    s.prop33 ="D=v33"
    s.prop34="D=v34"
    s.prop10=s_getLoadTime();
    s.campaign=s.getValOnce(s.campaign,'s_cmp',30);
    s.trackExternalLinks=true
    s.linkInternalFilters="canadalife.com,javascript:,mailto,value-of-advice.ca,myinsuranceplan.ca,e-xact.com"
   /*s.linkExternalFilters="myaccount.canadalife.com,vipnet.canadalife.ca,repnet2.canadalife.com" */
    s.linkLeaveQueryString=false
    s.eVar45 = s.prop45 = _satellite.getVisitorId().getMarketingCloudVisitorID();
    
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
  if (!s.campaign) {
      s._utm_campaign = s.getQueryParam('utm_campaign');
      s._utm_source = s.getQueryParam('utm_source');
      s._utm_medium = s.getQueryParam('utm_medium');
      s._utm_term = s.getQueryParam('utm_term');
      s._utm_content = s.getQueryParam('utm_content');
      s.campaign = s._utm_source + "|" + s._utm_medium + "|" + s._utm_campaign + "|" + s._utm_term + "|" + s._utm_content;
      if (s.campaign === "||||") { s.campaign = "" }
  }
  
  if (!s.campaign) {
      s.cpcsource = s.getQueryParam('cpcsource');
      s.cpcmedium = s.getQueryParam('cpcmedium');
      s.cpccampaign = s.getQueryParam('cpccampaign');
      s.adgroup = s.getQueryParam('adgroup');
      s.adname = s.getQueryParam('adname');
  
      // set s.Campaign and do not add extra pipes when not needed. 
      if (s.adgroup === "" && s.adname === "") {
          s.campaign = s.cpcsource + "|" + s.cpcmedium + "|" + s.cpccampaign;
      } else if (s.adname === "") {
          s.campaign = s.cpcsource + "|" + s.cpcmedium + "|" + s.cpccampaign + "|" + s.adgroup;
      } else if (s.adgroup === "") {
          s.campaign = s.cpcsource + "|" + s.cpcmedium + "|" + s.cpccampaign + "|" + s.adname;
      } else {
          s.campaign = s.cpcsource + "|" + s.cpcmedium + "|" + s.cpccampaign + "|" + s.adgroup + "|" + s.adname;
      }
  
      // If value is blank - ie. only capture "|"s then = no camopaign
      if (s.campaign === "|||||" || s.campaign === "||||" || s.campaign === "|||" || s.campaign === "||") { s.campaign = "" }
  }
  
  function getHashValue(key) {
      var matches = location.hash.match(new RegExp(key + '=([^&]*)'));
      return matches ? matches[1] : '';
  }
  
  if (getHashValue('cid') !== '' && location.hash.indexOf('cid=') !== -1) {
      s.campaign = getHashValue('cid').replace(/%7C/g, '|');
  } else if (getHashValue('cpcsource') !== null && getHashValue('cpcsource') !== '') {
      s.campaign = getHashValue('cpcsource') + '|' + getHashValue('cpcmedium') + '|' + getHashValue('cpccampaign') + '|' + getHashValue('adgroup') + '|' + getHashValue('adname');
  } else if (getHashValue('utm_source') !== '') {
      s.campaign = getHashValue('utm_source') + '|' + getHashValue('utm_medium') + '|' + getHashValue('utm_campaign') + '|' + getHashValue('utm_term') + '|' + getHashValue('utm_content');
  }  
    
  }
  s.doPlugins = s_doPlugins
  
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
  * Plugin: getVisitNum - version 3.0
  */
  s.getVisitNum=new Function("tp","c","c2",""
  +"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
  +"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
  +"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
  +"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
  +"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
  +"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
  +"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
  +"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
  +"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
  +";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
  s.dimo=new Function("m","y",""
  +"var d=new Date(y,m+1,0);return d.getDate();");
  s.endof=new Function("x",""
  +"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
  +"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
  +"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
  +"t;");
  
  /*
   * Plugin Utility: Append to List v1.2
   */
  s.apl=new Function("l","v","d","u",""
  +"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo"
  +"r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe"
  +"rCase()));}}if(!m)l=l?l+d+v:v;return l;");
  
  /*
  * Utility s.gatherIntPromo v2.0 - Pass in query string value and
  returns all instances of that value in a comma-delimited list
  */
  s.gatherIntPromo=new Function("p","m","r",""
  +"var s=this,a,d,e,i,l='',r=r?r:'';if(m=='0'){a=document.getElementsB"
  +"yTagName('a');for(i=0;i<=a.length-1;i++){if(a[i].href.indexOf(p)!=-"
  +"1){if(l==''){l=s.getURLVars(a[i].href)[p];}else{l=l+','+s.getURLVar"
  +"s(a[i].href)[p];}}}}else if(m=='1'){a=document.getElementsByTagName"
  +"('body')[0].innerHTML;e=a.match(r);if(e==null){return null;}else{d="
  +"s.eliminateDuplicates(e);for(i=0;i<=d.length-1;i++){if(d[i].indexOf"
  +"(p)!=-1){if(l==''){l=s.getURLVars(d[i])[p];}else{l=l+','+s.getURLVa"
  +"rs(d[i])[p];}}}}}return l;");
  s.eliminateDuplicates=new Function("ar",""
  +"var s=this,j,le=ar.length,ou=[],ob={};for(j=0;j<le;j++){ob[ar[j]]=0"
  +";}for(j in ob){ou.push(j);}return ou;");
  s.getURLVars=new Function("u",""
  +"var s=this,k,uv=[],uh,h=u.slice(u.indexOf('?')+1).split('&');for(k="
  +"0;k<h.length;k++){uh=h[k].split('=');uv.push(uh[0]);uv[uh[0]]=uh[1]"
  +";}return uv;");
  
  /*
   * Plugin: getValOnce_v1.11
   */
  s.getValOnce=new Function("v","c","e","t",""
  +"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
  +"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
  +"==0?0:a);}return v==k?'':v");
  
  /*
   * Copyright 2011-2013 Adobe Systems, Inc.
   * s_getLoadTime v1.36 - Get page load time in units of 1/10 seconds
   */
  function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT}
  
  
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
  
  
  