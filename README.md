# Sutherlands-movie-api

A front-end application to return information on a movie parsed from the themoviedb.org database.

## A demo

During work hours [this link](http://18.221.179.187:3000/) http://18.221.179.187:3000/ should be working able to take you to the application deployed over AWS.

### themoviedb.org end point looks like this

https://api.themoviedb.org/3/search/movie?api_key=<<API_KEY>>&language=en-US&query=scott&page=1&include_adult=false

## HOW TO USE

1. Create a APIKEY.JSX in the root with your API key set to a variable and export it simmilar to<br/>
```js
const APIKEY = `y0ur5up3r53cr5tk3y`

export default APIKEY;
```
2. In the CLI run `npm install`
3. After installation run `npm run build`
At this point the index.html file will show the application and work, but to run on the provided server continue
4. The default port is 3000 if you want a different port add to an .env file `PORT=<<yourport here>>`
5. In the CLI run `npm run start`
Now the application is live on your localhost
