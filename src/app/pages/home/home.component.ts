import { Component, ViewChild, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  question: string = '';
  answer: string = '';
  @ViewChild('swiperContainer') swiperContainer: any;
  swiperParams: SwiperOptions = {};
  
  images = [
    { src: '/assets/img/lagoa_rodrigo.jpeg', title: 'Lagoa Rodrigo de Freitas, Brazil.' },
    { src: '/assets/img/condado_laguna.jpg', title: 'Laguna del Condado, Puerto Rico' },
    { src: '/assets/img/leatherback.jpeg', title: 'Leatherback Turtles, Puerto Rico.' }
  ];
  
  constructor(private http: HttpClient) {}
  
  ngAfterViewInit(): void {
    console.log('Initializing Swiper after view init');
    this.initializeSwiper();
  }
  
  
  
  initializeSwiper(): void {
    if (typeof document !== 'undefined') {
      const swiperEl = document.querySelector('.mySwiper') as HTMLElement & { initialize?: () => void };
      if (swiperEl) {
        const swiperParams: SwiperOptions = {
          navigation: true,
          pagination: { clickable: true },
          loop: true,
          grabCursor: true,
          slidesPerView: 1,
          autoplay: {
            delay: 3000,
            disableOnInteraction: true,
          },
          on: {
            init() {
              console.log('Swiper initialized');
              
            },
          },
        };
        Object.assign(swiperEl, swiperParams);
        if (swiperEl.initialize) {
          console.log('Swiper initialize method found');
          
          swiperEl.initialize();
        } else {
          console.error('Swiper initialize method not found');
        }
      } else {
        console.error('Swiper Element not found');
      }
    }
  }

  onSubmit() {
    if (this.question) {
      this.answer = 'Loading...';
      this.http.post<any>(`${environment.apiUrl}/questions`, { question: this.question })
      .subscribe({
        next: (response) => {
          this.answer = response.answer;
          this.question = "";
        },
        error: (err) => {
          console.error('Error connecting to API:', err);
          this.question = "";
          this.answer = 'Sorry, there was an error retrieving the answer.';
        }
      });
    }
  }
}
