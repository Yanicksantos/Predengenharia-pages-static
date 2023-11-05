<template >
    <div>
        <div
        class="d-md-none"
        style="background-image: url('/img/Headers/5.svg'); background-size: cover; height: 600px; overflow: hidden; background-position: center ;" 
        >
            <div 
            class=" h-100" 
            style=" background-image: linear-gradient( to bottom ,transparent,rgba(0,0,0, .6), rgba(26,35,126, 1),rgba(26,35,126, 1), rgba(26,35,126, 1));"
            >
                <div class="d-flex flex-column justify-center align-center h-100 px-6 pt-10" >
                <div class="">
                    <h1 class="w-100 text-h4 mt-8 mb-12" style="color: #FAFAFA;"> <strong> HÁ 30 ANOS</strong><br> SUA PARCEIRA CONFIAVEL EM SOLUÇÕES INDUSTRIAIS</h1>
                    <div class="text-body-2 my-4 " style="color: #BDBDBD;">
                            <p class="">Oferecemos inspeções, consultoria e treinamentos especializados, bem como a plataforma inteligente S3i® para inspeções industriais e soluções de automação industrial, incluindo monitoramento térmico por termografia infravermelha. Garantimos segurança, confiabilidade e produtividade para nossos clientes...</p>
                    </div>
                    <v-btn
                    variant="outlined"
                    size="small"
                    append-icon="mdi-arrow-top-right"
                    class="mt-4 text-grey-lighten-5"
                    color="#B71C1C"
                    to="/sobre"
                    >Saiba mais</v-btn>
                </div>
                </div>

            </div>
        </div>

        <!-- DESKTOP -->
        <div
        class="d-none d-md-flex"
        style="background-image: url('/img/Headers/5.svg'); background-size: cover; height:700px; overflow: hidden; background-position: center ;" 
        >
        <div 
            class=" h-100 w-100" 
            style=" background-image: linear-gradient( to bottom ,transparent,rgba(0,0,0, .5), rgba(26,35,126, .95),rgba(26,35,126, 1), rgba(26,35,126, 1));"
            >
                <v-container class="h-100">
                    <div class="d-flex flex-column justify-center align-start h-100 py-4">
                        <h1 class="text-h2 w-75 pa-6 rounded-t-xl" style="color: #FAFAFA; line-height: 65px;"> <strong class="mb-2"> HÁ 30 ANOS</strong><br> SUA PARCEIRA CONFIAVEL EM SOLUÇÕES INDUSTRIAIS</h1>
                        <p class="w-75  pa-6" style="color: #BDBDBD;">Oferecemos inspeções, consultoria e treinamentos especializados, bem como a plataforma inteligente S3i® para inspeções industriais e soluções de automação industrial, incluindo monitoramento térmico por termografia infravermelha. Garantimos segurança, confiabilidade e produtividade para nossos clientes...</p>
                        <v-btn
                        variant="outlined"
                        append-icon="mdi-arrow-top-right"
                        class="mt-6 ml-6 text-grey-lighten-5"
                        color="#B71C1C"
                        to="/sobre"
                        >Saiba mais</v-btn>
                    </div>
                </v-container>
               
            </div>
    
        </div>





    </div>
</template>