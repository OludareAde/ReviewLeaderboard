const mockdb = () => {
	const users = [
		{ firstname: "Oludare", lastname: "Adediran", score: 100 },
		{ firstname: "Alex", lastname: "Sam", score: 200 },
		{ firstname: "Jamie", lastname: "Lee", score: 150 },
	];

	return users;
};

module.exports = mockdb;
