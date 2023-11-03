<template >
    <div class="mt-10 pt-10">
        <!-- BANNER PRINCIPAL -->
        <div style="background-image: url('/img/sobre/1.jpg'); background-size: cover; background-position: center center; height: 400px;">
            <div class="w-100 h-100 d-flex justify-center align-center pa-2 " style="background-color: rgba(0, 0, 0, .75);">
                <div class="elevation-24 pa-4 rounded" style="background-color: rgba(0, 0, 0, .3);">
                    <h1 class="text-h5 font-weight-black text-white">Especializada em soluções de confiabilidade e produtividade para áreas de O&M</h1>
                    <p class="mt-4 text-caption font-weight-light text-grey-lighten-1">A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos com foco na garantia da segurança, confiabilidade e produtividade das atividades, atuando na indústria e área de serviços desde 1993.</p>
                    <div 
                    style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);" 
                    class="mx-auto mt-2"></div>
                </div>
            </div>
        </div>

        <!--conteudo-->
        <v-main class="pa-0">
            <div  class="pa-4" >
                <div class="d-flex mb-4 pa-2" style="max-height: 400px;">
                    <div style="width: 5px;  background-image: linear-gradient(to bottom, #B71C1C ,transparent, transparent);" class="mr-4"></div>
                    <p class="text-body-2 ">Nossas inovadoras soluções são disponibilizadas no mercado por meio de três áreas de atuação distintas: Serviços Técnicos, Tecnologia da Informação e Automação Industrial. </p>
                </div>
                <v-img src="/img/sobre/2.jpg" class="rounded" cover height="300"></v-img>
            </div>



            <div class="bg-indigo-darken-4 mt-2 py-2 rounded-ts-xl">
                <p class="text-body-2 py-2 px-4">Cada uma dessas áreas representa pilares fundamentais que nos permitem oferecer um amplo leque de soluções e expertise, atendendo às necessidades variadas dos nossos clientes de forma eficaz e eficiente.</p>
                <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption mb-2">
                    Na área de Serviços Técnicos, atua com inspeção preditiva, consultoria em engenharia de manutenção e treinamento técnico.
                </v-list-item>
                <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption mb-2">
                    Em Tecnologia da Informação, dispõe de uma plataforma chamada S3i (Sistema Inteligente de Inspeções Industriais), que de forma pioneira usa desde 2002 dispositivos móveis de forma rastreável, inteligente e integrada à ERP/EAM, como IBM Maximo, Infor, Oracle JDE, SAP e Totvs.
                </v-list-item>
                <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption mb-2">
                    Na área de Automação Industrial provê soluções de monitoramento térmico com termografia infravermelha para melhoria da segurança, qualidade e custo em processos críticos.
                </v-list-item>          
            </div>


            <div class="bg-grey-lighten-3">
                <h1 class="text-h6 text-center pt-6 px-2">Veja o que estão falando da PRED...</h1>
                <div 
                    style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);" 
                    class="mx-auto  mt-2"></div>
                <UtilsComentario />
            </div>

            

            <div class="bg-indigo-darken-4 d-flex  align-center flex-column h-100" 
                style="background-image: url('/img/Headers/2.svg'); background-position: 100%; background-size: cover; background-attachment: fixed;"
            >
                <div style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
                    <div class="w-100 ">
                        <div    
                        style="height: 1px; background-image: linear-gradient(to left, transparent,white, transparent);" 
                        class="mb-6 mx-auto w-75"
                        ></div>
                        <iframe class="w-100  rounded" height="180" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                        ></iframe>
                    </div>
                    
                </div>
            </div>
            <div class="pa-4">
                <PagesPrincipalForms />
            </div>
            
        </v-main>
    </div>
</template>