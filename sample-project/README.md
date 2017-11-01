# Exercise 3: Sample Project

These are the following instructions for completing the assignment:

#### Step 1 – Create the Project
- Use your web framework of choice, applying current best practices for that
framework
- Use an appropriate tool for dependency management
- Use a build tool to run/develop/deploy the application

#### Step 2 – Add a List page
- Load data from: http://jsonplaceholder.typicode.com/users
- Show a list of all users ordered by Name descending
  - Include name, username, e-mail and address formatted to look like the following.

| Name      | Username     | Email     | Address   |
| :-------- | :----------- | :-------- | :-------- |
| Name      | Username     | name@email.com | Address City, State Zip

- Structure your code to optimize for reuse, testing, and maintenance

#### Step 3 – Add a detail page
- Add a link so if the user clicks on the Name entry, they can navigate to a second
page with detailed information for the user
- The detail page should be “bookmarkable”
Step 4 - Testing
- Provide an automated test for the above functionality

## To get the code up and running:

- Clone this to your local machine with `git clone https://github.com/chrissyfancy/coding-challenges.git`
- `$ cd sample-project` to change into the sample-project directory
- `bundle install`
- `npm install`
- To run this locally, `$ ruby server.rb` and in another tab `npm start`
- Visit `http://localhost:4567` in your browser
- To test, run `npm test`
