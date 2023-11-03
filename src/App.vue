<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"></Menu>
  <TweetForm :showForm="showForm" :reloadTweets="reloadTweets" :openCloseForm="openCloseForm"></TweetForm>
  <TweetList :listTweets="listTweets" :reloadTweets="reloadTweets"></TweetList>
</template>

<script>
import { ref } from 'vue';
import Menu from './components/Menu.vue'
import TweetForm from './components/TweetForm.vue';
import TweetList from './components/TweetList.vue';
import useFormTweet from './hooks/useFormTweet';
import { getTweetApi } from './api/tweet';

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
    TweetList,
  },
  setup() {
    let listTweets = ref(getTweetApi().reverse());

    const reloadTweets = () => {
      listTweets.value = getTweetApi().reverse();
    }

    return {
      ...useFormTweet(),
      listTweets,
      reloadTweets,
    }
  }
}
</script>

<style lang="scss">

</style>
