import { Router } from "express";
import { Login, RenderLogin } from "../controllers/auth.controller.js";

const router = Router()

router.get('/hello', (req, res) => {
    res.status(200).send('hello')
    res.end()
})
router.route('/login').post(Login).get(RenderLogin)
router.route('/dashboard').get((req, res) => {
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
                link: "/dashboard",

            },
            {
                name: "Payments",
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
                name: "Assignments",
                icon: `<icon class="fa fa-dashboard flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></icon>`,
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