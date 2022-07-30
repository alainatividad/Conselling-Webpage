import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Dropdown, Message, Button } from "semantic-ui-react";

import DatePicker from "react-date-picker";
import { getISODay, differenceInCalendarDays } from "date-fns";

import { GET_AVAILABILITY } from "../utils/queries";
import { ADD_BOOKING } from "../utils/mutations";
import { useUserContext } from "../utils/UserContext";
import LoaderComp from "./LoaderComp";
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
  // get user state
  const [state, dispatch] = useUserContext();
  const [dateValue, onChange] = useState(new Date());
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_AVAILABILITY, {
    variables: { id: state.selectedConsultant },
  });
  const [addBooking, { errorBook }] = useMutation(ADD_BOOKING);

  useEffect(() => {
    refetch();
  }, [state.selectedConsultant, dateValue]);

  const handleButtonClick = async () => {
    try {
      // console.log(
      //   "consultant:",
      //   props.consultant,
      //   "scheduleDate:",
      //   time,
      //   "date:",
      //   dateValue
      // );

      const { booking } = await addBooking({
        variables: {
          consultantId: state.selectedConsultant,
          scheduleDate: time,
        },
      });
      if (!booking) {
        throw new Error(errorBook);
      }
      // const { Avail } = await updateAvailability({
      //   variables: {
      //     consultantId: state.selectedConsultant,
      //     time,
      //   },
      // });
      // if (!Avail) {
      //   throw new Error(errorAvail);
      // }
      // const { consultantUpdate } = await addClientToConsultant({
      //   variables: {
      //     consultantId: state.selectedConsultant,
      //   },
      // });
      // if (!consultantUpdate) {
      //   throw new Error(errorConsultant);
      // }
      setSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) {
    return <LoaderComp />;
  }
  if (error) {
    return (
      <>
        <h2>Error! {error.message}</h2>
      </>
    );
  }

  if (data.getAvailability) {
    const datePickerDates = data.getAvailability.map((el) => el.date);

    // move different timeslots to their own object
    let unwindData = unwindBy(data.getAvailability, "sched");
    unwindData = unwindData.filter((el) => el.sched.booked === false);
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

    const filteredDates = dates.filter((el) => isSameDay(el.plain, dateValue));
    // console.log(filteredDates);

    function tileDisabled({ date, view }) {
      // Disable tiles in month view only
      if (view === "month") {
        // Disable Wednesdays and Sundays
        return getISODay(date) === 3 || getISODay(date) === 7;
      }
    }
    function tileContent({ date, view }) {
      // Add class to tiles in month view only
      if (view === "month") {
        // Put an * for dates with schedules
        if (datePickerDates.find((dDate) => isSameDay(dDate, date))) {
          return "\n*";
        }
      }
    }
    return (
      <>
        <h3>Select date and time</h3>

        <Container stackable>
          <p>
            <DatePicker
              onChange={onChange}
              value={dateValue}
              minDate={new Date()}
              tileDisabled={tileDisabled}
              tileContent={tileContent}
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
          </p>
          {filteredDates.length === 0 ? (
            <Message
              header="Please select another date"
              content="Sorry, there is no available schedule for this date"
            />
          ) : null}
          {time ? (
            <h3>
              You have selected{" "}
              {new Date(time).toLocaleString("en-GB", {
                timezone: "Australia/Sydney",
              })}
            </h3>
          ) : null}
          {time && dateValue ? (
            <Button content="Book an Appointment" onClick={handleButtonClick} />
          ) : (
            <Button disabled>Book an Appointment</Button>
          )}
          {success ? <Message content="Success!!" /> : null}
        </Container>
      </>
    );
  }
};

export default LoadCalendar;
