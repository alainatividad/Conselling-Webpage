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

const LoadCalendar = (props) => {
  const style = {
    margin: "1em 0",
  };

  let selectedConsultant = getFromLocalStorage("selectedConsultant");

  const [dateValue, onChange] = useState(new Date());
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState(false);
  const [clientText, setClientText] = useState("");

  const { loading, error, data, refetch } = useQuery(GET_AVAILABILITY, {
    // variables: { id: state.selectedConsultant },
    variables: { id: selectedConsultant },
  });
  const [addBooking, { errorBook }] = useMutation(ADD_BOOKING);

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
      const { booking } = await addBooking({
        variables: {
          // consultantId: state.selectedConsultant,
          consultantId: selectedConsultant,
          scheduleDate: time,
          concern: clientText,
        },
      });
      if (!booking) {
        throw new Error(errorBook);
      }
      setSuccess(true);
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
                console.log(data);
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
          {success && <Message content="Success!!" />}
        </Container>
      </>
    );
  }
};

export default LoadCalendar;
