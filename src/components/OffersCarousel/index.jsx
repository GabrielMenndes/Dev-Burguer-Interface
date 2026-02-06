import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrICE.JS';
import { CardProduct } from '../CardProduct';
import { Container, Title } from './styles';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      const onlyOffers = data
        .filter((product) => product.offer === true)
        .map((product) => ({
          currencyValue: formatPrice(product.price),
          ...product,
        }));

      setOffers(onlyOffers);
    }
    loadProducts();
  }, []);

  const resposive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title> Ofertas Do Dia! </Title>

      <Carousel
        responsive={resposive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {offers.map((produtc) => (
          <CardProduct key={produtc.id} product={produtc} />
        ))}
      </Carousel>
    </Container>
  );
}
