import {SearchMinifigResponse} from './rebrickable.api.types';

export function mapSearchMinifigResponseToMinifigs(
  res: SearchMinifigResponse,
): Array<Domain.Minifig> {
  return res.results.map(item => ({
    setId: item.setNum,
    name: item.name,
    img: item.setImgUrl,
  }));
}
