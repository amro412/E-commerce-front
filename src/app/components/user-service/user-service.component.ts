import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { user } from '../../models/user-model';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-user-service',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,NavbarComponent],
  templateUrl: './user-service.component.html',
  styleUrl: './user-service.component.css'
})
export class UserServiceComponent implements OnInit {

  constructor(private http: HttpClient){}

  public users : user[] = [];

  token : string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbUBtYWlsLmNvbSIsImlhdCI6MTcxMzM3NzU2NSwiZXhwIjoxNzEzMzc5MDA1fQ.qDCjYhUhmY-OZ4ydd8hEJyzuGrPzfn7fZVHj8DF1zI8";

   headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+this.token});
  
     httpOptions = {
      headers: this.headers_object
    };

    ngOnInit() {
      this.getUsers();
    }

    public getUsers(): void{
       this.http.get<user[]>('http://localhost:8080/api/all',this.httpOptions).subscribe(
        (response: user[]) => {
          this.users = response;
          console.log(this.users);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public activate(userId: number): void{
      this.http.put<string>(`http://localhost:8080/api/activate/${userId}`,this.httpOptions).subscribe(
        (response: string) => {
          //this.users = response;
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public deactivate(userId: number): void{
      this.http.put<string>(`http://localhost:8080/api/deactivate/${userId}`,this.httpOptions).subscribe(
        (response: string) => {
          console.log(response+'success');
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
      
    

  // ngOnInit(): Observable<user[]> {
  //   return this.http.get<user[]>('http://localhost:8080/api/c2/all',this.httpOptions).subscribe(response => {
  //     console.log(response);
  //   });
  // }
}
