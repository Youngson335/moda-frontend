<template>
  <div class="menu__block">
    <div class="menu__exit" @click="toggleBooleanBurger">
      <img class="menu__exit-img" src="../images/icons/exit-icon.png" alt="" />
    </div>
    <div class="menu__title">
      <h2 class="menu__title-h2">Главное меню</h2>
    </div>
    <div class="points__balance">
      <p>
        Ваш баланс: <span>{{ balance }}</span
        ><strong>rub</strong>
      </p>
    </div>
    <div class="menu__points">
      <div class="points__personal menu__points-block">
        <a href="#">Личный кабинет</a>
        <img
          class="points__img"
          src="../images/icons/personal-icon.png"
          alt=""
        />
      </div>
      <router-link to="/sneakers" @click="delayNavigation">
        <div class="points__favorite menu__points-block">
          <a href="#">Избранное</a>
          <img
            class="points__img"
            src="../images/icons/white-favorite.png"
            alt=""
          />
        </div>
      </router-link>
      <div class="points__buy menu__points-block">
        <a href="#">Купить</a>
        <img class="points__img" src="../images/icons/payment.png" alt="" />
      </div>
    </div>
    <footer class="menu__footer">
      <img
        class="menu__footer-img"
        src="../images/logo/logo__white.png"
        alt=""
      />
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      balance: 0,
    };
  },
  props: {
    showOpenBurger: {
      type: Boolean,
    },
  },
  methods: {
    toggleBooleanBurger() {
      this.$emit("toggleBurger", false);
    },
    delayNavigation(event) {
      event.preventDefault(); // Отменить стандартное поведение перехода по ссылке

      setTimeout(() => {
        this.$router.push("/sneakers"); // Переход на страницу после задержки
      }, 3000); // Задержка в миллисекундах (в данном случае 1 секунда)
    },
  },
};
</script>
<style scoped>
span {
  color: white;
}
a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}
.points__img {
  width: 20px;
}
.menu__block {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background-color: #999900;
  z-index: 1000;
}
.points__balance {
  padding: 10px;
  padding-left: 10px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Raleway-Light";
}
.menu__points {
  overflow: hidden;
}
.menu__points-block {
  cursor: pointer;
  padding: 10px;
  padding-left: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.points__personal {
  animation-delay: 0s;
  animation: showPoints 0.7s;
}
.points__favorite {
  animation-delay: 0.5s;
  animation: showPoints 0.7s;
}
.points__buy {
  animation-delay: 1s;
  animation: showPoints 0.7s;
}

@keyframes showPoints {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0%);
  }
}
.menu__points-block:hover {
  background-color: rgba(0, 0, 0, 0.437);
}
.menu__exit {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.menu__exit-img {
  display: block;
  width: 15px;
}

.menu__title-h2 {
  font-size: 20px;
  text-align: center;
  color: white;
  text-transform: lowercase;
  font-family: "Raleway-Medium";
  padding-left: 10px;
}

.menu__title {
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 2px solid black;
  min-height: 86px;
}
.menu__footer {
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.menu__footer-img {
  display: block;
  width: 100px;
}
</style>
