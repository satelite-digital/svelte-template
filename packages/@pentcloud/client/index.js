import API from './api'
import { confirmPassword, forgotPassword, signIn } from './auth.service'
import { create, destroy, update, findOne, findMany } from './user.service'

export default {
    config : API.config,
    auth : {
        confirmPassword,
        forgotPassword,
        signIn
    },
    user : {
        create,
        destroy,
        update,
        findOne,
        findMany
    }
}