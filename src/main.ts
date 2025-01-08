import "./style.css";

const getAllFruits = async () => {
	const response = await fetch("/api/all");
	const data = await response.json();
	console.log(data);
};

getAllFruits();

const getFruit = async (fruit: string) => {
	const response = await fetch(`/api/${fruit}`);
	const data = await response.json();
	console.log(data);
};

getFruit("banana");
