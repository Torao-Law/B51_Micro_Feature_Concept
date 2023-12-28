import React from "react"
import Counting from "./components/counting";

const App: React.FC = () => {
  const [author, setAutor] = React.useState<string>("Gua ganteng dahhh !!")

  return (
    <>
      <Counting name={author} age={24}/>
    </>
  );
};

export default App;