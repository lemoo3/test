import { Career } from "../entity/career";

// some関数で一つでも条件を満たせはtrueを返す
export const exitEmptyCareers = (careers: Career[])=>careers.some(c=> isEmptyCareer(c));

// every関数で一つずつ条件を満たしているか確認
const isEmptyCareer = (career: Career) =>{
  return  Object.values(career).every(v => !v);
};