import * as express from "express";
import * as cors from "cors";
import apiRuter from './routes/api';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  public async listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeRoutes() {
    this.app.use(apiRuter);
    this.app.use('*', function(req, res) {
      res.status(200).json({
        status: 404,
        message: 'Page Not Found'
      })
    })
  }
}

export default App;