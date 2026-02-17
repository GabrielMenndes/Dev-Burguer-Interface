import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import {
  Banner,
  CategoryButton,
  CategoryMenu,
  Container,
  Home,
  HomeOffers,
  ProductsContainer,
} from './styles';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const Navigate = useNavigate();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');

    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }
    loadCategories();
    loadProducts();
  }, []);

  const filteredProducts =
    activeCategory === 0
      ? products
      : products.filter(
          (product) => Number(product.category_id) === activeCategory,
        );

  return (
    <Container>
      <Banner>
        <h1>
          {' '}
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTA AQUI!
          <span>Esse cardápio está inrresistível!</span>
        </h1>
      </Banner>

      <HomeOffers
        onClick={() => {
          Navigate('/');
        }}
      >
        <span>CLIQUE AQUI PARA VER AS OFERTAS DO DIA!</span>
      </HomeOffers>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              Navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(Number(category.id));
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
      <Home
        onClick={() => {
          Navigate('/');
        }}
      >
        Voltar para o Inicio!
      </Home>
    </Container>
  );
}
