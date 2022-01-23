import { Injectable }    from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserInterface }  from '../../interfaces/user.interface';
import { catchError }    from 'rxjs/operators';

@Injectable()
export class getUsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.url)
      .pipe(
        catchError(this.handleError<UserInterface[]>('getUsers', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    }
  }
}
