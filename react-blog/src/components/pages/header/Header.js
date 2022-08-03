import { Container } from "@mui/system";
import React from "react";
import './Header.css';

const Header = () => {
    return(
    <>
        <div className="header_sec d-block d-flex">
            <Container>
                <div className="header_text mx-auto">
                    <h1>Adrianna McKeown</h1>
                </div>
            </Container>
        </div>
    </>
    )
}

export default Header;