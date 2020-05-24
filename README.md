# StayInSchoolKids!-
OpenHacks hackathon demo app to keep track of your homework assignments

# The website 

## Getting started
- Clone the repo.
- Install the dependencies by navigating to the `website` folder and running the following command:
```bash
npm i
```
## Deployment 
- Generate the bundled javascript for production
```bash
npm run build
```
- Follow the instructions for firebase [deployment](https://firebase.google.com/docs/web/setup)

## Development
- From the `website` folder Run the server:
```bash
npm run dev:start
```
- On a separate terminal get webpack going to bundle the React files in the `client`: folder:
```bash
npm run dev:build
```

# The chrome extension

## To load up on Google Chrome Browser

- Clone or download main repo (unzip if downloading)
- Open chrome to `chrome://extensions`
- Toggle `developer mode on`
- Click on `load unpacked` and select chrome-extension from unzipped repo folder
- Navigate to [schoology](https://www.schoology.com) 