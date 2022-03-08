export interface PageItemTypes {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItemTypes {
    _id: {
        secondCategory: string;
    };
    pages: PageItemTypes[];
}