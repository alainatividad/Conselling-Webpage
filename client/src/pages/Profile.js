import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_ME_CLIENT, GET_ME_CONSULTANT } from "../utils/queries";
import { getFromLocalStorage, storeInLocalStorage } from "../utils/helper";
// import { useUserContext } from "../utils/UserContext";
// import { UPDATE_CURRPAGE } from "../utils/actions";
import BookConsultantSelect from "../components/BookConsultantSelect";
import ConsultantProfile from "../components/ConsultantProfile";
import LoaderComp from "../components/LoaderComp";
import ErrorMessage from "../components/ErrorMessage";
import Auth from "../utils/auth";

const profile = () => {
  const style = {
    margin: {
      marginTop: "2em",
    },
  };
  storeInLocalStorage({ name: "current_page", value: "login" });
  // get user state
  // const [state, dispatch] = useUserContext();

  if (!Auth.loggedIn()) {
    return <ErrorMessage header="notLoggedIn" />;
  }
  const user = getFromLocalStorage("user");
  let selectedConsultant = getFromLocalStorage("selectedConsultant");
  // useEffect(() => {
  //   dispatch({ type: UPDATE_CURRPAGE, payload: "profile" });
  // }, []);

  const { loading, error, data, refetch } =
    // state.user === "client"
    user === "client" ? useQuery(GET_ME_CLIENT) : useQuery(GET_ME_CONSULTANT);

  useEffect(() => {
    selectedConsultant = getFromLocalStorage("selectedConsultant");
    refetch();
    // }, [state.selectedConsultant]);
  }, [selectedConsultant]);

  if (loading) {
    return <LoaderComp />;
  }
  if (error) {
    return <ErrorMessage header="error" message={error.message} />;
  }

  if (data) {
    // if (state.user === "client") {
    if (user === "client") {
      //client profile
      const userData = data.meClient;

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
                <Link to={`/profile/${userData._id}`}>
                  <button>Edit details</button>
                </Link>
              </>
            )}
          </Container>
        </div>
      );
    } else {
      // show consultant profile
      const userData = data.meConsultant;
      return (
        <div>
          <Container text style={style.margin}>
            <h2>Hi {userData.fullName}!</h2>

            <ConsultantProfile clients={userData.clients} />
          </Container>
        </div>
      );
    }
  }
};

export default profile;
