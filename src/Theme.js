import { createMuiTheme } from '@material-ui/core/styles';

const integrifyBlue = "#0002CB";
const integrifyRed = "#DE0000";

export default createMuiTheme({
    palette: {
        primary: {
            main: `${integrifyBlue}`
        },
        secondary: {
            main: `${integrifyRed}`
        }
    },

    typography: {
        h3: {
            fontFamily: "Roboto",
            color: "green"
        }
    }

})