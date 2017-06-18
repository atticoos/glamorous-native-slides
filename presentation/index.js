// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Notes,
  Text,
  CodePane,
  Layout,
  Image,
  Fill
} from "spectacle";

import {withProps} from 'recompose'
import Terminal from 'spectacle-terminal'
import Typist from 'react-typist'
import CodeSlide from 'spectacle-code-slide';

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
  icon: require('../assets/icon.png'),
  hoc: require('../assets/HOC2.png'),
  hocPipeline: require('../assets/HOC-pipeline.png')
};

preloader(images);

const theme = createTheme({
  primary: "gray",
  secondary: 'white',
  // secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const SlideTitle = withProps({
  size: 4,
  textColor: 'secondary',
  margin: '0px auto 20px'
  // fit: true
})(Heading)

/**
 * NOTES
 *
 * - Higher Order Component explanation
 *
 */
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

          <Heading size={1}>😃</Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <SlideTitle>
            What this talk is <strong>not</strong>
          </SlideTitle>
          <List>
            <ListItem>Free of tradeoffs</ListItem>
            <ListItem>The best way to style components</ListItem>
          </List>

          <Heading size={1}>😐</Heading>
        </Slide>

        <Slide transition={[]} bgColor="primary">
          <SlideTitle>Higher Order Components</SlideTitle>
          <Image src={images.hoc} margin="0 auto" />
        </Slide>

        <Slide transition={[]} bgColor="primary">
          <SlideTitle>Higher Order Components</SlideTitle>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc-text-normal.example")}
          />
        </Slide>

        <Slide transition={[]} bgColor="primary">
          <SlideTitle>Higher Order Functions</SlideTitle>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/hoc.example')}
          />
        </Slide>

        <Slide transition={[]} bgColor="primary">
          <SlideTitle>Composable Higher Order Functions</SlideTitle>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/hoc-composed.example')}
          />
        </Slide>

        <CodeSlide
          transition={["zoom"]}
          bgColor="#2d2d2d"
          lang="js"
          code={require("raw-loader!../assets/hoc-composed.example")}
          ranges={[
            {loc: [0, 10000], title: 'Composable HOF'},

            {loc: [15, 16], note: 'Composing a filter'},
            {loc: [9, 14], note: 'Composing a filter'},

            {loc: [9, 10], note: 'The input'},
            {loc: [10, 14], note: '`age` is within the closure'},
            {loc: [10, 11], note: 'Called with each user in the array'},
            {loc: [11, 12], note: 'Compare the input with the age in the `closure`'}
          ]}
        />


        <Slide bgColor="#FFF2F2" notes={`
  <ul>
    <li>Kent C Dodds</li>
    <li>Inspiration (styled-components)</li>
    <li>API to create components with certain styles</li>
  </ul>`}>
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

        <Slide transition={[]} bgColor="primary">
          <SlideTitle>Classic Example</SlideTitle>
          <Layout>
            <Fill></Fill>
            <Fill>
              <CodePane
                lang="jsx"
                source={
`<Button color="red" large>
  Click me!
</Button>`
                }
              />
            </Fill>
            <Fill></Fill>
          </Layout>
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
                style={{marginRight: 5, marginTop: 10, height: 720}}
                lang="js"
                source={require("raw-loader!../assets/button-normal.example")}
              />
            </Fill>

            <Fill>
              {/*<Text textSize="1em" textColor="secondary">glamorous</Text>*/}
              <CodePane
                style={{marginLeft: 5, marginTop: 10, height: 720}}
                lang="js"
                source={require("raw-loader!../assets/button-composed.example")}
              />
            </Fill>
          </Layout>
        </Slide>

        <CodeSlide
          transition={["zoom"]}
          bgColor="#2d2d2d"
          lang="js"
          code={require("raw-loader!../assets/button-normal.example")}
          ranges={[
            {loc: [0, 10000], title: 'Vanilla Component'},
            {loc: [1, 11], note: 'Processing dynamic props and styles'},
            {loc: [14, 15], note: 'Custom underlay color'},
            {loc: [15, 20], note: 'Custom styles'},

            {loc: [16, 17], note: 'Default style'},
            {loc: [36, 41], note: 'Default style'},

            {loc: [17, 18], note: 'User provided background color'},

            {loc: [18, 19], note: 'Forward user provided styles'},

            {loc: [20, 21], note: 'Forward HOC properties'},

            {loc: [23, 28], note: 'Similar song and dance'}
          ]}
        />

        <CodeSlide
          transition={["zoom"]}
          bgColor="#2d2d2d"
          lang="js"
          code={require("raw-loader!../assets/button-composed.example")}
          ranges={[
            {loc: [0, 10000], title: 'glamorous Component'},
            {loc: [2, 7], note: 'Not much to see here! Just prop forwarding.'},

            {loc: [19, 29], note: 'glamorous TouchableHighlight'},
            {loc: [20, 24], note: 'Static styles'},
            {loc: [24, 28], note: 'Dynamic styles'},

            {loc: [10, 17], note: 'Composable dynamic touchable props'},
            {loc: [18, 20], note: 'Composed with dynamic props and glamorous styles'},

            {loc: [31, 37], note: 'Text with dynamic styles'},
            {loc: [3, 4], note: 'And overriding styles are passed normally'}
          ]}
        />

        <Slide transition={[]} bgColor="primary">
          <SlideTitle>Higher Order Component</SlideTitle>
          <Image src={images.hocPipeline} margin="0 auto" />
        </Slide>

        {/*<Slide transition={["zoom"]} bgColor="primary" style={{maxHeight: 'auto'}}>
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
        </Slide>*/}

        <Slide transition={["zoom"]} bgColor="primary" style={{maxHeight: 'auto'}}>
          <SlideTitle>Getting Started</SlideTitle>
          <br />
          <Terminal
            title="1. atticoos: ~(zsh)"
            showFirstEntry={true}
            output={[
              <Typist>npm install glamorous-native --save </Typist>,
              <div style={{ color: "#33B969"}}>SUCCESS: Your just got easier!</div>
            ]}
          />
          <br />
          <CodePane
            lang="js"
            source={
`import glamorous from 'glamorous-native'

const DefaultText = glamorous.text({
  fontSize: 16,
  color: '#000'
})

export default DefaultText;`
            }
          />
        </Slide>
      </Deck>
    );
  }
}
