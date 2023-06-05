<template>
    <VideoBanner />
    <TeamSection :members="teamMembers" :title="teamTitle"/>
    <Footer :logo="logoImageUrl" :footer_heading="footer_heading" :short_desc="short_desc" :discord="footerDiscord" :twitter="footerTwitter" :instagram="footerInstagram" :copyright="footerCopyright" />
</template>

<script>  
  import VideoBanner from '../components/VideoBanner.vue';
  import TeamSection from '../components/Team.vue';
  import Footer from '../components/Footer.vue';

  export default { 
    components: { 
      VideoBanner,
      TeamSection, 
      Footer,
    },
    data() {
      return {
        headerTitle: 'OvoOno Studio',
        headerSubtitle: 'About Us',
        headerParagraph: 'OvoOno is a versatile agency and shop that specializes in gaming, development services, and research in the web2/web3 world.', 
        footer_heading: 'OvoOno Studio and Agency',
        short_desc: 'OvoOno is a versatile agency and shop that specializes in gaming, development services, and research in the web2/web3 world.',
        footerDiscord: 'Discord',
        footerTwitter: 'Twitter',
        footerInstagram: 'Instagram', 
        footerCopyright: '© 2023 OvoOno Studio',
        logoImageUrl: require('@/assets/team/ovoonoPurple--logo.png'),
        teamTitle: 'Meet Our Members',
        teamMembers: [
        {
            name: 'bezmir369',
            title: 'Founder',
            photo: require('@/assets/team/bezmir369.png'), 
          },
          {
            name: 'The Filip',
            title: 'Blockchain Researcher',
            photo: require('@/assets/team/thefilip.png'), 
          }, 
          {
            name: 'goblinsensei',
            title: 'Creator',
            photo: require('@/assets/team/goblinsensei.png'), 
          },
          {
            name: 'GeekElite',
            title: 'Blockchain Researcher',
            photo: require('@/assets/team/geekelite.png'), 
          },
          {
            name: 'Tappacau',
            title: 'Creator',
            photo: require('@/assets/team/tappacau.png'), 
          },
          {
            name: 'Markhor',
            title: 'Creator',
            photo: require('@/assets/team/markhor.png'), 
          },
          {
            name: 'Popeye',
            title: 'Creator',
            photo: require('@/assets/team/popeye.png'), 
          },
          {
            name: 'NullVoider',
            title: 'Creator',
            photo: require('@/assets/team/nullvoider.png'), 
          }
        ]
      };
    }
  };
</script>