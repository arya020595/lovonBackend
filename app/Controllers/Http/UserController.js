'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {

    async index({ request, response, view }) {

        return await User.all()
    }

    async create({ request, response, view }) {

    }

    async store({ request, response, view, auth }) {

        // const user = await User.create(request.all())
        // let accessToken = await auth.generate(user)
        // return response.json({ "user": user, "access_token": accessToken })
        return await User.create(request.all())
    }

    async show({ request, response, view, params, auth }) {
        return await User.find(params.id)
        // return response.send(auth.current.user)
    }

    async edit({ request, response, view }) {
        
    }

    async update({ request, response, view, params }) {
        const { username, password, email, fullname, no_phone, role } = request.post()
        // Buat variabel yang mana isi dari variabel ini persis atau sesuai dengan element dan value yang ada di Postman
        const hashPassword = Hash.make(password) 
        return await User
            .query()
            .where('id', params.id)
            .update(
                {
                   username:username,
                   password: hashPassword,
                   email:email,
                   fullname:fullname,
                   no_phone:no_phone,
                   role:role
                }
            )
    }

    async destroy({ request, response, view, params }) {
        const { id } = params
        const User1 = await User.find(id)

        return await User1.delete()
    }

    async login({ request, auth, response }) {
        const email = request.input("email")
        const password = request.input("password");
        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy('email', email)
                let accessToken = await auth.generate(user)
                return response.json({ "user": user, "access_token": accessToken })
            }

        }
        catch (e) {
            return response.json({ message: 'You first need to register!' })
        }
    }

    // async login({ request, auth}) {
    //     // const { email, password } = request.all()
    //     // await auth.attempt(email, password)

    //     // return 'Logged in successfully'
    //     const user = auth.user
    //     const { email, password } = request.all()
    //     return auth
    //         .authenticator('jwt')
    //         .withRefreshToken()
    //         .attempt(email, password)
    //         .generate(user)
    // }
}

module.exports = UserController
