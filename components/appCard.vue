<template>
  <v-card class="d-flex align-center" color="#1F7087" theme="dark" width="370px">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          <slot></slot>
        </v-card-title>
        <v-card-subtitle class="text-wrap">
          <slot name="subtitle"></slot>
        </v-card-subtitle>
        <v-card-actions>
          <slot name="button"></slot>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="100" rounded="0">
        <slot name="image"></slot>
      </v-avatar>
    </div>
  </v-card>
</template>

<style scoped>
.text-wrap {
  white-space: normal;
}
</style>