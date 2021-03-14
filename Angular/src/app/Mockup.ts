export default class Mockup{

    contadorId: number;
    itens: Array<any>;

    obterAleatorio(){
        var index = Math.floor(Math.random() * 100);
        var item = this.itens[index];
        
        return {
            id: ++this.contadorId,
            descricao: item.descricao,
            selecionado: item.selecionado
        };
    }

    constructor(){
        this.contadorId = 99;
        this.itens = [
            {
              "id": 0,
              "descricao": "Rasmussen Murphy",
              "selecionado": false
            },
            {
              "id": 1,
              "descricao": "Eugenia Bauer",
              "selecionado": false
            },
            {
              "id": 2,
              "descricao": "Beard Reese",
              "selecionado": false
            },
            {
              "id": 3,
              "descricao": "Caitlin Davenport",
              "selecionado": false
            },
            {
              "id": 4,
              "descricao": "Greene Rush",
              "selecionado": false
            },
            {
              "id": 5,
              "descricao": "Joann Hicks",
              "selecionado": false
            },
            {
              "id": 6,
              "descricao": "Debora Morse",
              "selecionado": false
            },
            {
              "id": 7,
              "descricao": "Corine Martinez",
              "selecionado": false
            },
            {
              "id": 8,
              "descricao": "Fischer Chaney",
              "selecionado": false
            },
            {
              "id": 9,
              "descricao": "Carson Cummings",
              "selecionado": false
            },
            {
              "id": 10,
              "descricao": "Deanne Duncan",
              "selecionado": false
            },
            {
              "id": 11,
              "descricao": "Dodson Edwards",
              "selecionado": false
            },
            {
              "id": 12,
              "descricao": "Adele Casey",
              "selecionado": false
            },
            {
              "id": 13,
              "descricao": "Flossie Farley",
              "selecionado": false
            },
            {
              "id": 14,
              "descricao": "Jensen Mcneil",
              "selecionado": false
            },
            {
              "id": 15,
              "descricao": "Winters Zamora",
              "selecionado": false
            },
            {
              "id": 16,
              "descricao": "Ana Williams",
              "selecionado": false
            },
            {
              "id": 17,
              "descricao": "Camille Jenkins",
              "selecionado": false
            },
            {
              "id": 18,
              "descricao": "Glenda Whitley",
              "selecionado": false
            },
            {
              "id": 19,
              "descricao": "Romero Mcpherson",
              "selecionado": false
            },
            {
              "id": 20,
              "descricao": "Becker Cleveland",
              "selecionado": false
            },
            {
              "id": 21,
              "descricao": "Daisy Calderon",
              "selecionado": false
            },
            {
              "id": 22,
              "descricao": "Mercado Goodman",
              "selecionado": false
            },
            {
              "id": 23,
              "descricao": "Leah Lindsay",
              "selecionado": false
            },
            {
              "id": 24,
              "descricao": "Velasquez Berry",
              "selecionado": false
            },
            {
              "id": 25,
              "descricao": "Boyd Anthony",
              "selecionado": false
            },
            {
              "id": 26,
              "descricao": "Mendez Harrington",
              "selecionado": false
            },
            {
              "id": 27,
              "descricao": "Guadalupe Good",
              "selecionado": false
            },
            {
              "id": 28,
              "descricao": "Tricia Langley",
              "selecionado": false
            },
            {
              "id": 29,
              "descricao": "Evelyn Randolph",
              "selecionado": false
            },
            {
              "id": 30,
              "descricao": "Holloway Yang",
              "selecionado": false
            },
            {
              "id": 31,
              "descricao": "Karyn Bruce",
              "selecionado": false
            },
            {
              "id": 32,
              "descricao": "Marta Velez",
              "selecionado": false
            },
            {
              "id": 33,
              "descricao": "Bessie Bradley",
              "selecionado": false
            },
            {
              "id": 34,
              "descricao": "Frieda Gill",
              "selecionado": false
            },
            {
              "id": 35,
              "descricao": "Rebekah Sharp",
              "selecionado": false
            },
            {
              "id": 36,
              "descricao": "Cecilia Weeks",
              "selecionado": false
            },
            {
              "id": 37,
              "descricao": "Walsh Maldonado",
              "selecionado": false
            },
            {
              "id": 38,
              "descricao": "Charity Norris",
              "selecionado": false
            },
            {
              "id": 39,
              "descricao": "Castaneda Hurley",
              "selecionado": false
            },
            {
              "id": 40,
              "descricao": "Liliana Heath",
              "selecionado": false
            },
            {
              "id": 41,
              "descricao": "Ferguson Steele",
              "selecionado": false
            },
            {
              "id": 42,
              "descricao": "Gretchen Montoya",
              "selecionado": false
            },
            {
              "id": 43,
              "descricao": "Christine Mayer",
              "selecionado": false
            },
            {
              "id": 44,
              "descricao": "Johnson Stanley",
              "selecionado": false
            },
            {
              "id": 45,
              "descricao": "Queen Sawyer",
              "selecionado": false
            },
            {
              "id": 46,
              "descricao": "Sonya Hunt",
              "selecionado": false
            },
            {
              "id": 47,
              "descricao": "Kaitlin Callahan",
              "selecionado": false
            },
            {
              "id": 48,
              "descricao": "Bette Stark",
              "selecionado": false
            },
            {
              "id": 49,
              "descricao": "Macdonald Turner",
              "selecionado": false
            },
            {
              "id": 50,
              "descricao": "Karina Santiago",
              "selecionado": false
            },
            {
              "id": 51,
              "descricao": "Martin Gates",
              "selecionado": false
            },
            {
              "id": 52,
              "descricao": "Lucille Gross",
              "selecionado": false
            },
            {
              "id": 53,
              "descricao": "Davenport Gallagher",
              "selecionado": false
            },
            {
              "id": 54,
              "descricao": "Blair Talley",
              "selecionado": false
            },
            {
              "id": 55,
              "descricao": "Dixie Kirk",
              "selecionado": false
            },
            {
              "id": 56,
              "descricao": "Heather Cooke",
              "selecionado": false
            },
            {
              "id": 57,
              "descricao": "Frost Ortega",
              "selecionado": false
            },
            {
              "id": 58,
              "descricao": "Elba Mckay",
              "selecionado": false
            },
            {
              "id": 59,
              "descricao": "Vera Franklin",
              "selecionado": false
            },
            {
              "id": 60,
              "descricao": "Meredith Stuart",
              "selecionado": false
            },
            {
              "id": 61,
              "descricao": "Heidi Clarke",
              "selecionado": false
            },
            {
              "id": 62,
              "descricao": "Emma Harding",
              "selecionado": false
            },
            {
              "id": 63,
              "descricao": "Graciela Sanford",
              "selecionado": false
            },
            {
              "id": 64,
              "descricao": "Small Clements",
              "selecionado": false
            },
            {
              "id": 65,
              "descricao": "Black Fleming",
              "selecionado": false
            },
            {
              "id": 66,
              "descricao": "Hinton Woods",
              "selecionado": false
            },
            {
              "id": 67,
              "descricao": "Avila Duffy",
              "selecionado": false
            },
            {
              "id": 68,
              "descricao": "Lambert Ayala",
              "selecionado": false
            },
            {
              "id": 69,
              "descricao": "Melanie Quinn",
              "selecionado": false
            },
            {
              "id": 70,
              "descricao": "Vance Lambert",
              "selecionado": false
            },
            {
              "id": 71,
              "descricao": "Shirley Irwin",
              "selecionado": false
            },
            {
              "id": 72,
              "descricao": "Miriam Cain",
              "selecionado": false
            },
            {
              "id": 73,
              "descricao": "Mclaughlin Barnett",
              "selecionado": false
            },
            {
              "id": 74,
              "descricao": "Bridges Palmer",
              "selecionado": false
            },
            {
              "id": 75,
              "descricao": "Franks Mccarty",
              "selecionado": false
            },
            {
              "id": 76,
              "descricao": "Lane Dickson",
              "selecionado": false
            },
            {
              "id": 77,
              "descricao": "Barbara Lang",
              "selecionado": false
            },
            {
              "id": 78,
              "descricao": "Hyde Larsen",
              "selecionado": false
            },
            {
              "id": 79,
              "descricao": "Shaw Donaldson",
              "selecionado": false
            },
            {
              "id": 80,
              "descricao": "Enid Navarro",
              "selecionado": false
            },
            {
              "id": 81,
              "descricao": "Trina Golden",
              "selecionado": false
            },
            {
              "id": 82,
              "descricao": "Mcintosh Drake",
              "selecionado": false
            },
            {
              "id": 83,
              "descricao": "Colon Rose",
              "selecionado": false
            },
            {
              "id": 84,
              "descricao": "Sara Oliver",
              "selecionado": false
            },
            {
              "id": 85,
              "descricao": "Gallegos Carver",
              "selecionado": false
            },
            {
              "id": 86,
              "descricao": "Maldonado Cash",
              "selecionado": false
            },
            {
              "id": 87,
              "descricao": "Fowler Walls",
              "selecionado": false
            },
            {
              "id": 88,
              "descricao": "Alissa Stokes",
              "selecionado": false
            },
            {
              "id": 89,
              "descricao": "Walton Tanner",
              "selecionado": false
            },
            {
              "id": 90,
              "descricao": "Williams Branch",
              "selecionado": false
            },
            {
              "id": 91,
              "descricao": "Tanya Fletcher",
              "selecionado": false
            },
            {
              "id": 92,
              "descricao": "Michael Rich",
              "selecionado": false
            },
            {
              "id": 93,
              "descricao": "Reba Olson",
              "selecionado": false
            },
            {
              "id": 94,
              "descricao": "Harrington Potts",
              "selecionado": false
            },
            {
              "id": 95,
              "descricao": "Meghan Contreras",
              "selecionado": false
            },
            {
              "id": 96,
              "descricao": "Barton Alvarez",
              "selecionado": false
            },
            {
              "id": 97,
              "descricao": "Medina Bennett",
              "selecionado": false
            },
            {
              "id": 98,
              "descricao": "Peters Rivers",
              "selecionado": false
            },
            {
              "id": 99,
              "descricao": "Pearson Hughes",
              "selecionado": false
            }
          ];
    }
}