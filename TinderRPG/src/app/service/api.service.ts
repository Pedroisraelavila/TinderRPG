
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Classe } from 'src/model/classe';
import { Personagem } from 'src/model/personagem';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
//const apiUrl = 'http://localhost:5000/api/classe';
const apiUrl = 'http://localhost:52985/Classe';
const personagemApiUrl = 'http://localhost:52985/Personagem';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getClasses (): Observable<Classe[]> {
    const url = `${apiUrl}/Ativos`;
    return this.http.get<Classe[]>(url)
      .pipe(
        tap(classes => console.log('leu as classes')),
        catchError(this.handleError('getClasses', []))
      );
  }

  getClasse(id: number): Observable<Classe> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Classe>(url).pipe(
      tap(_ => console.log(`leu a classe id=${id}`)),
      catchError(this.handleError<Classe>(`getClasse id=${id}`))
    );
  }
  
  addClasse (classe): Observable<Classe> {
    return this.http.post<Classe>(`${apiUrl}/Salvar`, classe, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((classe: Classe) => console.log(`adicionou a classe com w/ id=${classe.idClasse}`)),
      catchError(this.handleError<Classe>('addClasse'))
    );
  }

  updateClasse (classe): Observable<Classe> {
    return this.http.post<Classe>(`${apiUrl}/Salvar`, classe, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((classe: Classe) => console.log(`atualizou a classe com w/ id=${classe.idClasse}`)),
      catchError(this.handleError<Classe>('updateClasse'))
    );
  }
  deleteClasse (classe): Observable<Classe> {
    return this.http.post<Classe>(`${apiUrl}/Excluir`, classe, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((classe: Classe) => console.log(`Excluiu a classe com w/ id=${classe.idClasse}`)),
      catchError(this.handleError<Classe>('deleteClasse'))
    );
  }
  
  getPersonagens (): Observable<Personagem[]> {
    const url = `${personagemApiUrl}/Ativos`;
    return this.http.get<Personagem[]>(url)
      .pipe(
        tap(classes => console.log('leu os personagens')),
        catchError(this.handleError('getPersonagens', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
