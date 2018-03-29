// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Assets
import storybookLogo from "../assets/storybook-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import storyboardXcode from "../assets/storyboard-xcode.png";
import sadDeveloper from "../assets/sad-developer.webp";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#21232d",
  secondary: "#d8d8d6",
  tertiary: "#57c7ff",
  quarternary: "#f92672"
}, {
  primary: { name: "Inconsolata", googleFont: true, styles: [ "400", "700" ] },
  secondary: { name: "Berkshire Swash", googleFont: true, styles: [ "400", "700" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={350} progress="none" bgColor="primary" theme={theme}>
        <Slide>
          <Layout>
            <Fill>
              <Image width="400" src={storybookLogo} />
              <Text textColor="secondary" textFont="secondary" size={6} bold margin="30">&</Text>
              <Image width="120" src={reactLogo} />
            </Fill>
          </Layout>
        </Slide>
        <Slide align="center flex-start">
          <Heading size={4} textColor="secondary" textFont="secondary">What it isn't 🤔</Heading>
          <Image width="800" src={storyboardXcode} margin="40px auto" />
        </Slide>
        <Slide align="center flex-start">
          <Heading size={4} textColor="secondary" textFont="secondary">Status Quo 😅</Heading>
          <List margin="120px auto">
            {[
              "Complex bootstrapping processes",
              "Deeply nested scenes",
              "Hot reloading may not work",
              "Reloads are expensive",
              "Implicit dependency on the codebase",
              "Production builds are expensive",
              "Visibility varies inversely with LOC"
            ].map((item) => (
              <Appear key={item}>
                <ListItem textColor="secondary" textFont="primary" italic>{item}</ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide align="center center">
          <Image width="800" src={sadDeveloper} />
        </Slide>
        <Slide align="center center">
          <Text textColor="#f3f99d" textFont="primary" size={4} italic>
            Isolated UI development environment for components
          </Text>
        </Slide>
        <Slide align="center center">
          <Text textColor="#f3f99d" textFont="primary" size={4} italic>
            Visualise different states of your components and build them interactively
          </Text>
        </Slide>
      </Deck>
    );
  }
}
