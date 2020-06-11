import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start()
import CountdownController from "./src/countdown_controller"
application.register("countdown", CountdownController)
