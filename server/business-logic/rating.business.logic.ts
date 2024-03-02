import { Prisma } from "@prisma/client";
import { prisma } from "../config";
import { NotFound } from "http-errors";

let updateAPiCount = 0;
let addAPiCount = 0;

type UPDATE_RATING = {
  ratingId: string;
  input: Prisma.RatingUpdateInput;
};
export const RatingLogic = {
  async createRating(input: Prisma.RatingCreateInput) {
    return new Promise(async (resolve, reject) => {
      try {
        const { rating, review } = input;
        const create = await prisma.rating.create({
          data: {
            rating,
            review,
          },
        });
        addAPiCount++;

        return resolve(create);
      } catch (error) {
        reject(error);
      }
    });
  },
  async getAllRating() {
    return new Promise(async (resolve, reject) => {
      try {
        const getAll = await prisma.rating.findMany();
        if (!getAll) throw new NotFound("Rating is not found");
        return resolve(getAll);
      } catch (error) {
        reject(error);
      }
    });
  },
  async getById(id: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const isExist = await prisma.rating.findUnique({
          where: {
            id,
          },
        });
        if (!isExist) throw new NotFound("Rating is not found");
        return resolve(isExist);
      } catch (error) {
        reject(error);
      }
    });
  },
  async updateRating({ ratingId, input }: UPDATE_RATING) {
    return new Promise(async (resolve, reject) => {
      try {
        const { rating, review } = input;
        const isRatingExist = await prisma.rating.findUnique({
          where: {
            id: ratingId,
          },
        });
        if (!isRatingExist) throw new NotFound("Rating not found");
        const updateRating = await prisma.rating.update({
          where: {
            id: ratingId,
          },
          data: {
            rating,
            review,
          },
        });

        updateAPiCount++;
        return resolve(updateRating);
      } catch (error) {
        reject(error);
      }
    });
  },
  async countRating() {
    return new Promise(async (resolve, reject) => {
      try {
        return resolve({ addAPiCount, updateAPiCount });
      } catch (error) {
        reject(error);
      }
    });
  },
};
