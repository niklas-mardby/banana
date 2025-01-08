import "./style.css";

const getBanana = async () => {
	const response = await fetch("https://www.fruityvice.com/api/fruit/all");
	const data = await response.json();

	console.log(data);
};

getBanana();
