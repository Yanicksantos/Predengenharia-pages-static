
import type { PagesPrincipalForms } from '#build/components';
<template >
        <v-dialog width="100%">
            <template v-slot:activator="{ props }">
                <v-btn 
                variant="tonal"
                 width="100%" 
                 prepend-icon="mdi-card-account-mail"
                 v-bind="props"
                 >
                    Contato
                </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card class="pb-6">

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                        icon="mdi-close-box-multiple-outline" 
                        @click="isActive.value = false"
                        ></v-btn>
                    </v-card-actions>

                    <v-card-item>
                        <PagesPrincipalForms />
                    </v-card-item>

                </v-card>
            </template>
        </v-dialog>
</template>