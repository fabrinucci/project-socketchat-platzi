const express = require('express');
const { createServer } = require('http');
const path = require('path');

const cookieParser = require('cookie-parser');

const realtimeServer = require('./realtimeServer');

const app = express();
const httpServer = createServer(app);
// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());

// Routes
app.use(require('./routes'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Levanto el servidor
httpServer.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});

// Llamo al servidor de Socket.io
realtimeServer(httpServer);
