<template>
  <root>
    <router-view />
  </root>
</template>

<script>
import { Root } from "native-base";
import RouterView from './routes/index'

export default {
  components: { Root, RouterView }
};
</script>
