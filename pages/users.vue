<template lang="pug">
v-container
  v-row.justify-center
    v-col(cols="12", md="10", lg="8")
      v-card
        v-card-title Users
        v-card-text
          v-list-group(v-for="user in users", :key="user.id")
            template(v-slot:activator)
              v-list-item-avatar
                img(:src="user.display_picture")
              v-list-item-content
                | {{ user.display_name }}
            v-container
              v-row
                v-col(
                  v-if="posts[user.id]",
                  :key="user.id",
                  cols="12",
                  md="6",
                  lg="4",
                  xl="3"
                )
                  img(
                    :src="posts[user.id]",
                    style="object-fit: contain; width: 100%;"
                  )
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  provide,
  computed,
} from "@vue/composition-api";
import fetch from "isomorphic-fetch";
import { DefaultApolloClient, useQuery } from "@vue/apollo-composable";
import ApolloClient from "apollo-boost";
import UsersQuery from "~/apollo/queries/Users.gql";
import PostsQuery from "~/apollo/queries/Posts.gql";
import { Posts } from "~/apollo/schema";

const apolloClient = new ApolloClient({
  uri: "https://moved-phoenix-38.hasura.app/v1/graphql",
  fetch
});

export default defineComponent({
  setup() {
    provide(DefaultApolloClient, apolloClient);

    const { result: usersResult } = useQuery(UsersQuery);

    const { result: postsResult } = useQuery(PostsQuery);

    const users = reactive(
      computed(() => {
        if (usersResult.value) {
          return usersResult.value.users;
        }
        return [];
      })
    );

    const posts = reactive(
      computed(() => {
        let result: { [key: string]: Posts["thumbnail"] } = {};
        if (postsResult.value && postsResult.value.posts) {
          postsResult.value.posts.forEach((post: Posts) => {
            result[post.user_id] = post.thumbnail;
          });
        }
        return result;
      })
    );

    return {
      users,
      posts,
    };
  },
});
</script>