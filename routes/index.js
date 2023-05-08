import { Router } from "express";
import { isAuthenticated, Login, RenderLogin } from "../controllers/auth.controller.js";
import passport from "../utils/passport.js";

const router = Router()

router.get('/hello', (req, res) => {
    res.status(200).send('hello')
    res.end()
})
router.route('/login')
    .get(RenderLogin)
    .post(passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
    })
    );

router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', {
        title: "Dashboard",
        layout: "dashboard",
        user: {
            name: "Focus Enoch",
            reg_no: "2018/344444",
            avatar_url: "images/logo.png"
        },
        drawerContent: [
            {
                name: "Dashboard",

                link: "/dashboard"
            },
            {
                name: "Profile",
                dropDownList: [
                    {
                        name: "View Profile",
                        link: "/assignments"
                    },
                    {
                        name: "Create Account",
                        link: "/accounts"
                    }

                ]
            },
            {
                name: "Payments",
                link: "/dashboard",

            },
            {
                name: "Assignments",
                link: "/dashboard",
                dropDownList: [
                    {
                        name: "All assignments",
                        link: "/assignments"
                    },
                    {
                        name: "Submission",
                        link: "/assignments/sumbit"
                    },
                    // {
                    //     name: "All assignments",
                    //     link: "/assignments"
                    // },
                    // {
                    //     name: "Submission",
                    //     link: "/assignments/sumbit"
                    // },

                ]
            },
            {
                name: "Courses",
                link: "/dashboard"
            },

            {
                name: "E-learning",
                link: "/dashboard"
            },
            {
                name: "Results",
                link: "/dashboard"
            },

        ]
    })
})
export default router;  