
//s.linkTrackVars="products,list1,list2,list3,eVar112,events";
//s.linkTrackEvents="event60, purchase";
s.events="event61,event62,purchase"
s.list2=_satellite.getVar("pb: membertype");
s.list3=_satellite.getVar("pb: coverageamount");
s.list1=_satellite.getVar("pb: insurancetype");

s.purchaseID = digitalData.page.category.epmrrefId;

// DEFINE PRODUCT VARIABLE
          
      // EXAMPLE s.products = "Example category;Example product;1;3.50;event1=4.99|event2=5.99;eVar1=Example merchandising value 1|eVar2=Example merchandising value 2";
        // example : s.products = "cat;id;quantity;price;events;evars";
       s.products = ''
      for(var i = 0; i < digitalData.products.length; i++) {
          // Add individual product info to the product string

          var category = digitalData.products[i].userType;
          var product = digitalData.products[i].insuranceType;
          var quan = 1;
          var price = parseFloat(digitalData.products[i].monthlyPremium);
          var events = 
                        "event61="+ parseFloat(digitalData.products[i].monthlyPremium) + 
                        "|event62=" + parseFloat(digitalData.products[i].coverageAmount.replace(/\$|,/g, ''));
          var evars = "eVar112=" + digitalData.products[i].coverageAmount.replace(/\$|,/g, ' ');

          s.products += category + ";" + product + ";" + quan + ";" + price + ";" + events + ";" + evars;

          // If there are more products, add a comma
          if(i != digitalData.products.length - 1) {
              s.products += ",";
          }
      }


/******************************************* BEGIN CODE TO DEPLOY *******************************************/
/* Adobe Consulting Plugin: apl (appendToList) v4.0 */
function apl(lv,va,d1,d2,cc){var b=lv,d=va,e=d1,c=d2,g=cc;if("-v"===b)return{plugin:"apl",version:"4.0"};var h=function(){if("undefined"!==typeof window.s_c_il)for(var k=0,b;k<window.s_c_il.length;k++)if(b=window.s_c_il[k],b._c&&"s_c"===b._c)return b}();"undefined"!==typeof h&&(h.contextData.apl="4.0");window.inList=window.inList||function(b,d,c,e){if("string"!==typeof d)return!1;if("string"===typeof b)b=b.split(c||",");else if("object"!==typeof b)return!1;c=0;for(a=b.length;c<a;c++)if(1==e&&d===b[c]||d.toLowerCase()===b[c].toLowerCase())return!0;return!1};if(!b||"string"===typeof b){if("string"!==typeof d||""===d)return b;e=e||",";c=c||e;1==c&&(c=e,g||(g=1));2==c&&1!=g&&(c=e);d=d.split(",");h=d.length;for(var f=0;f<h;f++)window.inList(b,d[f],e,g)||(b=b?b+c+d[f]:d[f])}return b};
/******************************************** END CODE TO DEPLOY ********************************************/  
  
s.events = apl(s.events,"event58=" + digitalData.transactionData.totalAmount);
s.events = apl(s.events,"event59=" + digitalData.transactionData.monthlyPremiumTotal);
s.events = apl(s.events,"event60:" + digitalData.page.category.epmrrefId);

// The below items are mapped to the indivudal product lines
  s.events = apl(s.events,"event70=" + digitalData.products[0].monthlyPremium);
  s.events = apl(s.events,"event71=" + digitalData.products[1].monthlyPremium);
  s.events = apl(s.events,"event72=" + digitalData.products[2].monthlyPremium);
  s.events = apl(s.events,"event73=" + digitalData.products[3].monthlyPremium);
  s.events = apl(s.events,"event74=" + digitalData.products[4].monthlyPremium);
  s.events = apl(s.events,"event75=" + digitalData.products[5].monthlyPremium);
  s.events = apl(s.events,"event76=" + digitalData.products[6].monthlyPremium);
  s.events = apl(s.events,"event77=" + digitalData.products[7].monthlyPremium);
  s.events = apl(s.events,"event78=" + digitalData.products[8].monthlyPremium);

