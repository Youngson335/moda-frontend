<template>
  <div>
    <div class="container">
      <div class="authorization">
        <header class="authorization__header">
          <div class="authorization__logo">
            <img src="../../images/logo/logo__white.png" alt="" />
          </div>
        </header>
        <div class="authorization__block">
          <div class="authorization__image">
            <img
              class="authorization__icon"
              src="../../images/icons/vans-icon.png"
              alt=""
            />
          </div>
          <div class="authorization__login">
            <div class="authorization__entrance">
              <p>Вход</p>
            </div>
            <div class="authorization__inform">
              <input
                class="input__mail"
                v-model="mail"
                type="text"
                placeholder="Введите почту"
              />
              <input
                class="input__password"
                v-model="password"
                type="text"
                placeholder="Введите пароль"
              />
            </div>
            <div class="authorization__none-login">
              <p>Нет аккаунта?</p>
              <p class="authorization__click">Зарегестироваться</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from "../../layouts/AppFooter.vue";
export default {
  components: { AppFooter },
  data() {
    return {
      mail: "",
      password: "",
    };
  },
  props: {},
};
</script>
<style scoped>
.container {
  position: relative;
  height: calc(100vh - 90px);
  width: 80%;
  margin: 0 auto;
}

.authorization__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.authorization__block {
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 50px;
  border-radius: 20px;
}
.authorization__login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border: 5px solid white;
  border-top-width: 30px;
  border-bottom-left-radius: 20px;
  padding: 50px;
}

.authorization__inform {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.authorization__entrance {
  margin: 20px;
  font-weight: 600;
  letter-spacing: 10px;
}

.authorization__header::after {
  content: "";
  letter-spacing: -10px;
}
.authorization__none-login {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  padding: 0 30px;
  line-height: 20px;
}
.authorization__none-login p {
  margin: 10px;
}

.input__mail,
.input__password {
  margin: 10px;
  border: none;
  border-radius: 10px;
}

.authorization__image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  animation: imagesDeg-d42f00dc 2s infinite;
  background-color: white;
  padding: 70px;
  border-radius: 50%;
}

.authorization__icon {
  width: 70%;
  position: fixed;
  animation: imagesDeg 2s infinite;
}

.authorization__click {
  cursor: pointer;
}
.authorization__click:hover {
  text-decoration: underline;
  text-decoration-thickness: 1px;
}

.authorization__logo img {
  width: 100px;
  padding: 20px 0;
}

@keyframes imagesDeg {
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(10deg);
  }
}

input {
  width: 80%;
  padding: 5px 5px;
  text-align: center;
  font-family: "presentscript", sans-serif;
  font-size: 20px;
}

input:focus {
  outline: none;
  border: 3px solid rgb(167, 167, 167);
  padding: 2px 5px;
}

input::placeholder {
  font-size: 20px;
  text-transform: lowercase;
  text-align: center;
  color: rgba(0, 0, 0, 0.334);
  font-family: "presentscript", sans-serif;
}

@media (max-width: 460px) {
  .authorization__header {
    font-size: 30px;
  }
  .authorization__none-login {
    font-size: 15px;
    padding: 0;
  }
  .authorization__login {
    padding: 10px;
  }
  .authorization__image {
    right: 100px !important;
    top: -140px;
  }
}

@media (max-width: 553px) {
  .authorization__image {
    right: 185px;
  }
}
</style>
