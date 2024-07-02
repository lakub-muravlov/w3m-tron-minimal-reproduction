import { Injectable, signal } from "@angular/core";
import { Web3Modal, createWeb3Modal, defaultConfig } from '@web3modal/ethers5';
import { ethers } from 'ethers';
import { Subject, firstValueFrom } from "rxjs";

type TChain = {
    rpcUrl: string;
    explorerUrl: string;
    currency: string;
    name: string;
    chainId: number;
};

@Injectable()
export class W3MEthersService
{
    public address = signal<string | undefined>(undefined);
    private _modal!: Web3Modal;

    protected provider: any;

    private _eventSubscription!: () => void;
    private _providerSubscription!: () => void;

    private readonly _isClosed$: Subject<boolean> = new Subject<boolean>();

    constructor(

    )
    {

    }

    public async connect(): Promise<void>
    {
        const chain: TChain = {
            rpcUrl: 'https://eth.llamarpc.com',
            explorerUrl: 'https://etherscan.io',
            currency: 'ETH',
            chainId: 1,
            name: 'Ethereum'
        };

        const defaultCfg = defaultConfig({
            metadata: {
                name: document.title,
                description: document.title,
                url: location.href,
                icons: [
                    `${ location.origin }/favicon.ico`,
                    `${ location.origin }/favicon.png`,
                    `${ location.origin }/favicon.jpg`,
                    `${ location.origin }/favicon.jpeg`,
                    `${ location.origin }/favicon.svg`,
                ]
            },
            defaultChainId: undefined,
            enableCoinbase: false,
            enableInjected: false,
            enableEIP6963: true,
            rpcUrl: 'https://eth.llamarpc.com',
        });

        this._modal = await createWeb3Modal({
            ethersConfig: defaultCfg,
            chains: [ chain ],
            projectId: 'bedcc0de245d0e1f91444e54b92ab528',
        });

        if (!this._eventSubscription)
        {
            this._eventSubscription = this._modal.subscribeEvents((newEvent) =>
            {
                const eventName = newEvent.data.event;

                if (eventName === 'CONNECT_SUCCESS')
                {
                    this._modal.close();
                }

                if (eventName === 'MODAL_CLOSE')
                {
                    this._isClosed$.next(true);
                }
            });
        }

        await this._modal.open();

        await firstValueFrom(this._isClosed$);

        this.provider = await this._modal.getWalletProvider();

        const ethersProvider = new ethers.providers.Web3Provider(this.provider, 1);
        this.address.set(await (<ethers.providers.Web3Provider>ethersProvider).getSigner().getAddress());
    }
}