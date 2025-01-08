import "./style.css";

type Fruit = {
	name: string;
	id: number;
	family: string;
	order: string;
	genus: string;
	nutritions: {
		calories: number;
		fat: number;
		sugar: number;
		carbohydrates: number;
		protein: number;
	};
};

const getAllFruits = async () => {
	const response = await fetch("/api/all");
	const data = await response.json();
	console.log(data);
};

getAllFruits();

const getFruit = async (fruit: string): Promise<Fruit> => {
	const response = await fetch(`/api/${fruit}`);
	const data = (await response.json()) as Fruit;
	//console.log(data);
	return data;
};

// getFruit("banana");

const banana = await getFruit("banana");

console.log(banana.name);
