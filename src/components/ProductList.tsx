import styled from "styled-components";
import { ExternalLink } from "./ExternalLink";
import Card from "./Card";
import ProductListProps from "../interfaces/ProductListProps";
import Product from "../interfaces/Product";

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 305px));
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 1024px) {
    gap: 32px;
  }
`;

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <StyledList>
      {products.map((product: Product) => {
          return <ExternalLink 
                    href={product.json_nft_data.external_url} 
                    key={product.product_id}
                    target="_blank"
                  >          
              <Card 
                creatorName={product.created_by.display_name}
                productName={product.name}
                quantityAvailable={product.quantity_available}
                quantity={product.quantity}
                initialPrice={product.initial_price}
                productImageCompressed={product.avatar.compressed}
                productImageOriginal={product.avatar.original}
                productAdditionalImage={product.additional_photos[0] ? product.additional_photos[0].compressed : ""}
                externalUrl={product.json_nft_data.external_url}
              />
            </ExternalLink>
        })}
    </StyledList>
  )
};

export default ProductList;