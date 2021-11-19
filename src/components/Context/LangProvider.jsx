import React, { Component } from "react";
import LangContext from "./LangContext";

class LangProvider extends Component {
  state = {
    language: "French"
  };

  changeLanguageEn = () => {
    this.setState({language: "English"})
  }

  changeLanguageFr = () => {
    this.setState({language:"French"})
  }

  render() {
    //  Setup all the values/functions you want to expose to anybody reading
    // from the AuthContext.
    const authValues = {
      language: this.state.language,
      changeLanguageFr: this.changeLanguageFr,
      changeLanguageEn: this.changeLanguageEn
    };

    return (
      <LangContext.Provider value={authValues}>
        {this.props.children}
      </LangContext.Provider>
    );
  }
}

export default LangProvider;