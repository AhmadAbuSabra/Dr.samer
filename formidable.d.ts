// formidable.d.ts
declare module 'formidable' {
    export interface File {
        size: number;
        path: string;
        name: string;
        type: string;
        lastModifiedDate?: Date;
    }

    export interface Files {
        [key: string]: File | File[];
    }

    export interface Fields {
        [key: string]: string | string[];
    }

    export class IncomingForm {
        public uploadDir: string;
        public keepExtensions: boolean;
        public multiples: boolean;
        public parse(req: any, callback: (err: Error | null, fields: Fields, files: Files) => void): void;
    }
}
