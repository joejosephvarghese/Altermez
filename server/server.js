const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet")
const Configs = require("./utils/constants");
const cors = require('cors');
require("./database/connection");
const errorHandler = require("./utils/middleware/errorHandlng")


//requiring routes
const userRoute = require("./routes/userRoutes");
const AppError = require("./utils/error-class/AppError");
const HttpStatusCodes = require("./utils/httpStatusCodes");



//creating sever instance
const app = express();
const server = http.createServer(app);


//using global middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(helmet())
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));


app.use("/api/v1/auth", userRoute);



app.all("*", (req, res, next) =>{
    const err = new AppError(`Can't find ${req.originalUrl} on the server`, HttpStatusCodes.NOT_FOUND);
    next(err)
})


//Global error handling middleware
app.use(errorHandler)

const PORT = Configs.PORT || 5000;

//Server listening...

server.listen(PORT, () => console.log(`Server listening PORT: ${PORT}`));

module.exports = app;