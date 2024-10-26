export interface GridStructur {
  grid: {
    cols: number;
    rowHeight: number;
  };
  tile: Tile[];
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  border_radius: number;
  border_color?: string;
}

export enum TileTypeEnum {
  tileSimple = 'tileSimple',
  tileForms = 'tileForms',
}

export interface TileType {
  [TileTypeEnum.tileSimple]: string;
  [TileTypeEnum.tileForms]: string;
}
