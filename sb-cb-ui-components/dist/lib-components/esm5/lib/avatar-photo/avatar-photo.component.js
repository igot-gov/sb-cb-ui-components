/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { AvatarPhotoComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLXBob3RvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2F2YXRhci1waG90by9hdmF0YXItcGhvdG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUV4RDtJQUFBO1FBWWtCLFNBQUksR0FBRyxFQUFFLENBQUE7UUFDaEIsZ0JBQVcsR0FBRyxLQUFLLENBQUE7UUFFckIsaUJBQVksR0FBRyxLQUFLLENBQUE7UUFFM0IsV0FBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBOztRQUlwQyxXQUFNLEdBQUc7WUFDZixvQkFBb0I7WUFDcEIsU0FBUztTQUtWLENBQUE7UUFFTyxpQkFBWSxHQUFHO1lBQ3JCLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUE7SUF5Q0gsQ0FBQzs7OztJQXZDQyx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO2FBQ3ZCOztnQkFDSyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUMzQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7O29CQUNkLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUNuRDtTQUNGO0lBRUgsQ0FBQzs7Ozs7SUFFTyw4Q0FBZTs7OztJQUF2Qjs7WUFDTSxRQUFRLEdBQUcsRUFBRTs7WUFDWCxLQUFLLEdBQUcsQ0FBRyxJQUFJLENBQUMsSUFBSSxNQUFHLENBQUEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ25ELElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsSUFBSSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDL0QsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDOUIsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDL0I7YUFBTTtZQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDL0IsU0FBUTtpQkFDVDtnQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBRS9CLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ3pCLE1BQUs7cUJBQ047aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDeEMsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx5OUJBQTRDOztpQkFFN0M7OzsyQkFHRSxLQUFLO3VCQUdMLEtBQUs7dUJBRUwsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBZ0VSLDJCQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0F6RVksb0JBQW9COzs7SUFFL0Isd0NBQ3dCOztJQUV4QixvQ0FDb0I7O0lBQ3BCLG9DQUF5Qjs7SUFDekIsMkNBQTRCOztJQUM1Qix3Q0FBMEI7O0lBQzFCLDRDQUEyQjs7SUFDM0IsMkNBQTJCOztJQUMzQixzQ0FBNEM7Ozs7O0lBSTVDLHNDQU9DOzs7OztJQUVELDRDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3Mtd2lkZ2V0LWF2YXRhci1waG90bycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdmF0YXItcGhvdG8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdmF0YXItcGhvdG8uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyUGhvdG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwaG90b1VybCE6IHN0cmluZ1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYW1lITogc3RyaW5nXG4gIEBJbnB1dCgpIHB1YmxpYyBzaXplID0gJydcbiAgQElucHV0KCkgcmFuZG9tQ29sb3IgPSBmYWxzZVxuICBASW5wdXQoKSBpbml0aWFscz86IHN0cmluZ1xuICBwdWJsaWMgc2hvd0luaXRpYWxzID0gZmFsc2VcbiAgcHVibGljIGNpcmNsZUNvbG9yITogc3RyaW5nXG4gIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXG5cbiAgLy8gcHVibGljIGluaXRpYWxzITogc3RyaW5nXG5cbiAgcHJpdmF0ZSBjb2xvcnMgPSBbXG4gICAgLy8gJyNFQjcxODEnLCAvLyByZWRcbiAgICAnIzMwNjkzMycsIC8vIGdyZWVuXG4gICAgLy8gJyMwMDAwMDAnLCAvLyBibGFja1xuICAgIC8vICcjMzY3MEIyJywgLy8gYmx1ZVxuICAgIC8vICcjNEU5RTg3JyxcbiAgICAvLyAnIzdFNEM4RCcsXG4gIF1cblxuICBwcml2YXRlIHJhbmRvbWNvbG9ycyA9IFtcbiAgICAnI0VCNzE4MScsIC8vIHJlZFxuICAgICcjMDA2NDAwJywgLy8gZ3JlZW5cbiAgICAnIzAwMDAwMCcsIC8vIGJsYWNrXG4gICAgJyMzNjcwQjInLCAvLyBibHVlXG4gICAgJyM0RTlFODcnLFxuICAgICcjN0U0QzhEJyxcbiAgXVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5waG90b1VybCkge1xuICAgICAgdGhpcy5zaG93SW5pdGlhbHMgPSB0cnVlXG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVJbml0aXRhbHMoKVxuICAgICAgfVxuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuY29sb3JzLmxlbmd0aCkpXG4gICAgICB0aGlzLmNpcmNsZUNvbG9yID0gdGhpcy5jb2xvcnNbcmFuZG9tSW5kZXhdXG4gICAgICBpZiAodGhpcy5yYW5kb21Db2xvcikge1xuICAgICAgICBjb25zdCByYW5kb21JbmRleDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMucmFuZG9tY29sb3JzLmxlbmd0aCkpXG4gICAgICAgIHRoaXMuY2lyY2xlQ29sb3IgPSB0aGlzLnJhbmRvbWNvbG9yc1tyYW5kb21JbmRleDFdXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluaXRpdGFscygpOiB2b2lkIHtcbiAgICBsZXQgaW5pdGlhbHMgPSAnJ1xuICAgIGNvbnN0IGFycmF5ID0gYCR7dGhpcy5uYW1lfSBgLnRvU3RyaW5nKCkuc3BsaXQoJyAnKVxuICAgIGlmIChhcnJheVswXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGFycmF5WzFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaW5pdGlhbHMgKz0gYXJyYXlbMF0uY2hhckF0KDApXG4gICAgICBpbml0aWFscyArPSBhcnJheVsxXS5jaGFyQXQoMClcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5hbWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMubmFtZS5jaGFyQXQoaSkgPT09ICcgJykge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uYW1lLmNoYXJBdChpKSA9PT0gdGhpcy5uYW1lLmNoYXJBdChpKSkge1xuICAgICAgICAgIGluaXRpYWxzICs9IHRoaXMubmFtZS5jaGFyQXQoaSlcblxuICAgICAgICAgIGlmIChpbml0aWFscy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbHMgPSBpbml0aWFscy50b1VwcGVyQ2FzZSgpXG4gIH1cbn1cbiJdfQ==