// import React from 'react'
import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Boot() {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value ="string") => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  return (
    <>
      <div className="urgence">
        <h1>URGENCES</h1>
        <div className="hopitaux">
          <div className="hopitaux_left">
            <h3>HOPITAUX PROCHES</h3>
           
              <MDBRow>
                <MDBCol size="3">
                  <MDBTabs pills className="flex-column ">
                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleVerticalClick("tab1")}
                        active={verticalActive === "tab1"}
                      >
                        Home
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleVerticalClick("tab2")}
                        active={verticalActive === "tab2"}
                      >
                        Profile
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleVerticalClick("tab3")}
                        active={verticalActive === "tab3"}
                      >
                        Messages
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>
                </MDBCol>



                <MDBCol >
                  <MDBTabsContent>
                    <MDBTabsPane show={verticalActive === "tab1"}>
                      Home content
                    </MDBTabsPane>
                    <MDBTabsPane show={verticalActive === "tab2"}>
                      Profile content
                    </MDBTabsPane>
                    <MDBTabsPane show={verticalActive === "tab3"}>
                      Messages content
                    </MDBTabsPane>
                  </MDBTabsContent>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Boot;
