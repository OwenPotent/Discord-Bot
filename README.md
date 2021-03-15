## Discord Bot Template
Here is a simple command handler for a discord bot. It is free to use and easy to setup! You can also add more commands as you like! 
Note that you'll have to set up your own configuration for it to work.

## Dependencies and Others
- [discord.js v12.5.1](https://discord.js.org/)
- [node.js v12.0.0 or newer](https://nodejs.org/)
- [npm v7.5.4](https://www.npmjs.com/)
- [pm2](https://pm2.keymetrics.io/) (**Optional**)

## Setup
1. To start, download this repository via zip file and extract it
2. Open the `config.json.example` file with your recommended code editor. (I use Visual Studio Code but you can also you whatever you want)
3. Rename the file to `config.json`. after you open the file it should look like this. For the `TOKEN` part, you'll have to create an application 
[here](https://discord.com/developers/applications). After getting the token, you can change the `PREFIX` part to whatever prefix you desire.
```
{
  "token": "TOKEN",
  "prefix": "PREFIX"
}
```
4. After completing them, open your command prompt in the folder and type the following code to install all dependencies.
```
npm install
```
5. Once its install, run `node index.js` or `node .` to start the bot up!
6. If you'd like to run the bot forever, first type `npm install pm2 -g` in your command prompt, after that run the code `pm2 start index.js` and enjoy!

## Contributing
1. Fork this repository.
2. Create your own branch.
3. Commit your codes.
4. Push to the branch.
5. Submit a pull request :>


**E**
