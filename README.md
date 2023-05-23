# ORM-E-commerce-Back-End
UConn Bootcamp Chapter 13 ORM Challenge

## Description
In this chapter 13 challenge I took my knowledge of ORM and used it to create an E-commerce Back End.  I now have a valuable asset to use in my journey towards becoming a web developer as I can use this E-commerce Back End as a part of my coding portfolio.


## Process
* The first thing I did after creating the repository was setting up my database as well as adding in empty base files such as 'connection.js' and 'server.js'.
![ormbasefilesimg]("")


* The next step was to write the 'connection.js' and the 'server.js'.  Now I had a port and a stable server connection that I could use to test my routes and models on Insomnia.
![ormserverimg]("")


* Next, I wrote a model for tags because I figured it would be the easiest (it only utilizes 'id' and 'tag_name' as parameters).  After that was done I wrote out a route to test it on.
![ormtagsimg]("")


* The next step was to write the other two models that were necessary for this project, 'Product.js' and 'Category.js'.  Since these models were so similar to the 'Tag.js' model, it was easy to transfer the code over and tweek it to fit the new models.    
![ormmodelsimg]("")


* Next, the routes that were linked to these models, again, were similar to the routes I wrote in 'tag-routes.js', so transferring over was almost seamless.
![ormroutesimg]("")


* Finally, I had to write the index.js model that synced each model together.  This was mainly a test of logic as I used my knowledge of sequelize associations to complete the data-tabling. 
![ormindeximg]("")


## Walkthrough


## Conclusion
Overall, this was a great first ORM project.  I enjoyed using 'sequelize' again and the action of connecting models together in a database was very interesting to me as previously we had only done it inside MySQL.