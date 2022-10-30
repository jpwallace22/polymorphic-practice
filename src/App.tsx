import { ReactText } from "react";
import { Text } from "./components";

const Emphasis = ({ children, ...props }: { children: ReactText }) => (
  <em {...props}>{children}</em>
);

function App() {
  return (
    <div>
      <Text as="a" href="https://www.google.com" style={{ display: "block" }}>
        hello world
      </Text>
      <hr />
      <Text as={Emphasis} color="red">
        You are Awesome!
      </Text>
    </div>
  );
}

export default App;
