<template>
  <main class="content">
    <section
      class="section container"
      v-if="filteredProducts.length > 0"
      v-for="product in filteredProducts"
    >
      <div class="section__content">
        <div class="content__block">
          <div class="block__images">
            <div class="block__image">
              <img class="block__image-img" :src="product.image1" alt="" />
            </div>
            <div class="block__image">
              <img class="block__image-img" :src="product.image2" alt="" />
            </div>
            <div class="block__image">
              <img class="block__image-img" :src="product.image3" alt="" />
            </div>
            <div class="block__image">
              <img class="block__image-img" :src="product.image4" alt="" />
            </div>
            <div class="block__image">
              <img class="block__image-img" :src="product.image5" alt="" />
            </div>
          </div>

          <div class="block__information">
            <div class="information__content">
              <div class="information__text">
                <div class="information__name">
                  <p>
                    Кроссовки:
                    <span class="product__name">{{
                      productDiscount(product)
                    }}</span>
                  </p>
                </div>
                <div class="information__price">
                  <p>
                    Цена:
                    <span
                      class="none__discount"
                      :class="{ discountClass: isActiveClass }"
                      >{{ product.price }}</span
                    >
                    rub
                  </p>
                </div>
              </div>
              <div class="information__buttons">
                <div class="buttons__size info__btns">
                  <img src="../images/icons/size-icon__green.png" alt="" />
                </div>
                <div class="buttons__pay info__btns">
                  <img src="../images/icons/payment__green.png" alt="" />
                </div>
                <div
                  @click="this.$store.commit('removeProduct', product.id)"
                  class="buttons__favorite info__btns"
                >
                  <img src="../images/icons/white-favorite__green.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-else>
      <div class="none__products">
        <h2>😔 Вы еще ничего не выбрали! 😔</h2>
      </div>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isActiveClass: false,
    };
  },
  props: {
    productsID: {
      type: Array,
    },
  },
  computed: {
    ...mapState(["favoriteID"]),
    filteredProducts() {
      return this.productsID.filter((product) =>
        this.favoriteID.includes(product.id)
      );
    },
  },
  methods: {
    productDiscount(product) {
      if (product.discount === true) {
        this.isActiveClass = true;
      }
      return product.name;
    },
  },
};
</script>
<style scoped>
.block__image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.section__content {
  max-width: 1140px;
  width: calc(100% - 50px);
  margin: 0 auto;
}
.block__image-img {
  width: 150px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.block__images {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
}
.content__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background-color: #999900;
  padding: 10px;
  border-radius: 10px;
}
.block__information {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 20px;
  background-color: black;
  border-radius: 15px;
  min-width: 300px;
  min-height: 150px;
  height: calc(100% - 200px);
  margin: 5px;
}
.information__name {
  margin-bottom: 5px;
}
.information__price {
  margin-bottom: 5px;
}
.discountClass {
  /* color: #999900 !important; */
}
.information__text {
  margin-bottom: 10px;
}
.none__discount {
  color: #999900;
}
.information__content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 217px;
}
.info__btns {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}
.buttons__pay:hover {
  transition: all 0.3s;
  background-color: #999900;
  img {
    content: url(../images/icons/payment.png);
  }
}
.buttons__favorite:hover {
  transition: all 0.3s;
  background-color: #999900;
  img {
    content: url(../images/icons/white-favorite.png);
  }
}
.buttons__size:hover {
  transition: all 0.3s;
  background-color: #999900;
  img {
    content: url(../images/icons/size-icon.png);
  }
}
.info__btns img {
  display: block;
  width: 25px;
}
.information__buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.none__products {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1179px) {
  .content__block {
    align-items: self-start;
  }
}
</style>
