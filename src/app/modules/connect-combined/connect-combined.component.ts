import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { W3MEthersService } from '../../services/w3m-ethers.service';
import { W3MTronService } from '../../services/w3m-tron.service';
import { W3mEthersConnectComponent } from '../shared/w3m-ethers-connect/w3m-ethers-connect.component';
import { W3mTronConnectComponent } from '../shared/w3m-tron-connect/w3m-tron-connect.component';

@Component({
    selector: 'app-connect-combined',
    standalone: true,
    imports: [
        CommonModule,
        W3mEthersConnectComponent,
        W3mTronConnectComponent
    ],
    templateUrl: './connect-combined.component.html',
    styleUrl: './connect-combined.component.scss',
    providers: [
        W3MTronService,
        W3MEthersService
    ]
})
export class ConnectCombinedComponent { }
