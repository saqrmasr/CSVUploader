const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
let win
function createWindow() {
  win = new BrowserWindow({ width: 1000, height: 1200, resizable: true })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}   

app.on('ready', createWindow)
//here must be cross platform not only windows
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})  
//for the reloading 
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

