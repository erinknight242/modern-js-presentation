import React from "react";
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  SlideSet,
  Appear,
  Image,
  Code,
  Layout,
  Fill,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import createTheme from "spectacle/lib/themes/default";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import { dropShadow, cursor } from "./sharedProps";
import { MyHeading, MyLink, MyCodePane, MySubtitle, AppearListItem } from "./components";
import { testingTips } from "./TestingTips";
require("normalize.css");

const theme = createTheme(
  {
    primary: "#4e4e4e",
    secondary: "#fff",
    tertiary: "#a9e023",
    quarternary: "#cecece"
  },
  {
    primary: { name: "Muli", googleFont: true, styles: ["300", "700i"] },
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  constructor() {
    super();
    localStorage.clear();
  }

  render() {
    const stringExample = "`string text ${expression} text`";

    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Layout>
            <Fill />
            <Fill>
              <Image style={dropShadow} height={170} src={require("../assets/react-logo.png")} />
            </Fill>
            <Fill>
              <Image style={dropShadow} height={140} src={require("../assets/redux-logo.png")} />
            </Fill>
            <Fill />
          </Layout>
          <Heading
            caps
            size={5}
            textColor="tertiary"
            style={{ fontWeight: "300", marginBottom: "0.5em" }}
          >
            Intro to React/Redux
          </Heading>
          <MySubtitle>Headspring Front End Forum</MySubtitle>
          <MySubtitle>Part 1: Modern JavaScript & Setup</MySubtitle>
        </Slide>

        <Slide align="top">
          <MyHeading>Intro to React/Redux: Part 1</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Modern JavaScript language features</ListItem>
            <ListItem>Front end tools and environment</ListItem>
            <ListItem>Testing JavaScript</ListItem>
            <ListItem>New project setup</ListItem>
            <ListItem>Recommended resources</ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Modern JavaScript">ES5</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <AppearListItem>ECMAScript: language specification created to standardize JavaScript</AppearListItem>
            <AppearListItem>ES5 standardized in 2009</AppearListItem>
            <AppearListItem>Functional methods for accessing arrays, including: map, filter, reduce, forEach</AppearListItem>
            <AppearListItem>JSON conversion methods JSON.parse(), JSON.stringify()</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Modern JavaScript">ES6 (A.K.A. ES2015)</MyHeading>
          <List style={{ lineHeight: 1.5, listStyle: "none" }}>
            <AppearListItem>
              <Layout>
                <Fill>Default parameters</Fill>
                <Fill>
                  <MyCodePane
                    source={require("../assets/code-examples/default-params.example")}
                  />
                </Fill>
              </Layout>
              <br />
            </AppearListItem>
            <AppearListItem>
              Template literals<br />
              <Code>{stringExample}</Code>
              <br />
              <br />
            </AppearListItem>
            <AppearListItem>
              Destructuring
              <Layout>
                <Fill>
                  <MyCodePane
                    source={require("../assets/code-examples/destructuring-object.example")}
                  />
                </Fill>
                <Fill>
                  <MyCodePane
                    source={require("../assets/code-examples/destructuring-array.example")}
                  />
                </Fill>
              </Layout>
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Modern JavaScript">ES6 (A.K.A. ES2015)</MyHeading>
          <List style={{ lineHeight: 1.5, listStyle: "none" }}>
            <ListItem>
              Shorthand for assignment
              <Layout>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/assignment-old.example")} />
                </Fill>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/assignment-new.example")} />
                </Fill>
              </Layout>
              <br />
            </ListItem>
            <AppearListItem>
              Block-scoped let/const keywords, no more IIFEs
              <Layout>
                <Fill>
                  <MyCodePane
                    source={require("../assets/code-examples/block-scope-old.example")}
                  />
                </Fill>
                <Fill>
                  <MyCodePane
                    source={require("../assets/code-examples/block-scope-new.example")}
                  />
                </Fill>
              </Layout>
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Modern JavaScript">ES6 (A.K.A. ES2015)</MyHeading>
          <List style={{ lineHeight: 1.5, listStyle: "none" }}>
            <ListItem>
              Arrow functions; protects <Code>this</Code>
              <Layout>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/arrow-old.example")} />
                </Fill>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/arrow-new.example")} />
                </Fill>
              </Layout>
              <br />
            </ListItem>
            <AppearListItem>
              Spread operator
              <Layout>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/spread-array.example")} />
                </Fill>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/spread-object.example")} />
                </Fill>
              </Layout>
            </AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/classes.js.example")}
          ranges={[{ loc: [0, 11], title: "ES6 Classes" }, { loc: [1, 6] }, { loc: [7, 10] }]}
        />

        <Slide align="top">
          <MyHeading section="Modern JavaScript">ES6+</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>ES2016 (ES7) array.includes(), ** operator</ListItem>
            <ListItem>ES2017 (ES8) async/await</ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Modern JavaScript">ES6 Modules</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Supports using modules with 'import' and 'export' instead of having to work around by using RequireJS or CommonJS</ListItem>
            <AppearListItem>Makes code reusable and easier to maintain</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Modern JavaScript">ES6 Modules</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Named exports
              <Layout>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/module-named.example")} />
                </Fill>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/module-named2.example")} />
                </Fill>
              </Layout>
            </ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Modern JavaScript">ES6 Modules</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Default exports
              <Layout>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/module-default.example")} />
                </Fill>
                <Fill>
                  <MyCodePane source={require("../assets/code-examples/module-default2.example")} />
                </Fill>
              </Layout><br />
            </ListItem>
            <Appear>
              <ListItem>Other uses
                <Layout>
                  <Fill>
                    <MyCodePane source={require("../assets/code-examples/module-combined.example")} />
                  </Fill>
                </Layout>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Modern JavaScript">Promises</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Avoid "Callback Hell"</ListItem>
            <Appear>
              <Image src={require("../assets/callback.png")} />
            </Appear>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/promises.js.example")}
          ranges={[{ loc: [0, 25] }, { loc: [0, 5] }, { loc: [6, 9] }, { loc: [10, 18] }, { loc: [19, 25] }]}
        />

        <Slide align="top">
          <MyHeading section="Modern JavaScript">TypeScript</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Open source language developed and maintained by Microsoft</ListItem>
            <AppearListItem>Typed superset of JavaScript</AppearListItem>
            <AppearListItem>Compiles to plain JavaScript</AppearListItem>
            <AppearListItem>
              <MyCodePane source={require("../assets/code-examples/typescript.example")} />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>Tools and Environment</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>VS Code</ListItem>
            <ListItem>Basic Anatomy</ListItem>
            <ListItem>Webpack</ListItem>
            <ListItem>Babel</ListItem>
            <ListItem>ESLint</ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Tools and Environment">VS Code - The Editor</MyHeading>
          <List style={{ marginLeft: "-150px", marginRight: "-150px", lineHeight: 1.5 }}>
            <AppearListItem>VS Code preferred for support and extensibility​</AppearListItem>
            <AppearListItem>Lots of helpful extensions and tooling for javascript​</AppearListItem>
            <AppearListItem>Download -> code.visualstudio.com​</AppearListItem>
            <AppearListItem>NOTE: You can still use full VS, but...</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Tools and Environment">Basic Anatomy</MyHeading>
          <Text style={{ marginLeft: "-150px" }} textAlign="left">
            package.json
          </Text>
          <List style={{ marginLeft: "-150px", marginRight: "-150px", lineHeight: 1.5 }}>
            <AppearListItem>Meta info (name, description, etc) and dependencies​</AppearListItem>
            <AppearListItem>Meta typically edited by hand​</AppearListItem>
            <AppearListItem>
              Manage dependencies with a package manager (yarn or npm)
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Tools and Environment">Basic Anatomy</MyHeading>
          <Appear>
            <div>
              <Text style={{ marginLeft: "-150px" }} textAlign="left">
                node_modules/
              </Text>
              <List style={{ marginLeft: "-150px", marginRight: "-150px", lineHeight: 1.5 }}>
                <ListItem>Local copies of all dependencies​</ListItem>
              </List>
            </div>
          </Appear>
          <Appear>
            <div>
              <Text style={{ marginLeft: "-150px" }} textAlign="left">
                yarn.lock / package-lock.json
              </Text>
              <List style={{ marginLeft: "-150px", marginRight: "-150px", lineHeight: 1.5 }}>
                <AppearListItem>
                  Generated by package manager during package installation
                </AppearListItem>
                <AppearListItem>"Locks" dependencies to specific version</AppearListItem>
                <AppearListItem>More importantly, locks subdependencies</AppearListItem>
                <AppearListItem>SHOULD be added to source control​</AppearListItem>
              </List>
            </div>
          </Appear>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="json"
          code={require("../assets/tooling_package.json.example")}
          ranges={[
            { loc: [0, 17], title: "package.json" },
            { loc: [1, 6] },
            { loc: [6, 10] },
            { loc: [10, 13] }
          ]}
        />

        <Slide align="top">
          <MyHeading section="Tools and Environment">Webpack - More than a Bundler</MyHeading>
          <List style={{ marginLeft: "-150px", marginRight: "-150px", lineHeight: 1.5 }}>
            <AppearListItem>Bundles project code, vendor code, and styles​</AppearListItem>
            <AppearListItem>
              Compiles, transpiles, preprocesses, and more via loaders
            </AppearListItem>
            <AppearListItem>
              Performs optimization, minification, and more via plugins
            </AppearListItem>
            <AppearListItem>
              Allows for "hot reload" capabilities -> faster development
            </AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/webpack.config.js.example")}
          ranges={[
            { loc: [0, 10], title: "webpack.config.js" },
            { loc: [0, 1] },
            { loc: [3, 4] },
            { loc: [4, 8] }
          ]}
        />

        <Slide align="top">
          <MyHeading section="Tools and Environment">Babel - Embracing the Edge</MyHeading>
          <List style={{ marginLeft: "-150px", marginRight: "-150px", lineHeight: 1.5 }}>
            <AppearListItem>Javascript compiler/transpiler</AppearListItem>
            <AppearListItem>
              Allows us to utilize latest javascript features and syntax
            </AppearListItem>
            <AppearListItem>Enables wider browser support</AppearListItem>
            <AppearListItem>
              Enables additional code optimizations in bundle/minification
            </AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/babel_es6.example")}
          ranges={[{ loc: [0, 5], title: "Input: ES6+" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/babel_es6_out.example")}
          ranges={[{ loc: [0, 5], title: "Output: ES5" }]}
        />

        <Slide align="top">
          <MyHeading section="Tools and Environment">ESLint - Code Housekeeping</MyHeading>
          <List style={{ marginLeft: "-150px", marginRight: "-150px", lineHeight: 1.5 }}>
            <AppearListItem>Javascript linting utility​ (static analysis)</AppearListItem>
            <AppearListItem>Extremely customizable rules​</AppearListItem>
            <AppearListItem>Support for completely custom rules​</AppearListItem>
            <AppearListItem>
              eslint-config-headspring (on npm)
              <List style={{ marginLeft: "70px" }}>
                <ListItem>Based on popular airbnb config​</ListItem>
              </List>
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>Testing Javascript</MyHeading>
          <Appear>
            <List style={{ lineHeight: 1.5 }}>
              <ListItem>Jest</ListItem>
              <ListItem>Writing your first test</ListItem>
              <ListItem>Testing tips</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide align="top">
          <MyHeading section="Testing Javascript">Jest - Delightful Javascript Testing</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <Appear>
              <ListItem>Easy setup</ListItem>
            </Appear>
            <Appear>
              <ListItem>Instant feedback</ListItem>
            </Appear>
            <Appear>
              <ListItem>Fast 🔥</ListItem>
            </Appear>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          title="sum.js"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/sum_function.example")}
          ranges={[{ loc: [0, 5], title: "sum.js" }, { loc: [0, 3] }, { loc: [4, 5] }]}
        />

        <CodeSlide
          align="top"
          title="sum-test.js"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/testcode.example")}
          ranges={[
            { loc: [0, 8], title: "sum-test.js" },
            { loc: [0, 1] },
            { loc: [2, 3] },
            { loc: [3, 7] }
          ]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="json"
          code={require("../assets/package.json.example")}
          ranges={[{ loc: [0, 17], title: "package.json" }, { loc: [5, 8] }]}
        />

        <Slide textColor="primary">
          <Terminal
            title="1. brandon@headspring: ~(zsh)"
            output={[
              <Typist cursor={cursor}>npm install --save-dev jest</Typist>,
              <Typist cursor={cursor}>npm test</Typist>,
              "> jest",
              <div>
                <div>
                  <span style={{ backgroundColor: "#33B969" }}>PASS</span> .\add.test.js (1.115s)
                </div>
                <div>
                  <span style={{ color: "#33B969" }}>√</span> adds 1 + 2 to equal 3 (2ms)
                </div>
                <pre>
                  {`Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        12.469s
Ran all test suites.`}
                </pre>
              </div>,
              <div />
            ]}
          />
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/dashboard_before.js.example")}
          ranges={[
            { loc: [0, 20], note: "ProjectManager.Web\\Assets\\JavaScripts\\TimeEntry\\app.js" },
            { loc: [1, 3] },
            { loc: [5, 16] }
          ]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/dashboard_after.js.example")}
          ranges={[
            { loc: [2, 6] }
          ]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/timeUtils-test.js.example")}
          ranges={[
            { loc: [0, 15] },
            { loc: [3, 9] },
            { loc: [10, 16] }
          ]}
        />

        <SlideSet>
          {testingTips()}
        </SlideSet>

        <Slide align="top">
          <MyHeading>VSCode Jest</MyHeading>
          <Image src="https://raw.githubusercontent.com/jest-community/vscode-jest/master/images/vscode-jest.gif" />
        </Slide>

        <Slide align="top">
          <MyHeading>New Project Setup</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <Appear><ListItem>The Front End Forum is working on a Headspring-specific path for creating a new project that will be consistent, repeatable, and maintainable. More info coming soon.</ListItem></Appear>
            <Appear><ListItem>For ASP.NET Core projects, <Code>dotnet new spa</Code> generates a good starting point for several frameworks (Angular, React, React/Redux, Vue, Aurelia, Knockout)</ListItem></Appear>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>Recommended Resources</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem><MyLink href="https://javascript.info">https://javascript.info</MyLink> - The Modern JavaScript Tutorial</ListItem>
            <ListItem><MyLink href="https://github.com/aspnet/JavaScriptServices">https://github.com/aspnet/JavaScriptServices</MyLink></ListItem>
            <ListItem><MyLink href="https://github.com/FormidableLabs/spectacle">https://github.com/FormidableLabs/spectacle</MyLink> React presentation library</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading caps size={4} textColor="tertiary" style={{ fontWeight: "300", marginBottom: "0.5em" }}>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
