import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styles: [
  ]
})
export class RecordComponent implements OnInit {
	@Input() data?: any;
	conv: string="cat";
	rel: string = "bob";
	note: string="note";

options = [
   {id: 1, name: 'Jaywalking', conv: 'April 5, 2019', rel: 'April 6, 2019', note: 'pasta'},
{id: 2, name: 'op 2', conv: 'April 5', rel: 'april 6', note: 'pasta'},
{id: 3, name: 'John', conv: 'April 5', rel: 'april 6', note: 'pasta'},
{id: 4, name: 'birthday', conv: 'April 5', rel: 'april 6', note: 'pasta'}
];
 
 constructor() { }
	
  ngOnInit(): void {
	console.log('got here!');
	if (typeof this.data !== "undefined"){
	console.log('data given');
	this.options=this.data;
	}
	else{
		console.log('no data given');
	}
  }
	update(evt: any): void  {
	console.log(evt);
	const selectedValue= evt.target.value;
	console.log(selectedValue);
	const selectedOption = this.options.find(o => o.id == selectedValue);
	console.log(selectedOption);
	this.conv = selectedOption.conv;
	this.rel= selectedOption.rel;
	this.note = selectedOption.note;
}

}
//<app-record [data]=user_info></app-record> use this as inlet