import { mapSome } from 'utils';

export const serverConfig = {
  port: mapSome(process.env.PORT, (x) => Number(x)),
};
