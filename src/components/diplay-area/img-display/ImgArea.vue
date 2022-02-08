<template>
    <div style="height:100%; width:80%" class="img-area">
        <div>
          <carousel :items-to-show="1" >
            <slide v-for="slide in imgSrcs" :key="slide">
              <div class="carousel__item">
                  <img :src="slide" :alt="breed" style="max-width:800px; max-height:500px;">
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
    </div>
</template>

<script>
import canineControllerService from '../../../services/CanineControllerService';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name: 'ImgArea',

    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    data(){
        return {
            imgSrcs: [],
        }
    },

    props: ['breed'],

    methods: {
        setImgSrcs(srcs){
            this.imgSrcs = srcs;
        },
        updateImgSrcs(breed){
            canineControllerService.getBreedImgSrcs(breed)
                .then(res => this.setImgSrcs(res))
                .catch(e => console.log(e));
        }
    },

    created(){
        this.updateImgSrcs(this.breed);
    }
}
</script>

<style>

.carousel__item {
  flex-basis: 100px;
  max-height: 400px;
  width: 80%;
  color:  #212529;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>