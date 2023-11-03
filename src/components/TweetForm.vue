<template>
  <div class="container tweet-form" :class="{ open: showForm }">
    <form @submit.prevent="sendTweet">
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingUsername" placeholder="Ingrese su nombre" v-model="userName">
            <label for="floatingUsername">Ingrese su nombre</label>
        </div>
        <div class="form-floating">
            <textarea class="form-control" id="floatingTweet" placeholder="Escribe el Tweet" v-model="tweet" style="height: 100px"></textarea>
            <label for="floatingTweet">Escribe el Tweet</label>
        </div>
        <button type="submit" class="btn btn-outline-primary">
            Enviar Tweet
        </button>
    </form>
    <hr>
  </div>
</template>

<script>
import {ref} from "vue";
import {saveTweetApi} from '../api/tweet';

export default {
    props: {
        showForm: Boolean,
        reloadTweets: Function,
        openCloseForm: Function,
    },
    setup(props) {
        let userName = ref("");
        let tweet = ref("");

        const sendTweet = () => {
            if (!tweet.value || !userName.value) return;

            saveTweetApi(tweet.value, userName.value);

            tweet.value = "";
            userName.value = "";
            props.reloadTweets();
            props.openCloseForm();
        };

        return {
            sendTweet,
            userName,
            tweet,
        }
    },
}
</script>

<style lang="scss" scoped>
.tweet-form {
    margin-top: 25px;
    height: 0;
    overflow: hidden;

    &.open {
        height: auto;
    }

    form {
        margin-bottom: 50px;
        margin-top: 10px;

        input {
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            margin-top: 10px;
        }

        label {
            opacity: 50%;
        }
    }
}
</style>