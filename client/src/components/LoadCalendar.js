import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Container,
  Dropdown,
  Message,
  Button,
  Form,
  TextArea,
} from "semantic-ui-react";

import emailjs from "@emailjs/browser";
import DatePicker from "react-date-picker";
import { getISODay, differenceInCalendarDays } from "date-fns";

import { GET_AVAILABILITY } from "../utils/queries";
import { ADD_BOOKING } from "../utils/mutations";
import LoaderComp from "./LoaderComp";
import ErrorMessage from "./ErrorMessage";
import { getFromLocalStorage } from "../utils/helper";
import "../assets/dist/Calendar.css";
import "../assets/dist/DatePicker.css";
function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

// from https://stackoverflow.com/a/32436470
function unwindBy(arr, f) {
  return arr.reduce(
    (r, o) => r.concat(o[f].map((v) => ({ ...o, [f]: v }))),
    []
  );
}

const LoadCalendar = () => {
  const style = {
    margin: "1em 0",
  };

  const emailKey = process.env.REACT_APP_EMAIL_KEY;
  const emailService = process.env.REACT_APP_EMAIL_SERVICE;
  const bookingTemplate = process.env.REACT_APP_BOOKING_TEMPLATE;

  let selectedConsultant = getFromLocalStorage("selectedConsultant");

  const [dateValue, onChange] = useState(new Date());
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState(false);
  const [clientText, setClientText] = useState("");

  const { loading, error, data, refetch } = useQuery(GET_AVAILABILITY, {
    // variables: { id: state.selectedConsultant },
    variables: { id: selectedConsultant },
  });
  const [addBooking, { bookError }] = useMutation(ADD_BOOKING);

  useEffect(() => {
    refetch();
    // }, [state.selectedConsultant, dateValue]);
  }, [selectedConsultant, dateValue]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText") {
      setClientText(value);
    }
  };

  const handleButtonClick = async () => {
    try {
      const booking = await addBooking({
        variables: {
          // consultantId: state.selectedConsultant,
          consultantId: selectedConsultant,
          scheduleDate: time,
          concern: clientText,
        },
      });
      const templateParams = {
        consultant: booking.data.addBooking.consultant,
        fullName: booking.data.addBooking.fullName,
        email: booking.data.addBooking.email,
        scheduleDate: new Date(
          booking.data.addBooking.scheduleDate
        ).toLocaleString("en-GB", {
          timezone: "Australia/Sydney",
        }),
      };

      console.log(templateParams);
      emailjs
        .send(emailService, bookingTemplate, templateParams, emailKey)
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // .then(
      //   (result) => {
      //     <Message
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <LoaderComp />;
  }
  if (error) {
    return <ErrorMessage header="error" message={error.message} />;
  }

  if (data.getAvailability) {
    // const datePickerDates = data.getAvailability.map((el) => el.date);

    // move different timeslots to their own object
    const unwindData = unwindBy(data.getAvailability, "sched").filter(
      (el) => el.sched.booked === false
    );

    //dropdown values
    const dates = unwindData.map((el) => ({
      text: new Date(el.sched.time).toLocaleString("en-GB", {
        timezone: "Australia/Sydney",
      }),
      value: el.sched.time,
      key: new Date(el.sched.time).toLocaleString("en-GB", {
        timezone: "Australia/Sydney",
      }),
      plain: new Date(el.date),
    }));

    // filter dropdown values by selected date
    const filteredDates = dates.filter((el) => isSameDay(el.plain, dateValue));

    function tileDisabled({ date, view }) {
      // Disable tiles in month view only
      if (view === "month") {
        // Disable Wednesdays and Sundays
        return getISODay(date) === 3 || getISODay(date) === 7;
      }
    }
    // function tileContent({ date, view }) {
    //   // Add class to tiles in month view only
    //   if (view === "month") {
    //     // Put an * for dates with schedules
    //     if (datePickerDates.find((dDate) => isSameDay(dDate, date))) {
    //       return "*";
    //     }
    //   }
    // }
    return (
      <>
        <h3>Select date and time</h3>

        <Container stackable>
          <div style={style}>
            <DatePicker
              onChange={onChange}
              value={dateValue}
              minDate={new Date()}
              tileDisabled={tileDisabled}
              // tileContent={tileContent}
              formatLongDate={(locale, date) =>
                date.toLocaleDateString("en-GB", {
                  timezone: "Australia/Sydney",
                })
              }
              isCalendarOpen={true}
            />
            <Dropdown
              selectOnNavigation={false}
              onChange={(e, data) => {
                setTime(data.value);
              }}
              // options={dates}
              options={filteredDates}
              placeholder="Choose a timeslot"
              selection
              value={time}
            />
          </div>
          {filteredDates.length === 0 ? (
            <div>
              <Message
                header="Please select another date"
                content="Sorry, there is no available schedule for this date"
              />
            </div>
          ) : null}
          {time && dateValue ? (
            <Form style={style}>
              <h4>
                You have selected{" "}
                {new Date(time).toLocaleString("en-GB", {
                  timezone: "Australia/Sydney",
                })}
              </h4>
              <h3>Primary concern?</h3>
              <Form.Field
                name="commentText"
                placeholder="In a few words, explain your concern..."
                value={clientText}
                control={TextArea}
                onChange={handleChange}
              />
              <Button
                content="Book an Appointment"
                onClick={handleButtonClick}
                type="submit"
              />
            </Form>
          ) : (
            <div style={style}>
              <Button disabled>Book an Appointment</Button>
            </div>
          )}
          {success && (
            <Message content="You have successfully booked! We will send you an email containing the details of your booked appointment. Thank you!" />
          )}
        </Container>
      </>
    );
  }
};

export default LoadCalendar;
