# Chuck Norris jokes

In this project, you will be able to get 10 Chuck Norris jokes randomly and then you can either consult the list of your
favorite jokes or click on the get jokes each 5 sec and you will be able to see new jokes each 5 seconds.

### This is what you will be able to do withen the project :

- Fetch 10 random Chuck Norris jokes from the provided API
- Show the results in a list.
- Toggle a timer which will fetch a new joke every 5 seconds. The list of jokes has a max of 10 items. The oldest joke goes off the list then the maximum is reached.
- The possibility to add and remove jokes as favorite (with a maximum of 10 favorites).
- Favorites are shown in a list on a separate page.
- When refreshing the page, favorites stay intact (i.e., use a database or cache).

### Setting up CI/CD using GITLAB

- Create a gitlab account
- Create an AWS Account
- Add the .gitlab-ci.yml on project root.
- Go gitlab project > CI/CD > Environment Variables
- Create an S3 Bucket
- Disable public access
- Create a cloudfront distribution
- Choose Web
- Choose the S3 bucket as the Origin domain
- Origin path should be /latest
- Restrict Bucket Access select Yes
- Select Create a New Identity
- Yes, Update Bucket Policy
- Default Root Object /index.html
- Redirect HTTP to HTTPS
- Lastly you can route the domain to cloudfront using Route53.
-
### What can be improved

- Install test library both unit using Jest and component/unit with Cypress tool .
- Automate linting process using CI/CD pipelines
- Improve UI/UX

# Run the project

### Install dependencies
### `npm install`

### Run
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
