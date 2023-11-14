import { Static, front } from "cemjs-all"

export const loader = function () {
    Static.tt1 = 1
    setTimeout(() => {
        Static.tt1 = 5
        console.log('=a775e6=', front.init)
        front.init()
    }, 1500);
    return
}