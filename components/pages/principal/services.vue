<template >
  <div>
  <div class="bg-grey-lighten-3 d-sm-none">
    <div  class="rounded-ts-xl " >
        <div  class="h-100 w-100 d-flex justify-center align-center bg-grey-lighten-3 ">
                                    
            <div class="w-100 px-4 py-6">
                    <div class="pt-3 px-2 pb-2 text-h5  text-indigo-darken-4">
                            Nossos Serviços
                    </div>
                    <div 
                    style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                    class="mb-4 mx-2"></div>
                <v-card
                class="mx-auto w-100 mb-4 rounded-xl"
                v-for="servico in services"
                flat
                >
                <v-img
                class="align-end text-white"
                    height="200"
                    :src=servico.src
                    cover
                    gradient="to bottom, transparent,rgba(0,0,0,.4), rgba(0,0,0,1)"
                >
                  <v-card-title class="text-right text-caption">
                    {{ servico.title }}
                  </v-card-title>
                </v-img>

                <v-card-subtitle 
                class="mx-1 my-3" 
                v-if="servico.subtile"
                v-for="subtitle in servico.subtile"
                >
                    <v-icon
                    size="large"
                    class="mr-2"
                    icon="mdi-account-hard-hat-outline"
                    ></v-icon> 
                    {{ subtitle.title }}
               </v-card-subtitle>
                <v-card-text
                v-else
                >
                  {{ servico.content }}
                </v-card-text>
                
                    <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                        class="px-6"
                            color="primary"
                        variant="text"
                        size="small"
                        :to=servico.to
                        >ler mais...</v-btn>
                    </v-card-actions>
                </v-card>




            </div>
                            
        </div>
    </div>

  </div>
  

    <!-- Serviços desktop-->
    <div style="background-image: url('/img/forms/3.jpg'); background-size: cover;" class="d-none d-sm-flex">
    <v-container class="h-100 w-100 ">
      <div class="w-100">
        <div class="pt-8 px-2 pb-2 text-h4  text-indigo-darken-4 text-center">
                Nossos Serviços
        </div>
        <div 
        style="width: 20%; height: 1px; background-image: linear-gradient(to left, transparent,#1A237E,transparent);" 
        class="my-4 mx-auto"></div>
        <v-row class="my-14">
          <v-col cols="6">
            <nuxt-link to="/sobre"><v-img src="/img/services/1.svg" cover height="100%" class="rounded-lg"></v-img></nuxt-link>
          </v-col>
          <v-col cols="6" >
            <div class="px-6">
              <h1 class="mb-8 text-h5">Serviços de Engenharia de Manutenção & Confiabilidade</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde rem vel voluptatem quia reprehenderit commodi. Aspernatur impedit neque maxime reprehenderit corporis incidunt ex! Porro provident optio ducimus illum maxime!<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet placeat laudantium quaerat itaque fugit ad dignissimos, ratione corrupti consequuntur suscipit optio ut quam incidunt est illum perspiciatis molestiae repudiandae?
            </div>
            <v-btn       
            append-icon="mdi-arrow-top-right"
            class="mt-6 ml-6"
            to="/sobre"
            color="#1A237E"
            >Saiba mais</v-btn>
          </v-col>
        </v-row>

        <v-row class="my-14">
          <v-col cols="6" >
            <div class="px-6">
              <h1 class="mb-8 text-h5">Serviços Técnicos de Inspeção</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde rem vel voluptatem quia reprehenderit commodi. Aspernatur impedit neque maxime reprehenderit corporis incidunt ex! Porro provident optio ducimus illum maxime!<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet placeat laudantium quaerat itaque fugit ad dignissimos, ratione corrupti consequuntur suscipit optio ut quam incidunt est illum perspiciatis molestiae repudiandae?
            </div>
            <v-btn       
            append-icon="mdi-arrow-top-right"
            class="mt-6 ml-6"
            to="/sobre"
            color="#1A237E"
            >Saiba mais</v-btn>
          </v-col>
          <v-col cols="6">
            <v-img src="/img/services/2.svg" cover height="100%" class="rounded-lg"></v-img>
          </v-col>
        
        </v-row>

        <v-row class="my-14">
          <v-col cols="6">
            <v-img src="/img/services/3.svg" cover height="100%" class="rounded-lg"></v-img>
          </v-col>
          <v-col cols="6" >
            <div class="px-6">
              <h1 class="mb-8 text-h5">S3I - Sistema Inteligente de Inspeção Industrial</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde rem vel voluptatem quia reprehenderit commodi. Aspernatur impedit neque maxime reprehenderit corporis incidunt ex! Porro provident optio ducimus illum maxime!<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet placeat laudantium quaerat itaque fugit ad dignissimos, ratione corrupti consequuntur suscipit optio ut quam incidunt est illum perspiciatis molestiae repudiandae?
            </div>
            <v-btn       
            append-icon="mdi-arrow-top-right"
            class="mt-6 ml-6"
            to="/sobre"
            color="#1A237E"
            >Saiba mais</v-btn>
          </v-col>
        </v-row>

        <v-row class="my-14">
          <v-col cols="6" >
            <div class="px-6">
              <h1 class="mb-8 text-h5">SFT - Sistema Fixo de Termografia</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde rem vel voluptatem quia reprehenderit commodi. Aspernatur impedit neque maxime reprehenderit corporis incidunt ex! Porro provident optio ducimus illum maxime!<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet placeat laudantium quaerat itaque fugit ad dignissimos, ratione corrupti consequuntur suscipit optio ut quam incidunt est illum perspiciatis molestiae repudiandae?
            </div>
            <v-btn       
            append-icon="mdi-arrow-top-right"
            class="mt-6 ml-6"
            to="/sobre"
            color="#1A237E"
            >Saiba mais</v-btn>
          </v-col>
          <v-col cols="6">
            <v-img src="/img/services/4.svg" cover height="100%" class="rounded-lg"></v-img>
          </v-col>
        
        </v-row>

    </div>


    </v-container>
  </div>
  </div>
