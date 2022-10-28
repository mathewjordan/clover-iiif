import React from "react";

interface Props {
  id: string;
  customTheme: any;
  options: any;
}

const App: React.FC<Props> = ({ id }) => {
  return <> does it work? {id}</>;
};

export default App;
