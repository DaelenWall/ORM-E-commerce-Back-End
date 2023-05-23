# ORM-E-commerce-Back-End
UConn Bootcamp Chapter 13 ORM Challenge

## Description
In this chapter 13 challenge I took my knowledge of ORM and used it to create an E-commerce Back End.  I now have a valuable asset to use in my journey towards becoming a web developer as I can use this E-commerce Back End as a part of my coding portfolio.


## Process
* The first thing I did after creating the repository was setting up my database as well as adding in empty base files such as 'connection.js' and 'server.js'.

![ormbasefilesimg](https://github.com/DaelenWall/ORM-E-commerce-Back-End/assets/122398507/4cfc93ca-35ed-4c7f-99bc-42ca31c94319)


* The next step was to write the 'connection.js' and the 'server.js'.  Now I had a port and a stable server connection that I could use to test my routes and models on Insomnia.

![ormserverimg](https://github.com/DaelenWall/ORM-E-commerce-Back-End/assets/122398507/85c03827-942e-465f-8399-1b79e3eb60ad)



* Next, I wrote a model for tags because I figured it would be the easiest (it only utilizes 'id' and 'tag_name' as parameters).  After that was done I wrote out a route to test it on.

![ormtagsimg](https://github.com/DaelenWall/ORM-E-commerce-Back-End/assets/122398507/32429044-1092-486b-88f7-508484ec8c2e)


* The next step was to write the other two models that were necessary for this project, 'Product.js' and 'Category.js'.  Since these models were so similar to the 'Tag.js' model, it was easy to transfer the code over and tweek it to fit the new models.    

![ormmodelsimg](https://github.com/DaelenWall/ORM-E-commerce-Back-End/assets/122398507/ac347a15-9e73-4ceb-8f78-2e68c2638847)



* Next, the routes that were linked to these models, again, were similar to the routes I wrote in 'tag-routes.js', so transferring over was almost seamless.

![ormroutesimg](https://github.com/DaelenWall/ORM-E-commerce-Back-End/assets/122398507/c53c4e88-62f0-4c8f-b8bf-c5f25870ecb4)



* Finally, I had to write the index.js model that synced each model together.  This was mainly a test of logic as I used my knowledge of sequelize associations to complete the data-tabling. 
![ormindeximg](https://github.com/DaelenWall/ORM-E-commerce-Back-End/assets/122398507/ca441e81-0a6e-4ae6-92c1-2667ad5abb8c)


## Walkthrough
[ORM Walkthrough Video.webm](https://github.com/DaelenWall/ORM-E-commerce-Back-End/assets/122398507/712d2071-e31c-44cd-95f4-239626befd5b)


## Conclusion
Overall, this was a great first ORM project.  I enjoyed using 'sequelize' again and the action of connecting models together in a database was very interesting to me as previously we had only done it inside MySQL.
