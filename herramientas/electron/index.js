const { app, BrowserWindow } = require('electron')

let ventanaPrincipal;


const crearVentana = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  
  app.on('ready', crearVentana)
  
  ventanaPrincipal.loadFile('index.html')
}