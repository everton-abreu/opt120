import { Request, Response, NextFunction } from "express";
import {
	PrismaClient,
	User,
	Task
} from "@prisma/client";

const prisma = new PrismaClient();

function sanitize<T>(items: T|T[], fieldsToExclude: String[]) {
	if (Array.isArray(items)) {
		return items.map((item) => {
			const keys = Object.keys(item);
			const obj = {};
			
			for (var idx in keys){
				var key = keys[idx];
				if (!fieldsToExclude.includes(key))
					obj[key] = item[key];
			}
	
			return obj;
		});
	} else {
		const item = items;
		const keys = Object.keys(item);
		console.log(keys);
			const obj = {};
			
			for (var idx in keys){
				var key = keys[idx];
				if (!fieldsToExclude.includes(key))
					obj[key] = item[key];
			}
	
			return obj;
	}
}


const get = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await prisma.user.findMany();

		console.log("users", sanitize<User>(users, ['password']));
		res.json({
			data: sanitize<User>(users, ['password']),
		});

		next();
	}
	catch (error) {
		next(error);
	}
}

const newUser = async (req:Request, res: Response, next: NextFunction) => {
	try {
		const data = req.body;

		const user = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password
			},
		});

		res.status(201).json({
			data: sanitize(user, ['password'])
		})

		next();
	} catch (error) {
		next(error);
	}
}

const getTasks = async (req, res, next) => {
	try {
		const { user_id: userId } = req.params;

		const tasks: Task[] = await prisma.task.findMany({
			where: {
				users: {
					every: {
						userId: Number(userId),
					}
				}
			},
		});

		res.json({
			data: tasks,
		});

		next();
	} catch (error) {
		throw error;
	}
}


export default {
	get,
	newUser,
	getTasks,
};
