import { front } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"
import * as listener from "./listener"
import * as func from "./functions"

front.loader = loader
front.display = display
front.listener = listener
front.func = func
export { front }