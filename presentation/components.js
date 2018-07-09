import React from "react";
import { Link, Text, Heading, CodePane, Appear, ListItem } from "spectacle";

export const subtitleProps = {
  size: 6,
  textColor: "secondary",
  style: {
    fontSize: "18pt",
    fontWeight: "300",
    marginBottom: "3.5em",
    fontVariant: "small-caps"
  }
};
export const MySubtitle = ({ children }) => <Heading {...subtitleProps}>{children}</Heading>;

export const codePaneProps = {
  lang: "js",
  style: {
    fontSize: "16pt",
    marginRight: "10px",
    minWidth: "initial"
  }
};
export const MyCodePane = ({ source }) => <CodePane {...codePaneProps} source={source} />;

export const MyLink = ({ children, href }) => (
  <Link href={href} textColor="tertiary" target="_blank" style={{ textDecoration: "underline" }}>{children}</Link>
);

export const sectionHeadingProps = {
  textSize: "0.7em",
  textColor: "tertiary",
  caps: true
};

export const headingProps = {
  size: 6,
  textColor: "tertiary",
  caps: true,
  style: {
    fontWeight: "300",
    marginBottom: "3.5em"
  }
};
export const MyHeading = ({ children, section }) => (
  <div>
    <Text {...sectionHeadingProps}>{section}</Text>
    <Heading {...headingProps}>{children}</Heading>
  </div>
);

export const AppearListItem = ({ children }) => (
  <Appear>
    <ListItem>{children}</ListItem>
  </Appear>
);
