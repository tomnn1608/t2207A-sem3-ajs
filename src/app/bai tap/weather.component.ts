import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  city: string ='Ha Noi'
  temp: number = 30;
  hump: number = 70;
  press: number = 1001;

  constructor(private http: HttpClient) {
  }
ngOnInit(){// hàm này tự động chạy sau khi ỉn ra html
    this.hanoi();
}
  hanoi(){
    //lay thong tin thoi tiet ha noi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  hcm(){
    //lay thong tin thoi tiet ha noi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  london(){
    //lay thong tin thoi tiet ha noi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  newyork(){
    //lay thong tin thoi tiet ha noi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  tokyo(){
    //lay thong tin thoi tiet ha noi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=toyko&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  berlin(){
    //lay thong tin thoi tiet ha noi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
}
