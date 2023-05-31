<template>
    <section class="team-section">
        <div class="team-container">
            <h3 class="section-subheading"> {{ subtitle }} </h3>
            <h2 class="section-heading">{{ title }}</h2>
            <div class="team-members">
                <div v-for="member in members" :key="member.name" class="team-member">
                    <div class="hexagon">
                        <img :src="member.photo" :alt="member.name" class="member-photo">
                    </div>
                    <div class="member-details">
                        <h3 class="member-name">{{ member.name }}</h3>
                        <!-- <p class="member-title">{{ member.title }}</p>  -->
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>
  
<script>
    export default {
        name: 'TeamSection',
        props: {
            subtitle : {
                type: String,
                default: "Our Team",
            },
            title: String,
            members: {
                type: Array,
                default: () => []
            }
        }
    };
</script>