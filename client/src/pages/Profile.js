import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_ME_CLIENT, GET_ME_CONSULTANT } from "../utils/queries";
import { useUserContext } from "../utils/UserContext";
import BookConsultantSelect from "../components/BookConsultantSelect";
import ConsultantProfile from "../components/ConsultantProfile";

const profile = () => {
  const style = {
    margin: {
      marginTop: "2em",
    },
  };
  // get user state
  const [state] = useUserContext();

  if (!state.loggedIn) {
    return (
      <>
        <h1>
          <Link to="/login">log in</Link> to view page
        </h1>
      </>
    );
  }

  const { loading, error, data, refetch } =
    state.user === "client"
      ? useQuery(GET_ME_CLIENT)
      : useQuery(GET_ME_CONSULTANT);

  useEffect(() => {
    refetch();
  }, [state.selectedConsultant]);
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) {
    return (
      <>
        <h2> {state.user}</h2>
        <h2>Error! {error.message}</h2>
      </>
    );
  }

  if (data) {
    if (state.user === "client") {
      //client profile
      const userData = data.meClient;
      // (state.user === "client" ? data.meClient : data.meConsultant) || [];

      return (
        <div>
          <Container text style={style.margin}>
            <h2>Hi {userData.fullName}!</h2>
            {!userData.scheduleDate ? (
              <BookConsultantSelect />
            ) : (
              <>
                <h3>
                  Your next schedule is on{" "}
                  {new Date(userData.scheduleDate).toLocaleString("en-GB", {
                    timezone: "Australia/Sydney",
                  })}
                </h3>
              </>
            )}
          </Container>
        </div>
      );
    } else {
      // show consultant profile
      const userData = data.meConsultant;
      console.log(userData);
      return (
        <div>
          <Container text style={style.margin}>
            <h2>Hi {userData.fullName}!</h2>

            <ConsultantProfile clients={userData} />
          </Container>
        </div>
      );
    }
  }
};

export default profile;
