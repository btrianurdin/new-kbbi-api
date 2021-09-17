export interface IResponseObj {
  lema: string;
  arti: Array<IArti>;
}

export interface IArti {
  kelas_kata: string;
  deskripsi: string;
}