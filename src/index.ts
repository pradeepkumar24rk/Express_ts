import express, { Request, Response } from "express";
const app = express();
const port = 3000;
app.use(express.json());

import authRouter from "./routers/authRouter";
app.use("/auth", authRouter);

// app.all('/*',(req,res)=>{
//     res.status(404).send("404 wrong url");
// })

// app.get("/", (req: Request, res: Response) => {
//   res.status(404).send("404 wrong url");
// });

app.use((req:Request,res: Response,next)=>{
        res.status(404).send("404 wrong url");
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
