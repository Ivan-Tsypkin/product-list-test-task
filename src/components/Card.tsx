import styled from "styled-components";
import cardPic from "../images/product-image.png"
import CardProps from "../interfaces/CardProps";
import { Box } from "./Box";
import { Text } from "./Text";
import { Image } from "./Image";
import { Video } from "./Video";
import { BASE_PRODUCT_COMPRESSED_URL, BASE_PRODUCT_ORIGINAL_URL } from "../utils/constants";

const StyledCard = styled.li`
  box-sizing: border-box;
  width: 100%;
  max-width: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .9);
    cursor: pointer;

    @media screen and (min-width: 1024px) {
      transform: scale(1.05);
    }

    transform: scale(1.02);
  }
`;

const Card: React.FC<CardProps> = ({ 
  creatorName, 
  productName, 
  quantityAvailable, 
  quantity, 
  initialPrice,
  productImageCompressed,
  productImageOriginal,
  productAdditionalImage,
}) => {
  const videoRegExp = /.+\.mp4/i; // Регулярное выражение для видео

  return (
    <StyledCard>
      <Box relative width="100%" height="400px">
        {/* Логика обработки пути до фото или видео продукта */}
        {productImageCompressed
          ? videoRegExp.test(productImageCompressed)
              ? <Video src={BASE_PRODUCT_ORIGINAL_URL + productImageCompressed} />
              : <Image src={BASE_PRODUCT_COMPRESSED_URL + productImageCompressed} alt="Product" />
          : productAdditionalImage
              ? videoRegExp.test(productAdditionalImage)
                ? <Video src={BASE_PRODUCT_ORIGINAL_URL + productAdditionalImage} />
                : <Image src={BASE_PRODUCT_ORIGINAL_URL + productAdditionalImage} alt="Product" />
              : productImageOriginal
                  ? videoRegExp.test(productImageOriginal)
                    ? <Video src={BASE_PRODUCT_ORIGINAL_URL + productImageOriginal} />
                    : <Image src={BASE_PRODUCT_ORIGINAL_URL + productImageOriginal} alt="Product" />
                  : <Image src={cardPic} alt="Product" />
        }
        <Box 
          borderBox 
          padding="16px" 
          width="100%" 
          height="100%" 
          absolute 
          top="0" 
          left="0"
          flex
          column
          between
        >
          <Box flex column>
            <Text 
              color="#F3F3F3"
              lineHeight="2"
              fontWeight="400"
              fontSize="12px"
              textShadow="0px 0px 5px rgba(0, 0, 0, 1)"
            >
              created by
            </Text>
            <Text 
              color="#FFF"
              lineHeight="1.7"
              fontWeight="700"
              fontSize="14px"
              textShadow="0px 0px 5px rgba(0, 0, 0, 1)"
            >
              {creatorName}
            </Text>
          </Box>
            <Text 
              color="#FFF"
              lineHeight="1.3"
              fontWeight="400"
              fontSize="18px"
              textShadow="0px 0px 5px rgba(0, 0, 0, 1)"
            >
              {productName}
            </Text>
        </Box>
      </Box>
      <Box
        borderBox
        padding="16px"
        width="100%"
        flex
        between
      >
        <Box flex column>
          <Text 
            color="#808080"
            lineHeight="2"
            fontWeight="400"
            fontSize="12px"
          >
            available
          </Text>
          <Text 
            color="#000"
            lineHeight="1.5"
            fontWeight="600"
            fontSize="16px"
          >
            {quantityAvailable} of {quantity}
          </Text>
        </Box>
        <Box flex column flexEnd>
          <Text 
            color="#808080"
            lineHeight="2"
            fontWeight="400"
            fontSize="12px"
          >
            price
          </Text>
          <Text 
            color="#0040E5"
            lineHeight="1.5"
            fontWeight="600"
            fontSize="16px"
          >
            {initialPrice} ETH
          </Text>
        </Box>
      </Box>
    </StyledCard>
  )
};

export default Card;