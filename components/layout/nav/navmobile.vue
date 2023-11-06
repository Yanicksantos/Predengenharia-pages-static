<template >
    <div class="d-flex d-md-none">
        <v-menu width="100%" >
                  <template #activator="{ props:menu }">
                    <v-btn
                    density="comfortable" 
                    icon="mdi-menu" 
                    size="large"
                    v-bind="menu"
                    ></v-btn>
                  </template>
                  <v-list>
                     

                      <v-list-item
                     
                      >
                          <v-btn
                          variant="tonal" 
                          width="100%"
                          to="/sobre"
                          >
                            SOBRE NÓS
                          </v-btn>
                      </v-list-item>


                      <v-list-item
                     
                      >
                          <v-btn
                          variant="tonal" 
                          width="100%"
                          href="https://suporte.s3i.com.br/blog/"
                          >
                              BLOG
                          </v-btn>
                      </v-list-item>


                      <v-list-item>
                          <UtilsContato />
                      </v-list-item>
                  </v-list>

        </v-menu>
        
    </div>
</template>