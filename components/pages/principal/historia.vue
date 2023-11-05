<template>
       <div class=" h-100" 
        style="background-image: url('/img/historias/1.jpeg'); background-size: cover; background-position: center center;"
        >
        <div class=" h-100  d-sm-none" style="overflow: hidden; background-color: rgba(26,35,126, .95);">
            <v-container>
                <div class=" mt-4 mb-2 ml-2  text-h6" style="color: #BDBDBD;">
                    <strong class="font-weight-bold text-white"  >Um pouco da</strong>  nossa caminhada
                </div>
                <div    
                style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent,white);" 
                class="mb-8 mx-2"></div>

                <v-carousel  
                hide-delimiter-background
                cycle
                height="400"
                :show-arrows=false
                class="rounded-lg mb-4"
                >
                    <v-carousel-item
                    v-for="(src, i) in srcs"
                    :key="i"
                    :src=src
                    cover
                    class="rounded-lg "
                    ></v-carousel-item>
                </v-carousel>
            </v-container>

              
        </div>

         <!-- historia desktop --->
         <div  class="py-4  h-100 d-none d-sm-block" style="overflow: hidden; background-color: rgba(26,35,126, .95);">
            <v-container>
                <div class=" mt-4 mb-2 ml-2  text-h5" style="color: #BDBDBD;">
                <strong class="font-weight-bold text-white"  >Um pouco da</strong>  nossa caminhada
                </div>
                <div    
                style="width: 20%; height: 1px; background-image: linear-gradient(to left, transparent,white);" 
                class="mb-8 mx-2"></div>
                <v-carousel  
                    hide-delimiter-background
                    cycle
                    height="350"
                    show-arrows="hover"
                    class="rounded-xl mb-4 "
                    >
                    <v-carousel-item
                    v-for="(src2, i) in scrs2"
                    :key="i"
                    :src=src2
                    cover
                    ></v-carousel-item>
                </v-carousel>
            </v-container>
        </div>
            
    </div>
</template>




<script>
    export default {
      data () {
        return {
           srcs:[
                '/img/historias/2.jpeg',
                '/img/historias/3.jpeg',
                '/img/historias/4.jpeg',
                '/img/historias/5.jpeg',
                '/img/historias/6.jpeg'
           ],
           scrs2:[
                '/img/historias/1.svg',
                '/img/historias/2.svg',
                '/img/historias/3.svg',
                '/img/historias/4.svg',
                '/img/historias/5.svg'
           ]
        }
      },
    }
  </script>
