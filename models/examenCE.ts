export class CE {
    public date;
    public status = 1;
    public como = {
        periodico: false,
        radio: false,
        amigos: false,
        redes: false,
        tv: false,
        otro: ''
    };
    public account: string;
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public postal: number;
    public localphone: string;
    public celular: string;
    public colonia: string;
    public estado: string;
    public civil: string;
    public nacimiento: string;
    public lugarnac: string;
    public email: string;
    public escolaridad = {
        escolaridad: '',
        trunca: false
    };
    public descripcion: string;
    public diferencia: string;
    public inauguracion: string;
    public ingles = {
        ingles: false,
        habla: 0,
        escribe: 0,
        lee: 0
    };
    public trabajo = {
        trabaja: false,
        ingreso: 0,
        lugar: '',
        horario: '',
        fechaini: ''
    };
    public recursos = {
        recursos: false,
        como: [false, false, false, false]
    };
    public gravamen = {
        gravamen: false,
        local: 0,
        casa: 0,
        terreno: 0
    };
    public socio = {
        socio: false,
        razon: ''
    };
    constructor() {
        this.account = '';
        this.nombre = '';
        this.apellido = '';
        this.direccion = '';
        this.postal = 0;
        this.localphone = '';
        this.celular = '';
        this.colonia = '';
        this.estado = '';
        this.civil = '';
        this.nacimiento = '';
        this.lugarnac = '';
        this.email = '';
        this.descripcion = '';
        this.diferencia = '';
        this.inauguracion = '';
    }
}
