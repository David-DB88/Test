<template>
  <div class="container">
    <div class="layout">
      <div class="block">
        <div class="items-wrapper">
            <Product
                v-for="(product, idx) in leftShoppingCart"
                :key="idx"
                :name="product.name"
                @click="removeItemleftBlock(product)"
                  />
        </div>
         <p>selected {{ leftShoppingCart.size }} / 6</p>
      </div>
      <div class="block">
        <div>
          <p v-if="!rightShoppingCart">Select item</p>
          <div v-else>
            <Product :name="rightShoppingCart.name" />
          </div>
        </div>
      </div>
      <div class="block">
        <div class="items-wrapper">
            <Product 
            v-for="(product, idx) in leftBlockProducts"
            :key="idx"
            @click="addItemLeftBlock(product)"
            :name="product.name" 
            />
      </div>
      </div>
     <div class="block">
      <div class="items-wrapper">
            <Product
            v-for="(product, idx) in rightBlockProducts"
            :key="idx"
            :name="product.name" 
            @click="addItemRightBlock(product)"
            />
          </div>
     </div>
        
    </div>
  </div>
</template>

<script setup>
import Product from "./components/Product.vue";
import { useStore } from "./store/Store.js";
import { storeToRefs } from "pinia";

const {leftBlockProducts, rightBlockProducts, leftShoppingCart, rightShoppingCart} = storeToRefs(useStore());
const { addItemLeftBlock, addItemRightBlock, removeItemleftBlock,  } = useStore();
</script>
