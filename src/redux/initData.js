import { v4 as uniqueID } from "uuid";

export function init(data) {
  return data.map((product) => {
    return { ...product, id: uniqueID() };
  });
}
