const db = require("../config/connection");
const { Availability, Consultant, Client } = require("../models");

db.once("open", async () => {
  await Consultant.deleteMany();

  const consultant = await Consultant.create({
    firstName: "Alynna",
    lastName: "Natividad",
    email: "alynna@mail.com",
    password: "password12345",
    description:
      "Alynna has been working with youth and adults for the past 5 years. With an extensive background in psychology, Applied Behaviour Analysis, counselling, and psychotherapy, Alynna is focused on helping her clients gain the appropriate tools to live a more independent life. She believes in a person-centred practice, meeting the client’s level, and assessing the necessary skills the client can utilise to improve their quality of life.",
    services:
      "CBT, DBT, ACT, AFBT, Narrative Therapy, Sandplay/Play Therapy, Imago Therapy",
    role: "Psychotherapist and Counsellor",
  });

  await Availability.deleteMany();

  //date stored in UTC
  const availableSched = [
    {
      consultantId: consultant._id,
      date: "2022-08-01T00:00:00.000Z",
      sched: [
        { time: "2022-07-31T23:00:00.000Z", booked: false },
        { time: "2022-08-01T01:00:00.000Z", booked: false },
        { time: "2022-08-01T03:00:00.000Z", booked: false },
        { time: "2022-08-01T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-02T00:00:00.000Z",
      sched: [
        { time: "2022-08-01T23:00:00.000Z", booked: false },
        { time: "2022-08-02T01:00:00.000Z", booked: false },
        { time: "2022-08-02T03:00:00.000Z", booked: false },
        { time: "2022-08-02T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-04T00:00:00.000Z",
      sched: [
        { time: "2022-08-03T23:00:00.000Z", booked: false },
        { time: "2022-08-04T01:00:00.000Z", booked: false },
        { time: "2022-08-04T03:00:00.000Z", booked: false },
        { time: "2022-08-04T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-05T00:00:00.000Z",
      sched: [
        { time: "2022-08-04T23:00:00.000Z", booked: false },
        { time: "2022-08-05T01:00:00.000Z", booked: false },
        { time: "2022-08-05T03:00:00.000Z", booked: false },
        { time: "2022-08-05T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-06T00:00:00.000Z",
      sched: [
        { time: "2022-08-05T23:00:00.000Z", booked: false },
        { time: "2022-08-06T01:00:00.000Z", booked: false },
        { time: "2022-08-06T03:00:00.000Z", booked: false },
        { time: "2022-08-06T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-08T00:00:00.000Z",
      sched: [
        { time: "2022-08-07T23:00:00.000Z", booked: false },
        { time: "2022-08-08T01:00:00.000Z", booked: false },
        { time: "2022-08-08T03:00:00.000Z", booked: false },
        { time: "2022-08-08T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-09T00:00:00.000Z",
      sched: [
        { time: "2022-08-08T23:00:00.000Z", booked: false },
        { time: "2022-08-09T01:00:00.000Z", booked: false },
        { time: "2022-08-09T03:00:00.000Z", booked: false },
        { time: "2022-08-09T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-11T00:00:00.000Z",
      sched: [
        { time: "2022-08-10T23:00:00.000Z", booked: false },
        { time: "2022-08-11T01:00:00.000Z", booked: false },
        { time: "2022-08-11T03:00:00.000Z", booked: false },
        { time: "2022-08-11T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-12T00:00:00.000Z",
      sched: [
        { time: "2022-08-11T23:00:00.000Z", booked: false },
        { time: "2022-08-12T01:00:00.000Z", booked: false },
        { time: "2022-08-12T03:00:00.000Z", booked: false },
        { time: "2022-08-12T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-13T00:00:00.000Z",
      sched: [
        { time: "2022-08-12T23:00:00.000Z", booked: false },
        { time: "2022-08-13T01:00:00.000Z", booked: false },
        { time: "2022-08-13T03:00:00.000Z", booked: false },
        { time: "2022-08-13T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-15T00:00:00.000Z",
      sched: [
        { time: "2022-08-14T23:00:00.000Z", booked: false },
        { time: "2022-08-15T01:00:00.000Z", booked: false },
        { time: "2022-08-15T03:00:00.000Z", booked: false },
        { time: "2022-08-15T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-16T00:00:00.000Z",
      sched: [
        { time: "2022-08-15T23:00:00.000Z", booked: false },
        { time: "2022-08-16T01:00:00.000Z", booked: false },
        { time: "2022-08-16T03:00:00.000Z", booked: false },
        { time: "2022-08-16T05:00:00.000Z", booked: false },
      ],
    },
    {
      consultantId: consultant._id,
      date: "2022-08-18T00:00:00.000Z",
      sched: [
        { time: "2022-08-17T23:00:00.000Z", booked: false },
        { time: "2022-08-18T01:00:00.000Z", booked: false },
        { time: "2022-08-18T03:00:00.000Z", booked: false },
        { time: "2022-08-18T05:00:00.000Z", booked: false },
      ],
    },
  ];

  for (let i = 0; i < availableSched.length; i++) {
    const { _id, consultantId } = await Availability.create(availableSched[i]);
    // await Consultant.findOneAndUpdate(
    //   { _id: consultantId },
    //   {
    //     $push: {
    //       availabilities: _id,
    //     },
    //   }
    // );
    await Consultant.findOneAndUpdate(
      { _id: consultantId },
      {
        $addToSet: {
          availabilities: _id,
        },
      }
    );
  }

  console.log("availability seeded");
  // const consultants = await Consultant.updateOne(
  //   { _id: consultant._id },
  //   {
  //     $addToset: {
  //       availabilities: {availability[0]._id,}
  //     },
  //   }
  // );

  // console.log("consultants seeded");

  // await User.deleteMany();

  // await User.create({
  //   firstName: "Pamela",
  //   lastName: "Washington",
  //   email: "pamela@testmail.com",
  //   password: "password12345",
  //   orders: [
  //     {
  //       products: [products[0]._id, products[0]._id, products[1]._id],
  //     },
  //   ],
  // });

  // await User.create({
  //   firstName: "Elijah",
  //   lastName: "Holt",
  //   email: "eholt@testmail.com",
  //   password: "password12345",
  // });

  // console.log("users seeded");

  process.exit();
});
