import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {

  notes = 
  [
    {title: "Example note title", body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.", id: 1},
    {title: "Delegation", body:"Q.: How many programmers does it take to change a light bulb? A.: Null – This is a hardware problem.", id:2},
    {title: "Fix Styling", body: "Improve and fix the styling (incl. note-cards container grid)", id:3},
    {title: "Add notes", body:"Add notes and save in local storage. Edit and delete notes", id:4},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
