import { useEffect, useState } from 'react';
import { Inventory } from '../adapters/inventory.adapter';

interface Props {
  inventoryList: Inventory[];
}

export const LowList = ({ inventoryList }: Props) => {
  const [nextList, setNextList] = useState<Inventory[]>([]);

  // const getLowProducts = () => inventoryList.filter((inv) => inv.pieces <= 3);
  useEffect(() => setNextList(() => inventoryList.filter((inv) => inv.pieces <= 3)), []);

  console.log(nextList)
  return (
    <div>
      {nextList.length > 0 ?
        nextList.map((inv) => (
          <div>
            <li>{inv.name}</li>
            <li>{inv.pieces}</li>
          </div>
        )) 
        : <div>
            <p>Sin insumos agotados.</p>
        </div>}
    </div>
  );
};
