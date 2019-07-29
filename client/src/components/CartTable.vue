<template>
  <div id="table-container">
    <section id="table">
      <button class="button field is-danger" @click="checkedRows = []"
        :disabled="!checkedRows.length">
        <span>Delete checked item(s)</span>
      </button>
      <b-tabs>
        <b-tab-item label="Cart">
          <b-table
            :data="data"
            :columns="columns"
            :checked-rows.sync="checkedRows"
            checkable>
            <template slot="bottom-left">
              <b>Total checked</b>: {{ checkedRows.length }}
            </template>
          </b-table>
        </b-tab-item>
      </b-tabs>
    </section>
    <div>
      <p id="checkout-btn">Check Out</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {

    return {
      data : [],
      checkedRows: [],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'product',
          label: 'Product',
        },
        {
          field: 'price',
          label: 'Price',
          centered: true
        }
      ]
    }
  }
}


</script>

<style lang="scss" scoped>
  $primary: #FFD700;
  $accent: #37474F;
  #table {
    margin-top: 70px auto;
    width: 60%;
    text-align: center;
  }
  #table-container {
    padding: 20px;
    background-color: rgba(255, 217, 0, 0.534);
    width: 90%;
    height: 100%;
    border-radius: 15px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #checkout-btn {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #64DD17;
    padding: 10px 15px;
    color: white;
    border-radius: 15px;
  }

  #checkout-btn:hover{
    cursor: pointer;
    background-color: $primary;	
  }
</style>

