<template>
    <h1> Data List</h1>

    <div class="data-kafka">
        <DataCard v-for="data in datalist" :key="data.id" :data="data" />
    </div>
  </template>
  
  <script>
  import DataCard from '@/components/DataCard.vue'
  
  export default ({
    name: 'DataList',
    components: {
      DataCard
    },
    data() {
        return {
            datalist: [
                {
                    "id": "65d5c5e90bba6ead2ff47100",
                    "rsp": {
                    "number": 254.373758,
                    "about": "Qui excepteur quis et pariatur ullamco qui."
                    },
                    "apiKey": "50138ad4-63b5-46e2-9ed2-02171f38650d",
                    "createdAt": "2013-10-01T01:11:26.344Z",
                    "updatedAt": "2013-10-02T01:11:26.344Z"
                },
            ]
        }
    }
  });
  
  </script>
  
  <style scoped>
    .datalist {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>