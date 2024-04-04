import {
	PrismaClient,
	Prisma,
	User,
	Task
} from "@prisma/client";

const prisma = new PrismaClient();

type A<T extends string> = T extends `${infer U}ScalarFieldEnum` ? U : never;
type Entity = A<keyof typeof Prisma>;
type Keys<T extends Entity> = Extract<
  keyof (typeof Prisma)[keyof Pick<typeof Prisma, `${T}ScalarFieldEnum`>],
  string
>;

export function prismaExclude<T extends Entity, K extends Keys<T>>(
  type: T,
  omit: K[],
) {
  type Key = Exclude<Keys<T>, K>;
  type TMap = Record<Key, true>;
  const result: TMap = {} as TMap;
  for (const key in Prisma[`${type}ScalarFieldEnum`]) {
    if (!omit.includes(key as K)) {
      result[key as Key] = true;
    }
  }
  return result;
}
const get = async (req, res, next) => {
	try {
		const users = await prisma.user.findMany({
			select: prismaExclude('User', ['password'])
		});

		res.json({
			data: users
		});
		next();
	}
	catch (error) {
		throw error;
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
	getTasks,
};
