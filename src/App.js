import React, {Component} from 'react';
import ThemeProvider from "react-toolbox/lib/ThemeProvider";
import Autocomplete from "react-toolbox/lib/autocomplete";

import theme from "./toolbox/theme";
import "./toolbox/theme.css";

import './App.css';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Autocomplete
                    source={{
                        "ES-es": "Spain",
                        "TH-th": "Thailand",
                        "EN-gb": "England",
                        "EN-en": "USA",
                    }}
                    value={["EN-en"]}
                />
            </ThemeProvider>
        );
    }
}

export default App;
