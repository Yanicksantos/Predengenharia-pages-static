<template>
    <v-app style="overflow-x: hidden;">
      <v-app-bar height="50" class="px-2 py-1 " flat >  
        <LayoutNavNavlogo />
        <template #append>
          <div class="w-100 h-100 d-flex align-center justify-center">           
            <LayoutNavNavmobile />
            <LayoutNavNavs />
            <LayoutNavNavusers />
          </div>
        </template>
      </v-app-bar>
      <slot />
      <LayoutFooter />
    </v-app>
</template>



