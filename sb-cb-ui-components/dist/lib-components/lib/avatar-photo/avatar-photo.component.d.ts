import { OnInit } from '@angular/core';
export declare class AvatarPhotoComponent implements OnInit {
    photoUrl: string;
    name: string;
    size: string;
    randomColor: boolean;
    initials?: string;
    showInitials: boolean;
    circleColor: string;
    random: string;
    private colors;
    private randomcolors;
    ngOnInit(): void;
    private createInititals;
}
