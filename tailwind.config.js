module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary:
        // "Playfair Display"
        "Gilroy",
      body: "Work Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: "#050402",
        secondary: " #F8F8F8",
        tertiary: "#131419",
        buttonary: "#0C0C0C",
        accent: {
          // DEFAULT: "#ac6b34",
          DEFAULT: "#E98700",
          hover: "#925a2b",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [],
};
