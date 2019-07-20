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
  ViewChild,
  ElementRef,
  ContentChild
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
  // this annotation is used if we reference the element IN the content of the component - inside the brackets, namely
  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log('Constructor called');
    // We will not see it here
    console.log('The header ' + this.header.nativeElement.textContent);
    console.log('Text content of the paragraph ' + this.contentParagraph.nativeElement.textContent);
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
    console.log('Text content of the paragraph ' + this.contentParagraph.nativeElement.textContent);
  }

  // this is how the method is auto-generated
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    // but we will see it here
    console.log('The header ' + this.header.nativeElement.textContent);
    console.log('Text content of the paragraph ' + this.contentParagraph.nativeElement.textContent);
  }

  // this is how the method is auto-generated
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
