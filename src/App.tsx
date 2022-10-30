import { ReactText } from "react";
import { Text } from "./components";

const Emphasis = ({ children }: { children: ReactText }) => <em>{children}</em>;

function App() {
  return (
    <div>
      <Text as="a" href="https://www.google.com" style={{ display: "block" }}>
        hello world
      </Text>
      <hr />
      <Text as={Emphasis}>You are Awesome!</Text>
    </div>
  );
}

export default App;
