<template>
  <div id="item">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p id="name">name</p>
          <div id="flexin">
            <div>
              <p>Description</p>
              <p id="price">Price</p>
              <p id="stock">Stock</p>
            </div>
            <div>
              <p id="cart-button">+ Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-card',
  props: ['item'],
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  #cart-button {
    color: white;
    background-color: #64DD17;
    padding: 5px 15px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #cart-button:hover{
    cursor: pointer;		
    background-color: #FFD700;
    color: inherit;
  }
  #flexin {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  #item {
    margin: 30px;
    border: 6px solid #FFD700;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 350px;
    display: flex;
    flex-direction: column;
  }
  #name {
    background-color: #FFD700;
    border-radius: 10px;
    padding: 10px;
  }
  #price {
    text-align: left;
  }
  #stock {
    text-align: left;
  }
</style>
