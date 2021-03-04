<template>
  <div>
    <h1 class="TableXyr">表格封装(网)</h1>
    <tablea></tablea>
    <h1 class="TableXyr">数据交互</h1>
  </div>
</template>

<script>
import tablea from '../../components/tablea/tablea'
export default {
  data() {
    return {}
  },
  components: {
    tablea,
  },
  mounted() {
    this.ajaxData()
  },
  methods: {
    ajaxData() {
      var url = 'admin/product/adminQueryProductList'
      this.$axios
        .post(url)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {})
    },
  },
}
</script>

<style scoped>
.TableXyr {
  text-align: center;
  background-color: #2d8cf0;
  color: #fff;
  margin-bottom: 5px;
}
</style>
