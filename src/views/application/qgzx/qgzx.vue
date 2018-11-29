<template>
    <div class="qgzx">
        <ul>
            <li v-for="item in list" :key="item.id">
                <router-link :to="item.url">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'qgzx',
  data() {
    return {
      list: [
        {
          id: 'workApply',
          name: '岗位申请',
          url: 'workApply',
        },
        {
          id: 'workInfo',
          name: '岗位详情',
          url: 'workInfo',
        },
        {
          id: 'workProposer',
          name: '申请人信息',
          url: 'workProposer',
        },
        {
          id: 'workHistory',
          name: '岗位申请历史',
          url: 'workHistory',
        },
        {
          id: 'backLog',
          name: '待办',
          url: 'backLog',
        },
        {
          id: 'myWork',
          name: '我的岗位',
          url: 'workInfo',
        },
      ],
    };
  },
};
</script>

<style>
</style>
