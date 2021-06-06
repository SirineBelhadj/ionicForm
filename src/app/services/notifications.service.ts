import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  getNotifications() {
    return [
      {
        title: "nouveau sondage a été publié",
        message: "vasy participer et gagner des frais",
        date: "06/05/2021",
        status: false,
      },
      {
        title: "nouveau sondage a été publié",
        message: "vasy participer et gagner des frais",
        date: "10/06/2021",
        status: false,
      },
      {
        title: "nouveau sondage a été publié",
        message: "vasy participer et gagner des frais",
        date: "20/06/2021/20",
        status: false,
      },
      {
        title: "nouveau sondage a été publié",
        message: "vasy participer et gagner des frais",
        date: "20/07/2021",
        status: false,
      },
      
     
     
      
    ]
  }
}
