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
    size: {
        fontSize_12: "12px",
        fontSize_14: "14px",
        fontSize_16: "16px",
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
