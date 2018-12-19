import React from "react";
import { connect } from "react-redux";
import { showText } from "../actions/showText";
import styled from "styled-components";

const StyledP = styled.p`
    ::after {
        content: " ...and this text comes from CSS-in-JS component inside this component!";
        color: black;
    }
`;

const TestParagraph = (props) => (
	<StyledP>{props.testText || props.text}</StyledP>
);


const mapStateToProps = (state) => ({
	testText: state.test.text
});

export default connect(mapStateToProps, { showText })(TestParagraph);