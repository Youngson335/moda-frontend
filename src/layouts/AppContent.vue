<template>
  <div>
    <main>
      <header class="header">
        <div class="header__container">
          <div class="header__sortProduct"></div>
          <div class="container">
            <DescriptionContent />
            <SortFilter
              class="sort-filter"
              :parentFilteredProducts="parentFilteredProducts"
              @filtered-products-discount="sortProductsDiscount"
              @filtered-products-name="sortProductsName"
            />
            <div class="header__product">
              <div
                v-if="parentFilteredProducts.length === 0"
                class="header__noneProduct"
              >
                <h3>Данный товар не найден!</h3>
              </div>
              <div
                v-for="product in displayProducts"
                :key="product.id"
                class="product__block"
              >
                <div class="block__images">
                  <img
                    class="block__images-logo"
                    src="../images/logo/logo__black.png"
                    alt=""
                  />
                  <img
                    :src="product.image"
                    class="block__images-image"
                    alt=""
                  />
                </div>
                <p class="product__name">{{ product.name }}</p>
                <div
                  class="block__price"
                  @click="this.$store.commit('toggleFavorite', product)"
                >
                  <p
                    :class="{ price_discount: product.discount }"
                    class="product__price"
                  >
                    <strong>{{ product.price }}.rub</strong>
                  </p>
                  <img
                    :class="{
                      product__favorite: !product.favorite,
                      product__unfavorite: product.favorite,
                    }"
                    :src="
                      product.favorite
                        ? require('../images/icons/favorites/trueFavorite.png')
                        : require('../images/icons/favorites/falseFavorite.png')
                    "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  </div>
  <SearchContent
    v-model="searchQuery"
    class="search__fixed-input"
    @input-change="handleInputChange"
  />
</template>
<script>
import DescriptionContent from "@/UI/DescriptionContent.vue";
import SortFilter from "@/UI/SortFilter.vue";
import SearchContent from "@/UI/SearchContent.vue";

export default {
  components: { DescriptionContent, SortFilter, SearchContent },
  props: {
    products: {
      type: Array,
    },
    parentFilteredProducts: {
      type: Array,
    },
    sortedProductsDiscount: {
      type: Array,
    },
  },
  data() {
    return {
      favorite: false,
      show: true,
      sortedProducts: [],
      searchQuery: "",
    };
  },
  methods: {
    handleInputChange(value) {
      this.searchQuery = value;
    },
    // toggleFavorite(product) {
    //   const index = this.favotiteID.indexOf(product.id);
    //   if (index !== -1) {
    //     this.favotiteID.splice(index, 1);
    //   } else {
    //     this.favotiteID.push(product.id);
    //   }
    //   product.favorite = !product.favorite;
    // },
    sortProductsDiscount(filteredProducts) {
      this.sortedProducts = this.sortedProductsDiscount.slice();
      this.sortedProducts = filteredProducts.map((proxyObject) => {
        const plainObject = {};
        for (const key in proxyObject) {
          plainObject[key] = proxyObject[key];
        }
        return plainObject;
      });
    },
    sortProductsName(filteredProducts) {
      this.sortedProducts = this.sortedProductsDiscount.slice();
      this.sortedProducts = filteredProducts.map((proxyObject) => {
        const plainObject = {};
        for (const key in proxyObject) {
          plainObject[key] = proxyObject[key];
        }
        return plainObject;
      });
    },
  },
  computed: {
    displayProducts() {
      this.sortedProductsSlice = this.sortedProductsDiscount.slice();
      let screenWidth = window.innerWidth;
      if (screenWidth <= 660) {
        return this.sortedProducts.length > 0
          ? this.sortedProducts
          : this.parentFilteredProducts;
      } else {
        return this.sortedProductsSlice.length > 0
          ? this.sortedProductsSlice
          : this.parentFilteredProducts;
      }
    },
    filteredProducts() {
      const searchQuery = this.searchQuery.toLowerCase();
      return (this.sortedProducts = this.parentFilteredProducts.filter(
        (product) => {
          const productName = product.name.toLowerCase();
          return productName.includes(searchQuery);
        }
      ));
    },
  },
};
</script>
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.752);
  padding: 10px;
  width: calc(100% - 80px);
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
}
.product__block {
  background-color: rgb(231, 229, 221);
  width: 200px;
  height: 250px;
  border-radius: 15px;
  margin: 10px;
  box-shadow: 0 20px 28px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: all 0.2s;
  animation: animationIn 0.3s;
  color: black;
}

.product__block:hover {
  background-color: rgba(0, 0, 0, 0.537);
  color: rgb(241, 235, 235);
}

.header__product {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  margin: 30px 0 30px 20px;
  width: 100%;
  height: 100%;
}
.header__container {
  width: 100%;
}
.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: calc(100% - 100px);
}
.header__content {
  margin-bottom: 30px;
}
.product__name {
  font-size: 15px;
  text-align: start;
  padding: 0px 10px 10px 10px;
}

.product__price {
  font-size: 17px;
  text-align: start;
  padding: 2px 10px;
  font-family: "Raleway-Bold";
}
.price_discount {
  background-color: #999900;
}
.block__images {
  height: 70%;
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  margin-bottom: 10px;
}

.block__images-image {
  opacity: 1;
  width: 200px;
  transition: all 0.5s;
}
.block__images-logo {
  width: 50px;
  position: absolute;
  padding: 10px;
}
.block__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product__favorite {
  cursor: pointer;
  width: 20px;
  padding-right: 10px;
}
.product__unfavorite {
  cursor: pointer;
  width: 20px;
  padding-right: 10px;
}
.header__noneProduct {
  margin: 50px;
}
.header__noneProduct h3 {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgb(199, 88, 32);
  font-size: 20px;
  text-align: center;
  padding: 20px;
  top: 300px;
  right: 150px;
  background-color: rgba(0, 0, 0, 0.429);
  border-radius: 20px;
  animation: showH3text-78b18b17 0.45s forwards;
}
@keyframes showH3text {
  0% {
    transform: translateX(-15%);
  }
  20% {
    transform: translateX(15%);
  }
  40% {
    transform: translateX(-10%);
  }
  60% {
    transform: translateX(10%);
  }
  80% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0%);
  }
}
.sort-filter {
  display: none;
}
.hiddenProductBlock {
  opacity: 0;
  transition: opacity 1s;
}
.search__fixed-input {
  display: none;
}

@keyframes animationIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 710px) {
  .header__product {
    width: 100%;
  }
}
@media (max-width: 470px) {
  .search__fixed-input {
    display: block;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -0%);
    animation: showSearchInput 0.5s;
  }
  @keyframes showSearchInput {
    0% {
      bottom: -60px;
    }
    100% {
      bottom: 10px;
    }
  }
}
@media (max-width: 660px) {
  .product__block {
    margin: 15px 30px;
  }
  .container {
    display: block;
  }
  .sort-filter {
    display: block;
  }
  .header__product {
    margin: 0;
  }
}
@media (max-width: 888px) {
  .header__product {
    justify-content: center;
  }
}
@media (min-width: 1370px) {
  .header__left-image,
  .header__right-image {
    display: block;
  }
}
</style>
@/eventBus
