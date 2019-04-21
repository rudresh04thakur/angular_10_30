import { Component, OnInit,Input } from '@angular/core';
import { AllService } from '../all.service';
import { Router } from '@angular/router'
export const GlobalMenus = [
  { title: "Home", path: 'home' },
  { title: "Login", path: 'login' },
  { title: "Register", path: 'register' },
  {
    title: "More", path: '#', child: [
      {
        title: "Contact", path: "contact", child: [
          { title: "Pune", path: "pune" },
          { title: "Nanded", path: "Nanded" }
        ]
      },
      { title: "About", path: "about" }
    ]
  },
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus = GlobalMenus;
  @Input('un') un:any;

  constructor(private _ser:AllService, private _r:Router) {

  }

  // buildList(data, isSub) {
  //   var html = (isSub) ? '<div>' : ''; // Wrap with div if true
  //   html += '<ul>';
  //   for (var item in data) {
  //     html += '<li>';
  //     if (typeof (data[item].child) === 'object') { // An array will return 'object'
  //       if (isSub) {
  //         html += '<a href="' + data[item].path + '">' + data[item].title + '</a>';
  //       } else {
  //         html += data[item].title; // Submenu found, but top level list item.
  //       }
  //       html += this.buildList(data[item].child, true); // Submenu found. Calling recursively same method (and wrapping it in a div)
  //     } else {
  //       html += data[item].title // No submenu
  //     }
  //     html += '</li>';
  //   }
  //   html += '</ul>';
  //   html += (isSub) ? '</div>' : '';
  //   console.log(html);
  // }
username="";

  ngOnInit() {
    this._r.events.subscribe(()=>{
      this._ser.checkLife(localStorage.getItem('sid')).subscribe((res)=>{
        //console.log("Header = >",this.un);
        console.log(res)
        this.username = res['user']['FullName']
        if(localStorage.getItem('sid')){
          GlobalMenus[1]['title']="Logout";
          GlobalMenus[1]['path']="logout";
          document.cookie = `sid=${localStorage.getItem('sid')}; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
        }
      })
    })

    //this.buildList(this.menus,false);

  }

}
