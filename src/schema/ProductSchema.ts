import Realm from 'realm';

export interface ProductProps {
  id: string;
  name: string;
  gtin: string;
  created: string;
  price: string;
  cost: boolean;
}

export default class ProductSchema implements ProductProps {
  id: string;

  name: string;

  gtin: string;

  created: string;

  price: string;

  cost: boolean;

  public static schema: Realm.ObjectSchema = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
      id: { type: 'string', indexed: true },
      name: 'string',
      gtin: 'string',
      created: 'string',
      price: 'string',
      cost: 'bool',
    },
  };
}
