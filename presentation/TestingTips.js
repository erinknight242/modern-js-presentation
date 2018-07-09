import React from "react";
import { Slide, List, Appear, ListItem, Code } from "spectacle";
import { MyHeading, MyLink } from "./components";

export const testingTips = () => {
  return [
    <Slide align="top">
      <MyHeading section="Testing Javascript">Tips</MyHeading>
      <List style={{ lineHeight: 1.5 }}>
        <Appear>
          <ListItem>Separate business logic from DOM and framework code</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Try it out on{" "}
            <MyLink href="https://repl.it/languages/jest">https://repl.it/languages/jest</MyLink>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Use{" "}
            <Code textColor="secondary" bold={false}>
              --coverage
            </Code>{" "}
            for instant code coverage
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Use{" "}
            <Code textColor="secondary" bold={false}>
              --notify
            </Code>{" "}
            for system notifications
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Vscode jest</ListItem>
        </Appear>
        <Appear>
          <ListItem>Jest snippets</ListItem>
        </Appear>
      </List>
    </Slide>
  ];
};

export default testingTips;
