import { Injectable } from '@nestjs/common';
import { IArticleAPIResponse } from './interface/article.interface';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse, AxiosStatic } from "axios";
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  gNewsApiToken: string = process?.env?.GNEWS_API_KEY ?? '';
  
  constructor(private readonly _httpService: HttpService) {}
  
  getHealthCheck(): string {
    return 'It is working !!';
  }

  getAllNews(): Observable<AxiosResponse<IArticleAPIResponse>> {
    const url = 'https://gnews.io/api/v4/search?q=example&token=' + this.gNewsApiToken + '&lang=en';
    return this._httpService.get(url);
  }
  
  getPerticularNumberNews(maxLength: string): Observable<AxiosResponse<IArticleAPIResponse>> {
    const url = 'https://gnews.io/api/v4/search?q=example&token=' + this.gNewsApiToken + '&lang=en' + '&max=' + maxLength;
    return this._httpService.get(url);
  }
}
