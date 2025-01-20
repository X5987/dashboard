import { Component } from '@angular/core';
import { DesignSystemModule } from '@design-system';

@Component({
    selector: 'app-footer',
    imports: [DesignSystemModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {}
