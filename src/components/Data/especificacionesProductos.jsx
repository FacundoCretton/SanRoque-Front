import React from "react";


export const productsSpecifications = {

    1: {
        name: (
          <React.Fragment>
            PREMIUM <br /> PERRO ADULTO LARGE BREED 25% PROTEINAS
          </React.Fragment>
        ),
        category: 'Perros',
        desc: `Advance Premium Large Breed favorece el proceso de digestión de tu perro, fortalece el sistema inmune y gracias a la inclusión de pulpa de remolacha, mejorará la consistencia de las deposiciones.`,
        beneficiosInfo: [
          'Pulpa de remolacha: Excelente fuente de fibras. Ayuda a regular la actividad intestinal y la flora digestiva, beneficiosInfoa para el organismo de tu perro.',
          'Extracto de romero: Poderoso antioxidante que brinda una mayor absorción de micronutrientes, mejorando la digestión.',
          'Aceite de pescado: Con ácidos grasos omega-3 que fortalecen el corazón, previenen alergias y benefician el pelaje.',
          'Semillas de lino: Fuente natural de fibras, ideal para que tu mascota mantenga su peso.'
        ],
        composicion: {
          humedad: { min: null, max: 10 },
          proteinaBruta: { min: 25, max: null },
          extractoEtereo: { min: 14, max: null },
          fibraCruda: { min: null, max: 5 },
          mineralesTotales: { min: null, max: 8.5 },
          calcio: { min: 0.9, max: 1.5 },
          fosforo: { min: 0.7, max: 1.2 }
        },
        caracteristicas:{
          
          peso: '20kg',
          marca: 'Advance Bio',
          raza: 'Todas',
          tamaño: 'Grande',
          edad: 'Adultos (Más de 12 meses)',
          tipo: 'Seco',
          sabor: 'Premium',
          ingredientes: 'Carne de cordero, arroz, maíz, etc.',
          descripcion: 'Acá va un texto de prueba',

        },

        consejos:[

            "Recomendado para perro adulto.",
            "Formulado especialmente para raza grande.",
            "Comida seca.",
            "Sabor: cordero, arroz.",
            "Sabor y nutrición completa para tu mascota.",
            "Imágenes ilustrativas. El paquete puede variar según peso."
        ],
    },

    2: {
        name: (
          <React.Fragment>
            PREMIUM <br /> PERRO ADULTO SMALL BREED 28% PROTEINAS
          </React.Fragment>
        ),
        category: 'Perros',
        desc: `El tamaño de las croquetas, especial para mandíbulas pequeñas, la excelente palatabilidad y el contenido de ingredientes frescos de la más alta calidad, hacen a Advance Small Breed la receta ideal para los perros más exigentes.`,
        beneficiosInfo: [
          'Extracto de Yucca: Ayuda a formar una capa protectora en las paredes intestinales impidiendo que sufran daños. Regula las fermentaciones intestinales favoreciendo la producción de ácidos grasos beneficiosInfoos y evitando la producción de amoniaco.',
          'Excelente palatabilidad: Advance Small Breed provee el equilibrio perfecto de proteínas y grasas.',
          'Croquetas especiales para mandíbulas pequeñas.',
          'Defensas naturales fortalecidas: Con minerales, ácidos grasos esenciales y prebióticos para promover de forma natural el sistema inmunológico.'
        ],
        composicion: {
          "Humedad": { min: null, max: 10 },
          "Proteína bruta": { min: 28, max: null },
          "Extracto etéreo": { min: 15, max: null },
          "Fibra cruda": { min: null, max: 5 },
          "Minerales totales": { min: null, max: 8.5 },
          "Calcio": { min: 0.9, max: 1.5 },
          "Fósforo": { min: 0.7, max: 1.2 }
        },
        peso: '12kg',
        marca: 'Advance Bio',
        raza: 'Razas pequeñas',
        tamaño: 'Pequeño',
        edad: 'Adultos (Más de 18 meses)',
        tipo: 'Seco',
        sabor: 'Premium',
        ingredientes: 'Carne de cordero, arroz, maíz, etc.',
        descripcion: 'Acá va un texto de prueba',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
    },

    3: {
        name: (
          <React.Fragment>
            PREMIUM <br /> GATO ADULTO ALL BREEDS URINARY 34% PROTEINAS
          </React.Fragment>
        ),
        category: 'Gatos',
        desc: `Advance Urinary para gatos adultos contiene el equilibrio perfecto de minerales que ayudan a mantener un pH urinario óptimo.`,
        beneficiosInfo: [
          'Enriquecido con taurina: Considerado un aminoácido esencial para los gatos. Fortalece el sistema inmunológico, es fundamental para la visión, digestión y buen funcionamiento del corazón.',
          'Tracto urinario saludable: Controla el pH urinario y contiene niveles moderados de magnesio, lo que contribuye a disminuir los riesgos de formación de cálculos de estruvita y oxalato, principales causantes de obstrucciones de las vías urinarias.',
          'Control de bola de pelos: La suplementación con fibras de baja fermentación, colabora con la eliminación de las bolas de pelo a través del tracto digestivo.',
          'Piel sana y pelo brillante: El aporte ácidos grasos esenciales Omega 3 y Omega 6 ayudan a proteger la piel y a mantener un pelaje brillante y sedoso.'
        ],
        composicion: {
            "Humedad": { min: null, max: 10 },
            "Proteína Bruta": { min: 34, max: null },
            "Extracto Etéreo": { min: 14, max: null },
            "Fibra Cruda": { min: null, max: 3.5 },
            "Minerales Totales": { min: null, max: 7.5 },
            "Calcio": { min: 0.8, max: 1.2 },
            "Fósforo": { min: 0.5, max: 0.9 }
          },
        peso: '8kg',
        marca: 'Advance Bio',
        raza: 'Todas',
        edad: 'Adultos (Más de 12 meses)',
        tipo: 'Seco',
        sabor: 'Pollo y Arroz',
        ingredientes: 'Pollo, arroz, maíz, etc.',
        descripcion: 'Acá va un texto de prueba',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
    },
    

    4:{
        name: (
          <React.Fragment>
            PREMIUM <br /> CACHORRO ALL BREEDS <br /> PREMIUM <br /> 28% PROTEINAS
          </React.Fragment>
        ),
        category: 'Perros',
        desc: `Advance cachorros contiene una equilibrada mezcla de proteínas y grasas que favorecen un correcto desarrollo y mantenimiento del sistema muscular. Sus croquetas han sido especialmente desarrolladas para su porte y edad. Además de su exquisito sabor y el aporte de la pulpa de remolacha, semillas de lino y extracto de romero, dan como resultado una receta saludable y deliciosa.`,
        beneficiosInfo: [
          'Crecimiento de huesos y dientes fuertes – Advance cachorros contiene la proporción justa de calcio y fósforo con la finalidad de fortalecer los huesos y dientes de tu cachorro.',
          'Sistema inmunológico fuerte – Los cachorros al estar en crecimiento necesitan ciertos nutrientes para reforzar sus defensas. Advance ofrece una combinación adecuada de proteínas, ácidos grasos esenciales, vitaminas y minerales que mantendrán fuerte el sistema inmunológico.',
          'Mejor digestión – La pulpa de remolacha es considerada una excelente fuente de fibra para tu cachorro. Mejora la digestión, la absorción de nutrientes y tiene un efecto protector sobre el sistema digestivo.',
          'Excelente palatabilidad – Advance contiene ingredientes frescos controlados e inspeccionados desde origen.'
        ],
        composicion: {
          "Humedad": { min: null, max: 10 },
          "Proteína Bruta": { min: 28, max: null },
          "Extracto Etéreo": { min: 14, max: null },
          "Fibra Cruda": { min: null, max: 4.0 },
          "Minerales Totales": { min: null, max: 6.0 },
          "Calcio": { min: 0.8, max: 1.2 },
          "Fósforo": { min: 0.6, max: 1.0 }
        },
        peso: '12kg',
        marca: 'Advance Bio',
        raza: 'Todas',
        tamaño: 'Pequeño',
        edad: 'Cachorros (Menos de 12 meses)',
        tipo: 'Seco',
        sabor: 'Sin especificar',
        ingredientes: 'Ingredientes: Carnes y subproductos animales (pollo 14%, pavo 4%), cereales (maíz 14%, trigo 4%), extractos de proteínas vegetales, aceites y grasas, subproductos de origen vegetal (pulpa de remolacha 2%), verduras (guisantes 4% en los gránulos verdes, zanahorias 0,5% en los gránulos naranjas, espinacas 0,5% en los gránulos verdes), sustancias minerales.',
        descripcion: 'Acá va un texto de prueba',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
    },

    5: {
        name: (
          <React.Fragment>
            PREMIUM <br /> PERRO ADULTO SMALL BREED CORDERO 25% PROTEINAS
          </React.Fragment>
        ),
        category: 'Perros',
        desc: `Advance Cordero es un alimento formulado con proteína animal de cordero, que por su baja alergenicidad ayuda a disminuir las probabilidades de aparición de alteraciones en la piel y sistema digestivo.`,
        beneficiosInfo: [
          'Proteína de cordero: Proteína alternativa con aminoácidos esenciales para un cuidado excepcional de la piel.',
          'Piel sana: Los ácidos grasos Omega 3 y 6, junto con el Zinc, la metionina y la Vitamina A refuerzan la integridad de la barrera cutánea, promoviendo un óptimo estado general de la piel y pelo brilloso.',
          'Masa muscular magra: La proteína de cordero colabora con la formación de masa muscular magra debido a su alta digestibilidad y bajo contenido en grasas saturadas.'
        ],
        composicion: {
          humedad: { min: 0, max: 10 },
          proteinaBruta: { min: 25, max: null },
          extractoEtereo: { min: 14, max: null },
          fibraCruda: { min: null, max: 5 },
          mineralesTotales: { min: null, max: 8.5 },
          calcio: { min: 0.9, max: 1.5 },
          fosforo: { min: 0.7, max: 1.2 }
        },
        peso: '12kg',
        marca: 'Advance Bio',
        raza: 'Todas',
        tamaño: 'Pequeño',
        edad: 'Adultos (Más de 18 meses)',
        tipo: 'Seco',
        sabor: 'Cordero',
        ingredientes: 'Carne de cordero, arroz, maíz, etc.',
        descripcion: 'Acá va un texto de prueba',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
    },
      

    
    6:{
        name: (
          <React.Fragment>
            PREMIUM <br /> PERRO ADULTO LARGE BREED CORDERO <br /> 25% PROTEINAS
          </React.Fragment>
        ),
        category: 'Perros',
        desc: `Advance Cordero y Arroz es un alimento formulado con proteína animal de cordero, que por su baja alergenicidad ayuda a disminuir las probabilidades de aparición de alteraciones en la piel y sistema digestivo.`,
        beneficiosInfo: [
          'Proteina de cordero: Proteina alternativa con aminoácidos esenciales para un cuidado excepcional de la piel.',
          'Piel sana: Los ácidos grasos Omega 3 y 6, junto con el Zinc, la metionina y la Vitamina A refuerzan la integridad de la barrera cutánea, promoviendo un óptimo estado general de la piel y pelo brilloso.',
          'Masa muscular magra: La proteina de cordero colabora con la formación de masa muscular magra debido a su alta digestibilidad y bajo contenido en grasas saturadas.'
        ],
        composicion: {
          "Humedad": { min: null, max: 10 },
          "Proteína Bruta": { min: 25, max: null },
          "Extracto Etéreo": { min: 14, max: null },
          "Fibra Cruda": { min: null, max: 5 },
          "Minerales Totales": { min: null, max: 8.5 },
          "Calcio": { min: 0.9, max: 1.5 },
          "Fósforo": { min: 0.7, max: 1.2 }
        },
        peso: '15kg',
        marca: 'Advance Bio',
        raza: 'Todas',
        tamaño: 'Grande',
        edad: 'Adultos (Más de 18 meses)',
        tipo: 'Seco',
        sabor: 'Cordero',
        ingredientes: 'Carne de cordero, arroz, maíz, etc.',
        descripcion: 'Acá va un texto de prueba',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
    },
      


    7:{
        name: (
          <React.Fragment>
            PREMIUM <br /> PERRO ADULTO GIANT BREED CORDERO <br /> 25% PROTEINAS
          </React.Fragment>
        ),
        category: 'Perros',
        desc: `Advance Cordero y Arroz es un alimento formulado con proteína animal de cordero, que por su baja alergenicidad ayuda a disminuir las probabilidades de aparición de alteraciones en la piel y sistema digestivo.`,
        beneficiosInfo: [
          'Proteina de cordero: Proteina alternativa con aminoácidos esenciales para un cuidado excepcional de la piel.',
          'Piel sana: Los ácidos grasos Omega 3 y 6, junto con el Zinc, la metionina y la Vitamina A refuerzan la integridad de la barrera cutánea, promoviendo un óptimo estado general de la piel y pelo brilloso.',
          'Masa muscular magra: La proteina de cordero colabora con la formación de masa muscular magra debido a su alta digestibilidad y bajo contenido en grasas saturadas.'
        ],
        composicion: {
          "Humedad": { min: null, max: 10 },
          "Proteína Bruta": { min: 30, max: null },
          "Extracto Etéreo": { min: 15, max: null },
          "Fibra Cruda": { min: null, max: 2.5 },
          "Minerales Totales": { min: null, max: 8.0 },
          "Calcio": { min: 0.7, max: 1.2 },
          "Fósforo": { min: 0.9, max: 1.0 }
        },
        peso: '15kg',
        marca: 'Advance Bio',
        raza: 'Todas',
        tamaño: 'Gigante',
        edad: 'Adultos (Más de 18 meses)',
        tipo: 'Seco',
        sabor: 'Cordero',
        ingredientes: 'Carne de cordero, arroz, maíz, etc.',
        descripcion: 'Acá va un texto de prueba',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
    },
      

    8:{
        name: (
          <React.Fragment>
            PREMIUM <br /> GATO ADULTO ALL BREEDS SALMÓN <br /> 30% PROTEINAS
          </React.Fragment>
        ),
        category: 'Gatos',
        desc: `Advance Premium para gatos adultos cuida de su intestino, estimula la flora bacteriana y favorece la regeneración de su pelo y piel para que siempre lo veas sano y feliz.`,
        beneficiosInfo: [
          'Excelente palatabilidad: En Advance siempre utilizamos ingredientes frescos, controlados e inspeccionados desde origen.',
          'Control de PH urinario: Para un tracto urinario saludable.',
          'Enriquecido con taurina: Considerado un aminoácido esencial para los gatos. Fortalece el sistema inmunológico, es fundamental para la visión, digestión y buen funcionamiento del corazón.',
          'Alta digestibilidad: Balance nutricional con la mezcla perfecta entre proteínas, grasa, carbohidratos, vitaminas y minerales.'
        ],
        composicion: {
          "Humedad": { min: null, max: 10 },
          "Proteína Bruta": { min: 30, max: null },
          "Extracto Etéreo": { min: 12, max: null },
          "Fibra Cruda": { min: null, max: 3.5 },
          "Minerales Totales": { min: null, max: 7.5 },
          "Calcio": { min: 1.2, max: 2.0 },
          "Fósforo": { min: 0.6, max: 1.2 }
        },
        peso: '8kg',
        marca: 'Advance Bio',
        raza: 'Todas',
        tamaño: 'Todos',
        edad: 'Adultos (Más de 12 meses)',
        tipo: 'Seco',
        sabor: 'Salmón',
        ingredientes: 'Salmón, arroz, maíz, etc.',
        descripcion: 'Acá va un texto de prueba',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
    },
      

    9:{
        name: (
          <React.Fragment>
            PREMIUM <br /> CACHORRO GIANT BREED <br /> 30% PROTEINAS
          </React.Fragment>
        ),
        category: 'Perros',
        desc: `Advance Giant Breed Premium para cachorros es un alimento de alta calidad formulado específicamente para satisfacer las necesidades nutricionales de los cachorros de razas gigantes. Con un nivel de proteínas del 30%, este alimento proporciona el equilibrio adecuado de nutrientes para un crecimiento saludable y un desarrollo óptimo de tu cachorro. Además, está enriquecido con ácidos grasos que protegen las articulaciones y cartílagos, promoviendo huesos fuertes y sanos. La croqueta GIANT está diseñada para adaptarse a la mordida de tu mascota, asegurando una alimentación cómoda y satisfactoria.`,
        beneficiosInfo: [
          'Ayuda a mantener el peso corporal adecuado y evitar el sobrepeso.',
          'Protege sus cartílagos y articulaciones gracias al aporte óptimo de ácidos grasos.',
          'Conserva sus huesos sanos y fuertes.',
          'Fortalece el sistema inmune y cardiovascular',
          'Croquetas GIANT adaptadas a la mordida de tu mascota.'
        ],
        composicion: {
          "Humedad": { min: null, max: 10 },
          "Proteína Bruta": { min: 30, max: null },
          "Extracto Etéreo": { min: 15, max: null },
          "Fibra Cruda": { min: null, max: 2.5 },
          "Minerales Totales": { min: null, max: 8.0 },
          "Calcio": { min: 0.7, max: 1.2 },
          "Fósforo": { min: 0.9, max: 1.0 }
        },
        caracteristicas:{
          "peso": '15kg',
          "marca": 'Advance Bio',
          "raza": 'Todas',
          "tamaño": 'Pequeño',
          "edad": 'Cachorros (Hasta 12 meses)',
          "tipo": 'Seco',
          "sabor": '-',
          "ingredientes": '-',

        },
        
        descripcion: 'Perros que en edad adulta van a tener un peso de +40 kg',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
      },

    10:{
        name: (
          <React.Fragment>
            PREMIUM <br /> PERRO ADULTO LARGE BREED WEIGHT CONTROL <br /> 25% PROTEINAS
          </React.Fragment>
        ),
        category: 'Perros',
        desc: `Advance Weight Control Large Breed es un alimento especialmente formulado para perros adultos de razas grandes con tendencia al sobrepeso o con necesidades de control de peso. Con un reducido nivel de grasa y una cantidad óptima de proteínas, carbohidratos, vitaminas y minerales, este alimento proporciona una nutrición equilibrada para ayudar a mantener un peso corporal saludable y promover la salud general de tu perro.`,
        beneficiosInfo: [
          'Piel sana: Los ácidos grasos Omega 3 y 6, junto con el Zinc, la metionina y la Vitamina A refuerzan la integridad de la barrera cutánea, promoviendo un óptimo estado general de la piel y pelo brilloso.',
          'Extracto de Yucca: Ayuda a formar una capa protectora en las paredes intestinales impidiendo que sufran daños. Regula las fermentaciones intestinales favoreciendo la producción de ácidos grasos beneficiosInfoos y evitando la producción de amoniaco.',
          'Pulpa de remolacha: Excelente fuente de fibras. Ayuda a regular la actividad intestinal y la flora digestiva, beneficiosInfoa para el organismo de tu perro.'
        ],
        composicion: {
          "Proteína Bruta": { min: 25, max: null },
          "Extracto Etéreo": { min: null, max: null },
          "Fibra Cruda": { min: null, max: null },
          "Minerales Totales": { min: null, max: null },
          "Calcio": { min: null, max: null },
          "Fósforo": { min: null, max: null }
        },
        peso: '15kg',
        marca: 'Advance Bio',
        raza: 'Grandes',
        tamaño: 'Todos',
        edad: 'Adultos (Más de 18 meses)',
        tipo: 'Seco',
        sabor: '-',
        ingredientes: 'Ingredientes de alta calidad específicamente formulados para el control de peso y la salud general del perro.',
        descripcion: 'Control de peso',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
      },

    11:{
        material: 'Goma',
        tamaño: 'Grande',
        descripcion: 'Acà va un texto de prueba',
        consejos:[

          "Recomendado para perro adulto.",
          "Formulado especialmente para raza grande.",
          "Comida seca.",
          "Sabor: cordero, arroz.",
          "Sabor y nutrición completa para tu mascota.",
          "Imágenes ilustrativas. El paquete puede variar según peso."
      ],
    },

}