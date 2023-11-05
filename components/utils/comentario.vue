<template>
    <div>
        <div class="d-sm-none">
            <v-carousel
            hide-delimiter-background
            cycle
            height="350"
            :show-arrows=false
            class="bg-grey-lighten-3"
            >
            <v-carousel-item
                v-for="(perfil, i) in perfis"
                :key="i"
                class="bg-grey-lighten-3"
            >
                <div class="d-flex justify-center align-center h-100 bg-grey-lighten-3">
                    <v-card
                    class="w-100 bg-grey-lighten-3"
                    flat
                    >
                        <v-card-item >
                            <v-card-text class="px-4 bg-grey pb-6 rounded-lg">
                                <div class="text-body h-100 d-flex justify-center align-center">
                                {{ perfil.comentario }} 
                                </div>
                            </v-card-text>

                            <v-card-actions>
                                <v-avatar
                                    color="grey-darken-3"
                                    :image=perfil.avatar
                                ></v-avatar>
                                <div class="pl-4">
                                    <div class="text-subtitle-2">{{ perfil.nome }}</div>
                                    <div
                                    class="text-caption font-weight-thin"
                                    >{{ perfil.profissao }}</div>
                                </div>
                            </v-card-actions>
                        </v-card-item>
                    </v-card>
                </div>
            </v-carousel-item>
            </v-carousel>
        </div>

        <!-- desktop -->
        <div class="d-none d-sm-flex bg-grey-lighten-2" style="min-height: 400px;">
            <div style="clip-path: polygon(0 0, 0 100%, 100% 0);" class="bg-indigo-darken-4  d-flex  align-center w-50">
            </div>
            <div class="w-50 ">
                <h1 class="text-h6 text-center pt-6 px-2">Veja o que estão falando da PRED...</h1>
                <div 
                    style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);" 
                    class="mx-auto  mt-2"></div>
            <v-carousel
            hide-delimiter-background
            hide-delimiters
            cycle          
            class="bg-grey-lighten-2"
            show-arrows="hover"
            >
            <v-carousel-item
                v-for="(perfil, i) in perfis"
                :key="i"
                class="bg-grey-lighten-2"
            >
                <div class="d-flex justify-center align-center h-100 ">
                    <v-card
                    class="w-100 bg-grey-lighten-2"
                    flat
                    >
                        <v-card-item >
                            <v-card-text class="px-4 bg-grey pb-6 rounded-lg">
                                <div class="text-body h-100 d-flex justify-center align-center">
                                {{ perfil.comentario }} 
                                </div>
                            </v-card-text>

                            <v-card-actions>
                                <v-avatar
                                    color="grey-darken-3"
                                    :image=perfil.avatar
                                ></v-avatar>
                                <div class="pl-4">
                                    <div class="text-subtitle-2">{{ perfil.nome }}</div>
                                    <div
                                    class="text-caption font-weight-thin"
                                    >{{ perfil.profissao }}</div>
                                </div>
                            </v-card-actions>
                        </v-card-item>
                    </v-card>
                </div>
            </v-carousel-item>
            </v-carousel>
            </div>

        </div>
    </div>
  </template>



<script>
    export default {
      data () {
        return {
            perfis:[
                {
                    nome: 'Fernando Vaz',
                    profissao:'Inspetor de Elétrica - Termografista N2',
                    comentario:'"Tive o prazer de trabalhar com essa equipe Pred Engenharia que com certeza fez a diferença e deixará uma contribuição significativa em minha jornada na área de manutenção/Inspeção/PCM"',
                    avatar: '/img/avatar/fernando.jpeg'
                },
                {
                    nome: 'Luciano Siqueira Silva',
                    profissao:'Gerência de Engenharia de Manut. & Confiabilidade',
                    comentario:'"Excelente! Tive a oportunidade de trabalhar junto com a Pred em um projeto de MCI (Manutenção Condicionada a Inspeção) e os resultados foram fantásticos ! Recomendo fortemente esta empresa aos gestores de manutenção."',
                    avatar: '/img/avatar/luciano.jpeg'
                },
                {
                    nome: 'Roberto Leal',
                    profissao:'Inspetor de Elétrica - Termografista N2',
                    comentario:'"A Pred sempre teve esta linha de trabalho de fazer o básico bem feito e consegue entregas diferenciadas sempre. Sabemos que Inovação e fazer o que precisa ser feito bem e com a qualidade necessaria. Continuem nesta linha que e no que também acredito e procuro sempre seja nos fornecedores ou equipe interna."',
                    avatar: '/img/avatar/fernando.jpeg'
                },
                {
                    nome: 'Josenildo Santos',
                    profissao:'Planejador de manutenção',
                    comentario:'"É só começo, Agradeço Pred Engenharia por ter sido tão importante nesse início para nós."',
                    avatar: '/img/avatar/Josenildo.jpeg'
                },
                {
                    nome: 'Bruno Evangelista Dias da Silva',
                    profissao:'Coordenador de Planejamento de Grandes Paradas | CMOC Brasil',
                    comentario:'"Eu tive o prazer de conduzir um trabalho de reorganização da manutenção aqui na CMOC Brasil Fosfatos e confesso que foi incrível como a Manutenção Condicionada a Inspeção fez a diferença. Novos padrões novos processos fazendo com que os padrões de qualidade das inspeções e do planejamento atingisse níveis jamais atingidos."',
                    avatar: '/img/avatar/bruno.jpeg'
                },
               
            ],
        }
      },
    }
  </script>