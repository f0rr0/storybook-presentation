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
  Appear,
  S
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
  tertiary: "#f3f99d",
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
              "Non development builds are expensive",
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
          <Image width="400" src={storybookLogo} />
        </Slide>
        <Slide align="center center">
          <Text textColor="tertiary" textFont="primary" size={4} italic>
            Isolated UI development environment for components
          </Text>
        </Slide>
        <Slide align="center center">
          <Text textColor="tertiary" textFont="primary" size={4} italic>
            Visualise different states of your components and build them interactively
          </Text>
        </Slide>
        <Slide align="center center">
          <Text textColor="tertiary" textFont="primary" size={4} italic>
            Stories are to UI components what unit tests are to business logic.
          </Text>
        </Slide>
        <Slide align="center center">
          <Heading size={4} textColor="secondary" textFont="secondary">Demo ✨</Heading>
        </Slide>
        <Slide align="center flex-start">
          <Heading size={4} textColor="secondary" textFont="secondary">Community 👥</Heading>
        </Slide>
        <Slide align="center flex-start">
          <Heading size={4} textColor="secondary" textFont="secondary">Winnings 🍻</Heading>
          <List margin="120px auto">
            {[
              "Complex bootstrapping processes",
              "Deeply nested scenes",
              "Hot reloading may not work",
              "Reloads are expensive",
              "Implicit dependency on the codebase",
              "Non development builds are expensive",
              "Visibility varies inversely with LOC"
            ].map((item) => (
              <Appear key={item}>
                <ListItem textColor="secondary" textFont="primary" italic>
                  <S type="strikethrough">{item}</S>
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide align="center center">
          <Text textColor="tertiary" textFont="primary" size={4} italic>
            Surfaces questions around the component's API and ownership of data/props. The contract between components is well established.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
