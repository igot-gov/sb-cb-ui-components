import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AvatarPhotoComponent = /** @class */ (function () {
    function AvatarPhotoComponent() {
        this.size = '';
        this.randomColor = false;
        this.showInitials = false;
        this.random = Math.random().toString(36).slice(2);
        // public initials!: string
        this.colors = [
            // '#EB7181', // red
            '#306933',
        ];
        this.randomcolors = [
            '#EB7181',
            '#006400',
            '#000000',
            '#3670B2',
            '#4E9E87',
            '#7E4C8D',
        ];
    }
    /**
     * @return {?}
     */
    AvatarPhotoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.photoUrl) {
            this.showInitials = true;
            if (!this.initials) {
                this.createInititals();
            }
            /** @type {?} */
            var randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
            this.circleColor = this.colors[randomIndex];
            if (this.randomColor) {
                /** @type {?} */
                var randomIndex1 = Math.floor(Math.random() * Math.floor(this.randomcolors.length));
                this.circleColor = this.randomcolors[randomIndex1];
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    AvatarPhotoComponent.prototype.createInititals = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var initials = '';
        /** @type {?} */
        var array = (this.name + " ").toString().split(' ');
        if (array[0] !== 'undefined' && typeof array[1] !== 'undefined') {
            initials += array[0].charAt(0);
            initials += array[1].charAt(0);
        }
        else {
            for (var i = 0; i < this.name.length; i += 1) {
                if (this.name.charAt(i) === ' ') {
                    continue;
                }
                if (this.name.charAt(i) === this.name.charAt(i)) {
                    initials += this.name.charAt(i);
                    if (initials.length === 2) {
                        break;
                    }
                }
            }
        }
        this.initials = initials.toUpperCase();
    };
    AvatarPhotoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ws-widget-avatar-photo',
                    template: "<div [ngClass]=\"{'circle-s' : size=== 's',\n'circle-m' : size=== 'm',\n'circle-l' : size=== 'l',\n'circle-xl' : size=== 'xl',\n'circle-xxl' : size=== 'xxl',\n'circle-xl-s' : size=== 'xl-s',\n'circle-xxl-s': size=== 'xxl-s'}\" [ngStyle]=\"{'background-color':  circleColor }\">\n  <img *ngIf=\"!showInitials\" src=\"{{photoUrl}}\" [alt]=\"photoUrl? '' :(name || initials || size || random)\">\n\n  <div *ngIf=\"showInitials\" class=\"initials\" i18n-aria-label>\n    {{ initials }}\n  </div>\n\n  <!-- <div *ngIf=\"imageType === 'user-photo'\">\n    <img *ngIf=\"imageUrl\" [src]=\"imageUrl\" alt=\"user-image\" class=\"user-image\" [ngClass]=\"{'user-image-small': imageSize === 'small'}\">\n    <div class=\"user-image\" [ngClass]=\"{'user-image-small': imageSize === 'small'}\">\n      <span class=\"name-initials-image font-normal ws-mat-primary-default-text ws-mat-accent-background\"\n      *ngIf=\"!imageUrl\">{{ shortName }}</span>\n    </div>\n  </div> -->\n</div>",
                    styles: [".circle-s{border-radius:50%;width:24px;height:24px;display:flex;justify-content:center;align-items:center}.circle-s img{border-radius:50%;width:24px;height:24px}.circle-s .initials{color:#fff;font-size:10px;line-height:12px;letter-spacing:.2625px}.circle-m{border-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center}.circle-m img{border-radius:50%;width:50px;height:50px}.circle-m .initials{color:#fff;font-size:20px;line-height:19px;letter-spacing:.2625px}.circle-l{border-radius:50%;width:80px;height:80px;display:flex;justify-content:center;align-items:center}.circle-l img{border-radius:50%;width:80px;height:80px}.circle-l .initials{color:#fff;font-size:20px;line-height:19px;letter-spacing:.2625px}.circle-xl{border-radius:50%;width:105px;height:105px;display:flex;justify-content:center;align-items:center}.circle-xl img{border-radius:50%;width:105px;height:105px}.circle-xl .initials{color:#fff;font-size:20px;line-height:19px;letter-spacing:.2625px}.circle-xxl{border-radius:50%;width:145px;height:145px;display:flex;justify-content:center;align-items:center}.circle-xxl img{border-radius:50%;width:145px;height:145px}.circle-xxl .initials{color:#fff;font-size:20px;line-height:19px;letter-spacing:.2625px}.circle-xl-s{border-radius:4px;width:152px;height:125px;display:flex;justify-content:center;align-items:center}.circle-xl-s img{border-radius:4px;width:152px;height:125px}.circle-xl-s .initials{color:#fff;letter-spacing:.2625px}.circle-xxl-s{border-radius:4px;width:276px;height:208px;display:flex;justify-content:center;align-items:center}.circle-xxl-s img{border-radius:4px;width:276px;height:208px}.circle-xxl-s .initials{color:#fff;letter-spacing:.2625px}"]
                }] }
    ];
    AvatarPhotoComponent.propDecorators = {
        photoUrl: [{ type: Input }],
        name: [{ type: Input }],
        size: [{ type: Input }],
        randomColor: [{ type: Input }],
        initials: [{ type: Input }]
    };
    return AvatarPhotoComponent;
}());
if (false) {
    /** @type {?} */
    AvatarPhotoComponent.prototype.photoUrl;
    /** @type {?} */
    AvatarPhotoComponent.prototype.name;
    /** @type {?} */
    AvatarPhotoComponent.prototype.size;
    /** @type {?} */
    AvatarPhotoComponent.prototype.randomColor;
    /** @type {?} */
    AvatarPhotoComponent.prototype.initials;
    /** @type {?} */
    AvatarPhotoComponent.prototype.showInitials;
    /** @type {?} */
    AvatarPhotoComponent.prototype.circleColor;
    /** @type {?} */
    AvatarPhotoComponent.prototype.random;
    /**
     * @type {?}
     * @private
     */
    AvatarPhotoComponent.prototype.colors;
    /**
     * @type {?}
     * @private
     */
    AvatarPhotoComponent.prototype.randomcolors;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AvatarPhotoModule = /** @class */ (function () {
    function AvatarPhotoModule() {
    }
    AvatarPhotoModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AvatarPhotoComponent],
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    exports: [AvatarPhotoComponent],
                    entryComponents: [AvatarPhotoComponent],
                },] }
    ];
    return AvatarPhotoModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AvatarPhotoModule, AvatarPhotoComponent as ɵa };
//# sourceMappingURL=lib-components.js.map
