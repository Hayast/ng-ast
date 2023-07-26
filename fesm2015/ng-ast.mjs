import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NgAstService {
    constructor() { }
}
NgAstService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgAstService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgAstService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgAstService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgAstService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgAstComponent {
}
NgAstComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgAstComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgAstComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgAstComponent, selector: "lib-ng-ast", ngImport: i0, template: `
    <p>
      ng-ast works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgAstComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ng-ast', template: `
    <p>
      ng-ast works!
    </p>
  ` }]
        }] });

class NgAstModule {
}
NgAstModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgAstModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgAstModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgAstModule, declarations: [NgAstComponent], exports: [NgAstComponent] });
NgAstModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgAstModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgAstModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgAstComponent
                    ],
                    imports: [],
                    exports: [
                        NgAstComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ng-ast
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgAstComponent, NgAstModule, NgAstService };
//# sourceMappingURL=ng-ast.mjs.map
