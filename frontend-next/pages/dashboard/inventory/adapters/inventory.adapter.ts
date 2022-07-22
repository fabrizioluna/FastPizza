import { InitialInventory, Inventory } from "../types/inventory.types";

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
