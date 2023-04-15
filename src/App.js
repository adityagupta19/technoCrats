import "./App.css";

const Navbar = () => {
	return (
		<div className="nav">
			<nav className="relative px-8 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
				<a
					className="text-3xl font-bold leading-none flex items-center space-x-4"
					href="#top"
				>
					<span className=" text-te hover:text-gray-100 text-xl">
						TechnoCrats
					</span>
				</a>
				<div className="lg:hidden">
					<button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
						<svg
							className="block h-4 w-4 fill-current"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<ul className="hidden lg:flex lg:items-center lg:justify-end grow mr-4">
					<li>
						<a className="text-gray-600 dark:text-gray-300 hover:text-gray-100 px-4 py-2" href="#home">
							Abstract
						</a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
							href="#problem"
						>
							Problem
						</a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
							href="#solution"
						>
							Our Solution
						</a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
							href="#adv"
						>
							Advantages
						</a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
							href="#stack"
						>
							Tech Stack
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

const Abstract = () => {
	return (
		<section id="home" className="bgrnd layer2 pt-48">
			<div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-5xl dark:text-white mb-4">
					What Inspired Us To Do This ?
				</h2>

				<p className="block max-w-4xl mt-4 text-2xl text-gray-500 dark:text-gray-300">
					Real-time Captioning is a revolutionary project that aims to bridge
					the communication gap between the deaf and hard of hearing community
					and the hearing world. This aims to convert hand gestures into
					real-time captions during live video conferences, allowing for
					seamless communication and inclusion.
				</p>
			</div>
		</section>
	);
};

const Problem = () => {
	return (
		<section
			id="problem"
			className="py-4 lg:flex lg:justify-center bgrnd layer3"
		>
			<div className="overflow-hidden mt-32 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl lg:justify-between">
				<div className="lg:w-1/2">
					<div className="h-70 bg-cover ">
						<img
							className="object-cover w-full h-full"
							src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
							alt=""
						/>
					</div>
				</div>

				<div className="max-w-xl ml-12 px-6 py-2 lg:max-w-5xl lg:w-1/2">
					<h2 className="text-5xl font-semibold text-gray-800 dark:text-white ">
						The Problem
					</h2>

					<p className="mt-4 text-2xl dark:text-gray-300">
						The problem that it aims to address is the communication barrier
						between the deaf and hard of hearing community and the hearing
						world. Many deaf and hard of hearing individuals use sign language
						as their primary means of communication. However, not everyone is
						fluent in sign language, which can make communication difficult
						during live video conferences.
					</p>
				</div>
			</div>
		</section>
	);
};
const Solution = () => {
	return (
		<section id="solution" className="bgrnd layer1 pt-16">
			<div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-5xl dark:text-white mb-4">
					Solution Suggested
				</h2>

				<p className="block max-w-4xl mt-4 text-2xl text-gray-500 dark:text-gray-300">
					The solution to this problem involves using Python and machine
					learning techniques to train a model that can recognize and interpret
					hand gestures in real-time. OpenCV, a popular computer vision library,
					can be used to process the video feed and extract relevant features
					from the hand gestures. These features can then be fed into a machine
					learning model that has been trained to recognize and interpret
					different sign language gestures. The output of the model can then be
					used to generate real-time captions during live video conferences.
				</p>
			</div>
		</section>
	);
};
const Advantages = () => {
	return (
		<section id="adv" className="max-w-full mx-auto px-10 md:px-0 py-10 bgrnd layer4">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
				<div className="max-w-2xl mx-auto lg:text-center pt-16">
					<h2 className="text-5xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
						Advantages
					</h2>
				</div>
				<div className="max-w-3xl mx-auto mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
							Improved communication
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-500 mt-6">
							It will allow for seamless communication between the deaf and hard
							of hearing community and the hearing world during live video
							conferences
						</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
							Inclusion
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-500 mt-6">
							By providing real-time captions, it ensures that everyone has a
							voice and can fully participate in the conversation.
						</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
							Increased accessibility
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-500 mt-6">
							It will make video conferences more accessible to the deaf and
							hard of hearing community.
						</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
							Enhanced understanding
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-500 mt-6">
							Real-time captions can help to improve understanding and reduce
							misunderstandings during video conferences.
						</p>
					</div>
				</div>
				<div className="align-center">
					<h2 className="font-semibold text-3xl text-black dark:text-white">
						Empowerment
					</h2>
					<p className="text-lg leading-6 tracking-wide text-gray-500 mt-6">
						It will empower the deaf and hard of hearing community by providing
						them with a tool to communicate more effectively with the hearing
						world.
					</p>
				</div>
			</div>
		</section>
	);
};

const Stack = () => {
	return (
		<section id="stack" className="py-10 sm:py-16 lg:py-24 bgrnd layer5">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-xl mx-auto text-center">
					<h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
						Tech Stack
					</h2>
				</div>

				<div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
					<div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
						<div className="flex items-start">
							<div className="ml-5">
								<h3 className="text-3xl font-semibold text-black dark:text-white">
									Python
								</h3>
								<p className="mt-3 text-lg  text-gray-600 dark:text-gray-300">
									For building and training ML Model for conversion of sign
									language to text.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="ml-5">
								<h3 className="text-3xl font-semibold text-black dark:text-white">
									Flutter
								</h3>
								<p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
									For a Cross-Platform Mobile Application both in Android & iOS.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="ml-5">
								<h3 className="text-3xl font-semibold text-black dark:text-white">
									React & NodeJS
								</h3>
								<p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
									For Building and deploying the model on a webapp
								</p>
							</div>
						</div>
					</div>

					<div className="lg:col-span-3">
						<img
							className="w-full rounded-lg shadow-xl"
							src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

function App() {
	return (
		<div className="App ">
			<Navbar />
			<Abstract />
			<Problem />
			<Solution />
			<Advantages />
			<Stack />
		</div>
	);
}

export default App;
