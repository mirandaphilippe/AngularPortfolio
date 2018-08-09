
import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('navMenu', [
      state('opened', style({
      transform: 'translateY(100%)'
      })),
      state('closed', style({
        transform: 'translateY(-100%)'
      }))
  ]
  )
  ]
})
export class AppComponent implements OnInit, OnChanges {

  @ViewChild('sectionsMenu') sectionsMenu: ElementRef;
  @ViewChild('title') pageTitle: ElementRef;
  @ViewChild('collapsedNav') collapsedNav: ElementRef;

  pageName: any;

  pages = [
    {
      name: 'sobre',
      route: 'u/about',
      active: false
    },
    {
      name: 'portfolio',
      route: 'u/jobs',
      active: false
    },
    {
      name: 'contato',
      route: 'u/contact',
      active: false
    },
    {
      name: 'artigos',
      route: 'u/news',
      active: false
    }
  ];

  constructor(
    private _router: Router
  ) {
  }

  ngOnChanges() {

  }

  ngOnInit() {
    this._router.events.subscribe((event: any) => {
      if (event.url) {
          console.log(event.url);
      }
   });
  }
  menuState(routeExerpt: String) {

    this.pageTitle.nativeElement.innerHTML = '';
    this.pageTitle.nativeElement.className = 'hidden-title';
    this.pageName =  routeExerpt;
    this.sectionsMenu.nativeElement.className = 'hidden-title';
    this.sectionsMenu.nativeElement.innerHTML = '';
    this.collapsedNav.nativeElement.style.display = 'flex';
  }
}

// menuState(routeExerpt: String) {
//   const route = `/u/${routeExerpt}`;
//   if (this._router.isActive(route, true)) {
//     console.log(this.sectionsMenu)
//   }
// }
