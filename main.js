// Carregamento das variáveis de ambiente
require('dotenv').config();

const { app, BrowserWindow } = require('electron');
// const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: parseInt(process.env.LT_WIDTH),
    height: parseInt(process.env.LT_HEIGHT),
    webPreferences: {
      nodeIntegration: true
    },
    alwaysOnTop: Boolean(process.env.LT_ALWAYSONTOP) // Mantém a janela sempre no topo
  });

  // Definindo a escala do conteúdo para se ajustar à janela pequena
  win.webContents.on('did-finish-load', () => {
    win.webContents.setZoomFactor(parseFloat(process.env.LT_SETZOOMFACTOR)); // Ajuste a escala conforme necessário (0.4 = 40% do tamanho original)
  });

  win.loadURL(process.env.LT_LOAD_URL_PORT);
  win.webContents.openDevTools(); // Opcional: Abre o DevTools
}

app.whenReady().then(createWindow);
