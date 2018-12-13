## Over Pricing Prevention System (OPPS) - NC Based
Around [80%](http://www.globalissues.org/article/26/poverty-facts-and-stats#src1) people in the world live on as low as $10 a day. The developing regions are also going to see [97%](https://www.consultancy.uk/news/2191/97-percent-of-population-growth-to-be-in-developing-world) of population growth in the coming years. Built for the the emerging world, OPPS-NCB is a proof-of-concept [blockchain](https://www.coindesk.com/information/what-is-blockchain-technology)-based solution that uses quipu transaction data to eliminate overpricing in order to ensure people pay a fair price for purchasing a product. The first of its kind app uses transaction data gathered by quipu market app structured as, type of good or service sold, price, amount, geo-localization data, and time. The transaction data can be sourced from a blockchain. A single transaction might look like, 

`{"type-of-good-or-service-sold":"c-33","price":"55.00","amount":"25.00","geo-localization":"4.7110 n, 74.0721 w","time":2675629621}`, 

whereas a series of transaction might look like, 


` 
[{"type-of-good-or-service-sold":"c-4","price":"74.86","amount":"108.06","geo-localization":"4.7110 n, 74.0721 w","time":2093265710},`

`{"type-of-good-or-service-sold":"c-3","price":"53.61","amount":"86.08","geo-localization":"4.7110 n, 74.0721 w","time":1967652836},`

`{"type-of-good-or-service-sold":"c-9","price":"35.09","amount":"68.82","geo-localization":"4.7110 n, 74.0721 w","time":2272445201},`

`...`

`
{"type-of-good-or-service-sold":"c-45","price":"16.47","amount":"90.88","geo-localization":"4.7110 n, 74.0721 w","time":2754262581}]
`.


The app uses [nice classification 11th edition, version 2018](https://www.wipo.int/classifications/nice/nclpub/en/fr/20180101/classheadings/pdf-download.pdf?lang=en&tab=classheadings&dateInForce=20180101) for classifying goods and services (c-1-45). For the sake of simplicity, the app assumes, each class represents one good or service and quantity is fixed in a series of transactions. The app has the provision for test transaction data generation. The generator uses random values between 10.00 and 100.00 for the fields price and amount. In addition to that, the generator uses the latitude and longitude of Bogotá, the capital of Columbia for the geo-localization field. The generator uses random values between 1543661849 and 1544439481 i.e. Saturday, December 1, 2018 4:27:29 PM GMT+05:30 and Monday, December 10, 2018 4:28:01 PM GMT+05:30 for the field time. The generator feeds the app a series of 1000 transactions. 

To test the app, please go to the site, [opps-ncb.glitch.me](https://opps-ncb.glitch.me/), (and wait a few seconds, if necessary as glitch wakes it up) press the use test transaction data button, enter a class no (1-45), and then press the process transaction data button. The app will present to you the min. priced transaction, the max. priced transaction, and the percent difference that crucial in the prevention of overpricing in low-income communities of the emerging world. If the difference is too high, then it's a case of over pricing. You can also enter your own transaction data that adheres to the aforementioned structures and assumptions. 

The web-based app has been built on lightweight web technologies and uses google fonts to ensure the best user experience. It was an entertaining challenge to develop it. The app is going to add great value to the quipu ecosystem as micro-business owners will be able to understand whether the price they are paying for a good or service is fair. Their negotiation power will improve without a doubt. They won't feel defenseless in front of sellers who charge exorbitantly high prices for their goods or services. It will result in increased profit and growth. In the low-income communities, micro-entrepreneurs often lack the means to determine the most profitable procurement sources which reflects on their bottom line. OPPS-NCB will ensure that does not happen and help them in making well-informed procurement decisions. In future versions, subclasses and product ids can be added as necessary. 
