import { Component, inject, OnInit } from '@angular/core';
import Announcement from '../../models/annoucement.interface';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})

export class ArticlesComponent implements OnInit{
private httpClient: HttpClient = inject(HttpClient);
  title: string = 'Mes annonces';
  announcements: Announcement[] = [];
  ngOnInit(): void {
    this.httpClient.get<Announcement[]>('http://51.254.112.67/api/announcements',
      { headers: { 'accept': 'application/json' } }
    ).subscribe({
      next: (data) => {
        this.announcements = data;
        console.log(this.announcements);
      }
    });
  }
};
