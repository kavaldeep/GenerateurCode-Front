export interface ICustomer{
    _id: string;
    object: "customer";
    source_id: string;
    name: string;
    email: string;
    phone: string;
    created_at: Date;
    updated_at: Date;
    //TODO repalce by there shitty object
    loyalty : number | 0;
    summary:  []  ;
    metadata: Record<string, unknown>;
}