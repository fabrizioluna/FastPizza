export interface InitialInventory {
  inventory_uniqueNum: string;
  inventory_name: string;
  inventory_provider: string;
  inventory_pieces: number;
}

export interface Inventory {
  uniqueNum: string;
  name: string;
  provider: string;
  pieces: number;
}

export interface FormInventory {
  inventory_name: string;
  inventory_provider: string;
  inventory_pieces: any;
}
