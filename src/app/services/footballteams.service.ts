import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class FootballteamsService{
  
  apiUrl: string = 'https://services-prod.worldoffice.cloud/';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getTeams(){
    return this.http.get(`${this.apiUrl}equipos/listar`);
  }

  getTeamById(id: number){
    console.log(id)
    return this.http.get(`${this.apiUrl}equipos/consultar/${id}`)
  }

  createTeam(team: Team): Observable<Team>{
    return this.http.post<Team>(`${this.apiUrl}equipos/crear`, team);
  }

  updateTeam(id:number, team: Team){
    return this.http.put<Team>(`${this.apiUrl}equipos/actualizar/${id}`, team);
  }

  deleteTeam(id:number){
    return this.http.delete<Team>(`${this.apiUrl}equipos/eliminar/${id}`);  
  }
}
