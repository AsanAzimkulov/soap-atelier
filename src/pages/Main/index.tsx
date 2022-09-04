import MainLayout from "../../layouts/mainLayout";
import styles from './index.module.scss';
import React from 'react'
import MainSlider from "../../components/MainSlider";
import Gallery from "../../components/Gallery";
import CatalogSlider from "../../components/CatalogSlider";
import Text from "../../components/Text";

const Main = () => {
  return (
    <>

      <h1 className="visually-hidden">Главная страница магазина мыла ручной работы - Samyn Atelier</h1>
      <section className="section">
        <h2 className="visually-hidden">Слайдер с продукцией</h2>
        <MainSlider />
      </section>

      <section>
        <h2 className="visually-hidden">фото-галлерея</h2>
        <Gallery />
      </section>

      <section>
        <h2 className="visually-hidden">
          Каталог мыла ручной работы
        </h2>
        <CatalogSlider />
      </section>

      <section>
        <Text />
      </section>
    </>
  )
}

export default Main;
