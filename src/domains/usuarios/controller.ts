const { Dev } = require('../../models');

const get = async (req, res, next) => {
	const { user } = req.headers;
	
	try {
		const users = [];

		res.json({
			data: users
		});
		next();
	}
	catch (error) {
		throw error;
	}
}

export default { get };
