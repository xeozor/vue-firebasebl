<template>
  <div
    class="container-fluid d-flex flex-wrap justify-content-space-between main-posts col-lg-8 col-sm-12 ml-0"
  >
    <div class="wrap container-fluid col-12 pb-2 mr-lg-2 mr-sm-0 mb-2 mb-lg-0 d-flex flex-wrap">
      <div class="container-fluid block col-md-6 col-12 mb-2 mb-md-0 ml-0">
        <div class="inner-wrap pb-2">
          <a href>
            <img src="img/Bitmap.png" alt class="w-100" />
          </a>
          <p class="text-center category pb-2 pt-3 m-0">Clothes</p>
          <a href class="hlink">
            <p class="text-center head px-4">One of Saturn's largest rings may be newer than anyone</p>
          </a>
          <p class="text-center info">
            <span class="date">June 6, 2019 &#160;</span>
            <span class="by">By</span>
            <a href>
              <span class="author">Rickie Baroch</span>
            </a>
          </p>
        </div>
      </div>
      <div class="container-fluid block col-md-6 col-12 ml-md-0 mt-2 mt-md-0 mr-0">
        <div class="inner-wrap pb-2">
          <a href>
            <img src="img/Bitmap2.png" alt class="w-100" />
          </a>
          <p class="text-center category pb-2 pt-3 m-0">Fashion</p>
          <a href class="hlink">
            <p class="text-center head px-4">One of Saturn's largest rings may be newer than anyone</p>
          </a>
          <p class="text-center info">
            <span class="date">June 6, 2019 &#160;</span>
            <span class="by">By</span>
            <a href>
              <span class="author">Rickie Baroch</span>
            </a>
          </p>
        </div>
      </div>
    </div>

      <button class="btn btn-danger" @click="myfire">Add</button>  
    <!-- <button class="btn btn-danger" @click="myfire2">Add2</button>    -->

    <div class="container-fluid py-4" v-for="post in myposts" :key="post.id">
        <a href=""><img :src="post.thumbnailURL" alt="" class="w-100"></a>
        <a href=""><h4 class="py-3 m-0">{{post.title}}</h4></a>
        <p class="article-text">{{post.body}}</p>
        <p class="article-text"></p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
/*import { Script } from 'vm';*/

export default {
    data(){
        return{
            posts:null,
           /* photos:null,*/
            myposts:[],
            string:"1", 
            string3:"4",
            photos:[], 
            idstorage:[]
            }
    },
    methods:{       
      myfire: function(){
                   
      const db = this.$firebase.firestore(); 
      /*this.idstorage.forEach(data => {
       db.collection("text").doc(data).update({
          thumbnailURl:this.photos[1]                               
       })      
     }); 
      },*/
      for(let i=0;i <= 100;i++){
        db.collection("text").doc(this.idstorage[i]).update({
          thumbnailURL:this.photos[i].thumbnailUrl
        })
      }
      }
     /* myfire2: function(){
        const db = this.$firebase.firestore();
     db.collection("text").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
      let posts = db.collection("text").doc(doc.id);
        return posts.update({
           url:'default.com.ua'
        });
    });
    })
    }*/
      /* this.posts.forEach(data => {
       db.collection("text").add({
           body:data.body,
           title:data.title,                                    
       })      
     });*/
   /* this.photos.forEach(data => {
       db.collection("text").({           
          thumbnailurl:data.thumbnailURL                          
       })      
     });*/
     /*db.collection('text').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {         
         this.myposts.push(doc.data());
      });
     })*/
    
      
      

    },
    async mounted() {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.posts = response.data));
    await axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => (this.photos = response.data));
      const db = this.$firebase.firestore()
    /*await this.posts.forEach(data => {
       db.collection("text").add({
           body:data.body,
           title:data.title,                                    
       })      
     });*/
    
    await db.collection('text').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {         
        this.myposts.push(doc.data());
        this.idstorage.push(doc.id);                                
      });
     })   

    }    
    

     
    
  }       
 </script>