</template>


<script>
  export default {

    data: () => ({
      services: 
      [
        {
          id:1,
          title: 'Serviços de Engenharia de Manutenção & Confiabilidade',
          subtile: [
            {title:'Sistema de Manutenção', icon:'mdi-info'}, 
            {title:'Engenharia de Lubrificação', icon:'mdi-info'}, 
            {title:'Planejamento de Manutenção', icon:'mdi-info'}, 
            {title:'Diagnóstico da Manutenção', icon:'mdi-info'},
            { title:'Capacitação de Equipes', icon:'mdi-info'}, 
            {title:'Auditoria da Manutenção', icon:'mdi-info'}
          ],
          src:'/img/services/1.svg',
          to: '/services/engenharia-manutencao-e-confiabilidade'
        },

        {
          id:2,
          title: 'Serviços Técnicos de Inspeção',
          subtile: [
            {title:'Termografia', icon:'mdi-info'}, 
            {title:'Análise de Vibração', icon:'mdi-info'}, 
            {title:'Inspeções', icon:'mdi-info'}, 
            {title:'Inspeções por Ultrassom', icon:'mdi-info'}
          ],
          src:'/img/services/2.svg',
          to:'/services/inspecoes' 
        },


        {
          id:3,
          title: 'S3I - Sistema Inteligente de Inspeção Industrial',
          subtile: false,
          src:'/img/services/3.svg',
          content:'Lorem ipsum dolor hjfjhjf sit amet, consectetur adipisicing elit. Quibusdam quas animi neque aliquam voluptate, magnam dolorum eveniet, tempore aspernatur alias quo nam ut consequatur nulla officiis velit rem sint quos!',
          to:'/services/s3i' 
        },

        {
          id:4,
          title: 'SFT - Sistema Fixo de Termografia',
          subtile: false,
          src:'/img/services/4.svg',
          content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quas animi neque aliquam voluptate, magnam dolorum eveniet, tempore aspernatur alias quo nam ut consequatur nulla officiis velit rem sint quos!',
          to:'/services/sft'  
        },
      
      
     
      ],
  })

  }
</script>
