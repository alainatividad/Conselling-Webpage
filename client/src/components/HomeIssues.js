import React from "react";
import { Image, Card } from "semantic-ui-react";
const issues = [
  {
    image: "/images/home-anger.jpg",
    issue: "Anger",
    key: "Anger",
  },
  {
    image: "/images/home-depression.jpg",
    issue: "Depression",
    key: "Depression",
  },
  {
    image: "/images/home-anxiety.jpg",
    issue: "Anxiety",
    key: "Anxiety",
  },
  {
    image: "/images/home-alcohol.jpg",
    issue: "Alcohol and Drug Abuse",
    key: "Alcohol and Drug Abuse",
  },
  {
    image: "/images/home-trauma.jpg",
    issue: "Trauma",
    key: "Trauma",
  },
  {
    image: "/images/home-grief.jpg",
    issue: "Grief",
    key: "Grief",
  },
  {
    image: "/images/home-relationship.jpg",
    issue: "Relationship Issues",
    key: "Relationship Issues",
  },
  {
    image: "/images/home-family.jpg",
    issue: "Family Issues",
    key: "Family Issues",
  },
  {
    image: "/images/home-selfesteem.jpg",
    issue: "Self-esteem",
    key: "Self-esteem",
  },
  {
    image: "/images/home-social.jpg",
    issue: "Social Skills",
    key: "Social Skills",
  },
];
const HomeIssues = () => {
  return (
    <>
      <Card.Group centered>
        {issues.map((issue) => (
          <Card key={issue.key}>
            <Image wrapped ui={false} fluid src={issue.image} />
            <Card.Content>
              <Card.Header textAlign="center">{issue.issue}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};

export default HomeIssues;
