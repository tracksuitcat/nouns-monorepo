import 'tracksuitcat-usedapp';

declare module 'tracksuitcat-usedapp' {
  function useContractCall<T extends any = any[]>(call: ContractCall | Falsy): T | undefined;

  function useContractCalls<T extends any = any>(
    calls: (ContractCall | Falsy)[],
  ): (T | undefined)[];
}
