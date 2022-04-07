<template>
  <div>
    <router-link
      v-if="type === 'link'"
      :to="linkTo"
      :class="[button_default, ...addClass]"
      :style="overWstyle"
      @click="action"
    >
      <slot />
    </router-link>

    <div
      v-if="type === 'btn'"
      :class="[button_default, ...addClass]"
      :style="overWstyle"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["linkTo", "addClass", "overWstyle", "type", "action"],
};
</script>
