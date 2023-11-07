<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"></Menu>
  <TweetForm :showForm="showForm" :reloadTweets="reloadTweets" :openCloseForm="openCloseForm"></TweetForm>
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets"></TweetList>
</template>

<script>
import { ref } from 'vue';
import Menu from './components/Menu.vue'
import TweetForm from './components/TweetForm.vue';
import TweetList from './components/TweetList.vue';
import useFormTweet from './hooks/useFormTweet';
import { getTweetsApi } from './api/tweet';

export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
    TweetList,
  },
  setup() {
    let tweets = ref(getTweetsApi().reverse());

    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse();
    };

    return {
      ...useFormTweet(),
      tweets,
      reloadTweets,
    };
  },
};
</script>

<style lang="scss">

</style>
