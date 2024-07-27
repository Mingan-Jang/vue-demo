<template>
  <base-card
    ><base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storeResBtnMode"
      >Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResBtnMode"
      >Add Resources
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResource, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          desc: 'The official documentation',
          link: 'https://example.com/official-guide',
        },
        {
          id: 'google',
          title: 'Google',
          desc: 'Learn to Google...',
          link: 'https://google.com',
        },
      ],
    };
  },
  computed: {
    storeResBtnMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    addResBtnMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, link) {
      const newResource = {
        id: new Date(),
        desc: desc,
        title: title,
        link: link,
      };
      this.storedResource.unshift(newResource);
    },
    removeResource(resId) {
      const resIndex = this.storedResource.findIndex(res => res.id === resId);
      this.storedResource.splice(resIndex,1)
      // this.storedResource = this.storedResource.filter(
      //   (res) => res.id !== resId
      // );
    },
  },
  provide() {
    return {
      resources: this.storedResource,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
};
</script>
