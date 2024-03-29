import React from "react";
import { Container } from "../../styles/global";
import ToggleTheme from "../toggle-theme";
import { Styles } from "./styles";

const Header = () => {
    return (
        <Styles.Container>
            <Container>
                <h1>Context App</h1>
                <ToggleTheme />
            </Container>
        </Styles.Container>
    );
};

export default Header;
