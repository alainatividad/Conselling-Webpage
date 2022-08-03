const db = require("../config/connection");
const { Availability, Consultant, Client } = require("../models");

db.once("open", async () => {
  await Consultant.deleteMany();

  const consultant = await Consultant.create([
    {
      firstName: "Alynna",
      lastName: "Natividad",
      email: "alynna@mail.com",
      password: "password12345",
      description:
        "Alynna has been working with youth and adults for the past 5 years. With an extensive background in psychology, Applied Behaviour Analysis, counselling, and psychotherapy, Alynna is focused on helping her clients gain the appropriate tools to live a more independent life. She believes in a person-centred practice, meeting the client’s level, and assessing the necessary skills the client can utilise to improve their quality of life.",
      services:
        "CBT, DBT, ACT, ABFT, Narrative Therapy, Sandplay/Play Therapy, Imago Therapy",
      role: "Psychotherapist and Counsellor",
      image: "consultant1.jpg",
    },
    {
      firstName: "Esther",
      lastName: "Jimenez",
      email: "chini@mail.com",
      password: "password12345",
      description:
        "Esther has finished her Master's degree in Clinical Psychology at University of the Philippines. For the past five years, she has worked as an early childhood educator and a values-formation coach. Her work is mainly focused on teaching children and their families tools for better school adjustment and emotional regulation. She believes in a body-centered approach when working with children. This involves yoga, mindfulness exercises, and meditation sessions. She highly believes in fostering safe spaces for clients to be themselves.",
      services: "CBT, DBT, ACT, ABFT, Narrative Therapy",
      role: "Psychologist",
      image: "consultant2.jpg",
    },
    {
      firstName: "Karmela",
      lastName: "Francia",
      email: "melai@mail.com",
      password: "password12345",
      description:
        "Karmela completed her Master of Clinical Psychology at the University of Sydney and is currently completing her PhD in the same university. Her work mainly focuses on practising evidence-based treatment of depression, anxiety disorders, and work-related stress. Karmela has had several years of experience supporting adults with mental health difficulties. She is described to be empathetic and friendly, offering a warm and safe space for her clients to be heard and understood. She believes in helping her clients develop their self awareness to healthily cope with life and work-related stress.",
      services: "CBT, DBT, ACT",
      role: "Psychologist",
      image: "consultant3.jpg",
    },
    {
      firstName: "Lianne",
      lastName: "Gopez",
      email: "lianne@mail.com",
      password: "password12345",
      description:
        "Lianne has been working as a psychologist for three years. He finished his master's degree in Clinical Psychology at University of Santo Tomas in Manila, Philippines. Since then, he has been working with children and adults in individual therapy sessions. He specialises in using cognitive/behavioural techniques in decreasing the occurrence and frequency of challenging and disruptive behaviours. He also has an extensive experience in working with families in resolving conflicts and repairing family relationships. He believes in empowering clients to have an agency to make decisions and improve their lives.",
      services: "CBT, DBT, ACT",
      role: "Psychologist",
      image: "consultant4.jpg",
    },
  ]);

  // console.log(consultant);

  await Availability.deleteMany();

  //date stored in UTC
  for (i = 0; i < consultant.length; i++) {
    const availableSched = await Availability.insertMany([
      {
        consultantId: consultant[i]._id,
        date: "2022-08-01T00:00:00.000Z",
        sched: [
          { time: "2022-07-31T23:00:00.000Z", booked: false },
          { time: "2022-08-01T01:00:00.000Z", booked: false },
          { time: "2022-08-01T03:00:00.000Z", booked: false },
          { time: "2022-08-01T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-02T00:00:00.000Z",
        sched: [
          { time: "2022-08-01T23:00:00.000Z", booked: false },
          { time: "2022-08-02T01:00:00.000Z", booked: false },
          { time: "2022-08-02T03:00:00.000Z", booked: false },
          { time: "2022-08-02T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-04T00:00:00.000Z",
        sched: [
          { time: "2022-08-03T23:00:00.000Z", booked: false },
          { time: "2022-08-04T01:00:00.000Z", booked: false },
          { time: "2022-08-04T03:00:00.000Z", booked: false },
          { time: "2022-08-04T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-05T00:00:00.000Z",
        sched: [
          { time: "2022-08-04T23:00:00.000Z", booked: false },
          { time: "2022-08-05T01:00:00.000Z", booked: false },
          { time: "2022-08-05T03:00:00.000Z", booked: false },
          { time: "2022-08-05T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-06T00:00:00.000Z",
        sched: [
          { time: "2022-08-05T23:00:00.000Z", booked: false },
          { time: "2022-08-06T01:00:00.000Z", booked: false },
          { time: "2022-08-06T03:00:00.000Z", booked: false },
          { time: "2022-08-06T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-08T00:00:00.000Z",
        sched: [
          { time: "2022-08-07T23:00:00.000Z", booked: false },
          { time: "2022-08-08T01:00:00.000Z", booked: false },
          { time: "2022-08-08T03:00:00.000Z", booked: false },
          { time: "2022-08-08T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-09T00:00:00.000Z",
        sched: [
          { time: "2022-08-08T23:00:00.000Z", booked: false },
          { time: "2022-08-09T01:00:00.000Z", booked: false },
          { time: "2022-08-09T03:00:00.000Z", booked: false },
          { time: "2022-08-09T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-11T00:00:00.000Z",
        sched: [
          { time: "2022-08-10T23:00:00.000Z", booked: false },
          { time: "2022-08-11T01:00:00.000Z", booked: false },
          { time: "2022-08-11T03:00:00.000Z", booked: false },
          { time: "2022-08-11T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-12T00:00:00.000Z",
        sched: [
          { time: "2022-08-11T23:00:00.000Z", booked: false },
          { time: "2022-08-12T01:00:00.000Z", booked: false },
          { time: "2022-08-12T03:00:00.000Z", booked: false },
          { time: "2022-08-12T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-13T00:00:00.000Z",
        sched: [
          { time: "2022-08-12T23:00:00.000Z", booked: false },
          { time: "2022-08-13T01:00:00.000Z", booked: false },
          { time: "2022-08-13T03:00:00.000Z", booked: false },
          { time: "2022-08-13T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-15T00:00:00.000Z",
        sched: [
          { time: "2022-08-14T23:00:00.000Z", booked: false },
          { time: "2022-08-15T01:00:00.000Z", booked: false },
          { time: "2022-08-15T03:00:00.000Z", booked: false },
          { time: "2022-08-15T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-16T00:00:00.000Z",
        sched: [
          { time: "2022-08-15T23:00:00.000Z", booked: false },
          { time: "2022-08-16T01:00:00.000Z", booked: false },
          { time: "2022-08-16T03:00:00.000Z", booked: false },
          { time: "2022-08-16T05:00:00.000Z", booked: false },
        ],
      },
      {
        consultantId: consultant[i]._id,
        date: "2022-08-18T00:00:00.000Z",
        sched: [
          { time: "2022-08-17T23:00:00.000Z", booked: false },
          { time: "2022-08-18T01:00:00.000Z", booked: false },
          { time: "2022-08-18T03:00:00.000Z", booked: false },
          { time: "2022-08-18T05:00:00.000Z", booked: false },
        ],
      },
    ]);

    for (let j = 0; j < availableSched.length; j++) {
      const { _id, consultantId } = availableSched[j];
      await Consultant.findOneAndUpdate(
        { _id: consultantId },
        {
          $addToSet: {
            availabilities: _id,
          },
        }
      );
    }
  }
  console.log("availability seeded");
  console.log("consultants seeded");

  await Client.deleteMany();

  await Client.create([
    {
      firstName: "Carl",
      lastName: "Washington",
      email: "carl@mail.com",
      password: "password12345",
    },
    {
      firstName: "Elijah",
      lastName: "Holt",
      email: "eholt@mail.com",
      password: "password12345",
    },
  ]);

  console.log("users seeded");

  process.exit();
});
