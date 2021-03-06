import { useEffect, useState } from 'react';
import { Inventory } from '../types/inventory.types';

interface Props {
  inventoryList: Inventory[];
}

export const LowList = ({ inventoryList }: Props) => {
  const [nextList, setNextList] = useState<Inventory[]>([]);

  useEffect(() => setNextList(() => inventoryList.filter((inv) => inv.pieces <= 3)), []);

  return (
    <div>
      {nextList.length > 0 ?
        nextList.map((inv, index: number) => (
          <div key={index}>
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
