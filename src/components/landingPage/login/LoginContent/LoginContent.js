import React from "react";
import LoginCard from "../LoginCard/LoginCard";
import ContentLogo from "@LandingPageComponent/ContentLogo/LandingPageContentLogo";

export default function LoginContent() {
	return (
		<section className="body-sign">
			<div className="center-sign">
				<ContentLogo />
				<LoginCard />
			</div>
		</section>
	);
}
