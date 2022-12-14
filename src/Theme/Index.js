import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: "#1D9BD6",
            color: "#ffff",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "0em",
            borderRadius: "8px",
            height: "40px",
            width: "144px",

            "&:hover": {
              background: "#1D9BD6",
              color: "#ffff",
            },
          },
        },
        {
          props: { variant: "google" },
          style: {
            background: "linear-gradient(#1D9BD6, #64C4BC)",
            "&:hover": {
              backgroundColor: "#1D9BD6",
            },
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true
    //   }
    // },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F6",
          ".MuiTableCell-root": {
            color: "#374151",
          },
          borderBottom: "none",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
  },
  palette: {
    neutral: {
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background: {
      default: "#F9FAFC",
      paper: "#FFFFFF",
    },
    divider: "#E6E8F0",
    primary: {
      main: "#E4E5E7",
      light: "#64C4BC",
      dark: "#528079",
      contrastText: "#EBEBEB",
    },
    secondary: {
      main: "#656D79",
      light: "#3FC79A",
      dark: "#0B815A",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#14B8A6",
      light: "#43C6B7",
      dark: "#0E8074",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2196F3",
      light: "#64B6F7",
      dark: "#0B79D0",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFB020",
      light: "#FFBF4C",
      dark: "#B27B16",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D14343",
      light: "#DA6868",
      dark: "#922E2E",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#121828",
      secondary: "#65748B",
      disabled: "rgba(55, 65, 81, 0.48)",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
  typography: {
    // Font:"Poppins",
    // Weight:"300",Size:"12px",LineHeight:"16px",
    // button: {
    //       background: "linear-gradient(to right bottom, #1D9BD6, #64C4BC)",
    //       width: "144px",
    //       height: "40px",
    //     }}
    //     variant="contained"
    //     type="submit"
    //   >
    //     {" "}
    //     Sign in
    //     {" "}
    //   </Button>
    // </Btn>
    // },
    fontFamily:
      "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
    body1: {
      fontSize: "14",
      fontWeight: "400",
      lineHeight: "30px",
      // fontFamily: "poppins",
      color: "#64C4BC",
      Width: "182px",
      Height: "22px",
      fontFamily: "'Poppins', sans-serif",
    },

    body2: {
      fontFamily: " Poppins",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: " 20px",
      letterSpacing: "0em",
      textAlign: "left",
      color: "black",
    },
    body3: {
      fontFamily: " Poppins",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: " 20px",
      letterSpacing: "0em",
      textAlign: "left",
      color: "white",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: "14px",
      fontWeight: "bold",
      // lineHeight:" 20px",
      letterSpacing: " 0em",
      textAlign: "left",
    },
    subtitle2: {
      fontFamily: " Poppins",
      fontSize: "12px",
      font: "Poppins",
      fontWeight: " 300",
      lineHeight: "16px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: " Poppins",
      fontSize: "14px",
      fontWeight: " 400",
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
      color: "white",
    },
    processed: {
      width: "81.18px",
      height: "20px",
      left: "959.82px",
      top: " 118px",
      background: "rgba(255, 145, 44, 0.19)",
      borderRadius: "2px",
      color: "#5AC3B8",
    },
    h1: {
      fontFamily: " Poppins",
      fontSize: "16px",
      height: "22px",
      fontWeight: "500",
      lineHeight: " 22px",
      letterSpacing: "0em",
      textAlign: "left",
      color: "#1D9BD6",
      padding: "30px",

    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.375,
    },
    h3: {
      fontFamily: "Poppins",
      fontSize: "14px",
      fontWeight: " 400",
      lineHeight: "22px",
      letterSpacing: " 0em",
      textAlign: " left",
      color: "#656D79",

    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.375,
    },
  },
});
export default theme;
