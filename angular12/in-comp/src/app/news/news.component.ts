import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponentIn implements OnInit {
  articles : any[] = [];
  constructor(private newsService: DataService) { }

  ngOnInit(): void {
    //subscribe to the news
    this.newsService.getLatestNews().subscribe((data: any) =>{
      console.log(data);
      this.articles = data.articles;
    })
  }

}
