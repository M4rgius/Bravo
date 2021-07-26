import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Utente{
  constructor(
    public nome : string,
    public cognome: string,
    public email: string,
    public password: string,
    public numeroTelefono: string
  ){}
}

 
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }
}
