export const run = async (list: string[], len: number = 4) =>
  list.findIndex((_, i) => new Set(list.slice(i, i + len)).size === len) + len;
