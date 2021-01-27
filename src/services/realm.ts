import Realm from 'realm';

import ProductSchema from '../schema/ProductSchema';

const getRealm = (): ProgressPromise => {
  Realm.Object;
  return Realm.open({
    schema: [ProductSchema],
  });
};

export default getRealm;
