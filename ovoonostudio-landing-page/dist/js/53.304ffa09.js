"use strict";(self["webpackChunkovoono_studio"]=self["webpackChunkovoono_studio"]||[]).push([[53],{3676:function(e,s,n){n.r(s),n.d(s,{default:function(){return y}});var o=n(3396),r=n(7139),t=n(9242),a=n.p+"img/ovo3dlogo.94710706.png";const i=e=>((0,o.dD)("data-v-ded8a920"),e=e(),(0,o.Cn)(),e),u={class:"login-page"},d={class:"login-form"},l=i((()=>(0,o._)("h1",null,"Login",-1))),p=i((()=>(0,o._)("button",{type:"submit",class:"rounded-button"},"Login",-1))),g={key:0,class:"error-message"};function c(e,s,n,i,c,h){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("img",{class:(0,r.C_)(["logo",{"logo-bounce":c.isTyping}]),src:a,alt:"Logo"},null,2),(0,o._)("div",d,[l,(0,o._)("form",{onSubmit:s[3]||(s[3]=(0,t.iM)(((...e)=>h.loginUser&&h.loginUser(...e)),["prevent"]))},[(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{placeholder:"Username",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>c.username=e),type:"text",required:"",class:"rounded-input",onInput:s[1]||(s[1]=(...e)=>h.handleInput&&h.handleInput(...e))},null,544),[[t.nr,c.username]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{placeholder:"Password",id:"password","onUpdate:modelValue":s[2]||(s[2]=e=>c.password=e),type:"password",required:"",class:"rounded-input"},null,512),[[t.nr,c.password]])]),p,c.errorMessage?((0,o.wg)(),(0,o.iD)("p",g,(0,r.zw)(c.errorMessage),1)):(0,o.kq)("",!0)],32)])])}n(7658);var h={data(){return{username:"",password:"",typingTimeout:null,isTyping:!1,errorMessage:""}},methods:{async loginUser(){try{await this.$store.dispatch("login",{username:this.username,password:this.password}),this.$router.push("/dashboard")}catch(e){this.errorMessage=e.message}},handleInput(){clearTimeout(this.typingTimeout),this.isTyping=!0,this.typingTimeout=setTimeout((()=>{this.isTyping=!1}),500)}}},m=n(89);const w=(0,m.Z)(h,[["render",c],["__scopeId","data-v-ded8a920"]]);var y=w}}]);
//# sourceMappingURL=53.304ffa09.js.map