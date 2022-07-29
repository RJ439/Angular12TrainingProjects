import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//picks up the lates new from the news api
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = '596e437027ff414fa6dc38d2115d3c09';
  constructor(private socket: HttpClient) { }

  getLatestNews() {
    return this.socket.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }
}
