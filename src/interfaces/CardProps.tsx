export default interface CardProps {
  productId?: number;
  creatorName: string;
  productName: string;
  quantityAvailable: number;
  quantity: number;
  initialPrice: number;
  productImageCompressed: string;
  productImageOriginal: string;
  productAdditionalImage: string;
  externalUrl: string;
}