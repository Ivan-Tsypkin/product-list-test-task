import { useEffect, useState } from "react";
import { getProducts } from "../utils/productsApi";
import { Header } from "./Header";
import { Main } from "./Main";
import { Page } from "./Page";
import ProductList from "./ProductList";
import { SubTitle } from "./SubTitle";
import { Title } from "./Title";
import Product from "../interfaces/Product";
import Checkbox from "./Checkbox";

function App() {
  const [productsInitialList, setProductsInitialList] = useState<Product[]>([]);  // Стейт с начальным списком продуктов
  const [products, setProducts] = useState<Product[]>([]);  // Стейт со списком продуктов
  const [checked, setChecked] = useState(false);  //  Стейт состояния чекбокса

  // Получаем список продуктов
  useEffect(() => {
    getProducts()
      .then(res => {
        setProductsInitialList(res.data.products);
        setProducts(res.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  // Фильтрация по доступности (available)
  useEffect(() => {
    if (checked) {
      setProducts(products.filter(item => item.quantity_available !== 0));
    } else {
      setProducts(productsInitialList);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  return (
    <Page>
      <Main>
        <Header>
          <Title>Explore</Title>
          <SubTitle>Buy and sell digital fashion NFT art</SubTitle>
        </Header>
        <Checkbox checked={checked} setChecked={setChecked} />
        <ProductList products={products} />
      </Main>
    </Page>
  );
}

export default App;
