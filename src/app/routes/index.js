import { pages } from './../index'

 
const routes = {
    // Exact path
    '/': pages.homePage.frames.MainFrame,
 
    // // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,
 
    // // Wildcard parameter
    // '/book/*': Book,
 
    // Catch-all
    // This is optional, but if present it must be the last
    '*': pages.notFoundPage.frames.MainFrame,
}

export default routes