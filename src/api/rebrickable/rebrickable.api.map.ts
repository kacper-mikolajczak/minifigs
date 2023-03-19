import {
  MinifigPartsResponse,
  SearchMinifigResponse,
} from './rebrickable.api.types';

export function mapSearchMinifigResponseToMinifigs(
  res: SearchMinifigResponse,
): Array<Domain.Minifig> {
  return res.results.map(item => ({
    setId: item.setNum,
    name: item.name,
    img: item.setImgUrl,
  }));
}

export function mapMinifigPartsResponseToMinifigParts(
  res: MinifigPartsResponse,
): Array<Domain.MinifigPart> {
  return res.results.map(({part}) => ({
    id: part.partNum,
    name: part.name,
    img: part.partImgUrl,
  }));
}
