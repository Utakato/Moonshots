<a href="https://test-moonshots.herokuapp.com/">Live</a>
 
MERN stack app.

<a href="https://github.com/Utakato/moonshots-data-gatherer">Data gatherer repo</a>


Moonshots is a tool I made that helps me choose crypto projects which are worth researching. My criteria for a good project is based on Product, Marketing and Community.     

Moonshots help me narrow down these project based on Community so I only look into projects that have a good community.     

I built a python scrapper that gathers data from coinmarketcap.com and regularly updates it. Also the app is also connected to Twitter through their API to get followers data for each project.(this is running daily on a webserver).    

I store data on a MongoDB(Atlas), I created an API to access this data in Node.js (with express and mongoose), and then used React with redux to display it on the web.  I used redux to store data received from the Node.js API and also store the query that goes the API ( offset for pagination and sort order )