export interface IParticipantes {
    ID: number;
    foto: string;
    Nombre: string;
    Apellido: string;
    Descripción: string;
    Actividad: string;
    Hora_entrada: string;
    Hora_salida: string;
    Clasificación: string;
    Estado: "Activo" | "Inactivo";
}