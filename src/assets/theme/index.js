const theme = {
    color: {
        primaryColor: "#ff385c",
        secondaryColor: "#00848A",
    },
    text: {
        primaryColor: "#484848",
        secondaryColor: "#222",
        tertiaryColor: "#6A6A6A",
    },
    font: {
        fontFamily: `${'Airbnb Cereal VF', 'Circular', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'sans-serif'}`,
    },
    hover: {
        color: "#ebebeb",
    },
    size: {
        fontSize_12: "12px",
        fontSize_14: "14px",
        fontSize_16: "16px",
    },
    width: {
        width_100: "100%",
        width_1920: "1920px",
    },
    mixin: {
        boxShadow: `
            transition: box-shadow 200ms ease;

            &:hover {
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
            }
        `,
    },
};

export default theme;
