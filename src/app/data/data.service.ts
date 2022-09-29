import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = ['John', 'Mike']
  constructor() { }

  getData() {
    //NO!
    //return of(this.data).pipe().subscribe(data => console.log(data))
    //Correct
    return of(this.data).pipe();
  }

}
