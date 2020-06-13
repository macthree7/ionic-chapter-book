import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    },

    {
      title: "Chapter 2 | Contrators Suck",
      url: "/chapter2"
    },

    {
      title: "Chapter 3 | Contractors Rip You Off",
      url: "/chapter3"
    },

    {
      title: "Chapter 4 | Don't trust Contractors",
      url: "/chapter4"
    } 

  ];

  constructor() { }

  ngOnInit() {
  }

}
