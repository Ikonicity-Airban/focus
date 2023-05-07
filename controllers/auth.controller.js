
export function Login(req, res) {
    res.json({ msg: "logged in" });
}

export function CreateAccount(req, res) {
    res.json({ msg: "account created" })
}

export function RenderLogin(req, res) {
    res.render('login', {
        title: "Login",
        inputs: [
            {
                label: "Email address",
                type: 'text',
                icon: `<icon class="fa fa-user"></icon>`
                ,
                placeholder: `John Doe`,
            },
            {
                label: "Password",
                icon: `<icon class="fa fa-user "></icon>`,
                type: "password",
                placeholder: "1234"
            }]

    })
}