<template>
  <div class="container">
    <h1 class="text-center mb-4">Lista de tweets</h1>
    <hr class="mb-5">
    <div class="alert alert-warning text-center" role="alert" v-if="listTweets.length === 0">No hay tweets!</div>
    <div class="tweet" v-for="tweet in listTweets" :key="tweet.id">
        <p class="tweet__title">{{tweet.userName}}</p>
        <p class="tweet__text">{{tweet.tweet}}</p>
        <span>{{ dateFormat(tweet.fechaCreacion) }}</span>
        <button class="btn fa fa-close" type="button" @click="deleteTweet(tweet.id)"></button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import "moment/locale/es";
import { Close } from './icons/Close';
import { deleteTweetApi } from '../api/tweet';

export default {
    props: {
        listTweets: Array,
        reloadTweets: Function,
    },
    components: {
        Close,
    },
    setup(props) {
        const dateFormat = (date) => {
            return moment(date).fromNow();
        };

        const deleteTweet = (idTweet) => {
            deleteTweetApi(idTweet);
            props.reloadTweets();
        };

        return {
            dateFormat,
            deleteTweet,
        }
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

     button.fa-close {
        border-radius: 50%;
        border: 0;

        &:hover {
            color: #f00;
        }
    }
}
</style>