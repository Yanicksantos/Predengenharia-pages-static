<template >
    <div>
   
        <div class="d-flex flex-column justify-center pa-6 d-md-none"  style="color: black; background-image: url('/img/main/3.svg'); background-size: cover; ">
            <div class="">
                <v-img src="/img/main/imgmci.png" cover max-width="50" class="mx-auto"></v-img>
                <p class="w-100 mx-auto my-4 px-4 text-center text-h5">Obtenha <strong>todo o potencial na sua manutenção </strong>de forma simples e estruturada</p>
            </div>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12"><v-img src="/img/main/img2mci.jpeg"></v-img></v-col>
                        <v-col cols="12"> <p class="text-body-2 ">Desenvolvido pela Pred Engenharia, o método MCI® trouxe uma perspectiva inovadora que, diferente de outros métodos existentes no mercado, promove a integração da cadeia de valores da Manutenção através de atribuições e entregáveis claramente definidos e auditáveis...
                        </p>
                        
                        <v-btn
                        append-icon="mdi-arrow-top-right"
                        variant="text"
                        
                        size="small"
                        class="mt-6"
                        color="#B71C1C"
                        to="/mci"
                        >Saiba mais sobre o método</v-btn></v-col>
                    </v-row>    
                </v-container>                
            </div>                
        </div> 

        <!-- desktop -->
        <div class="d-none d-md-flex">
            <v-container>
                <div
                class="d-flex flex-column justify-center pa-6"  style="color: black; background-image: url('/img/main/3.svg'); background-size: cover; " 
                >
                    <div>
                        <v-img src="/img/main/imgmci.png" cover max-width="100" class="mx-auto"></v-img>
                        <p class="w-100 mx-auto my-4 px-4 text-center text-h6">Obtenha <strong>todo o potencial na sua manutenção </strong>de forma simples e estruturada</p>
                    </div>
                    <div>
                        <v-img src="/img/main/img2mci.jpeg" max-width="700" class="mx-auto my-6"></v-img>
                        <p class="text-body-1 px-10 mt-8">Desenvolvido pela Pred Engenharia, o método MCI® trouxe uma perspectiva inovadora que, diferente de outros métodos existentes no mercado, promove a integração da cadeia de valores da Manutenção através de atribuições e entregáveis claramente definidos e auditáveis...
                        </p>
                        <v-btn
                        append-icon="mdi-arrow-top-right"
                        variant="text"
                        class="ml-6 mt-2"
                        color="#B71C1C"
                        to="/mci"
                    
                        >Saiba mais sobre o método</v-btn>
                    </div>
                    

                </div>

            </v-container>
        </div>



    </div> 
</template>