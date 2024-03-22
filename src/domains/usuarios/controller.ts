import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const get = async (req, res, next) => {
	try {
		const users: User[] = await prisma.user.findMany();

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
