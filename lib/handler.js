import nc from "next-connect";
import morgan from "morgan";
import helmet from "helmet";
import dbConnect from "./mongo";

export default function handler() {
  return nc({
    onError(err, req, res, next) {
      res.status(405).json({ error: "something happened" });
    },
    onNoMatch(req, res, next) {
      res.status(405).json({ error: `method ${req.method} not ` });
    },
  })
    .use(helmet())
    .use(morgan("combined"))
    .use(async (req, res, next) => {
      await dbConnect();
      next();
    });
}
