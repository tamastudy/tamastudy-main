import { faker } from "@faker-js/faker";

export type News = {
  id: string;
  category: "notice" | "event" | "free";
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newNews = (): News => {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(40),
    visits: faker.datatype.number(1000),
    progress: faker.datatype.number(100),
    category: faker.helpers.shuffle<News["category"]>([
      "notice",
      "event",
      "free",
    ])[0]!,
    title: faker.hacker.phrase(),
    description: faker.lorem.paragraph(),
    createdAt: +faker.date.past(),
    updatedAt: +faker.date.past(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): News[] => {
    const len = lens[depth]!;
    return range(len).map((d): News => {
      return {
        ...newNews(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

const data = makeData(50);

export async function fetchData(options: {
  pageIndex: number;
  pageSize: number;
}) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));

  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
  };
}
