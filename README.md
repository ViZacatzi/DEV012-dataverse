# Dataverse

## Índice

* [1. Definición del producto](#1-definicion-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Funcionalidades](#3-funcionalidades)
* [3. Diseño de la Interfaz de Usuaria](#3-diseño-de-la-interfaz-de-usuaria)

***

## 1. Definición del producto

Todos los días nos enfrentamos a una cantidad de datos, que por si mismos son de poca utilidad. 
Y para entenderla información de forma más puntual, que sea facil de leer y de procesar estos 
datos, se crean interfaces que contienen vizualizaciones, amigables y entendibles por las
usuarias.

Pensando en eso, el proyecto se estructura de forma sencilla, para que cualquier persona
tenga la mejor experiencia al utilizarla, con inforcacín concreta colores amigables a la
vista.


## 2. Historias de usuario

Este proyecto es una página web que se considero a las necesidades de usuarias que 
encontramos, entre las principales, las siguientes:

Como usuario(a) me gustaría al entrar a la pagina web, y poder ver a un diseño suave 
y sencillo donde se resalte a las mujeres en tarjetas, con su titulo y profesión que
las hizo grandes a traves de la historia.

Como usuario(a) me gustaría ver a las mujeres en las tarjetas  donde visualice su foto, 
un texto con su nombre, la fecha de nacimiento y país de origen. Para identificar donde
hay una creciente luchando de mujeres, para ser grandes.

Como usuario(a) quiero entrar a la pagina de “Grandes mujeres de la Historia” y tener una 
interación con las tarjetas y poder filtrar por rama en que se desarrollo, es decir, 
ciencia, artes, musica, política, etc.

Como usuario(a) quiero además poder ordenar alfabeticamente a todas las tarjetas como a las
targetas que han sido anteriormente filtradas por su disiplina.

La página esta pensanda para apoyo en la docencia, haciendola una pagina dinámica, donde el
usuario(a) podra encontrar a mujeres con distintas ramas que desarrollaron papeles importantes
en su disciplina y que las resaltara con la información concreta. Para que al ser mostrada
tanto en clases sea atractiva y con información muy sencilla.

La página también es diseñada para seguir inspirando a nuevas generaciones de mujeres que al ver 
e interactuar con la cantidad de mujeres destacadas se den cuentan que no están solas, como mujeres 
y quieran buscar su crecimiento.


## 3. Funcionalidades

La página web permite **visualizar la data, presentada en forma de tarjetas, filtra la misma, la ordenar
y calcular la estadística del total de mujeres latinoamericanas y extrangeras**.

Entre las funcionalidades mínimas que tiene, encontramos las siguientes:

* La aplicación permite a la usuaria ver los items de la data en una visualización,
  de tipo tarjetas. **Cada una de las tarjetas contiene en un elemento imagen, la
  información relevante**

* Las tarjetas resaltan los valores de las propiedades de la data que
  le interesaría a la usuaria ver. Por ejemplo: imagen, nombre, fecha de nacimiento,
  lugar de nacimiento y la disciplina que desarrollo, en ese orden.

* La interfaz se estructuro semánticamente con el estándar de [microdatos], usando los
  atributos [`itemscope`], [`itemtype`] y el atributo [`itemprop`].

* La aplicación calcula y visualiza el total de mujeres latinoamericanas y el total de
  mujeres extranjeras de la data, y se visualiza al inicio de la pagina

* La aplicación permite a la usuaria filtrar la data. Usando el elemento [`<select>`]
con [un atributo de datos] mas especificamente diremos que es por la disiplina en que
se desempeñaron las mujeres en la historia y que las hizo grandes.

* La aplicación permite a la usuaria ordenar la data.
  - Y al igual que en la parte del filtro usamos el elemento `<select>` para ordenar
    y en este caso será por el atributo `name` ordenando por su nombre.

* La funcionalidad del ordenamiento opera además sobre la data filtrada.
  Es decir, tanto ordena la data completa al inicio de la pagina como ordena
  la data cuando ya se aplico el filtro por disciplina de forma ascendentemente y
  descendentemente.

* La aplicación permite a la usuaria reiniciar la aplicación, limpiando
  filtros y ordenamiento, con un `<button>` con un atributo de datos
  `data-testid="button-clear"`.


## 4. Diseño de la Interfaz de Usuaria


#### Prompt utilizado

El prompt utilizado para generar los datos, fue chatGTP y para la generación de 
las imagenes utilizamos el generador de imagenes de Microsoft Bing aqui mostramos
las capturas de pantalla.


![Prompt utilizado de ChatGTP](https://github.com/ViZacatzi/DEV012-dataverse/assets/145049256/e26b345b-a718-4971-8658-015dec365c77)

Prompt de ChatGTP

<img width="1440" alt="Generador de Imagenes" src="https://github.com/ViZacatzi/DEV012-dataverse/assets/145049256/7a889ef2-dcd5-4583-872c-dd8a5de55570">

Genenrador de imagenes de Microsoft Bing



##### Prototipo de alta fidelidad

Para este proyecto se utilizo [Figma] para hacer el prototipo de alta fidelidad
del cual nos basamos para hacerlo en la pagina web, se inicio con un diseño
sencillo, amigable a los ojos, con una paleta de colores suave, tonos en pastel
e intentando resaltar en las tarjetas la imagen de las protagonistas, en este 
caso especifico a las mujeres.

<img width="370" alt="Prototipo computadoras" src="https://github.com/ViZacatzi/DEV012-dataverse/assets/145049256/cd74ceee-f3d6-4253-95cd-6b6234218274">

**Prototipo para computadora**

<img width="210" alt="Prototipo para movil" src="https://github.com/ViZacatzi/DEV012-dataverse/assets/145049256/62cc0f91-993a-4f16-ad6f-d07c25c73cac">

**Prototipo movil**


#### Implementación de la Interfaz de Usuaria (HTML/CSS/JS)

El diseño debe representa el ideal de la página, sin embargo, con forme aplicabamos
el diseño "ideal" a la pagina nos enfrentamos algunos obstaculos que dificultaron
realizarlo de esa manera, sin embargo, la solución al problema se creo de manera
más eficiente y aumentando los tonos rosas que destacan a todas las mujeres inspirando
tranquilidad, serenidad, feminidad y la implementación resulto de manera más favorable a
lo previsto. Finalmente el resultado

<img width="474" alt="Diseño movil web" src="https://github.com/ViZacatzi/DEV012-dataverse/assets/145049256/93af7d62-89f2-4263-aa39-cef7e4d53a35">

**Diseño movil**

<img width="1440" alt="Diseño pagina Web" src="https://github.com/ViZacatzi/DEV012-dataverse/assets/145049256/67291df9-d41f-40c7-871c-4c7a2c921cec">

**Diseño Web**

