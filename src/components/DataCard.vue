<template>
    <div class="data-card">
      <!-- Display stock data -->
      <h4>{{ data.rsp.number }}</h4>
      <h5>{{ data.id }}</h5>
      <h4>{{ data.rsp.about }} </h4>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DataCard',
    props: {
      data: Object
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .data-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px
  }
  .data-card:hover{
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  </style>