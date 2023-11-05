<template >
    <div class="">
        <!-- Banner -->
        <div style="background-image: url('/img/mci/1.gif');  background-size: cover; background-position: center center;" class="pt-14">
            <div class="h-100 w-100 pa-6 " style="background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), transparent);">
                <div class="d-flex justify-center flex-column align-center h-100 elevation-24 rounded pa-2" style="background-color: rgba(0, 0, 0, .3);">
                        <v-img src="/img/mci/2.png"  width="100" max-height="50"></v-img>
                        <h1 class="text-body-1  text-white text-center mt-4">MANUNTENÇÃO <br> CONDICIONADA A INSPEÇÃO</h1>
                   
                </div>
                <div>
                    <div 
                    style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);" 
                    class="mx-auto my-4"></div>
                    <p class="text-caption text-grey-lighten-1 text-center font-weight-black ">Obtenha todo o potencial na sua manutenção de forma simples e estruturada</p>
                </div>
            </div>
        </div>

        <!-- Conteúdo -->
        <v-main class="pa-0">
            <div class="px-4 py-6">
                <p class="text-caption text-center font-weight-black">Certifique-se que a RBM® (Rice &Beans Maintenance), está, de fato, implementada antes de investir tempo e energia na RCM® (Reliability Centered maintenance). <br>A gente te explica como:</p>
                
                <v-img src="/img/mci/3.png" class="rounded my-4"></v-img>
                <p class="text-body-2">Desenvolvido pela Pred Engenharia, o método MCI, trouxe uma perspectiva inovadora que, diferente de outros métodos existentes no mercado, promove a integração da cadeia de valores da Manutenção através de atribuições e entregáveis claramente definidos e auditáveis.</p>
                <v-img src="/img/mci/4.jpeg" class="rounded my-4"></v-img>

                <p class="text-body-2">No modelo MCI as manutenções preventiva sob condição e corretiva planejada são integradas de forma harmoniosa, em um ciclo fechado, e sustentada por uma ferramenta inteligente denominada PERIGÔMETRO ®. Essa ferramenta, desenvolvida pela Pred, faz a avaliação do que realmente deve entrar nas programações de manutenção, dando equilíbrio ao recurso.</p>
                <p class="mt-4 text-body-2"> É nesse ciclo fechado que conseguimos garantir a disponibilidade e previsibilidade com o menor custo possível, pois se trabalha com a visão mínima de 4 semanas à frente (S+4).</p>
                <v-img src="/img/mci/5.jpeg" class="rounded my-4"></v-img>
                <p class="mt-4 text-body-2"> A frase que rege a metodologia MCI é “o simples é o máximo da sofisticação”. Isso porque todas as ações que sustentam o método são simples. No entanto, devido a sua doutrina estruturada e organizada, promove solidez e previsibilidade.</p>
            </div>











            <!-- outra secção -->
            <div class="bg-indigo-darken-4 d-flex  align-center flex-column h-100" 
                style="background-image: url('/img/Headers/2.svg'); background-position: 100%; background-size: cover; background-attachment: fixed;"
            >
                <div style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
                    
                    <div class="w-100 ">
                        <p class="text-center mb-4 text-body-1">SÉRIE MCI NO YOUTUBE</p>
                        <div    
                        style="height: 1px; background-image: linear-gradient(to left, transparent,white, transparent);" 
                        class="mb-6 mx-auto w-75"
                        ></div>
                        <div class="d-flex justify-space-around align-center py-4">
                            <v-btn
                                variant="text"
                                icon="mdi-arrow-left-drop-circle"
                                @click="model = Math.max(model - 1, 0)"
                            ></v-btn>
                            {{ model + 1}} de 24
                            <v-btn
                                variant="text"
                                icon="mdi-arrow-right-drop-circle"
                                @click="model = Math.min(model + 1, 3)"
                            ></v-btn>
                        </div>
                        <v-carousel
                        v-model="model"
                        hide-delimiter-background
                        height="230"
                        :show-arrows=false
                        class="pa-0"
                       
                        >
                            <v-carousel-item>
                                <iframe class="w-100  rounded" height="180" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                ></iframe>
                            </v-carousel-item>
                            <v-carousel-item>
                                <iframe class="w-100  rounded" height="180" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                ></iframe>
                            </v-carousel-item>
                            <v-carousel-item>
                                <iframe class="w-100  rounded" height="180" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                ></iframe>
                            </v-carousel-item>
                                <v-carousel-item>
                                <iframe class="w-100  rounded" height="180" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                ></iframe>
                            </v-carousel-item>

                        </v-carousel>

                        
                    </div>
                    
                </div>
            </div>


            <div class="pa-4">
                <PagesPrincipalForms />
            </div>











        </v-main>





    </div>
</template>

<script>
  export default {
    data () {
      return {
        model: 0,
      }
    },
  }
</script>