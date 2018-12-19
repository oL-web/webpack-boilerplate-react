import React from "react";
import { TestButton } from "../src/js/components/TestButton";

describe("<TestButton>", () => {
	let button;
	const props = {
		showText: jest.fn()
	};

	beforeAll(() => {
		button = shallow(
			<TestButton {...props} />
		);
	});

	it("displays correct text", () => {
		expect(button.text()).toEqual("Click to send Redux action");
	});

	it("has a functioning click handler", () => {
		expect(typeof button.prop("onClick")).toEqual("function");
		button.simulate("click");
		expect(props.showText).toBeCalledTimes(1);
	});
});