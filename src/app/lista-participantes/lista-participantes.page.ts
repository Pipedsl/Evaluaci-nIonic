import { Component, OnInit } from '@angular/core';
import { IParticipantes } from './types/IParticipantes';

@Component({
  selector: 'app-lista-participantes',
  templateUrl: './lista-participantes.page.html',
  styleUrls: ['./lista-participantes.page.scss'],
})
export class ListaParticipantesPage implements OnInit {
  public participantes: IParticipantes[] = [
    {
      "ID": 1,
      "foto": "https://api.slingacademy.com/public/sample-photos/1.jpeg",
      "Nombre": "María",
      "Apellido": "González",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ligula in felis tincidunt egestas.",
      "Actividad": "Conferencia Internacional",
      "Hora_entrada": "22-09-2023 09:00",
      "Hora_salida": "22-09-2023 12:00",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 2,
      "foto": "https://api.slingacademy.com/public/sample-photos/2.jpeg",
      "Nombre": "Juan",
      "Apellido": "Pérez",
      "Descripcion": "Sed ac libero vel sapien viverra suscipit. Nulla facilisi.",
      "Actividad": "Seminario de Tecnología",
      "Hora_entrada": "23-09-2023 14:30",
      "Hora_salida": "23-09-2023 17:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 3,
      "foto": "https://api.slingacademy.com/public/sample-photos/3.jpeg",
      "Nombre": "Luis",
      "Apellido": "Martínez",
      "Descripcion": "Pellentesque nec tortor vel velit laoreet tristique ut quis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      "Actividad": "Exposición de Arte",
      "Hora_entrada": "24-09-2023 11:15",
      "Hora_salida": "24-09-2023 14:15",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 4,
      "foto": "https://api.slingacademy.com/public/sample-photos/4.jpeg",
      "Nombre": "Ana",
      "Apellido": "López",
      "Descripcion": "Fusce vel congue nisl. Integer nec eros nec mauris bibendum lacinia.",
      "Actividad": "Conferencia de Marketing",
      "Hora_entrada": "25-09-2023 10:45",
      "Hora_salida": "25-09-2023 13:45",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 5,
      "foto": "https://api.slingacademy.com/public/sample-photos/5.jpeg",
      "Nombre": "Pedro",
      "Apellido": "Ramírez",
      "Descripcion": "Vestibulum sit amet quam vel metus rhoncus dictum. Aliquam in metus non leo convallis tristique.",
      "Actividad": "Seminario de Finanzas",
      "Hora_entrada": "26-09-2023 09:30",
      "Hora_salida": "26-09-2023 12:30",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 6,
      "foto": "https://api.slingacademy.com/public/sample-photos/6.jpeg",
      "Nombre": "Isabel",
      "Apellido": "Gómez",
      "Descripcion": "Phasellus in tellus id nisl tincidunt blandit. Cras consectetur vehicula tortor id dapibus.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "27-09-2023 15:00",
      "Hora_salida": "27-09-2023 18:00",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 7,
      "foto": "https://api.slingacademy.com/public/sample-photos/7.jpeg",
      "Nombre": "Eduardo",
      "Apellido": "Fernández",
      "Descripcion": "Vivamus interdum nunc et lacus aliquet, a convallis massa tincidunt. Aenean ac erat at turpis facilisis malesuada.",
      "Actividad": "Exposición de Tecnología",
      "Hora_entrada": "28-09-2023 11:30",
      "Hora_salida": "28-09-2023 14:30",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 8,
      "foto": "https://api.slingacademy.com/public/sample-photos/8.jpeg",
      "Nombre": "Laura",
      "Apellido": "Díaz",
      "Descripcion": "Ut tincidunt justo eu eleifend vulputate. Fusce vel lectus vel justo suscipit tincidunt.",
      "Actividad": "Conferencia de Arte",
      "Hora_entrada": "29-09-2023 10:00",
      "Hora_salida": "29-09-2023 13:00",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 9,
      "foto": "https://api.slingacademy.com/public/sample-photos/9.jpeg",
      "Nombre": "Carlos",
      "Apellido": "Rodríguez",
      "Descripcion": "Aenean cursus odio sit amet diam efficitur, at egestas nulla bibendum. Nulla ut tortor leo.",
      "Actividad": "Seminario de Marketing Digital",
      "Hora_entrada": "30-09-2023 09:45",
      "Hora_salida": "30-09-2023 12:45",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 10,
      "foto": "https://api.slingacademy.com/public/sample-photos/10.jpeg",
      "Nombre": "Carmen",
      "Apellido": "Hernández",
      "Descripcion": "Mauris vehicula ex nec eros facilisis, non convallis odio varius. Cras sit amet turpis id velit tincidunt tincidunt.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "01-10-2023 15:30",
      "Hora_salida": "01-10-2023 18:30",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 11,
      "foto": "https://api.slingacademy.com/public/sample-photos/11.jpeg",
      "Nombre": "Roberto",
      "Apellido": "García",
      "Descripcion": "Pellentesque feugiat libero in sapien facilisis, eget fringilla enim viverra. Integer tristique arcu vitae metus tristique, quis aliquet turpis tristique.",
      "Actividad": "Exposición de Arte",
      "Hora_entrada": "02-10-2023 11:00",
      "Hora_salida": "02-10-2023 14:00",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 12,
      "foto": "https://api.slingacademy.com/public/sample-photos/12.jpeg",
      "Nombre": "Patricia",
      "Apellido": "López",
      "Descripcion": "Vestibulum efficitur velit eget fringilla. Praesent vel ultrices dolor, a sagittis felis.",
      "Actividad": "Conferencia Internacional",
      "Hora_entrada": "03-10-2023 10:15",
      "Hora_salida": "03-10-2023 13:15",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 13,
      "foto": "https://api.slingacademy.com/public/sample-photos/13.jpeg",
      "Nombre": "Daniel",
      "Apellido": "Martínez",
      "Descripcion": "Integer ut quam eget quam dapibus tincidunt. Fusce fringilla, nunc eu mattis dictum, libero quam accumsan dui, a gravida libero metus a justo.",
      "Actividad": "Seminario de Tecnología",
      "Hora_entrada": "04-10-2023 14:45",
      "Hora_salida": "04-10-2023 17:45",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 14,
      "foto": "https://api.slingacademy.com/public/sample-photos/14.jpeg",
      "Nombre": "Sofía",
      "Apellido": "Fernández",
      "Descripcion": "Duis euismod sapien eget lectus finibus, quis scelerisque tortor efficitur. Sed nec vehicula ante, eu facilisis urna.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "05-10-2023 11:30",
      "Hora_salida": "05-10-2023 14:30",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 15,
      "foto": "https://api.slingacademy.com/public/sample-photos/15.jpeg",
      "Nombre": "Javier",
      "Apellido": "Díaz",
      "Descripcion": "Nunc suscipit mi in erat feugiat, sit amet tincidunt risus tincidunt. Fusce ut arcu vehicula, egestas arcu non, tristique odio.",
      "Actividad": "Exposición de Tecnología",
      "Hora_entrada": "06-10-2023 09:00",
      "Hora_salida": "06-10-2023 12:00",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 16,
      "foto": "https://api.slingacademy.com/public/sample-photos/16.jpeg",
      "Nombre": "Elena",
      "Apellido": "Gómez",
      "Descripcion": "Sed facilisis libero a scelerisque. In quis tincidunt sapien.",
      "Actividad": "Conferencia de Arte",
      "Hora_entrada": "07-10-2023 15:15",
      "Hora_salida": "07-10-2023 18:15",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 17,
      "foto": "https://api.slingacademy.com/public/sample-photos/17.jpeg",
      "Nombre": "Miguel",
      "Apellido": "Hernández",
      "Descripcion": "Aenean bibendum nibh vel leo feugiat, eu laoreet nisl luctus. Nullam vitae fringilla nisi.",
      "Actividad": "Seminario de Marketing Digital",
      "Hora_entrada": "08-10-2023 10:30",
      "Hora_salida": "08-10-2023 13:30",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 18,
      "foto": "https://api.slingacademy.com/public/sample-photos/18.jpeg",
      "Nombre": "Cristina",
      "Apellido": "Rodríguez",
      "Descripcion": "Mauris euismod felis nec tristique. Aliquam nec dui vel felis laoreet tincidunt non nec eros.",
      "Actividad": "Conferencia Internacional",
      "Hora_entrada": "09-10-2023 09:45",
      "Hora_salida": "09-10-2023 12:45",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 19,
      "foto": "https://api.slingacademy.com/public/sample-photos/19.jpeg",
      "Nombre": "Antonio",
      "Apellido": "García",
      "Descripcion": "Nunc consequat ligula nec ex posuere, sed tristique nulla iaculis. Sed ut odio a nisi convallis sodales.",
      "Actividad": "Exposición de Arte",
      "Hora_entrada": "10-10-2023 14:00",
      "Hora_salida": "10-10-2023 17:00",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 20,
      "foto": "https://api.slingacademy.com/public/sample-photos/20.jpeg",
      "Nombre": "Rosa",
      "Apellido": "López",
      "Descripcion": "Suspendisse non erat a lectus commodo rhoncus. Nunc sollicitudin purus vel erat congue, in volutpat justo consectetur.",
      "Actividad": "Seminario de Tecnología",
      "Hora_entrada": "11-10-2023 11:45",
      "Hora_salida": "11-10-2023 14:45",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 21,
      "foto": "https://api.slingacademy.com/public/sample-photos/21.jpeg",
      "Nombre": "Andrés",
      "Apellido": "Martínez",
      "Descripcion": "Quisque sit amet libero a neque tristique euismod. Fusce sit amet urna eget odio gravida posuere.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "12-10-2023 09:15",
      "Hora_salida": "12-10-2023 12:15",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 22,
      "foto": "https://api.slingacademy.com/public/sample-photos/22.jpeg",
      "Nombre": "Sara",
      "Apellido": "Fernández",
      "Descripcion": "Nam facilisis odio nec risus iaculis cursus. Donec eget metus eget tortor vulputate sodales.",
      "Actividad": "Conferencia de Arte",
      "Hora_entrada": "13-10-2023 15:30",
      "Hora_salida": "13-10-2023 18:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 23,
      "foto": "https://api.slingacademy.com/public/sample-photos/23.jpeg",
      "Nombre": "Felipe",
      "Apellido": "Hernández",
      "Descripcion": "Pellentesque vitae metus in libero viverra congue. Integer ac tincidunt justo.",
      "Actividad": "Exposición de Tecnología",
      "Hora_entrada": "14-10-2023 10:00",
      "Hora_salida": "14-10-2023 13:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 24,
      "foto": "https://api.slingacademy.com/public/sample-photos/24.jpeg",
      "Nombre": "Mónica",
      "Apellido": "Rodríguez",
      "Descripcion": "Fusce tristique quam in sapien iaculis, non tincidunt justo congue. Aliquam erat volutpat.",
      "Actividad": "Conferencia Internacional",
      "Hora_entrada": "15-10-2023 14:45",
      "Hora_salida": "15-10-2023 17:45",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 25,
      "foto": "https://api.slingacademy.com/public/sample-photos/25.jpeg",
      "Nombre": "Diego",
      "Apellido": "Gómez",
      "Descripcion": "Ut venenatis risus sit amet erat viverra, id bibendum risus tincidunt. Nullam convallis massa vitae tellus bibendum, ut hendrerit arcu laoreet.",
      "Actividad": "Seminario de Marketing Digital",
      "Hora_entrada": "16-10-2023 09:30",
      "Hora_salida": "16-10-2023 12:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 26,
      "foto": "https://api.slingacademy.com/public/sample-photos/26.jpeg",
      "Nombre": "Natalia",
      "Apellido": "López",
      "Descripcion": "Pellentesque ullamcorper nunc at urna feugiat ultrices. Maecenas dictum odio non velit scelerisque feugiat.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "17-10-2023 11:00",
      "Hora_salida": "17-10-2023 14:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 27,
      "foto": "https://api.slingacademy.com/public/sample-photos/27.jpeg",
      "Nombre": "Gabriel",
      "Apellido": "Martínez",
      "Descripcion": "Maecenas tincidunt metus ac ex varius, a euismod lorem eleifend. Praesent scelerisque nulla et libero vehicula vehicula.",
      "Actividad": "Exposición de Tecnología",
      "Hora_entrada": "18-10-2023 10:15",
      "Hora_salida": "18-10-2023 13:15",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 28,
      "foto": "https://api.slingacademy.com/public/sample-photos/28.jpeg",
      "Nombre": "Silvia",
      "Apellido": "Fernández",
      "Descripcion": "Nam rhoncus elit eget justo interdum, at blandit sapien viverra. Morbi eu lorem in libero malesuada hendrerit.",
      "Actividad": "Conferencia de Arte",
      "Hora_entrada": "19-10-2023 15:30",
      "Hora_salida": "19-10-2023 18:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 29,
      "foto": "https://api.slingacademy.com/public/sample-photos/29.jpeg",
      "Nombre": "José",
      "Apellido": "Hernández",
      "Descripcion": "Pellentesque congue felis vel cursus. Vestibulum tincidunt libero at quam hendrerit, vel euismod justo rhoncus.",
      "Actividad": "Seminario de Tecnología",
      "Hora_entrada": "20-10-2023 10:00",
      "Hora_salida": "20-10-2023 13:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 30,
      "foto": "https://api.slingacademy.com/public/sample-photos/30.jpeg",
      "Nombre": "Adriana",
      "Apellido": "Rodríguez",
      "Descripcion": "Nullam eget sapien nec elit iaculis tristique. Vestibulum non arcu id libero cursus cursus.",
      "Actividad": "Conferencia Internacional",
      "Hora_entrada": "21-10-2023 14:45",
      "Hora_salida": "21-10-2023 17:45",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 31,
      "foto": "https://api.slingacademy.com/public/sample-photos/31.jpeg",
      "Nombre": "Fernando",
      "Apellido": "Gómez",
      "Descripcion": "Praesent tincidunt nulla non justo iaculis, non cursus arcu vehicula. Fusce a diam vel ex tincidunt tempus.",
      "Actividad": "Seminario de Marketing Digital",
      "Hora_entrada": "22-10-2023 09:30",
      "Hora_salida": "22-10-2023 12:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 32,
      "foto": "https://api.slingacademy.com/public/sample-photos/32.jpeg",
      "Nombre": "Marta",
      "Apellido": "López",
      "Descripcion": "Sed vulputate lectus eget justo iaculis, non elementum lectus tristique. Vivamus sit amet ipsum at ipsum cursus euismod.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "23-10-2023 11:00",
      "Hora_salida": "23-10-2023 14:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 33,
      "foto": "https://api.slingacademy.com/public/sample-photos/33.jpeg",
      "Nombre": "Carlos",
      "Apellido": "Martínez",
      "Descripcion": "Pellentesque euismod justo sit amet feugiat. Sed ut nisi non ex vulputate tempus.",
      "Actividad": "Exposición de Tecnología",
      "Hora_entrada": "24-10-2023 10:15",
      "Hora_salida": "24-10-2023 13:15",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 34,
      "foto": "https://api.slingacademy.com/public/sample-photos/34.jpeg",
      "Nombre": "Laura",
      "Apellido": "Fernández",
      "Descripcion": "Nam auctor est vitae tristique. Maecenas ut bibendum quam.",
      "Actividad": "Conferencia de Arte",
      "Hora_entrada": "25-10-2023 15:30",
      "Hora_salida": "25-10-2023 18:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 35,
      "foto": "https://api.slingacademy.com/public/sample-photos/35.jpeg",
      "Nombre": "Eduardo",
      "Apellido": "Hernández",
      "Descripcion": "Fusce euismod nulla a mi bibendum, eget tristique eros sollicitudin. Sed rhoncus erat eget augue luctus, sit amet sollicitudin enim venenatis.",
      "Actividad": "Seminario de Tecnología",
      "Hora_entrada": "26-10-2023 10:00",
      "Hora_salida": "26-10-2023 13:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 36,
      "foto": "https://api.slingacademy.com/public/sample-photos/36.jpeg",
      "Nombre": "Ana",
      "Apellido": "Rodríguez",
      "Descripcion": "Praesent cursus quam vel lectus consequat facilisis. Donec euismod ligula eu tortor rhoncus, id tristique mi hendrerit.",
      "Actividad": "Conferencia Internacional",
      "Hora_entrada": "27-10-2023 14:45",
      "Hora_salida": "27-10-2023 17:45",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 37,
      "foto": "https://api.slingacademy.com/public/sample-photos/37.jpeg",
      "Nombre": "Javier",
      "Apellido": "Gómez",
      "Descripcion": "Duis sit amet dolor vel elit tristique tristique. Sed non justo in lectus interdum gravida.",
      "Actividad": "Seminario de Marketing Digital",
      "Hora_entrada": "28-10-2023 09:30",
      "Hora_salida": "28-10-2023 12:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 38,
      "foto": "https://api.slingacademy.com/public/sample-photos/38.jpeg",
      "Nombre": "Sofía",
      "Apellido": "López",
      "Descripcion": "Pellentesque a tortor sit amet ex bibendum vestibulum. Nullam nec tristique orci.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "29-10-2023 11:00",
      "Hora_salida": "29-10-2023 14:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 39,
      "foto": "https://api.slingacademy.com/public/sample-photos/39.jpeg",
      "Nombre": "Daniel",
      "Apellido": "Martínez",
      "Descripcion": "Proin tincidunt risus vel est vestibulum, vel euismod urna efficitur. Sed nec tincidunt mi.",
      "Actividad": "Exposición de Tecnología",
      "Hora_entrada": "30-10-2023 10:15",
      "Hora_salida": "30-10-2023 13:15",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 40,
      "foto": "https://api.slingacademy.com/public/sample-photos/40.jpeg",
      "Nombre": "Carmen",
      "Apellido": "Fernández",
      "Descripcion": "Pellentesque volutpat libero ac libero fermentum ultricies. Nullam in odio vel arcu bibendum lacinia a ut metus.",
      "Actividad": "Conferencia de Arte",
      "Hora_entrada": "31-10-2023 15:30",
      "Hora_salida": "31-10-2023 18:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 41,
      "foto": "https://api.slingacademy.com/public/sample-photos/41.jpeg",
      "Nombre": "Roberto",
      "Apellido": "Hernández",
      "Descripcion": "Phasellus dictum quam vel nisi bibendum, eget convallis odio euismod. Sed eu sapien non arcu vulputate vulputate.",
      "Actividad": "Seminario de Marketing Digital",
      "Hora_entrada": "01-11-2023 10:00",
      "Hora_salida": "01-11-2023 13:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 42,
      "foto": "https://api.slingacademy.com/public/sample-photos/42.jpeg",
      "Nombre": "Patricia",
      "Apellido": "Gómez",
      "Descripcion": "Curabitur sagittis odio eu libero tristique, sit amet efficitur urna feugiat. Fusce in tellus nec purus tristique varius in id sapien.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "02-11-2023 11:30",
      "Hora_salida": "02-11-2023 14:30",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 43,
      "foto": "https://api.slingacademy.com/public/sample-photos/43.jpeg",
      "Nombre": "Luis",
      "Apellido": "Martínez",
      "Descripcion": "Suspendisse euismod est sed justo tristique, ac laoreet turpis aliquam. Sed eu velit quis tortor semper pharetra.",
      "Actividad": "Exposición de Tecnología",
      "Hora_entrada": "03-11-2023 10:45",
      "Hora_salida": "03-11-2023 13:45",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 44,
      "foto": "https://api.slingacademy.com/public/sample-photos/44.jpeg",
      "Nombre": "Laura",
      "Apellido": "Fernández",
      "Descripcion": "Fusce nec mauris eget erat tristique euismod vel sit amet ipsum. Morbi in tellus eu purus blandit condimentum.",
      "Actividad": "Conferencia Internacional",
      "Hora_entrada": "04-11-2023 14:00",
      "Hora_salida": "04-11-2023 17:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 45,
      "foto": "https://api.slingacademy.com/public/sample-photos/45.jpeg",
      "Nombre": "Carlos",
      "Apellido": "Rodríguez",
      "Descripcion": "Nulla vel elit nec sapien hendrerit hendrerit. Proin vulputate mauris at est auctor, a congue libero scelerisque.",
      "Actividad": "Seminario de Marketing Digital",
      "Hora_entrada": "05-11-2023 09:15",
      "Hora_salida": "05-11-2023 12:15",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 46,
      "foto": "https://api.slingacademy.com/public/sample-photos/46.jpeg",
      "Nombre": "Marta",
      "Apellido": "Gómez",
      "Descripcion": "Fusce euismod libero a tortor congue, vel ullamcorper libero mattis. Sed vel hendrerit quam, eu bibendum quam.",
      "Actividad": "Conferencia de Arte",
      "Hora_entrada": "06-11-2023 15:30",
      "Hora_salida": "06-11-2023 18:30",
      "Clasificacion": "Premium",
      "Estado": true
    },
    {
      "ID": 47,
      "foto": "https://api.slingacademy.com/public/sample-photos/47.jpeg",
      "Nombre": "Sara",
      "Apellido": "Martínez",
      "Descripcion": "Proin bibendum lectus at libero tempus, vel laoreet justo cursus. Suspendisse potenti.",
      "Actividad": "Conferencia de Ciencia",
      "Hora_entrada": "07-11-2023 11:00",
      "Hora_salida": "07-11-2023 14:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 48,
      "foto": "https://api.slingacademy.com/public/sample-photos/48.jpeg",
      "Nombre": "Andrés",
      "Apellido": "Fernández",
      "Descripcion": "Ut eu ex sed massa hendrerit elementum. Nunc eget enim eget libero convallis tincidunt.",
      "Actividad": "Exposición de Tecnología",
      "Hora_entrada": "08-11-2023 10:15",
      "Hora_salida": "08-11-2023 13:15",
      "Clasificacion": "VIP",
      "Estado": true
    },
    {
      "ID": 49,
      "foto": "https://api.slingacademy.com/public/sample-photos/49.jpeg",
      "Nombre": "Silvia",
      "Apellido": "Rodríguez",
      "Descripcion": "Nam ullamcorper libero a neque blandit, a malesuada arcu rhoncus. Suspendisse potenti.",
      "Actividad": "Conferencia Internacional",
      "Hora_entrada": "09-11-2023 14:00",
      "Hora_salida": "09-11-2023 17:00",
      "Clasificacion": "Básica",
      "Estado": false
    },
    {
      "ID": 50,
      "foto": "https://api.slingacademy.com/public/sample-photos/50.jpeg",
      "Nombre": "José",
      "Apellido": "Gómez",
      "Descripcion": "Aenean vitae velit ut quam condimentum blandit vel a turpis. Fusce auctor ipsum non felis bibendum, eget feugiat odio tincidunt.",
      "Actividad": "Seminario de Tecnología",
      "Hora_entrada": "10-11-2023 10:45",
      "Hora_salida": "10-11-2023 13:45",
      "Clasificacion": "Premium",
      "Estado": true
    }
  ]
  
  public get participantesActivos(){
    return this.participantes.filter((parti) => parti.Estado === true);
  }

  public get participantesInactivos(){
    return this.participantes.filter((parti) => parti.Estado === false);
  }

  public desactivarParticipante(idProducto:number){
    for( let parti of this.participantes ){
      if (parti.ID === idProducto){
        parti.Estado = false;
        break;
      }
    }
  }

  public activarParticipante(idProducto:number){
    for( let parti of this.participantes ){
      if (parti.ID === idProducto){
        parti.Estado = false;
        break;
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
