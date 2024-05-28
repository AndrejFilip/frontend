import { getTasks } from '@/api/api';

export const getHighestId = async () => {
  const getData = await getTasks();
  let max = 0;

  for (const element of getData) {
    if (Number(element.id) > max) {
      max = Number(element.id);
    }
  }

  return max;
};
