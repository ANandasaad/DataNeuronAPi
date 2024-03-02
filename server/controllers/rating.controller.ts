import { RequestHandler } from "express";
import { RatingLogic } from "../business-logic/rating.business.logic";

export const RatingController: {
  createRating: RequestHandler;
  updateRating: RequestHandler;
  countApi: RequestHandler;
  getAllRating: RequestHandler;
  getById:RequestHandler
} = {
  async createRating(req, res, next) {
    try {
      const input = req.body;

      const response = await RatingLogic.createRating(input);
      res.json({
        success: true,
        message: "Rating created successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async getById(req,res,next){
    try {
      const id= req.params.id
      const response= await RatingLogic.getById(id)
      res.json({
        success:true,
        message:"Get by Id",
        data:response
      })
    } catch (error) {
      next(error)
    }
  },
  async getAllRating(req, res, next) {
    try {
      const response= await RatingLogic.getAllRating()
      res.json({
        success:true,
        message:"Successfully retrieved the data ",
        data:response
      })
    } catch (error) {
      next(error)
    }
  },
  async updateRating(req, res, next) {
    try {
      const ratingId = req.params.id;
      const input = req.body;
      const response = await RatingLogic.updateRating({ ratingId, input });
      res.json({
        success: true,
        message: "Rating updated successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async countApi(req, res, next) {
    try {
      const response = await RatingLogic.countRating();
      res.json({
        success: true,
        message: "Rating count successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
};
