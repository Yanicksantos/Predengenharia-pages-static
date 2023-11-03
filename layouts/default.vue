<template >
    <v-app style="overflow-x: hidden; ">
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
      <div style="position: relative;">
        <slot />
        <div style="position: fixed; max-width: 50px; max-height: 20%; right:10px; bottom: 5%; z-index: 100000;">
            <v-tooltip text="Tooltip">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-chat"  color="green-darken-4"></v-btn>
              </template>
            </v-tooltip>
          </div>
      </div>
      
      <LayoutFooter />
      

    </v-app>
</template>



