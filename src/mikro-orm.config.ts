import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

console.log("dirname: ", __dirname);
export default{
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: 'reddit',
  type: 'postgresql',
  debug: !__prod__,
  user: 'postgres',
  password: '1470',
} as Parameters<typeof MikroORM.init>[0];