First of all please read this documentation: https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/products.html?lang=e...

 

the syntax of s.products is

 

s.products = "category;product name;unit, total price; events;merchandisign eVars"
 

For merchandising eVars you need to first configure the eVar to have correct configuration. https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/evar-merchandising.h...

 

Make sure to choose the product syntax if you want to use as part of s.products

 

Based on your code you just need to add 2 more categories separated by a ";"

 

try {

	var productString = [],
		cleanProductString
	for (i = 0; i < adobeDataLayer.length; i++) {
		if (adobeDataLayer[i].event == 'purchase') {
			var tmp = i;
			for (j = 0; j < adobeDataLayer[tmp].transaction.orderItems.length; j++) {
				productString.push(";" + 
				    adobeDataLayer[tmp].transaction.orderItems[j].productSKU + 
				    ";" + 
				    adobeDataLayer[tmp].transaction.orderItems[j].quantity + 
				    ";" + 
				    adobeDataLayer[tmp].transaction.orderItems[j].price.toFixed(2) +
				    ";" +
				    "event1=2.3" +
				    ";" +
				    "eVar25=caps"
				);
			}
			s.products = productString.toString();

		}

	}

} catch (e) {}
 

Please be aware that you can add more than one event and one more than one eVar but they will need to be separated by a pipe "|".

You can omit event but you will still to keep the placeholder for events using ";;"

 

Also the above logic is only good if event and eVar apply to each individual products, however if you want to use it at the global level like shipping price for all products and not for individual products then you should us the merchandising conversion syntax (you will need to configure evar to use this syntax).

 

Code will look as follow:

try {

	var productString = [],
		cleanProductString
	
	for (i = 0; i < adobeDataLayer.length; i++) {
		if (adobeDataLayer[i].event == 'purchase') {
		    s.events += "event1=2.3"
		    s.eVar25 = "caps"
			var tmp = i;
			for (j = 0; j < adobeDataLayer[tmp].transaction.orderItems.length; j++) {
				productString.push(";" + 
				    adobeDataLayer[tmp].transaction.orderItems[j].productSKU + 
				    ";" + 
				    adobeDataLayer[tmp].transaction.orderItems[j].quantity + 
				    ";" + 
				    adobeDataLayer[tmp].transaction.orderItems[j].price.toFixed(2) 
				);
			}
			s.products = productString.toString();

		}

	}

} catch (e) {}
