import express from "express";
import { ratingValidation } from "../validation/rating.validation";
import { validate } from "../middleware/validate.middleware";
import { RatingController } from "../controllers/rating.controller";
const router = express.Router();
router.post(
  "/create-rating",
  ratingValidation.createValidate,
  validate,
  RatingController.createRating
);

router.put(
  "/update-rating/:id",
  ratingValidation.updateValidate,
  validate,
  RatingController.updateRating
);
router.get("/get-by-id/:id",RatingController.getById)
router.get("/get-all",RatingController.getAllRating)
router.get("/count", RatingController.countApi);
export default router;
