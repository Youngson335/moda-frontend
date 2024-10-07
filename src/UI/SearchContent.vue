<template>
  <div class="menu__search">
    <div class="search__block">
      <input
        v-model="inputValue"
        @input="updateParent"
        class="search__block-input"
        type="text"
        placeholder="искать кроссовки"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    updateParent() {
      this.$emit("input-change", this.inputValue);
    },
  },
};
</script>
<style>
.menu__search {
  order: 2;
}

.search__block-input {
  border: 2px solid rgb(180, 180, 180);
  background-color: rgb(180, 180, 180);
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

@media (max-width: 575px) {
  .search__block-input {
    width: 200px;
  }
}
@media (max-width: 470px) {
  .search__block-input {
    cursor: pointer;
  }
  .search__block-input::placeholder {
    text-indent: -9999px;
  }

  .menu__logo {
    order: 2;
  }
  .menu__search {
    order: 1;
  }
  .custom-input {
    display: block;
    animation: showInput 0.5s;
  }
}
</style>
