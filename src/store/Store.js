import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("Store", () => {
  const leftBlockProducts = ref([
    {
      "id": 1,
      "name": "Shoes 1"
  },
  {
      "id": 2,
      "name": "Shoes 2"
  },
  {
      "id": 3,
      "name": "Shoes 3"
  },
  {
      "id": 4,
      "name": "Shoes 4"
  },
  {
      "id": 5,
      "name": "T-shirt 1"
  },
  {
      "id": 6,
      "name": "T-shirt 2"
  },
  {
      "id": 7,
      "name": "T-shirt 3"
  },
  {
      "id": 8,
      "name": "T-shirt 4"
  }
  ]);

  const rightBlockProducts = ref([
    {
      "id": 11,
      "name": "Jacket 1"
  },
  {
      "id": 12,
      "name": "Jacket 2"
  },
  {
      "id": 13,
      "name": "Jacket 3"
  },
  {
      "id": 14,
      "name": "Jacket 4"
  },
  {
      "id": 15,
      "name": "Hoodie 1"
  },
  {
      "id": 16,
      "name": "Hoodie 2"
  },
  {
      "id": 17,
      "name": "Hoodie 3"
  },
  {
      "id": 18,
      "name": "Hoodie 4"
  }
  ]);

  const leftShoppingCart = ref(new Set());
  const rightShoppingCart = ref(null);

  const  addItemLeftBlock = (product)=> {
    if (leftShoppingCart.value.size < 6)
        leftShoppingCart.value.add(product);
  }

  const removeItemleftBlock = (product) => {
    leftShoppingCart.value.delete(product);
  }

  const addItemRightBlock = (product) => {
    rightShoppingCart.value = product;
  }

  return {
    leftBlockProducts,
    rightBlockProducts,
    leftShoppingCart,
    rightShoppingCart,
    addItemLeftBlock,
    addItemRightBlock,
    removeItemleftBlock,
  };
});
