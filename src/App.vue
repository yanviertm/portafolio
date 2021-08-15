<template>
  <div>
    <div class="image">
      <img src="../public/img/fondo.png" width="100%" border="0">
      <p class="textImage">
        HOLA MI NOMBRE ES YANVIER TAMARA
        <br>
        Y SOY&nbsp;
        <vue-typer
            :text='["DESARROLLADOR FULLSTACK.","PROACTIVO.","AUTODIDACTA."]'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='250'
            erase-style='clear'
            :erase-on-complete='false'
            caret-animation='blink'
            style="background-color: #ffffff"/>
      </p>
    </div>
    <br>
    <br>
   <div>
     <div v-animate.repeat.fade="'slide-left'">
       <h1 class="textTitle title">ACERCA DE MI</h1>
       <div >
        <img src="../public/img/foto.jpg" class="center" style="border-radius: 100%;">
       </div>
       <br>
       <div class="paragraph">
         <p class="text">
           Soy estudiante de noveno semestre de ingeniería de sistemas, apasionado por la programación desde mis inicios en la carrera.
           cuento con un año de experiencia como desarrollador fullstack. Poseo habilidades de trabajo en equipo,
           adaptación al cambio, disciplina, responsabilidad y organización. Cuento con la capacidad y la disposición
           de siempre aprender cosas nuevas que me hagan mas competente en el mercado actual, puesto que la tecnología
           avanza y yo como desarrollador debo avanzar con ella.
         </p>
         <a-button type="primary" @click="downloadCV" class="text">
           <a-icon type="download" />&nbsp; Descargar CV
         </a-button>
       </div>
     </div>
     <br>
     <br>
     <div>
       <h1 class="textTitle title">EXPERIENCIA PROFESIONAL</h1>
       <div class="paragraph">
         <p class="text">
           <b>IRED</b>
           <br>
           <b>Desarrollador FullStack</b>
         </p>
         <a-timeline>
           <a-timeline-item class="text subtext">
             Desarrollo de Backend utilizando PHP o el framework de PHP Laravel
           </a-timeline-item>
           <a-timeline-item class="text subtext">
             Desarrollo de Frontend utilizando HTML, CSS, JavaScript y Vue.js
           </a-timeline-item>
           <a-timeline-item class="text subtext">
             Diseño y desarrollo de Api Restful
           </a-timeline-item>
           <a-timeline-item class="text subtext">
             Gestión de Bases de Datos con MySQL
           </a-timeline-item>
         </a-timeline>
       </div>
     </div>
     <div v-animate.repeat.fade="'slide-right'">
       <h1 class="textTitle title">STACK</h1>
       <div class="paragraph">
         <a-row :gutter="[16,16]">
           <a-col :span="8">
            <img src="../public/img/html.png" width="100%">
           </a-col>
           <a-col :span="8">
             <img src="../public/img/css.png" width="100%">
           </a-col>
           <a-col :span="8">
             <img src="../public/img/javascript.png" width="100%">
           </a-col>
         </a-row>
         <a-row :gutter="[16,16]">
           <a-col :span="8">
             <img src="../public/img/php.png" width="100%">
           </a-col>
           <a-col :span="8">
             <img src="../public/img/laravel.png" width="100%">
           </a-col>
           <a-col :span="8">
             <img src="../public/img/vue.png" width="100%">
           </a-col>
         </a-row>
         <a-row :gutter="[16,16]">
           <a-col :span="8"></a-col>
           <a-col :span="8">
             <img src="../public/img/wordpress.png" width="100%">
           </a-col>
           <a-col :span="8"></a-col>
         </a-row>
       </div>
     </div>
     <br>
     <br>
     <div v-animate.repeat.fade="'slide-left'">
       <h1 class="textTitle title">MIS PROYECTOS</h1>
       <div class="paragraph">
         <a-timeline>
           <a-timeline-item class="text subtext">
             <p><b>Meetingfield</b></p>
             <p><a target="_blank" href="https://meetingfield.com">meetingfield.com</a></p>
             <p>
               Gestor de eventos virtuales y/o presenciales desarrollado utilizando
               HTML, JS, CSS en su front-end y PHP en su back-end
             </p>
           </a-timeline-item>
           <a-timeline-item class="text subtext">
             <p><b>Tecnomyl</b></p>
             <p><a target="_blank" href="https://www.tecnomyl.com.py">www.tecnomyl.com.py</a></p>
             <p>
               Sistema de fidelizacion del cliente desarrollado utilizando
               HTML, JS, CSS en su front-end y Laravel en su back-end
             </p>
           </a-timeline-item>
           <a-timeline-item class="text subtext">
             <p><b>Fiorella Team Rita</b></p>
             <p><a target="_blank" href="https://fiorellateamrita.com">fiorellateamrita.com</a></p>
             <p>
               Desarrollo front-end utilizando WordPress
             </p>
           </a-timeline-item>
           <a-timeline-item class="text subtext">
             <p><b>Las Americas Real Estate</b></p>
             <p><a target="_blank" href="https://lasamericasrealestate.com">lasamericasrealestate.com</a></p>
             <p>
               Desarrollo front-end utilizando WordPress
             </p>
           </a-timeline-item>
           <a-timeline-item class="text subtext">
             <p><b>Agora</b></p>
             <p>En desarrollo</p>
             <p>Desarrollo de un sistema de inventarios utilizando Vue.JS y Laravel</p>
           </a-timeline-item>
         </a-timeline>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods:{
    downloadCV(){
      window.open('https://drive.google.com/uc?id=15R5Puttq2iJl_n5n6McD0n2l6f-8WyhK&export=download&authuser=0','_blank');
    }
  }
}
</script>

<style>
.image{
  position: relative;
  right: 0;
  bottom: 0;
}

.textImage{
  position: absolute;
  top: 50%;
  right: 35%;
  font-weight: bold;
  font-family: OCR A Std, monospace;
  color: #ffffff;
  font-size: 2.5vw;
}

.textTitle{
  font-family: OCR A Std, monospace;
  color: #000048;
  font-size: 2.5vw;
}

.title{
  text-align: center;
  font-weight: bold;
}

.paragraph{
  margin-right: 20%;
  margin-left: 20%;
}

p{
  text-align: justify;
}

.text{
  text-align: justify;
  font-size: 1.7vw;
  font-family: OCR A Std, monospace;
  color: #000048;
}

.subtext {
  font-size: 1.3vw !important;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}


.animate {
  transition-delay: .5s;
  transition-duration: 1.5s;
  transition-timing-function: ease-in;
}

.slide-left {
  transform: translateX(-500px);
}

.slide-left.animate-active {
  transform: translateX(0);
}

.slide-right {
  transform: translateX(500px);
}

.slide-right.animate-active {
  transform: translateX(0);
}
</style>
