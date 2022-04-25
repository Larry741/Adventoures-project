import nextConnect from "next-connect";
import morgan from "morgan";
import helmet from "helmet";

export default function handler() {
  return nextConnect({
    onError(err, req, res, next) {
      res.status(405).json({ error: "something happened" });
    },
    onNoMatch(req, res, next) {
      res.status(405).json({ error: `method ${req.method} not ` });
    },
  })
    .use(helmet())
    .use(morgan("combined"))
}
