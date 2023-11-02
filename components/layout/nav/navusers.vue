<template >
    <div>
        
                  <v-list class="bg-transparent">
                    <v-list-item>
                            <v-menu :close-on-content-click="false">
                                <template #activator=" { props } ">
                                    <v-btn icon="mdi-account" size="large" v-bind="props" ></v-btn>
                                </template>
                                <v-list nav variant="compact" size="small">
                                    <v-list-item 
                                    append-icon="mdi-account-cog-outline" 
                                    
                                    variant="tonal"
                                    density="compact"
                                    href="#"
                                    >
                                        <v-list-item-title >
                                                Sala Vip
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item 
                                    append-icon="mdi-account-hard-hat-outline" 
                                    variant="tonal" 
                                    density="compact"
                                    href="#"
                                    >
                                        <v-list-item-title >
                                                Intranet
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                      </v-list-item>
                  </v-list>
        
    </div>
</template>