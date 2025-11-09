import express, { Request, Response } from "express";
const router = express.Router();

interface UserModel {
  id: number;
  username: string;
  password: string;
}

let userData: UserModel[] = [
  {
    id: 1,
    username: "pradeep",
    password: "1234",
  },
  {
    id: 2,
    username: "krish",
    password: "1234",
  },
];

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json(userData);
});

router.post("/", (req: Request, res: Response) => {
  const body: UserModel = req.body;
  const filteredValue = userData.filter(
    (data) => body.username === data.username && body.password === data.password
  );
  if (filteredValue.length != 0) {
    return res.status(200).json({
      message: "Successfully login",
    });
  }
  return res.status(400).json({
    message: "Invalid data",
  });
});

router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const body: UserModel = req.body;
  const filteredValue = userData.filter((data) => data.id === id);
  console.log(userData, filteredValue, id);

  if (filteredValue.length != 0) {
    userData = userData.map((data) => {
      if (data.id === id) {
        return { ...data, ...body };
      }
      return data;
    });
    return res.status(200).json({
      message: "User updated successfully",
    });
  } else {
    return res.status(400).json({
      message: "User not founded",
    });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  let filteredValue: UserModel[] = userData.filter(
    (data: UserModel) => id != data.id
  );
  if (filteredValue.length === userData.length - 1) {
    userData = [...filteredValue];
    return res.status(200).json({
      message: "User Deleted successfully",
    });
  } else {
    return res.status(400).json({
      message: "User not founded",
    });
  }
});

export default router;
