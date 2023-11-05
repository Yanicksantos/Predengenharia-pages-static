<template>
    <div>
        <div class="bg-indigo-darken-4 d-flex  align-center flex-column h-100 d-md-none" 
        style="height: 550px; background-image: url('/img/Headers/2.svg'); background-position: 100%; background-size: cover; background-attachment: fixed;">
            <div style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
                <div class="w-100 ">
                    <div class=" mt-4 mb-2 ml-2  text-h6 font-weight-bold text-white" style="color: #BDBDBD;">
                        Conheça-nos
                    </div>
                    <div    
                    style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent,white);" 
                    class="mb-6 mx-2"></div>
                    <iframe class="w-100  rounded" height="220" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="pt-6 d-flex h-100" style="overflow: hidden;">
                    <div style="width: 20px;  background-image: linear-gradient(to bottom, #B71C1C ,transparent);" class="mr-4"></div>
                    <div style="color: #BDBDBD;">A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos com foco na garantia da segurança, confiabilidade e produtividade das atividades, atuando na indústria e área de serviços desde 1993. Suas inovadoras soluções são fornecidas ao mercado através de três área de negócios: Serviços Técnicos, Tecnologia de Informação e Automação Industrial.</div>
                </div>
                <v-btn
                    variant="outlined"
                    size="small"
                    append-icon="mdi-arrow-top-right"
                    class="mt-6 text-grey-lighten-5 ml-4"
                    color="#B71C1C"
                    to="/sobre"
                    >Saiba mais</v-btn>
            </div>
        </div>


        <!-- sobre desktop -->
        <div class="d-none d-md-block bg-indigo-darken-4"
        style=" background-image: url('/img/Headers/2.svg'); background-position: 100%; background-size: cover; background-attachment: fixed;"
        >
            <div class="h-100 w-100 pa-4" style="background-color: rgba(26, 35, 126, .9);">
                <v-container>
                    <div class=" mt-4 mb-2 ml-2  text-h4 font-weight-bold text-white" style="color: #BDBDBD;">
                            Conheça-nos
                    </div>
                    <div    
                    style="width: 20%; height: 1px; background-image: linear-gradient(to left, transparent,white);" 
                    class="mb-6 mx-2"></div>
                    <v-row>
                        <v-col class="6">
                            <div class="pt-6 d-flex" >
                                <div style="width: 15px;  background-image: linear-gradient(to bottom, #B71C1C ,transparent, transparent);" class="mr-4"></div>
                                <div style="color: #BDBDBD;" class="pr-10 mb-4">A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos com foco na garantia da segurança, confiabilidade e produtividade das atividades, atuando na indústria e área de serviços desde 1993. Suas inovadoras soluções são fornecidas ao mercado através de três área de negócios: Serviços Técnicos, Tecnologia de Informação e Automação Industrial.</div>
                            </div>
                            <v-btn
                            variant="outlined"
                            size="small"
                            append-icon="mdi-arrow-top-right"
                            class="mt-8 text-grey-lighten-5 ml-8"
                            color="#B71C1C"
                            to="/sobre"
                            >Saiba mais</v-btn>
                        </v-col>
                        <v-col class="6">
                            <iframe class="w-100  rounded-lg" max-width="400" height="300" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>