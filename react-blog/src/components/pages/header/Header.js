import { Container } from "@mui/system";
import React from "react";
import './Header.css';

const Header = () => {
    return(
    <>
        <div className="header_sec d-block d-flex">
            <Container>
                <div className="header_text mx-auto">
                    <div className="header1">happily ever adrianna</div>
                </div>
            </Container>
        </div>
    </>
    )
}

export default Header;