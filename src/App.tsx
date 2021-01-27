import React, { useCallback, useState, useEffect } from 'react';
import uuid from 'react-native-uuid';

import getRealm from './services/realm';

import { ProductProps } from './schema/ProductSchema';

import {
  Container,
  Title,
  BackgroundTitle,
  ContainerItem,
  ButtonAddItem,
  TextButton,
  Scroll,
  TextDescription,
} from './styles';

const App: React.FC = () => {
  const [product, setProduct] = useState<ProductProps[]>([]);

  const listProduct = useCallback(async () => {
    const realm = await getRealm();
    const data = realm.objects('Product').sorted('created', true);

    setProduct(data); // O problema se encontra aqui
  }, []);

  const handleAddProduct = useCallback(async () => {
    const item = {
      id: uuid.v4(),
      name: 'Produto',
      gtin: '789098764356',
      created: Date.now().toString(),
      price: '12',
      cost: false,
    };

    const realm = await getRealm();
    realm.write(() => {
      const dataNew = realm.create('Product', item);
      // console.log(dataNew);  Se descomentar perceberá que está com um objeto vazio
    });

    listProduct();
  }, [listProduct]);

  useEffect(() => {
    listProduct();
  }, [listProduct]);

  return (
    <Container>
      <BackgroundTitle>
        <Title>Lista de Produtos</Title>
      </BackgroundTitle>

      <Scroll alwaysBounceVertical={false}>
        {product.map(value => {
          return (
            <ContainerItem key={value.id}>
              <TextDescription>{value.id}</TextDescription>
              <TextDescription>{value.name}</TextDescription>
              <TextDescription>{value.price}</TextDescription>
            </ContainerItem>
          );
        })}
      </Scroll>

      <ButtonAddItem onPress={handleAddProduct}>
        <TextButton>Adicionar Produto</TextButton>
      </ButtonAddItem>
    </Container>
  );
};

export default App;
