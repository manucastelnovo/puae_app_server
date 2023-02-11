import express from "express"
import cors from "cors"
import {config} from "./core/config/config"
import {configureRouting} from './core/routing/index'

const app = express();
app.use(express.json());
app.use(cors({origin:[]}))

configureRouting(app);

// app.use(authHandler);

// app.use(logError);
// app.use(errorHandler);

app.listen(config.port, ()=>{
    console.log(`Server Running at Port ${config.port}`);
});
