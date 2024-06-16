import axios from "axios";
import { useState } from "react";
import {  Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/isAuthenticated";

export const Login = () => {
	const [login, setLogin] = useState<{} | null>(null);

	const [errors, setErrors] = useState<{} | null>(null);

	const handleLogin = async (e: any) => {
		e.preventDefault();

		const form = new FormData(e.target);
		const { username, password } = Object.fromEntries(form.entries());

		await axios
			.post(import.meta.env.VITE_API_URL + "/api/auth/login", {
				username: username,
				password: password,
			})
			.then((response) => {
				if (response.status === 200) {
					localStorage.setItem("jwt", response.data.token);
				}

				setLogin(response.data);
				setErrors(null);

				e.target.reset();

				setTimeout(() => {
					window.location.href = "/";
				}, 2000);
			})
			.catch((error) => {
				setErrors(error.response.data);
			});
	};

	if (isAuthenticated() || login !== null) {
		return <Navigate to="/" />;
	} else {
		return (
			<>
				<section className="bg-gray-50 dark:bg-gray-900">
					<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
						<a
							href="#"
							className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
						>
							<img
								src="https://myc.com.mt/wp-content/uploads/2023/02/myc-logo.svg"
								alt="MyC Logo"
								className="w-20 h-20 mr-2"
							/>
						</a>
						<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
							<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
								<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
									Sign in to your account
								</h1>

								{login !== null && (
									<div
										className="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
										role="alert"
									>
										<svg
											aria-hidden="true"
											className="flex-shrink-0 inline w-5 h-5 mr-3"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="sr-only">Info</span>
										<div>
											<span className="font-medium">Logged in!</span>{" "}
											Redirecting you to the dashboard.
										</div>
									</div>
								)}

								<form
									className="space-y-4 md:space-y-6"
									action="#"
									onSubmit={(e) => {
										handleLogin(e);
									}}
								>
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Your username
										</label>
										<input
											type="text"
											name="username"
											id="username"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="yourusername123"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											required
										/>
									</div>

									{/* PRINT ERROR MESSAGE */}
									{errors !== null && (
										<div
											className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
											role="alert"
										>
											<svg
												aria-hidden="true"
												className="flex-shrink-0 inline w-5 h-5 mr-3"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="sr-only">Info</span>
											<div>
												<span className="font-medium">
													Invalid credentials!
												</span>{" "}
												Check all fields and try again.
											</div>
										</div>
									)}
									<button
										type="submit"
										className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Sign in
									</button>
									{/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Don’t have an account yet?{" "}
									<a
										href="#"
										className="font-medium text-blue-600 hover:underline dark:text-blue-500"
									>
										Sign up
									</a>
								</p> */}
								</form>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
};

export default Login;
