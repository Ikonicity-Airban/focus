
tailwind.config = {
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
            primary: "#5e06f7",
            "black": "#333",
            "white": "#fff",
            "bg-color": "#817ff8",
            "off-white-bg": "rgb(236, 236, 236)",
        },
        fontFamily: {
            san: ["Montserrat", "sans-serif"],
            serif: ['Vollkorn', 'serif'],
            // heading: ['Mon']
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    }
}