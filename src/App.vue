<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import { Root } from "native-base";
import AppNavigation from './routes/index'

export default {
  components: { Root, AppNavigation }
};
</script>
