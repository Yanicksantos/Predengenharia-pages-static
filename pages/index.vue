<template>
        <div style="overflow-x: hidden;">
                <PagesPrincipalBanner />
                <v-main class="pa-0 bg-white"> 
                        <PagesPrincipalMci />     
                        <PagesPrincipalServices />
                        <PagesPrincipalVisao />
                        <PagesPrincipalParceiro />
                        <PagesPrincipalHistoria />
                        <PagesPrincipalSobre />
                        <UtilsComentario />
                        <div class="py-8" style="background-image: url('/img/forms/4.jpg'); background-size: cover;">
                        <v-container>
                                <PagesPrincipalForms class="d-sm-none bg-white pa-4 rounded-lg" />
                                <v-row class="d-none d-sm-flex justify-center align-end">
                                        <v-col cols="6" class="bg-white  pa-4"><PagesPrincipalForms /></v-col>
                                        <v-col cols="6" >
                                                <v-img src="/img/forms/1.png"  height="500" ></v-img>
                                        </v-col>
                                </v-row>
                        </v-container>
                        </div>     
                </v-main>
        </div>
</template>
