import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForm } from 'src/app/interface/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  getByid(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor( private httpClient: HttpClient) { }

  // get request
  getAll(){
    return this.httpClient.get<UserForm[]>('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile');
  }

  // post request
  create(data: UserForm){
    return this.httpClient.post<UserForm>('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', data);
  }

  // get request
  edit(id: number){
    return this.httpClient.get<UserForm>(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`);
  }

  // put request
  update(data: UserForm){
    return this.httpClient.put<UserForm>(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${data.id}`, data);
  }

  // delete request
  delete(id: number){
    return this.httpClient.delete<UserForm>(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`);
  }
}
