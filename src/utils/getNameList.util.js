import { faker } from "@faker-js/faker";

const NAME_LIST_LENGTH = 10000;

export const nameList = Object.freeze(
  Array.from(Array(NAME_LIST_LENGTH), () => {
    const fullname = faker.name.fullName();
    return fullname;
  })
);
