<template>
  <div class="content">
    <div class="content__home">
      <AppMenu
        :products.sync="products"
        class="content__menu"
        @filtered-products="handleFilteredProducts"
      />
      <SortFilter
        class="sort-filter"
        :parentFilteredProducts="parentFilteredProducts"
        @filtered-products-discount="sortProductsDiscount"
        @filtered-products-name="sortProductsName"
      />
      <AppContent
        :products="products"
        :parentFilteredProducts="parentFilteredProducts"
        :sortedProductsDiscount="sortedProductsDiscount"
      />
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppMenu from "../../layouts/AppMenu.vue";
import AppFooter from "@/layouts/AppFooter.vue";
import AppContent from "@/layouts/AppContent.vue";
import SortFilter from "@/UI/SortFilter.vue";

export default {
  components: {
    AppMenu,
    AppFooter,
    AppContent,
    SortFilter,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "vans",
          price: 40000,
          image: require("../../images/product/1_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: false,
        },
        {
          id: 2,
          name: "vans",
          price: 45000,
          image: require("../../images/product/2_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 3,
          name: "vans",
          price: 42000,
          image: require("../../images/product/3_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: true,
        },
        {
          id: 4,
          name: "vans",
          price: 39000,
          image: require("../../images/product/4_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: false,
        },
        {
          id: 5,
          name: "adidas",
          price: 40000,
          image: require("../../images/product/5_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 6,
          name: "puma",
          price: 40000,
          image: require("../../images/product/6_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 7,
          name: "reebok",
          price: 40000,
          image: require("../../images/product/7_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: true,
        },
        {
          id: 8,
          name: "adidas",
          price: 40000,
          image: require("../../images/product/8_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 9,
          name: "puma",
          price: 40000,
          image: require("../../images/product/9_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: false,
        },
        {
          id: 10,
          name: "new balance",
          price: 40000,
          image: require("../../images/product/10_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: true,
        },
        {
          id: 11,
          name: "adidas",
          price: 13000,
          image: require("../../images/product/11_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: true,
        },
        {
          id: 12,
          name: "breggs",
          price: 40000,
          image: require("../../images/product/12_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 13,
          name: "new balance",
          price: 39000,
          image: require("../../images/product/13_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: true,
        },
        {
          id: 14,
          name: "reebok",
          price: 27000,
          image: require("../../images/product/14_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: true,
        },
        {
          id: 15,
          name: "reebok",
          price: 19000,
          image: require("../../images/product/15_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: true,
        },
        {
          id: 16,
          name: "new balance",
          price: 15000,
          image: require("../../images/product/16_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: false,
        },
        {
          id: 17,
          name: "vans",
          price: 40000,
          image: require("../../images/product/17_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: false,
        },
        {
          id: 18,
          name: "new balance",
          price: 23000,
          image: require("../../images/product/18_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: true,
        },
        {
          id: 19,
          name: "new balance",
          price: 41000,
          image: require("../../images/product/19_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: true,
        },
        {
          id: 20,
          name: "adidas",
          price: 10000,
          image: require("../../images/product/20_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 21,
          name: "reebok",
          price: 45000,
          image: require("../../images/product/21_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: true,
        },
        {
          id: 22,
          name: "vans",
          price: 24000,
          image: require("../../images/product/22_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 23,
          name: "reebok",
          price: 38000,
          image: require("../../images/product/23_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: true,
        },
        {
          id: 24,
          name: "adidas",
          price: 17000,
          image: require("../../images/product/24_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 25,
          name: "reebok",
          price: 33000,
          image: require("../../images/product/25_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: false,
        },
        {
          id: 26,
          name: "new balance",
          price: 47000,
          image: require("../../images/product/26_pair/1.jpg"),
          favorite: false,
          discount: false,
          trend: true,
        },
        {
          id: 27,
          name: "puma",
          price: 32000,
          image: require("../../images/product/27_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: true,
        },
        {
          id: 28,
          name: "vans",
          price: 40000,
          image: require("../../images/product/28_pair/1.jpg"),
          favorite: false,
          discount: true,
          trend: true,
        },
      ],
      parentFilteredProducts: [],
      sortedProductsDiscount: [],
      sortedProductsName: [],
      scrollX: 0,
    };
  },
  methods: {
    handleFilteredProducts(filteredProducts) {
      this.parentFilteredProducts = filteredProducts.map((proxyObject) => {
        const plainObject = {};
        for (const key in proxyObject) {
          plainObject[key] = proxyObject[key];
        }
        return plainObject;
      });
    },
    sortProductsDiscount(filteredProducts) {
      this.sortedProductsDiscount = filteredProducts.map((proxyObject) => {
        const plainObject = {};
        for (const key in proxyObject) {
          plainObject[key] = proxyObject[key];
        }
        return plainObject;
      });
    },
    sortProductsName(filteredProducts) {
      this.sortedProductsDiscount = filteredProducts.map((proxyObject) => {
        const plainObject = {};
        for (const key in proxyObject) {
          plainObject[key] = proxyObject[key];
        }
        return plainObject;
      });
    },
  },
};
</script>
<style scoped>
.content__home {
  flex: 1;
}

.content {
  display: flex;
  flex-direction: column;
  min-height: 1500px;
  overflow: hidden;
}
.svg {
  width: 100%;
  position: absolute;
  z-index: -5;
  opacity: 0.7;
}
.content__svg {
  height: 100%;
  overflow: hidden;
}

@media (max-width: 660px) {
  .sort-filter {
    display: none;
  }
}
</style>
