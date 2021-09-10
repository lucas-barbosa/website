import React from "react";
import type {NextPage} from "next";

// components
import ContacsSection from "../components/contacts/ContactsSection";

const Contacts : NextPage = () => {
    return (
        <React.Fragment>
            <ContacsSection/>
        </React.Fragment>
    )
}

export default Contacts;