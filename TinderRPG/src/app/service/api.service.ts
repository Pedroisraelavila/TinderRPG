
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Classe } from 'src/model/classe';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
//const apiUrl = 'http://localhost:5000/api/classe';
const apiUrl = 'http://localhost:52985/Classe';

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

  updateClasse(id, classe): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, classe, httpOptions).pipe(
      tap(_ => console.log(`atualiza a classe com id=${id}`)),
      catchError(this.handleError<any>('updateClasse'))
    );
  }

  deleteClasse (id): Observable<Classe> {
    const url = `${apiUrl}/Excluir/${id}`;

    return this.http.delete<Classe>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a classe com id=${id}`)),
      catchError(this.handleError<Classe>('deleteClasse'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
