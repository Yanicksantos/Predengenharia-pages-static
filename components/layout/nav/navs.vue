<template >
    <div  class="d-none d-md-flex">
    
                
                  <v-list class="d-flex">
                     

                      <v-list-item
                     
                      >
                          <v-btn
                          variant="outlined" 
                          width="100%"
                          to="/sobre"
                          >
                            SOBRE NÓS
                          </v-btn>
                      </v-list-item>


                      <v-list-item
                     
                      >
                          <v-btn
                          variant="outlined" 
                          width="100%"
                          href="https://suporte.s3i.com.br/blog/"
                          >
                              BLOG
                          </v-btn>
                      </v-list-item>
                      <v-menu>
                        <template #activator="{ props:menu }">
                          <v-list-item
                         
                         >
                             <v-btn
                             variant="outlined" 
                             width="100%"
                             v-bind="menu"
                             append-icon="mdi-chevron-down"
                             >
                               NOSSOS SERVIÇOS
                             </v-btn>
                         </v-list-item>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-btn to="/services/engenharia-manutencao-e-confiabilidade">Serviços de Engenharia de Manutenção & Confiabilidade</v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn to="/services/inspecoes">Serviços Técnicos de Inspeção</v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn to="/services/s3i">S3I - Sistema Inteligente de Inspeção Industrial</v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn to="/services/sft">SFT - Sistema Fixo de Termografia</v-btn>
                            </v-list-item>
                        </v-list>


                      </v-menu>


                      <v-list-item>
                          <UtilsContato />
                      </v-list-item>
                  </v-list>

      
        
    </div>
</template>