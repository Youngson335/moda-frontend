<template>
  <div>
    <header class="header">
      <div class="header__menu container">
        <div class="menu__logo">
          <router-link to="/home"
            ><img
              class="menu__logo-image"
              src=".././images/logo/logo__white.png"
              alt=""
          /></router-link>
        </div>
        <div class="menu__burger" @click="toggleClassBurger">
          <img
            class="menu__burger-image"
            src="../images/icons/burger.png"
            alt=""
          />
          <img
            class="menu__burger-image"
            src="../images/icons/burger.png"
            alt=""
          />
          <img
            class="menu__burger-image"
            src="../images/icons/burger.png"
            alt=""
          />
        </div>
        <LeftMenu
          v-if="showOpenBurger"
          :showOpenBurger.sync="showOpenBurger"
          @toggleBurger="toggleBurger"
          class="left__menu"
        />
      </div>
    </header>
  </div>
</template>
<script>
import LeftMenu from "@/UI/LeftMenu.vue";
import SearchContent from "@/UI/SearchContent.vue";
export default {
  components: {
    LeftMenu,
    SearchContent,
  },
  data() {
    return {
      searchQuery: "",
      showOpenBurger: false,
    };
  },
  props: {
    products: Array,
  },
  methods: {
    toggleClassBurger() {
      this.showOpenBurger = !this.showOpenBurger;
    },
    toggleBurger(newValue) {
      this.showOpenBurger = newValue;
    },
    clickHiddenBurger() {
      if (this.showOpenBurger === false) {
        this.showOpenBurger = true;
      }
    },
  },
};
</script>
<style scoped>
.container {
  width: calc(100% - 100px);
  margin: 0 auto;
}
.header {
  border-bottom: 2px solid #999900;
  padding: 20px 0;
  min-height: 41px;
  align-items: center;
  display: flex;
}
.header__menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
}

.menu__logo-image {
  width: 100px;
  user-select: none;
}

.menu__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  order: 3;
}
.menu__burger {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.menu__burger-image {
  width: 25px;
  margin: 2px 0;
}
.btns__personal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btns__personal-image {
  width: 15px;
  user-select: none;
}

.search__block-input {
  border: none;
  background-color: rgba(249, 249, 249, 0.598);
  padding: 8px;
  border-radius: 10px;
  background-image: url(../images/icons/search-icon.png);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 10px 50%;
  padding-left: 50px;
  width: 250px;
  font-family: "Raleway-Medium";
}

.search__block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search__block-input::placeholder {
  color: black;
  text-align: end;
  font-family: "Raleway-Medium";
  opacity: 0.5;
  font-size: 15px;
}
input:focus {
  outline: none;
  border: 2px solid rgb(199, 88, 32);
}

.menu__btns::before {
  content: "-";
  width: 100px;
  height: 20px;
}
.custom-input {
  display: none;
}
.menu__search {
  order: 2;
}

@media (max-width: 800px) {
  .menu__text {
    display: none;
  }
}
@media (max-width: 575px) {
  .btns__personal-btn {
    display: none;
  }
  .menu__btns {
    padding: 10px;
  }
  .menu__logo-image {
    width: 85px;
  }
  .search__block-input {
    width: 200px;
  }
}
@media (max-width: 470px) {
  .search__block-input {
    width: 0px;
    padding-left: 30px;
    cursor: pointer;
  }
  .search__block-input::placeholder {
    text-indent: -9999px;
  }
  .search__input {
    display: none;
  }

  .menu__logo {
    order: 2;
    margin: 0 auto;
  }
  .menu__search {
    order: 1;
  }
  .menu__btns {
    order: 3;
  }
  .custom-input {
    display: block;
    animation: showInput 0.5s;
  }
}

@keyframes showInput {
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes hideInput {
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0px);
  }
}
.left__menu {
  animation: showLeftMenu 1s;
}
@keyframes showLeftMenu {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
