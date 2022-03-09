import React from "react";

export default function LoginCardForm() {
	//useSelector

	//useEffect

	//Definitions

	//Functions
	const handleOnSubmit = (event) => {
        event.preventDefault();
		console.log("Gönderdim.....");
	};

	const handleOnLoginButtonClick = () => {
		console.log("butona tıkladım");
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="form-group mb-3">
				<label>Username</label>
				<div className="input-group">
					<input
						name="username"
						type="text"
						className="form-control form-control-lg"
					/>
					<span className="input-group-text">
						<i className="bx bx-user text-4" />
					</span>
				</div>
			</div>
			<div className="form-group mb-3">
				<div className="clearfix">
					<label className="float-left">Password</label>
					<a href="pages-recover-password.html" className="float-end">
						Lost Password?
					</a>
				</div>
				<div className="input-group">
					<input
						name="pwd"
						type="password"
						className="form-control form-control-lg"
					/>
					<span className="input-group-text">
						<i className="bx bx-lock text-4" />
					</span>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-8">
					<div className="checkbox-custom checkbox-default">
						<input
							id="RememberMe"
							name="rememberme"
							type="checkbox"
						/>
						<label htmlFor="RememberMe">Remember Me</label>
					</div>
				</div>
				<div className="col-sm-4 text-end">
					<button
						type="button"
						className="btn btn-primary mt-2"
						onClick={handleOnLoginButtonClick}
					>
						Sign In
					</button>
				</div>
			</div>
			<span className="mt-3 mb-3 line-thru text-center text-uppercase">
				<span>or</span>
			</span>
			<div className="mb-1 text-center">
				<a className="btn btn-facebook mb-3 ms-1 me-1" href="#">
					Connect with <i className="fab fa-facebook-f" />
				</a>
				<a className="btn btn-twitter mb-3 ms-1 me-1" href="#">
					Connect with <i className="fab fa-twitter" />
				</a>
			</div>
			<p className="text-center">
				Don't have an account yet?{" "}
				<a href="pages-signup.html">Sign Up!</a>
			</p>
		</form>
	);
}
