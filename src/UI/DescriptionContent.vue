<template>
  <div class="description__block">
    <h3 class="description__block-h3">
      <strong
        >Добро пожаловать в мир <span class="span-moda">моды</span>, где
        <span class="span-style">стиль</span> и
        <span class="span-comfort">комфорт</span> встречаются в каждой паре
        кроссовок!</strong
      >
    </h3>
    <p class="description__block-p">
      В <strong>'MODA'</strong> мы стремимся предложить вам
      <span class="description__block-span"
        >самые модные и стильные кроссовки</span
      >
      от ведущих брендов мира. Наша коллекция включает в себя широкий
      ассортимент дизайнов, цветов и моделей, чтобы удовлетворить самые
      изысканные вкусы и предпочтения. Мы понимаем, что кроссовки -
      <span class="description__block-span">это не только модный аксессуар</span
      >, но и важная часть вашего повседневного образа. Поэтому мы
      <span class="description__block-spanWhite">тщательно</span>
      отбираем каждую пару, чтобы обеспечить вам высочайшее качество, комфорт и
      долговечность. Независимо от того, нужны вам кроссовки для спорта,
      активного отдыха или стильного городского образа,
      <span class="description__block-spanWhite"
        >у нас есть идеальная пара для вас.</span
      >
    </p>
    <br />
    <p
      :on-scroll="updateScrollY"
      class="description__block-p description__block-scroll"
    >
      На сайте <strong>'MODA'</strong> вы найдете удобный интерфейс для легкого
      поиска и покупки кроссовок.
      <span class="description__block-span"
        >Мы предлагаем детальные описания каждой модели, фотографии высокого
        качества и информацию о доступных размерах.</span
      >
      Кроме того, мы предлагаем быструю доставку и превосходное обслуживание
      клиентов, чтобы ваше покупательское приключение было приятным и
      беззаботным.
      <span class="description__block-spanWhite"
        ><strong>'MODA'</strong> - это не просто магазин кроссовок, это место,
        где стиль и качество встречаются с вашими потребностями и
        желаниями.</span
      >
      Погрузитесь в мир моды и выберите свою идеальную пару кроссовок на сайте
      <strong>'MODA'</strong> уже сегодня!
    </p>
    <TransitionIcon class="transition__icon" />
  </div>
</template>
<script>
import TransitionIcon from "./TransitionIcon.vue";

export default {
  components: { TransitionIcon },
  data() {
    return {
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScrollY);
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateScrollY);
  },
  methods: {
    updateScrollY() {
      if (window.location.pathname === "/home") {
        let scroll = window.scrollY;
        let classScroll = document.getElementsByClassName(
          "description__block-scroll"
        )[0];
        classScroll.style.transform = "translateX(-200%)";

        let screenWidth = window.innerWidth;

        scroll = window.pageYOffset;
        if (scroll < 700) {
          if (screenWidth <= 1000) {
            classScroll.style.transform = `translateX(${
              -700 + scroll
            }px) skewX(0deg)`;
            classScroll.style.display = "block";
          } else {
            classScroll.style.display = "block";
            classScroll.style.transform = `translateX(${
              -700 + scroll
            }px) skewX(-5deg)`;
          }
        } else {
          if (screenWidth <= 1000) {
            classScroll.style.transform = "translateX(0px) skewX(0deg)";
            classScroll.style.display = "block";
          } else {
            classScroll.style.display = "block";
            classScroll.style.transform = "translateX(0px) skewX(-5deg)";
          }
        }
      }
    },
  },
};
</script>
<style scoped>
.description__block {
  font-family: Raleway-Medium;
  font-size: 17px;
  padding: 20px 0;
  color: rgb(239, 239, 239);
  width: 100%;
}
.description__block-h3 {
  font-family: Raleway-ExtraBold;
  text-wrap: balance;
  margin-bottom: 100px;
  animation: showTextTransform 1s;
  padding: 10px;
  font-size: 30px;
}
.description__block-scroll {
  display: none;
}

.description__block-p {
  text-wrap: balance;
  text-transform: none;
  line-height: 25px;
  margin-bottom: 100px;
  transform: skewX(-5deg);
}
.description__block-p:first-of-type {
  animation: showTextOpacity 3s;
}
strong {
  text-transform: uppercase;
}
/* span */
span {
  background-color: #999900;
  padding: 2px 10px;
  color: white;
}
.span-moda {
  font-size: 30px;
}
.span-comfort {
  font-size: 40px;
}
.description__block-span {
  background-color: #999900;
  padding: 4px 10px;
}
.description__block-spanWhite {
  background-color: rgb(255, 255, 255);
  padding: 4px 10px;
  color: rgb(0, 0, 0);
}
@keyframes showTextTransform {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes showTextOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.transition__icon {
  display: none;
}
@media (max-width: 1000px) {
  .description__block {
    width: calc(100% - 200px);
  }
  .description__block-p {
    transform: skewX(0deg);
  }
}
@media (max-width: 660px) {
  .transition__icon {
    display: block;
  }
  .description__block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
  .description__block-p {
    display: none;
  }
  .description__block-h3 {
    margin-bottom: 20px;
    font-size: 20px;
  }
  .span-comfort {
    font-size: 20px;
  }
}
</style>
