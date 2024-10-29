import { Router } from "express";
// router for produts

const router = Router();

//products end points
router.get("/", (req, res) => {
  res.send("Here are the list of the products");
});
router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("A product ");
});
router.post("/", (req, res) => {
  res.send("new product created");
});

export default router