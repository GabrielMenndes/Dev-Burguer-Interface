import TrashIcon from '../../assets/Trash.svg';
import { useCart } from '../../hooks';
import { formatPrice } from '../../utils/formatPrice';
import { Table } from '../index';
import {
  ButtonGroup,
  EmptyCart,
  ProductImage,
  TotalPrice,
  TrashImagem,
} from './styles';

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th> </Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th> </Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>R$ {product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </TotalPrice>
              </Table.Td>
              <Table.Td>
                <TrashImagem
                  src={TrashIcon}
                  alt="Lixeira"
                  onClick={() => deleteProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={6}>
              <EmptyCart>Carrinho Vazio</EmptyCart>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}
