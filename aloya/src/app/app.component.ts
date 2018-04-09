import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    template: `<span class="ddd">{{shopName}}</span>`
})

export class AppComponent implements OnInit {
    public shopName: string;

    constructor() {
        this.shopName = 'Aloya';
    }

    public ngOnInit() {
        // console.log('Initial App State', this.appState.state);
    }
}
