import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: { name: string, content: string };
  @Input('name') name: string;
  @ViewChild('serverHeading', {static: true}) header: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log('Constructor called');
    // We will not see it here
    console.log('The header ' + this.header.nativeElement.textContent);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(change);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  // this is how the method is auto-generated
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    // but we will see it here
    console.log('The header ' + this.header.nativeElement.textContent);
  }

  // this is how the method is auto-generated
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
