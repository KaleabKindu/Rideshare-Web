export interface Driver {
    success: boolean;
    message: string;
    value:   Value;
    errors:  any[];
}

export interface Value {
    id:            number;
    userId:        string;
    user:          User;
    rate:          number[];
    experience:    number;
    address:       string;
    licenseNumber: string;
    license:       string;
    verified:      boolean;
}

export interface User {
    roles:         any[];
    fullName:      string;
    phoneNumber:   null;
    age:           number;
    statusByLogin: null;
}