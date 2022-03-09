import React from "react";
import LoginCardBody from "../LoginCardBody/LoginCardBody";
import LoginCardTitle from "../LoginCardTitle/LoginCardTitle";

export default function LoginCard() {
	return (
		<div className="panel card-sign">
			<LoginCardTitle />
            <LoginCardBody/>
		</div>
	);
}
