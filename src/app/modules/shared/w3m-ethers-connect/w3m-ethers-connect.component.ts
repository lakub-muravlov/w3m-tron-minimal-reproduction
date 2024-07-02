import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { W3MEthersService } from '../../../services/w3m-ethers.service';

@Component({
    selector: 'app-w3m-ethers-connect',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './w3m-ethers-connect.component.html',
    styleUrl: './w3m-ethers-connect.component.scss',
})
export class W3mEthersConnectComponent
{
    address = computed(() => this.w3mEthersService.address());

    constructor(
        private w3mEthersService: W3MEthersService
    )
    {

    }

    public async connect(): Promise<void>
    {
        await this.w3mEthersService.connect();
    }
}
