<template>
    <div>
        <h2>Edit Post</h2>
        <p>Editing post with id: {{ id }}</p>

        <!-- Add form here -->
        <form @submit.prevent="submit">
            <label for="title">Title</label>
            <input id="title" v-model="post.title" type="text" required>

            <label for="content">Content</label>
            <textarea id="content" v-model="post.content" required></textarea>

            <button type="submit">Save changes</button>
        </form>

        <!-- Show error message -->
        <p v-if="error">{{ error }}</p>

        <!-- Show post preview link -->
        <p v-if="post">See your post <a :href="postLink">here</a>.</p>

        <!-- Show post preview -->
        <div v-if="post">
            <h3>Preview:</h3>
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'EditView',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    methods: {
        async submit() {
            this.error = null; // reset error message

            try {
                await this.$store.dispatch('editPost', this.post);
                this.success = 'Post successfully updated!';
            } catch (error) {
                this.error = 'An error occurred while updating the post';
            }
        }
    }
  };
</script>
  