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

export const inventoryAdapter = (
  inventoryObject: InitialInventory
): Inventory => {
  return {
    uniqueNum: inventoryObject.inventory_uniqueNum,
    name: inventoryObject.inventory_name,
    provider: inventoryObject.inventory_provider,
    pieces: inventoryObject.inventory_pieces,
  };
};
