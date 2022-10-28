import React from "react";
import { ConfigOptions } from "@/context/viewer-context";
interface Props {
    canvasIdCallback?: (arg0: string) => void;
    customTheme?: any;
    id: string;
    manifestId?: string;
    options?: ConfigOptions;
}
declare const App: React.FC<Props>;
export default App;
