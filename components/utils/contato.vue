
import type { PagesPrincipalForms } from '#build/components';
<template >
        <v-dialog max-width="700px">
            <template v-slot:activator="{ props }">
                <v-btn 
                variant="flat"
                 width="100%" 
                 prepend-icon="mdi-card-account-mail"
                 v-bind="props"
                 color="#1A237E"
                 >
                    Contato
                </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card class="pb-6">

                    <v-card-actions>
                        <v-img src="/img/Headers/Logomarca-Pred-Engenharia-1536x319.png" max-width="100" cover class="mx-4" ></v-img>
                        <v-spacer></v-spacer>
                        <v-btn
                        icon="mdi-close-box-multiple-outline" 
                        @click="isActive.value = false"
                        ></v-btn>
                    </v-card-actions>

                    <v-card-item>
                        <UtilsForm />
                    </v-card-item>

                </v-card>
            </template>
        </v-dialog>
</template>

