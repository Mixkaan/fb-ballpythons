const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      multer = require('multer'),
      bodyParser = require('body-parser'),
      { v4: uuidv4 } = require('uuid');
uuidv4();

//- EXPRESS --------------------------------------------------------- //>
const app = express();

//- DABATABSE-CONNECTION -------------------------------------------- //>
const connectDB = require('./database');
connectDB();

//- ENVIROMENT-VARIABLES -------------------------------------------- //>
require('dotenv').config();

//- SET-PORT-CONFIGS ------------------------------------------------ //>
app.set('port', process.env.PORT || 6500);

//- COOKIE-SET-INIT ------------------------------------------------- //>
// app.use(cookieParser());

//- FRONTEND-ENGINE-CONFIGS ----------------------------------------- //>
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//- FRONTEND-STYLES-MIDDLEWARE-CONFIGS ------------------------------ //>
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public/sass'),
  dest: path.join(__dirname, 'public/styles'),
  outputStyle: 'compressed',
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true,
  debug: false,
  prefix: '/styles',
}));

//- MIDDLEWARES --------------------------------------------- //>
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const storage = multer.diskStorage({
  destination: path.join(__dirname,'public/img/uploads'),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  }
});
app.use(multer({
  storage
}).single('image'));

app.use(bodyParser.json());

//- SET-FAV-ICON ---------------------------------------------------- //>
// const favicon = require('serve-favicon');
// app.use(favicon(__dirname + '/public/favicon.ico'));

//- RUTES ----------------------------------------------------------- //>
app.use(require('./routes/01_homepage.routes'));
app.use(require('./routes/06_admin.routes'));

//- 404-ERROR-HANDLING ------------------------------------- //
// app.use((req, res, next) => {
//   res.status(404).render('error/404');
// });

//- STATIC-FILES ---------------------------------------------------- //>
app.use(express.static(path.join(__dirname, 'public')));

//- START-APP ------------------------------------------------------- //>
app.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el Puerto', app.get('port'));
});
