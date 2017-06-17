// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Layout,
  Fill
} from "spectacle";

import {withProps} from 'recompose'

import GlamorousLogo from './components/glamorous-logo';
import GlamorousLive from './components/glamorous-example';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  icon: require('../assets/icon.png')
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const SlideTitle = withProps({
  size: 4,
  textColor: 'secondary',
  fit: true
})(Heading)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} textColor="secondary" fit>Composing Styled Components</Heading>
          <Text textSize="1em" textColor="secondary" margin="20px 0">With glamorous-native</Text>
          <Text textSize="1.3em" textColor="secondary">Atticus White</Text>

          <div style={{ margin: "20px 0" }}></div>

          <Layout>
            <Fill>
              <Text textSize="1em" textColor="secondary" margin={10}>🏡 Boston</Text>
            </Fill>
            <Fill>
              <Text textSize="1em" textColor="secondary" margin={10}>🏢 Robin</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text textSize="1em" textColor="secondary" margin={10}>@atticoos</Text>
            </Fill>
            <Fill>
              <Text textSize="1em" textColor="secondary" margin={10}>@atticoos</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <SlideTitle>
            What this talk <strong>is</strong>
          </SlideTitle>

          <List>
            <ListItem>An opinion</ListItem>
            <ListItem>Why, how, and where to compose styles</ListItem>
            <ListItem>Comparison of various approaches</ListItem>
            <ListItem>Demo of glamorous-native</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <SlideTitle>
            What this talk is <strong>not</strong>
          </SlideTitle>
          <List>
            <ListItem>Free of tradeoffs</ListItem>
            <ListItem>The best way to style components</ListItem>
            <ListItem><i>Too</i> in depth behind the scenes</ListItem>
          </List>
        </Slide>

        <Slide bgColor="#FFF2F2">
          <GlamorousLogo />
          <GlamorousLive />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" style={{maxHeight: 'auto'}}>
          <Heading size={4} textColor="secondary" style={{marginBottom: 50}}>The 🎶 and 💃</Heading>
          <Layout>
            <Fill>
              <Text textSize="1em" textColor="secondary">Vanilla</Text>
              <CodePane
                style={{marginRight: '5px', marginTop: 10, height: 430}}
                lang="js"
                source={require("raw-loader!../assets/hoc-text-normal.example")}
              />
            </Fill>

            <Fill>
              <Text textSize="1em" textColor="secondary">glamorous</Text>
              <CodePane
                style={{marginLeft: '5px', marginTop: 10, height: 430}}
                lang="js"
                source={require("raw-loader!../assets/hoc-text-composed.example")}
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <SlideTitle>
            What to look for
          </SlideTitle>
          <List>
            <ListItem>StyleSheet soup</ListItem>
            <ListItem>1-1 mappings of styles and "primitives"</ListItem>
            <ListItem>Light HOCs / "default components"</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" style={{maxHeight: 'auto'}}>
          <CodePane
            lang="jsx"
            source={`<Button color="red" large>
  Hello!
</Button>`}
          />
          <Layout>
            <Fill>
              {/*<Text textSize="1em" textColor="secondary">Vanilla</Text>*/}
              <CodePane
                style={{marginRight: '5px', marginTop: 10, height: 720}}
                lang="js"
                source={require("raw-loader!../assets/button-normal.example")}
              />
            </Fill>

            <Fill>
              {/*<Text textSize="1em" textColor="secondary">glamorous</Text>*/}
              <CodePane
                style={{marginLeft: '5px', marginTop: 10, height: 720}}
                lang="js"
                source={require("raw-loader!../assets/button-composed.example")}
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" style={{maxHeight: 'auto'}}>
          <Heading size={4} textColor="secondary">The 🎶 and 💃</Heading>
          <CodePane
            style={{maxHeight: 'auto'}}
            lang="js"
            source={require("raw-loader!../assets/welcome.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" style={{maxHeight: 'auto'}}>
          <Heading size={4} textColor="secondary">Enter: glamorous</Heading>
          <CodePane
            style={{maxHeight: 'auto'}}
            lang="js"
            source={require("raw-loader!../assets/welcome-improved.example")}
          />
        </Slide>
      </Deck>
    );
  }
}
