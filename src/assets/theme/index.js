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
        width_1060: "1060px",
        width_1150: "1150px",
        width_1200: "1200px",
        width_1300: "1300px",
        width_1400: "1400px",
        width_1500: "1500px",
        width_1600: "1600px",
        width_1780: "1780px",
        width_1880: "1880px",
    },
    mixin: {
        boxShadow: `
            transition: box-shadow 200ms ease;

            &:hover {
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
            }
        `,
        mediaWidth: `
            @media screen and (min-width: 1080px) and (max-width: 1300px) {
                width: 1060px;
            }

            @media screen and (min-width: 1200px) and (max-width: 1300px) {
                width: 1150px;
            }

            @media screen and (min-width: 1300px) and (max-width: 1400px) {
                width: 1200px;
            }

            @media screen and (min-width: 1400px) and (max-width: 1500px) {
                width: 1300px;
            }

            @media screen and (min-width: 1500px) and (max-width: 1600px) {
                width: 1400px;
            }

            @media screen and (min-width: 1600px) and (max-width: 1800px) {
                width: 1500px;
            }

            @media screen and (min-width: 1800px) and (max-width: 2000px) {
                width: 1780px;
            }

            @media screen and (min-width: 2000px) and (max-width: 2300px) {
                width: 1880px;
            }

            @media screen and (min-width: 2300px) and (max-width: 2500px) {
                width: 1980px;
            }

            @media screen and (min-width: 2500px) and (max-width: 2900px) {
                width: 2080px;
            }
        `
    },
};

export default theme;
