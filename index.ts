import express, { Response, Request } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Hello World",
  });
});

app.listen(3000, () => {
  console.log(`Server is running on PORT 3000`);
});
