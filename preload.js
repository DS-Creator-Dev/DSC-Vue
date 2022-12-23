const { contextBridge } = require("electron");
const ipc_renderer = require('electron').ipcRenderer;

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  
  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});

contextBridge.exposeInMainWorld(
  // Allowed 'ipcRenderer' methods.
  'ipcRender', {
    // From render to main.
    send: (channel, args) => {
      let valid_channels = ipc.render.send;
      if (valid_channels.includes(channel)) {
        ipc_renderer.send(channel, args);
      }
    },
    // From main to render.
    receive: (channel, listener) => {
      let valid_channels = ipc.render.receive;
      if (valid_channels.includes(channel)) {
        // Deliberately strip event as it includes `sender`.
        ipc_renderer.on(channel, (event, ...args) => listener(...args));
      }
    },
    // From render to main and back again.
    invoke: (channel, args) => {
      let valid_channels = ipc.render.sendReceive;
      if (valid_channels.includes(channel)) {
        return ipc_renderer.invoke(channel, args);
      }
    }
  }
);

const preload = {
  open_dialog: (options)=>void(async() => {
    var path = await ipc_renderer.invoke("open_dialog", options)
      .then((path)=>{
        return path.filePaths[0];
      })
    return path;
  })(),
}
contextBridge.exposeInMainWorld('electron', preload);