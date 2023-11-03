<template>
       <div class=" h-100" 
        style="background-image: url('/img/historias/1.jpeg'); background-size: cover; background-position: right center;"
        >
        <div class="pa-3 h-100" style="overflow: hidden; background-color: rgba(26,35,126, .95);">
            
                <div class=" mt-4 mb-2 ml-2  text-h6" style="color: #BDBDBD;">
                    <strong class="font-weight-bold text-white"  >Um pouco da</strong>  nossa caminhada
                </div>
                <div    
                style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent,white);" 
                class="mb-8 mx-2"></div>

                <v-carousel  
                hide-delimiter-background
                cycle
                height="300"
                :show-arrows=false
                class="rounded-lg mb-4"
                >
                    <v-carousel-item
                    v-for="(src, i) in srcs"
                    :key="i"
                    :src=src
                    cover
                    ></v-carousel-item>
                </v-carousel>

                <!--
              
                        <v-timeline side="end" density="compact">
                            <v-timeline-item density="compact"   size="5"
                            dot-color="red-darken-4"
                            >
                                <v-img src="/img/historias/1.svg" min-width="285"    class="rounded"></v-img>
                            </v-timeline-item>
                            <v-timeline-item density="compact"   size="10"
                            dot-color="red-darken-3"
                            >
                                <v-img src="/img/historias/2.svg" min-width="285"    class="rounded"></v-img>
                            </v-timeline-item>
                            <v-timeline-item density="compact"   size="15"
                            dot-color="red-darken-2"
                            >
                                <v-img src="/img/historias/3.svg" min-width="285"    class="rounded"></v-img>
                            </v-timeline-item>
                            <v-timeline-item density="compact"  size="20"
                            dot-color="red-darken-1"
                            >
                                <v-img src="/img/historias/4.svg" min-width="285"    class="rounded"></v-img>
                            </v-timeline-item>
                            <v-timeline-item density="compact"   size="25"
                            dot-color="red-lighten-1"
                            >
                                <v-img src="/img/historias/5.svg" min-width="285"    class="rounded"></v-img>
                            </v-timeline-item>
                        </v-timeline>
                        -->
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
           ]
        }
      },
    }
  </script>
