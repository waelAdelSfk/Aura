import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class IntroComponent implements OnInit {

  currentLanguage: string;
  isArabic: boolean;

  constructor(private router: Router, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('lang') || 'ar';
    this.isArabic = this.currentLanguage === 'ar';
  }

   changeLanguage(): void {
    this.languageService.changeLanguage();
    window.location.reload();
  }

  next(): void {
    localStorage.setItem('skipIntro', 'true');
    this.router.navigateByUrl('/welcome', { replaceUrl: true });
  }
}
