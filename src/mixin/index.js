import Vue from 'vue';

Vue.mixin({
  methods: {
    avatarError(e) {
      e.src = require('@/assets/tx@2x.png');
    },
  },
});
