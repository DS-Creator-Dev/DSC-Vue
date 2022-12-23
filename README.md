# DSC-Vue
 DS Creator

## How to run:
Open the CMD or Terminal in the root directory of the project. Run `npm i` if you haven't already. Next, run `npm run build` this will generate the code that can be used by Electron. Then, go into the `index.html` file in the `dist` folder. Add a `.` before `/assets/` in line 5. Do the same modification in lines 8 & 9. Now back in your CMD or Terminal instance, run `npm start`. This will start up Electron.

## Note:
When trying to access a file from `/public` use the full path to get there (example: `../../public/image.png`) not `/image.png` like you would normally.