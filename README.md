# Sutherlands-movie-api

A front-end application to return information on a movie parsed from the themoviedb.org database

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
4. Find the index in the repo folder and launch it in a browser. You're done.
