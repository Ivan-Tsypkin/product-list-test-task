export default interface Product {
  product_id: number;
  avatar: {
    original: string;
    compressed: string;
  };
  additional_photos: [
    {
      compressed: string;
      original: string;
    }
  ]
  created_by: {
    display_name: string;
  };
  initial_price: number;
  name: string;
  quantity: number;
  quantity_available: number;
  json_nft_data: {
    external_url: string;
  }
}