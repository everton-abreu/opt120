import { PrismaClient, Task } from "@prisma/client";

const prisma = new PrismaClient();

const get = async (req, res, next) => {
	try {
		const tasks: Task[] = await prisma.task.findMany();

		res.json({
			data: tasks
		});

		next();
	}
	catch (error) {
		throw error;
	}
}

export default {
	get,
};
