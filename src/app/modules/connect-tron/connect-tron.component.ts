import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { W3MTronService } from '../../services/w3m-tron.service';
import { W3mTronConnectComponent } from '../shared/w3m-tron-connect/w3m-tron-connect.component';

@Component({
    selector: 'app-connect-tron',
    standalone: true,
    imports: [
        CommonModule,
        W3mTronConnectComponent
    ],
    templateUrl: './connect-tron.component.html',
    styleUrl: './connect-tron.component.scss',
    providers: [
        W3MTronService
    ]
})
export class ConnectTronComponent { }
