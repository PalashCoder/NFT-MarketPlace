import { Principal } from "@dfinity/principal";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;

const init = async () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

init();
