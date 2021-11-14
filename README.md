#Couponify

##Install
`git clone https://github.com/duddelito/couponify.git`

I've used node version 16.10.0 for both frontend - React and backend Node.js with Express.js.
You should be able to set it up by running `npm install` in both the client and server folders. 
I'm using Typescript on both frontend and backend.

The React frontend runs on http://localhost:3000 and the backend on http://localhost:3001

In client/package.json there is a proxy making this possible to work. 
`"proxy": "http://localhost:3001",`

##Start
Start the node server in /server with `npm start` and afterwards the same in /client. 

##Backend
Just as an "easy" solution the backend stores the coupons in json files. Obviously it might have been a better idea to use a database for a real app, but just to be able to save down some data.

### API documentation

- /coupon/get/brand/:id (GET) - returns an array containing coupons for a specific brand, accepts the brand id as argument
- /coupon/get/user/:id (GET) - returns a coupon for a user, accepts the user id as argument
- /coupon/generate (POST) - expects a json object to be posted in looking like this to generate x(amount) of coupons:

`{"brandId": "0", "amount": "1", "campaignId": "0"}`

##Frontend
The frondend uses React and state to show the logged in brand its coupons for the current campaign. 
Enter a number in the input field and click the generate button to generate more coupons,
instantly reflected in the frontend.

A logged in user can also fetch a coupon using the Fetch button.
