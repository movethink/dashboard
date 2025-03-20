/* eslint-disable @typescript-eslint/no-require-imports */
const { app, BrowserWindow } = require('electron')
const { join } = require('node:path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 注意：仅在了解相关风险的情况下禁用 webSecurity
      webSecurity: false,
      nodeIntegration: true, // 如果你需要在渲染进程中使用Node.js功能
      preload: join(__dirname, 'preload.js'),
    },
  })

  if (app.isPackaged) {
    win.loadFile(join(__dirname, '../dist/index.html'))
  } else {
    win.loadURL('http://localhost:5173')
    win.webContents.openDevTools() // 开发环境下自动打开开发者工具
  }
}

app.whenReady().then(() => {
  createWindow()

  // 在macOS上，当应用被激活且没有窗口时创建新窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// 当所有窗口都被关闭且不是macOS系统时退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
