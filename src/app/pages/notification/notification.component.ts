/**
 * Notification Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  notifications: any = [
    {
      title: "nouveau sondage a été publié",
      message: "vasy participer et gagner des frais",
      date: "06/05/2021",
      status: false,
    },
    {
      title: "nouveau sondage a été publié",
      message: "Vous pouvez participer et gagner des frais",
      date: "10/06/2021",
      status: false,
    },
    {
      title: "nouveau sondage a été publié",
      message: "vasy participer et gagner des frais",
      date: "20/06/2021",
      status: false,
    },
    {
      title: "nouveau sondage a été publié",
      message: "vasy participer et gagner des frais",
      date: "20/07/2021",
      status: false,
    }
  ];

  constructor(private notificationsService: NotificationsService,
    private router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
   // this.getNotification();
  }

  // Get list of notification
  getNotification() {
    this.notifications = this.notificationsService.getNotifications();
  }

  // Go to cart page
  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }
}
