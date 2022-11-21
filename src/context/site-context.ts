import React from "react";
import {SiteGeneral} from "../api/models";

const AppContext = React.createContext<SiteGeneral | null>(null);

export default AppContext;