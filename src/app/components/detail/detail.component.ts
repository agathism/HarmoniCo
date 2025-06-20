import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent implements OnInit{
  private route : ActivatedRoute = inject(ActivatedRoute);

  detailId: string | null = null

  ngOnInit(): void {  
    this.detailId = this.route.snapshot.paramMap.get('id');
    };
}
