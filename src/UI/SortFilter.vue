<template>
  <div class="sort">
    <div class="sort__button">
      <div @click="toggleClass">
        <p :class="{ highlighted: isHighlighted }" class="sort__button-btn">
          Сортировать
        </p>
        <div>
          <transition name="fade" @after-enter="showBlock">
            <ul v-show="isHighlighted" class="sort__criterion">
              <li
                v-for="criterion in criterions"
                :key="criterion.id"
                @click="addFilters(criterion.name, criterion.id)"
              >
                {{ criterion.name }}
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
    <div v-show="addFilter" class="add__criterion">
      {{ criterionName }}
      <img
        @click="removeFilters"
        class="add__criterion-img"
        src="../images/icons/remove_filter-icon.png"
        alt=""
      />
    </div>
    <ModalName
      :parentFilteredProducts.sync="parentFilteredProducts"
      @filtered-products-name="filteredProductsName"
      :addedName="addedName"
    />
  </div>
</template>

<script>
import ModalName from "./ModalName.vue";
export default {
  components: {
    ModalName,
  },
  data() {
    return {
      isHighlighted: false,
      addFilter: false,
      criterions: [
        { id: 1, name: "Скидка" },
        { id: 2, name: "Сначала дешевые" },
        { id: 3, name: "Сначала дорогие" },
        { id: 4, name: "Сначала трендовые" },
      ],
      criterionName: null,
      addedCriterion: null,
      filterProductsName: [],
      addedName: "",
    };
  },
  props: {
    parentFilteredProducts: {
      type: Array,
    },
  },
  computed: {
    filteredProductsCriterions() {
      let criterion = this.addedCriterion;
      if (criterion === 1) {
        return this.parentFilteredProducts.filter(
          (product) => product.discount === true
        );
      } else if (criterion === 2) {
        return this.parentFilteredProducts.sort((a, b) => a.price - b.price);
      } else if (criterion === 3) {
        return this.parentFilteredProducts.sort((a, b) => b.price - a.price);
      } else if (criterion === 4) {
        return this.parentFilteredProducts.filter(
          (products) => products.trend === true
        );
      } else {
        return [];
      }
    },
    filteredName() {
      let addName = this.addedName;
      if (addName != null) {
        return this.parentFilteredProducts.filter(
          (products) => products.name === addName
        );
      } else {
        return [];
      }
    },
  },
  methods: {
    toggleClass() {
      this.isHighlighted = !this.isHighlighted;
    },
    showBlock() {
      let screenWidth = window.innerWidth;
      if (this.isHighlighted) {
        const ul = document.querySelector(".sort__criterion");
        if (screenWidth <= 610) {
          ul.style.height = "130px";
        } else {
          ul.style.height = "30px";
        }
      }
    },
    addFilters(name, id) {
      this.addFilter = !this.addFilter;
      this.criterionName = name;
      this.addedCriterion = id;
    },
    removeFilters() {
      this.addedCriterion = null;
      this.criterionName = null;
      this.addFilter = !this.addFilter;
    },
    sendFilteredProducts() {
      this.$emit("filtered-products-discount", this.filteredProductsCriterions);
    },
    sendSortProductsName() {
      this.$emit("filtered-products-name", this.filteredName);
    },
    filteredProductsName(products) {
      this.addedName = products;
    },
  },
  watch: {
    filteredProductsCriterions() {
      this.sendFilteredProducts();
    },
    filteredName() {
      this.sendSortProductsName();
    },
  },
  mounted() {
    this.sendFilteredProducts();
    this.sendSortProductsName();
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  color: white;
  user-select: none;
  cursor: pointer;
  transition: all 0.1s;
  padding: 0 20px;
}
li:hover {
  color: rgb(0, 0, 0);
  transition: all 0.1s;
}
ul {
  display: none;
}
p {
  user-select: none;
}
.sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 100px);
  margin: 20px auto 0 auto;
}
.add__criterion {
  font-size: 17px;
  left: 200px;
  position: absolute;
  animation: showBlock 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes showBlock {
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
.add__criterion-img {
  width: 10px;
  margin-left: 5px;
  cursor: pointer;
}

.sort__button-btn {
  border: none;
  background-color: #999900;
  color: rgb(238, 233, 233);
  padding: 6px;
  border-radius: 10px;
  background-image: url(../images/icons/searchSortRight-icon.png);
  background-size: 7px;
  background-repeat: no-repeat;
  background-position: 110px 50%;
  padding-right: 30px;
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: 0 0 20px rgba(49, 49, 49, 0.5);
  font-family: Raleway-Bold;
}
.highlighted {
  background-image: url(../images/icons/searchSortBottom-icon.png) !important;
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 105px 50%;
  transition: all 0.1s;
}
.sort__button {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
}
.sort__criterion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  width: calc(100% - 126px);
  padding-inline-start: 0px;
  padding: 0 10px;
  color: black;
  line-height: 30px;
  transition: all 0.5s;
  position: absolute;
  background-color: #999900;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
}
.fade-enter-active {
  animation: showCriterion 0.5s;
}
.fade-leave-active {
  animation: hiddenCriterion 0.5s;
}
@keyframes showCriterion {
  0% {
    height: 0;
  }
  100% {
    height: 30px;
  }
}
@keyframes hiddenCriterion {
  0% {
    height: 30px;
  }
  100% {
    height: 0;
  }
}
@media (max-width: 875px) {
  .add__criterion {
    font-size: 12px;
  }
}
@media (max-width: 825px) {
  .add__criterion {
    top: 175px;
    left: 55px;
  }
}

@media (max-width: 730px) {
  li {
    padding: 0;
    font-size: 13px;
  }
}
@media (max-width: 660px) {
  .sort {
    flex-direction: column;
  }
  .sort__criterion {
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .add__criterion {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
    left: 0;
  }
  @keyframes showCriterion {
    0% {
      height: 0;
    }
    100% {
      height: 120px;
    }
  }
  @keyframes hiddenCriterion {
    0% {
      height: 120px;
    }
    100% {
      height: 0;
    }
  }
}
</style>
