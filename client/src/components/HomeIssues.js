import React from "react";
import { Image, Card, Popup } from "semantic-ui-react";
const issues = [
  {
    image: "/images/home-anger.jpg",
    issue: "Anger",
    key: "Anger",
    desc: `According to Good Therapy (2019) Anger is a strong feeling of displeasure. It is often a reaction to stress, failure, or injustice. Anger can range from mild irritation to full-blown rage.\n\n\n

    It is normal to experience anger. At times, anger is the appropriate response to the actions of others. When managed correctly and kept in check, anger can be an important ally to a healthy adult.
    
    But anger has risks, perhaps more than any other emotion.  It can alienate people from others and lead individuals to do things they later regret. People who have lasting, extreme anger may find it helpful to explore its causes with a therapist.
    Anger. (2019). GoodTherapy. https://www.goodtherapy.org/learn-about-therapy/issues/anger`,
  },
  {
    image: "/images/home-depression.jpg",
    issue: "Depression",
    key: "Depression",
    desc: `According to American Psychological Association (2000), Depression is more than just sadness. People with depression may experience a lack of interest and pleasure in daily activities, significant weight loss or gain, insomnia or excessive sleeping, lack of energy, inability to concentrate, feelings of worthlessness or excessive guilt and recurrent thoughts of death or suicide.
    Depression is the most common mental disorder. Fortunately, depression is treatable. A combination of therapy and antidepressant medication can help ensure recovery.
    Depression (2000). American Psychological Society. https://www.apa.org/topics/depression`,
  },
  {
    image: "/images/home-anxiety.jpg",
    issue: "Anxiety",
    key: "Anxiety",
    desc: `Anxiety is an emotion characterized by feelings of tension, worried thoughts and physical changes like increased blood pressure.
    People with anxiety disorders usually have recurring intrusive thoughts or concerns. They may avoid certain situations out of worry. They may also have physical symptoms such as sweating, trembling, dizziness or a rapid heartbeat.
    Anxiety (2000). American Psychological Society. https://www.apa.org/topics/anxiety`,
  },
  {
    image: "/images/home-alcohol.jpg",
    issue: "Alcohol and Drug Abuse",
    key: "Alcohol and Drug Abuse",
    desc: `Substances refers to alcohol and other drugs (illegal or not) as well as some substances that are not drugs at all (such a petrol or glue) that can have a mood altering effect. People use substances for multiple and complex reasons including to relax, have fun, dull emotional or physical pain, or to get away from problems or difficulties experienced in life. The misuse of substances may lead to a dependence on the substance to cope in certain situations. The use of substances to reduce emotional or physical pain or to get away from problems may be effective in the short term however may have serious long-term consequences on health and wellbeing.
    It is important to be aware that suddenly stopping the use of alcohol and other drugs can be dangerous and cause harm. You can discuss your options with a health professional or a drug and alcohol service.
    Substance Misuse, Abuse, and Addiction (n.d.). Lifeline Australia. https://www.lifeline.org.au/get-help/information-and-support/substance-misuse-and-addiction/ `,
  },
  {
    image: "/images/home-trauma.jpg",
    issue: "Trauma",
    key: "Trauma",
    desc: `Trauma is an emotional response to a terrible event like an accident, rape, or natural disaster. Immediately after the event, shock and denial are typical. Longer term reactions include unpredictable emotions, flashbacks, strained relationships, and even physical symptoms like headaches or nausea. While these feelings are normal, some people have difficulty moving on with their lives. Psychologists can help these individuals find constructive ways of managing their emotions.
    Trauma (2013). American Psychological Society. https://www.apa.org/topics/trauma`,
  },
  {
    image: "/images/home-grief.jpg",
    issue: "Grief and Loss",
    key: "Grief and Loss",
    desc: `Grief is a natural response to loss. It might be the loss of a loved one, relationship, pregnancy, pet, job or way of life. Other experiences of loss may be due to children leaving home, infertility and separation from friends and family. The more significant the loss, the more intense the grief is likely to be.
    Grief is expressed in many ways and it can affect every part of your life; your emotions, thoughts and behaviour, beliefs, physical health, your sense of self and identity, and your relationships with others. Grief can leave you feeling sad, angry, anxious, shocked, regretful, relieved, overwhelmed, isolated, irritable or numb.
    Grief has no set pattern. Everyone experiences grief differently. Some people may grieve for weeks and months, while others may describe their grief lasting for years. Through the process of grief, however, you begin to create new experiences and habits that work around your loss.
    Grief and Loss (2022). Beyond Blue Ltd. https://www.beyondblue.org.au/the-facts/grief-and-loss`,
  },
  {
    image: "/images/home-relationship.jpg",
    issue: "Relationship Issues",
    key: "Relationship Issues",
    desc: `Arguments and disagreements occur within all close relationships, and are a normal part of dealing with differences in ideas, beliefs, and perspectives.
    However, chronic relationship conflict and stress is a serious issue. It has been linked to poorer mental and physical health and can affect other areas of life such as relationships with family and friends, and work colleagues. Children also suffer when exposed to high levels of conflict at home, and are at greater risk for anxiety, depression, behavioural problems, and poorer health.
    Learning effective and respectful ways to communicate differences is an important step in building a healthy, fulfilling relationship, and which can benefit our overall wellbeing and those around us.
    Relationship Problems (2022). Australian Psychological Society. https://psychology.org.au/for-the-public/psychology-topics/relationship-problems`,
  },
  {
    image: "/images/home-family.jpg",
    issue: "Family Issues",
    key: "Family Issues",
    desc: `Conflict can happen when family members have different views or beliefs that clash. Sometimes conflict can occur when people misunderstand each other and jump to the wrong conclusion. Issues of conflict that are not resolved peacefully can lead to arguments and resentment.

    It is normal to disagree with each other from time to time. Occasional conflict is part of family life. However, ongoing conflict can be stressful and damaging to relationships. Some people find it difficult to manage their feelings and become intentionally hurtful, aggressive or even violent.
    Sometimes, strong emotions or the power imbalances that can be present in relationships are difficult to resolve and can only be addressed in a counselling situation.
    Family Conflict (2021). Better Health Channel. https://www.betterhealth.vic.gov.au/health/healthyliving/family-conflict`,
  },
  {
    image: "/images/home-selfesteem.jpg",
    issue: "Self-esteem",
    key: "Self-esteem",
    desc: `Self-esteem is your opinion of yourself. People with healthy self-esteem like themselves and value their achievements. While everyone lacks confidence occasionally, people with low self-esteem feel unhappy or unsatisfied with themselves most of the time. This can be remedied but it takes attention and daily practise to boost self-esteem.
    See your psychologist for information, advice and referral if you’re having trouble improving your self-esteem or if low self-esteem is causing problems such as depression.
    Self esteem (2021). Better Health Channel. https://www.betterhealth.vic.gov.au/health/healthyliving/self-esteem `,
  },
  {
    image: "/images/home-social.jpg",
    issue: "Social Skills",
    key: "Social Skills",
    desc: `Social skills help us connect with other people and have successful interactions. Trouble with these skills can cause problems in many areas of life. That includes school, work, home, and out in the community.
    Struggling with social skills is different from not “being social.” People may want to interact. But when they do, it doesn’t go well. They might struggle to make conversation, seem out of sync, or behave in a way that turns off other people.
    People may have trouble picking up on social cues and following social rules. That can make it hard to fit in, form friendships, and work with others. People may avoid interacting and feel isolated and alone with their struggles.
    Understanding trouble with social skills (2022). Understood for All Inc. https://www.understood.org/en/articles/trouble-with-social-skills`,
  },
];
const HomeIssues = () => {
  return (
    <>
      <Card.Group centered>
        {issues.map((issue) => (
          <Popup
            wide="very"
            trigger={
              <Card key={issue.key}>
                <Image wrapped ui={false} fluid src={issue.image} />
                <Card.Content>
                  <Card.Header textAlign="center">{issue.issue}</Card.Header>
                </Card.Content>
              </Card>
            }
          >
            <Popup.Header>{issue.issue}</Popup.Header>
            <Popup.Content>{issue.desc}</Popup.Content>
          </Popup>
        ))}
      </Card.Group>
    </>
  );
};

export default HomeIssues;
