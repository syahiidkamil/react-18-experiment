import { faker } from "@faker-js/faker";

const NAME_LIST_LENGTH = 10000;

export const NAME_LIST = Object.freeze(
  Array.from(Array(NAME_LIST_LENGTH), () => {
    const fullname = faker.name.fullName();
    return fullname;
  })
);

const SWIPERX_FOR_HEALTHCARE_AND_PHARMACY =
  "swipeRx for healthcare and pharmacy";

export const SAME_NAME_LIST = Object.freeze(
  Array.from(Array(NAME_LIST_LENGTH), () => {
    return SWIPERX_FOR_HEALTHCARE_AND_PHARMACY;
  })
);
