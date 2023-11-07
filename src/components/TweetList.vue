<template>
  <div class="container">
    <h1 class="text-center mb-4">Lista de tweets</h1>
    <hr class="mb-5">
    <div class="alert alert-warning text-center" role="alert" v-if="tweets.length === 0">No hay tweets!</div>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
        <p class="tweet__title">{{tweet.username}}</p>
        <p class="tweet__text">{{tweet.tweet}}</p>
        <span>{{ formatDate(tweet.createdAt) }}</span>
        <i class="fa fa-close" @click="deleteTweet(tweet.id)"></i>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import "moment/locale/es";
import { deleteTweetApi } from "../api/tweet";

export default {
  props: {
    tweets: Array,
    reloadTweets: Function,
  },
  components: {

},
  setup(props) {
    const formatDate = (date) => {
      return moment(date).fromNow();
    };

    const deleteTweet = (idTweet) => {
      deleteTweetApi(idTweet);
      props.reloadTweets();
    };

    return {
      formatDate,
      deleteTweet,
    };
  },
};

</script>

<style lang="scss" scoped>
.tweet {
    position: relative;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin: 0;
    }

    &__title {
        position: absolute;
        top: -12px;
        left: 10px;
        background-color: #fff;
        padding: 0 10px;
        padding-bottom: 4px;
        font-weight: bold;
        border: 1px solid #ccc;
    }

    &__text {
        color: grey;
    }

    span {
        position: absolute;
        right: 10px;
        bottom: -9px;
        font-size: 12px;
        color: grey;
        background-color: #fff;
        padding: 0 20px;
        border: 1px solid #ccc;
    }

     i.fa-close {
        border-radius: 50%;
        border: 0;

        &:hover {
            color: #f00;
            cursor: pointer;
        }
    }
}
</style>