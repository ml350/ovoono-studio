<template>
  <div class="dashboard">
    <h2 v-if="username === null">Loading...</h2>
    <h2 v-else-if="username">Welcome, {{username}}</h2>
    <h2 v-else>Could not load username</h2>
    <button @click="logoutAndRedirect" class="button">Logout</button>
    <button @click="showChangePasswordModal = true" class="button">Change Password</button>
    
    <div v-if="showChangePasswordModal" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>

        <form class="change-password-form" @submit.prevent="handleChangePassword">
          <h3>Change Password</h3>
          <div class="form-group">
            <label for="oldPassword">Current Password</label>
            <input id="oldPassword" type="password" v-model="passwords.old" required>
          </div>
          <div class="form-group">
            <label for="newPassword">New Password</label>
            <input id="newPassword" type="password" v-model="passwords.new" required>
          </div>
          <p v-if="passwordMessage" class="success">{{ passwordMessage }}</p>
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
          <button @click="openChangePasswordModal" class="button">Change Password</button>
        </form>
      </div>
    </div>
    
    <div class="main">
      <div class="content">
        <h3>Add New Post</h3>
        <form class="blog-form" @submit.prevent="addPost">
          <div class="form-group">
            <label for="title">Title</label>
            <input id="title" v-model="newPost.title" required>
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <textarea id="content" v-model="newPost.content" required></textarea>
          </div>
          <div class="form-group">
            <label for="image">Featured Image</label>
            <input id="image" type="file" @change="onImageChange('featured', $event)" accept="image/*">
          </div>
          <div class="form-group">
            <label for="thumbnail">Thumbnail</label>
            <input id="thumbnail" type="file" @change="onImageChange('thumbnail', $event)" accept="image/*">
          </div>
          <div class="form-group">
            <label for="tags">Tags</label>
            <input id="tags" v-model="newPost.tags">
          </div> 
          <p v-if="message" class="success">{{ message }}</p>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          <button type="submit" class="button">Add Post</button>
        </form>
      </div>
      <div class="sidebar">
        <h3>Recent Posts</h3>
        <div v-if="posts.length">
          <div v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <button @click="navigateToEdit(post.id)">Edit</button>
          </div>
        </div>
        <div v-else>
          No recent posts.
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    data() {
      return {  
          newPost: {
              title: '',
              content: '',
              featuredImage: null,
              thumbnail: null,
              tags: '',
              author: ''
          },
          recentPosts: [],
          message: '', // New property for success messages
          errorMessage: '', // New property for error messages
          showChangePasswordModal: false,
          passwords: {
            old: '',
            new: ''
          },
          passwordMessage: '',
          passwordError: '',
      };
    },
    mounted() {
      this.loadUser();
    },
    computed: {  
      ...mapState(['posts']), 
      username() {
        return localStorage.getItem('username');
      }
    },
    methods: {
      ...mapActions(['logout', 'createPost', 'loadUser', 'changePassword', 'fetchPosts']), // Include createPost action
      navigateToEdit(postId) {
        this.$router.push(`/posts/edit/${postId}`);
      },
      logoutAndRedirect() {
        this.logout().then(() => {
          this.$router.push('/login');
        });
      },
      async handleChangePassword() {
        try {
          await this.changePassword({
            oldPassword: this.passwords.old,
            newPassword: this.passwords.new
          });
          this.passwordMessage = 'Password changed successfully';
          this.passwordError = '';
          this.passwords.old = '';
          this.passwords.new = '';
          this.showChangePasswordModal = false;
          document.body.classList.remove('no-scroll');
        } catch (error) {
          this.passwordError = error.message;
          this.passwordMessage = '';
        }
      },
      openChangePasswordModal() {
        this.showChangePasswordModal = true;
        if (document && document.body) {
          document.body.classList.add('no-scroll');
        }
      },
      closeModal() {
        this.showChangePasswordModal = false;
        if (document && document.body) {
          document.body.classList.remove('no-scroll');
        }
      },
      addPost() {
        const formData = new FormData();
        this.newPost.author = this.username;
        console.log(this.newPost.author);
        formData.append('title', this.newPost.title);
        formData.append('content', this.newPost.content);
        formData.append('featuredImage', this.newPost.featuredImage);
        formData.append('thumbnail', this.newPost.thumbnail);
        formData.append('tags', this.newPost.tags); 
        formData.append('author', this.newPost.author);
        
        this.createPost(formData)
          .then(() => {
            this.message = 'Post created successfully!'; // Display success message
            this.errorMessage = '';
            // Reset form after successful submission
            this.newPost = {
              title: '',
              content: '',
              featuredImage: null,
              thumbnail: null,
              tags: '',
              author: ''
            };  
          })
          .catch(error => {
            this.errorMessage = 'An error occurred: ' + error.message; // Display error message
            this.message = '';
          });
      },
      onImageChange(type, event) {
        if (type === 'featured') {
          this.newPost.featuredImage = event.target.files[0];
        } else if (type === 'thumbnail') {
          this.newPost.thumbnail = event.target.files[0];
        }
      },
    },
    async created() {
      await this.loadUser();
      await this.fetchPosts();
    }
  };
</script>