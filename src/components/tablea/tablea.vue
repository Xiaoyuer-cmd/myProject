<template>
  <div>
    <Table border :columns="columns12" :data="data6">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          class="BtnclassFont"
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
        >查看</Button>
        <Button
          class="BtnclassFont"
          type="error"
          size="small"
          @click="remove(index)"
          style="margin-right: auto"
        >删除</Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns12: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '姓名',
          key: 'slot1',
          align: 'center',
        },
        {
          title: '年龄',
          key: 'slot2',
          align: 'center',
        },
        {
          title: '地址',
          key: 'slot3',
          align: 'center',
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center',
        },
      ],
      data6: [
        {
          slot1: '小虞儿1',
          slot2: 18,
          slot3: '南山公园',
        },
        {
          slot1: '小虞儿2',
          slot2: 18,
          slot3: '南山公园',
        },
        {
          slot1: '小虞儿3',
          slot2: 18,
          slot3: '南山公园',
        },
        {
          slot1: '小虞儿4',
          slot2: 18,
          slot3: '南山公园',
        },
      ],
    }
  },
  methods: {
    show(index) {},
    remove(index) {},
  },
}
</script>

<style scoped>
.BtnclassFont {
  font-size: 12px;
}
</style>
