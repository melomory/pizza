import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { CartService } from "../../../shared/services/cart.service";
import { from, map, Observable, Subject, Subscription } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PopupComponent } from "src/app/shared/components/popup/popup.component";
import { environment } from "src/environments/environment";

// declare var bootstrap: any;

// import * as bootstrap from "bootstrap";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  // private promise: Promise<string>;

  // private observalble: Observable<number>;

  private subscription: Subscription | null = null;

  private subject: Subject<number>;

  constructor(public cartService: CartService, private modalService: NgbModal) {
    this.subject = new Subject<number>();

    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);

    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);

    // this.promise = new Promise<string>((resolve) => {
    //   setTimeout(() => {
    //     resolve('hello')
    //   }, 2000);
    // })

    // this.observalble = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('hello')
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('world')
    //   }, 3000);
    // });
    //
    // this.observalble = new Observable((observer) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++)
    //   }, 1000);
    //
    //   const timeout1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //
    //   const timeout2 = setTimeout(() => {
    //     observer.error('world')
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     }
    //   }
    // });

    // this.observalble = from([1, 2, 3, 4, 5]);
  }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  ngOnInit() {
    console.log(environment);

    // const myModalAlternative = new bootstrap.Modal("#myModal", {});
    // myModalAlternative.show();


    // this.observalble.subscribe((param: number) => {
    //   console.log('subscriber 1: ', param);
    // });

    this.subscription = this.subject.subscribe({
      next: (param: number) => {
        console.log("subscriber 1: ", param);
      },
      error: (error: string) => {
        console.log("ERROR!!", error);
      },
    });

    // this.promise.then((param: string) => {
    //   console.log(param);
    // })
  }

  ngAfterViewInit(): void {
    // this.modalService.open(this.popup, { })

    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = "Main component ";

    this.popupComponent.open();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test(popup?: TemplateRef<ElementRef>) {
    // this.modalService.open(popup, { })



    this.subject
      .pipe(
        map((number) => {
          return `Number: ${number}`;
        })
      )
      .subscribe((param: string) => {
        console.log("subscriber 2: ", param);
      });
  }
}
