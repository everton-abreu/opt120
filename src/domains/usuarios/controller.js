const { Dev } = require('../../models');

const get = async (req, res, next) => {
	const { user } = req.headers;
	
	try {
		const users = [];

		res.json(users);
		next();
	}
	catch (error) {
		throw error;
	}
}

module.exports = {
    get
};
