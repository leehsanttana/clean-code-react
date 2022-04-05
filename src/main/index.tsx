import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@/presentation/components/";
import "@/presentation/styles/global.scss";
import { MakeLogin } from "./factories/pages/login/login-factory";

ReactDOM.render(<Router makeLogin={<MakeLogin />} />, document.getElementById("root"));
