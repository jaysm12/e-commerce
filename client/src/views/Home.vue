<template>
  <div id="home">
    <div id="content">
      <!-- didalam kotak kuning -->
      <div id="search">
        <b-input placeholder="Search..."
          type="search"
          v-model="searchInput"
          icon="magnify" rounded>
        </b-input>
      </div>
      <div id="items-container">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
export default {
  name: 'home',
  data() {
    return {
      searchInput: ''
    }
  },
  created() {

  },
  methods : {

  },
  components : {
    ItemCard
  },
  computed: {

  }
}
</script>

<style scoped>
  #home {
    width: 88%;
    height: 85%;
    margin: auto;
  }
  #content {
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 30px;
    background-color: #FFFF8D;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 5px solid #37474F;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #content::-webkit-scrollbar {
    width: 9px;
  }

  #content::-webkit-scrollbar-track {
    margin: 50px;
    /* background: #f1f1f19c; */
    border-radius: 8px;
  }

  #content::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #FFD600; 
  }
  #search {
    margin-top: 30px;
    width: 50%;
    margin: 0 auto;
    padding: 30px;
  }

  #items-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
</style>

