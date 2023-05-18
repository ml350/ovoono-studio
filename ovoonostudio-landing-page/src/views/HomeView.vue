<template>
  <div id="app">
    <Header :title="headerTitle" :subtitle="headerSubtitle" :paragraph="headerParagraph" :imageUrl="logoImageUrl" />
    <VideoBanner />
    <AboutSection :image="aboutImageUrl" :subtitle="aboutSubtitle" :title="aboutTitle" :content="aboutContent" :extContent="aboutExtContent" :buttonLabel="aboutButtonLabel" />
    <ServicesSection />
    <ParallaxSection :title="parallaxTite" :buttonText="parallaxButton" />
    <TeamSection :members="teamMembers" :title="teamTitle"/>
    <Footer :logo="logoImageUrl" :footer_heading="footer_heading" :short_desc="short_desc" :discord="footerDiscord" :twitter="footerTwitter" :instagram="footerInstagram" :copyright="footerCopyright" />
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import VideoBanner from '../components/VideoBanner.vue'
  import AboutSection from '../components/About.vue';
  import ServicesSection from '../components/Services.vue';
  import ParallaxSection from '../components/ParallaxSection.vue';
  import TeamSection from '../components/Team.vue';
  import Footer from '../components/Footer.vue';

  export default { 
    components: {
      Header,
      VideoBanner,
      AboutSection,
      ServicesSection,
      ParallaxSection,
      TeamSection,
      Footer,
    },
    data() {
      return {
        headerTitle: 'Welcome',
        headerSubtitle: 'OvoOno Web3 Studio & Agency.',
        headerParagraph: 'OvoOno is a versatile agency and shop that specializes in gaming, development services, and research in the web2/web3 world.', 
        aboutSubtitle: 'About us',
        aboutTitle: 'United in our mission',
        aboutContent: 'At OvoOno, we are also committed to staying at the forefront of the web3 world. We conduct extensive research and analysis to explore the latest trends and technologies in the digital space.',
        aboutExtContent: 'Overall, OvoOno is a dynamic agency and shop that offers a wide range of services to clients looking to engage in the gaming space or develop their own digital products. With a focus on innovation and quality, we strive to provide our clients with the best possible experience and help them achieve their goals.',
        aboutImageUrl: require('@/assets/aboutimage.png'),
        aboutButtonLabel: 'Contact Us',
        parallaxTite: 'Join us in #METAVERSE!',
        parallaxButton: 'Click Here',
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

<style lang="less">
  @import "@/assets/less/style.less";
</style>