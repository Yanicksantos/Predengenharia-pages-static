<template >
    <div class="d-flex d-sm-none">
        <v-menu width="100%" :close-on-content-click="false" eager>
                  <template #activator="{ props:menu }">
                    <v-btn
                    density="comfortable" 
                    icon="mdi-menu" 
                    size="large"
                    v-bind="menu"
                    variant="'outlined"
                    class="rounded-sm"
                    >
                    </v-btn>
                  </template>
                  <v-list>
                      <v-list-item
                     
                      >
                          <v-btn
                          variant="tonal" width="100%"
                          to="/"
                          >
                              Inicio
                          </v-btn>
                      </v-list-item>

                      <v-list-item
                     
                      >
                          <v-btn
                          variant="tonal" width="100%">
                              SOBRE NÓS
                          </v-btn>
                      </v-list-item>

                      


                      
                      <v-list-item>
                          <v-btn variant="tonal"  width="100%" prepend-icon="mdi-account-wrench" class="text-left">
                              Nossos Serviços
                          </v-btn>
                      </v-list-item>

                      <v-list-item
                     
                      >
                          <v-btn
                          variant="tonal" width="100%">
                              BLOG
                          </v-btn>
                      </v-list-item>





                      <v-list-item>
                          <v-btn variant="flat" width="100%" prepend-icon="mdi-face-agent" color="primary" >
                              Agendar demostração
                          </v-btn>
                      </v-list-item>

                      <v-list-item>
                          <v-btn variant="tonal" width="100%" prepend-icon="mdi-card-account-mail">
                              Contato
                          </v-btn>
                      </v-list-item>
                  </v-list>

        </v-menu>
        
    </div>
</template>