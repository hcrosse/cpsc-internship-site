<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex d-flex xs12 order-xs5>
            <v-layout column>
              <v-flex d-flex>
                <v-card color="blue-grey" dark tile flat>
                  <v-card-text>"hahabluegrey"</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex>
                <v-card color="brown" dark tile flat>
                  <v-card-text>"brown"</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm7>
            <v-layout row wrap>
              <v-flex d-flex>
                <v-card color="indigo lighten-2" dark tile flat>
                  <v-card-text>"indigo"</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex>
                <v-layout row>
                  <v-flex
                    v-for="n in 2"
                    :key="n"
                    d-flex
                  >
                    <v-card
                      color="amber lighten-2"
                      tile
                      flat
                    >
                      <v-card-text>"haha"</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm2 child-flex>
            <v-card color="orange lighten-2" tile flat>
              <v-card-text>"haha"</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm3>
            <v-card color="red lighten-2" dark tile flat>
              <v-card-text>"haha"</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
