<template>
<div>
  <Navbar>   </Navbar> 
  <div class="container d-flex flex-wrap pb-4">
  <Popular></Popular>
  <Main></Main>
  <Sidebar></Sidebar>
  </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Popular from "../components/Popular"
import Main from "../components/Main"

export default {
  name: 'home',
  components: {
   Navbar,
   Sidebar,
   Popular,
   Main
  }
}
</script>

<style>
/*@font-face {
    font-family: "HK Grotesk Semi Bold";
    src: url('..//fonts/HKGrotesk-SemiBold.otf') format("truetype");
}
@font-face {
    font-family: "HK Grotesk";
    src: url('..//fonts/HKGrotesk-Regular.otf') format("truetype");
}*/
body{
    font-family: "HK Grotesk Semi Bold";
    color: #171717;
}
.hlink:hover{
    color: #171717;
    text-decoration: underline;
}
.logwork{
    color: #171717;
    font-family: "HK Grotesk Semi Bold";
    font-size: 20px;
    font-weight: 600; 
}
.timetracking{
    color: #949494;
    font-family: "HK Grotesk";
    font-size: 17px;
    font-weight: 400;
}
.my-nav-link{
    display: inline-block;
    font-family: "HK Grotesk";
    font-size: 17px;
    font-weight: 400;
    padding: 0px 10px;
}
.navbar-nav .nav-link{
    color: #171717!important;
}
.my-nav-link>a:hover{
    text-decoration: none!important;
    color: #949494;
}
.logo{
    display: block!important;
}
.navabr{
    padding: 0;
}
.popular{
    font-family: "HK Grotesk";
    font-weight: 700;
}
.category{
    color: #e02020;
    font-family: "HK Grotesk";
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
}
.head{
    color: #171717;
    font-family: "HK Grotesk Semi Bold";
    font-size: 23px;
    font-weight: 600;
    line-height: 28px;
}
.info{
    color: #666666;
    font-family: "HK Grotesk";
    font-weight: 400;
}
.info a{
    color: #666666;
}
.info a:hover{
    color: #666666;
}
.by{
    color: #b1b1b1!important;
}
.block{
    padding: 0 5px;
    height: fit-content;
}
.inner-wrap{
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.main-posts>a:hover{
    text-decoration: none;
}
.footer{
    background-color: #2d2d2d;
    color: #ffffff;
}
.be-beauty{
    font-family: "HK Grotesk Semi Bold";
    font-weight: 600;
    font-size: 32px;
}
.become{
    color: #aeaeae;
font-family: "HK Grotesk";
font-size: 16px;
font-weight: 400;
}
.nav-footer{
    display: inline-block;
    padding: 0;
}
.nav-footer .nav-link{
    color: #ffffff;
}
.nav-footer .nav-link:hover{
    color: #ffffff;
}
.head-categ{
    font-family: "HK Grotesk";
    font-weight: 700;
    font-size: 24px;
}
a{
    color: initial;
}
a:hover{
    color: initial;
    text-decoration: none;
}
.topic{
    color: #666666;
    font-family: "HK Grotesk";
    font-size: 20px;
    font-weight: 400;
    padding: 17px 0;
    border-bottom: 1px solid #e5e5e5;
}
.topic a{
    color: #666666;

}
.icon{
    width: 8px;
}
.tg{
    color: #171717;
    font-family: "HK Grotesk";
    font-weight: 400;
    font-size: 19px;
    background-color: #f5f5f5;
    padding: 8px 12px;
    margin: 5px 0;
}
.div-head{
    padding: 12px 7px;
}
.wrap{
    height: fit-content;
}
.summer{
    color: #b39153;
    font-family: "HK Grotesk Semi Bold";
    font-weight: 600;
}
.article-text{
    color: #666666;
    font-family: "HK Grotesk";
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
}
.icons{
    font-size: 20px;
    color: #556274;
    display: flex;
    justify-content: space-between;
    padding: 13px;
}
.ic i{
    width: 20px;
    display: flex;
    justify-content: center;
}
.ic{
    border: 1px solid #e5e5e5;
    width: fit-content;
    border-radius: 50%;
    padding: 10px;
}
.icons a{
    color: #556274;
}
.ic:hover{
    background-color: #556274;
    color: #e5e5e5;
    border: 1px solid #556274;
    transition: 0.3s;
}
.name{
    color: #171717;
    font-family: "HK Grotesk Semi Bold";
    font-size: 20px;
    font-weight: 600;
}
.area{
    color: #999999;
    font-family: "HK Grotesk";
    font-size: 17px;
}
.textabout{
    color: #666666;
    font-family: "HK Grotesk";
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
}
.footer-block ul{
    display: inline-block;
}
.f-cont{
    justify-content: space-between;
    font-family: "HK Grotesk";

}
.nav-linkf{
    font-size: 17px;
font-weight: 400;
color: #fff!important;
}
.footer-block .ic{
    background-color: #373737;
    border: 0;
    color: #fff;
}
.footer-block .ic:hover{
    background-color: #fff;
    border: 0;
    color: #373737;
    transition: 0.3s;
}
.icons a{
    padding-left:15px;
}
@media  (max-width: 991px){
    .main-posts{
        flex-wrap: wrap;
    }
    .logo{
        display: flex!important;
    }
    .logwork{
        padding: 0;
    }
}
@media (max-width: 992px) {
    .container {
       max-width: 100%;
    }
 }
 @media (max-width: 400px){
     .timetracking{
         display: none;
     }
 }
</style>
