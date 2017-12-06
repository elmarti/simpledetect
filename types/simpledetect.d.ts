declare interface IBrowserInfo { 
    name:string; 
    version:number; 
}

declare enum Browsers {
    Firefox, 
    Chrome, 
    Edge,
    Opera, 
    Safari, 
    Unsupported
};