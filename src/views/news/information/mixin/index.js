import OverWatch from 'OWSDK';

export default {
  methods: {
    toDetail(id) {
      OverWatch.openPage(`http://47.93.235.47:3001/#/article/${id}`);
      // this.$router.push(`/article/${id}`);
    },
  },
};
