import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { AppService } from './app.service';
import { IArticleAPIResponse } from './interface/article.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  getHealth() {
    try {
      return this.appService.getHealthCheck();
    } catch (error) {
      throw new HttpException(error?.response, error.status);
    }
  }

  @Get()
  getAllNews() {
    try {
      return this.appService.getAllNews().pipe(
        map((axiosResponse: AxiosResponse<IArticleAPIResponse>) => {
          return axiosResponse.data;
        })
      );
    } catch(error) {
      throw new HttpException(error?.response, error.status);
    }
  }

  @Get('/maxNumber/:id')
  findNewsListWithNumber(@Param('id') id: string) {
    try {
      return this.appService.getPerticularNumberNews(id).pipe(
        map((axiosResponse: AxiosResponse<IArticleAPIResponse>) => {
          return axiosResponse.data;
        })
      );
    } catch(error) {
      throw new HttpException(error?.response, error.status);
    }
  }
}
