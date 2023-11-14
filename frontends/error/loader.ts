import { Static, front,Fn } from "cemjs-all"
export const loader = function () {
    Static.tt1 = 1
    setTimeout(() => {
        Static.tt1 = 5
        
        Fn.init()
    }, 1500);
    return
}