import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DEPARTMENTS, STAFFS } from "../shared/staff";
export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
  staffs: STAFFS,
  departments: DEPARTMENTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
