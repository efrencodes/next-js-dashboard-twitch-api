![](https://github.com/efrenmartinez/next-js-dashboard-twitch-api/blob/main/cover/next-js-dashboard-twitch-api.png)

### 💾 Live
[next-js-dashboard-twitch-api.vercel.app](https://next-js-dashboard-twitch-api.vercel.app/)

### 🎯 Used technologies:
  * [NextJS](https://nextjs.org/docs/getting-started)
  * ReactJS
  * Eslint
  * Prettier
  * Modules CSS

### 🎯 Plugins Eslint
  * eslint
  * babel-eslint
  * eslint-config-next
  * eslint-config-prettier

### 🎯 Plugins Prettier
  * prettier

### ⚙️ How To Use

To clone and run this application, you'll need **GIT** and **NodeJS** (which comes with npm) installed on your computer. From your command line:

```bash
  # Clone this repository
  $ git clone https://github.com/efrenmartinez/next-js-dashboard-twitch-api.git

  # Go into the repository
  $ cd next-js-dashboard-twitch-api

  # Install dependencies
  $ npm install

  # Run the app
  $ npm run dev

  # Open in browser
  # http://localhost:3000/
```

### Create Twitch Development Account [https://dev.twitch.tv/](https://dev.twitch.tv/)
### Create Application In Twitch Console [https://dev.twitch.tv/console](https://dev.twitch.tv/console)
Once you are fully authenticated with Twitch you will now be able to get to your Developer Console. Find the button that says "Your Console" or use this [link](https://dev.twitch.tv/console) to be transported over there! When you are here you should be able to see a button that says "Register Your Application". Click that and it should bring you to a page that looks like this:

  * Go ahead and add a name for your app (make it your own!).
  * For the section that says "OAuth Redirect Urls" you are going to add the following: `http://localhost`
  * Finally select the integration category for your app. Since we are using Twitch's API in a website we can easily select "Website Integration"
  * Press "Create" are ready to get started!
<br/>
  #### Create .env.local
  Create file `.env.local` in root the project with data.

```
TWITCH_CLIENT_ID=XXXXXXXXXXXXXXXX
TWITCH_SECRET_ID=XXXXXXXXXXXXXXXX
```

### 🎨 Format code with Prettier

```bash
  # Format code
  $ npm run format
```

### 🚩 Lint project

```bash
  # Lint
  $ npm run lint
```

### 🚀 Deployment
To deploy this project run
```bash
  # Build
  $ npm run build
```

### References
* [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
* [Twitch developers](https://dev.twitch.tv/)